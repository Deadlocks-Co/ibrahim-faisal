"""
citadel_sync.py — sync published content from The Citadel to the site.

Sources:
  house-of-technical-publication/content/published/pub_*/  →  content/notes/<slug>.mdx
  house-of-personal-writing/content/published/pub_*/       →  content/notes/<slug>.mdx
                                                               (channel: blog | technical blog | note)
                                                               other channels are skipped

Idempotency: content/citadel-manifest.json tracks synced pub folder keys.

Required env vars (set by GitHub Actions):
  CITADEL_ROOT  — absolute path to the checked-out citadel repo
  SITE_ROOT     — absolute path to the checked-out site repo

One-time setup:
  Add CITADEL_PAT GitHub secret — a Personal Access Token with repo:read on
  Deadlocks-Co/the-citadel.
"""

import json
import logging
import os
import re
import sys
from pathlib import Path

import yaml

logging.basicConfig(level=logging.INFO, format="%(message)s")
log = logging.getLogger(__name__)

CITADEL_ROOT = Path(os.environ.get("CITADEL_ROOT", ""))
SITE_ROOT = Path(os.environ.get("SITE_ROOT", ""))

TECH_PUB_DIR = CITADEL_ROOT / "houses/house-of-technical-publication/content/published"
PERSONAL_DIR = CITADEL_ROOT / "houses/house-of-personal-writing/content/published"
NOTES_DIR = SITE_ROOT / "content/notes"
MANIFEST_PATH = SITE_ROOT / "content/citadel-manifest.json"

# Personal writing channels that map to the site's notes section
PUBLISHABLE_CHANNELS = {"blog", "technical blog", "note", "technical-blog"}


# ── Manifest ──────────────────────────────────────────────────────────────────

def load_manifest() -> set[str]:
    if MANIFEST_PATH.exists():
        return set(json.loads(MANIFEST_PATH.read_text()).get("synced", []))
    return set()


def save_manifest(synced: set[str]) -> None:
    MANIFEST_PATH.write_text(json.dumps({"synced": sorted(synced)}, indent=2) + "\n")


# ── Frontmatter helpers ───────────────────────────────────────────────────────

def parse_frontmatter(text: str) -> tuple[dict, str]:
    """Split YAML frontmatter from body. Returns (meta, body)."""
    if not text.startswith("---"):
        return {}, text
    end = text.index("---", 3)
    meta = yaml.safe_load(text[3:end]) or {}
    body = text[end + 3:].lstrip("\n")
    return meta, body


def sanitize_for_mdx(body: str) -> str:
    """Convert HTML comments to MDX comments so the file parses as valid MDX."""
    return re.sub(r"<!--(.*?)-->", lambda m: "{/*" + m.group(1) + "*/}", body, flags=re.DOTALL)


def extract_summary(body: str) -> str:
    """Pull first non-heading, non-empty paragraph as summary."""
    for line in body.splitlines():
        line = line.strip()
        if line and not line.startswith("#") and not line.startswith("```") and not line.startswith("---"):
            # Strip markdown links and inline code for clean summary
            line = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", line)
            line = re.sub(r"`([^`]+)`", r"\1", line)
            return line[:200]
    return ""


def build_site_frontmatter(slug: str, title: str, date: str, tags: list, summary: str) -> str:
    meta = {
        "title": title,
        "slug": slug,
        "summary": summary,
        "published": date,
        "updated": date,
        "tags": tags,
        "draft": False,
        "shareText": "",
    }
    return "---\n" + yaml.dump(meta, allow_unicode=True, sort_keys=False, default_flow_style=False) + "---\n\n"


# ── Technical Publication House ───────────────────────────────────────────────

def sync_technical_pub(pub_dir: Path, slug: str) -> bool:
    article = pub_dir / "article.md"
    manifest_file = pub_dir / "publish-manifest.json"

    if not article.exists():
        log.warning(f"  article.md missing in {pub_dir.name}, skipping")
        return False

    manifest_data = {}
    if manifest_file.exists():
        manifest_data = json.loads(manifest_file.read_text())

    slug = manifest_data.get("slug", slug)
    text = article.read_text()
    meta, body = parse_frontmatter(text)

    title = meta.get("title") or manifest_data.get("title", slug)
    date = str(
        meta.get("publication-date")
        or meta.get("date")
        or manifest_data.get("date")
        or manifest_data.get("publication_date", "")
    )
    tags = meta.get("tags") or manifest_data.get("tags", [])

    # Strip leading H1 if it duplicates the title (Scratch Pad renders title separately)
    body_lines = body.splitlines()
    if body_lines and body_lines[0].strip() == f"# {title}":
        body = "\n".join(body_lines[1:]).lstrip("\n")

    summary = extract_summary(body)

    dest = NOTES_DIR / f"{slug}.mdx"
    if dest.exists():
        log.info(f"  {slug}.mdx already exists, overwriting with citadel version")

    dest.parent.mkdir(parents=True, exist_ok=True)
    frontmatter = build_site_frontmatter(slug, title, date, tags, summary)
    dest.write_text(frontmatter + sanitize_for_mdx(body))
    log.info(f"  → content/notes/{slug}.mdx")
    return True


# ── Personal Writing House ────────────────────────────────────────────────────

def sync_personal(pub_dir: Path, key: str) -> bool:
    final = pub_dir / "final.md"
    manifest_file = pub_dir / "manifest.json"

    if not final.exists():
        log.warning(f"  final.md missing in {pub_dir.name}, skipping")
        return False

    pub_meta = {}
    if manifest_file.exists():
        try:
            pub_meta = json.loads(manifest_file.read_text())
        except Exception:
            pass

    channel = str(pub_meta.get("channel", "")).lower().strip()
    if channel not in PUBLISHABLE_CHANNELS:
        log.info(f"  channel '{channel}' is not site-publishable, skipping")
        return False

    text = final.read_text()
    meta, body = parse_frontmatter(text)

    # Slug: prefer manifest, then frontmatter, then derive from folder name
    slug = (
        pub_meta.get("slug")
        or meta.get("slug")
        or re.sub(r"^pub_\d{8}_\d{6}_", "", pub_dir.name)
    )
    title = pub_meta.get("title") or meta.get("title") or slug
    date = str(pub_meta.get("date") or meta.get("date") or meta.get("published") or "")
    tags = pub_meta.get("tags") or meta.get("tags") or []
    summary = extract_summary(body)

    dest = NOTES_DIR / f"{slug}.mdx"
    dest.parent.mkdir(parents=True, exist_ok=True)
    frontmatter = build_site_frontmatter(slug, title, date, tags, summary)
    dest.write_text(frontmatter + sanitize_for_mdx(body))
    log.info(f"  → content/notes/{slug}.mdx")
    return True


# ── Main ──────────────────────────────────────────────────────────────────────

def scan_house(pub_root: Path, label: str, handler, synced: set[str]) -> int:
    if not pub_root.exists():
        log.info(f"{label}: published dir not found, skipping")
        return 0

    count = 0
    for pub_dir in sorted(pub_root.iterdir()):
        if not pub_dir.is_dir() or not pub_dir.name.startswith("pub_"):
            continue

        key = f"{label}/{pub_dir.name}"
        if key in synced:
            continue

        log.info(f"[{label}] {pub_dir.name}")
        try:
            ok = handler(pub_dir, re.sub(r"^pub_\d{8}_\d{6}_", "", pub_dir.name))
            if ok:
                count += 1
        except Exception as e:
            log.error(f"  error: {e}")

        synced.add(key)

    return count


def main() -> None:
    if not CITADEL_ROOT or not SITE_ROOT:
        log.error("CITADEL_ROOT and SITE_ROOT env vars are required")
        sys.exit(1)

    synced = load_manifest()
    total = 0

    total += scan_house(TECH_PUB_DIR, "technical", sync_technical_pub, synced)
    total += scan_house(PERSONAL_DIR, "personal", sync_personal, synced)

    save_manifest(synced)

    if total:
        log.info(f"\nDone — {total} article(s) synced.")
    else:
        log.info("Nothing new.")


if __name__ == "__main__":
    main()
