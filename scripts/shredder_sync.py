"""
shredder_sync.py — sync Google Drive Shredder folder to site feed.

Setup (one-time):
  1. Google Cloud Console → create project → create service account
  2. Download service account JSON key
  3. Share the Drive "Shredder" folder with the service account email
  4. Add GitHub secrets:
       GDRIVE_SERVICE_ACCOUNT  = contents of the service account JSON key
       GDRIVE_FOLDER_ID        = folder ID from the Drive URL (the long alphanumeric string)

Drop into the Drive folder:
  .png / .jpg / .jpeg / .gif / .webp  →  image post
  .url (Windows) or .webloc (macOS)   →  link post
  .txt where line 1 starts with http  →  link post
  .txt where line 1 is plain text     →  text post (one-liner)
"""

import json
import logging
import os
import re
import sys
from io import BytesIO
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

logging.basicConfig(level=logging.INFO, format="%(message)s")
log = logging.getLogger(__name__)

REPO_ROOT = Path(__file__).parent.parent
FEED_TS = REPO_ROOT / "content" / "feed.ts"
PUBLIC_SHREDDER = REPO_ROOT / "public" / "shredder"
MANIFEST_PATH = REPO_ROOT / "content" / "shredder-manifest.json"

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp"}
URL_EXTS = {".url", ".webloc"}

SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]


# ── Google Drive ──────────────────────────────────────────────────────────────

def build_drive_service():
    sa_json = os.environ["GDRIVE_SERVICE_ACCOUNT"]
    info = json.loads(sa_json)
    creds = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    return build("drive", "v3", credentials=creds)


def list_drive_files(service, folder_id: str) -> list[dict]:
    results = []
    page_token = None
    while True:
        resp = service.files().list(
            q=f"'{folder_id}' in parents and trashed=false",
            fields="nextPageToken, files(id, name, mimeType)",
            pageToken=page_token,
        ).execute()
        results.extend(resp.get("files", []))
        page_token = resp.get("nextPageToken")
        if not page_token:
            break
    return results


def download_file(service, file_id: str) -> bytes:
    request = service.files().get_media(fileId=file_id)
    buf = BytesIO()
    downloader = MediaIoBaseDownload(buf, request)
    done = False
    while not done:
        _, done = downloader.next_chunk()
    return buf.getvalue()


# ── Manifest ──────────────────────────────────────────────────────────────────

def load_manifest() -> set[str]:
    if MANIFEST_PATH.exists():
        data = json.loads(MANIFEST_PATH.read_text())
        return set(data.get("processed", []))
    return set()


def save_manifest(processed: set[str]) -> None:
    MANIFEST_PATH.write_text(json.dumps({"processed": sorted(processed)}, indent=2) + "\n")


# ── feed.ts helpers ───────────────────────────────────────────────────────────

def next_post_id() -> str:
    content = FEED_TS.read_text()
    ids = [int(m) for m in re.findall(r'id:\s*"(\d+)"', content)]
    return f"{(max(ids, default=0) + 1):03d}"


def append_entry(entry: str) -> None:
    content = FEED_TS.read_text()
    idx = content.rfind("];")
    if idx == -1:
        raise ValueError("Cannot find closing ]; in feed.ts")
    FEED_TS.write_text(content[:idx] + entry + "\n" + content[idx:])


# ── File type processors ──────────────────────────────────────────────────────

def slugify(name: str) -> str:
    name = re.sub(r"[^\w\s-]", "", name.lower())
    return re.sub(r"[\s_]+", "-", name).strip("-")


def process_image(name: str, data: bytes, date: str) -> None:
    ext = Path(name).suffix.lower()
    slug = slugify(Path(name).stem) + ext
    dest = PUBLIC_SHREDDER / slug
    PUBLIC_SHREDDER.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(data)
    post_id = next_post_id()
    append_entry(
        f'  {{\n'
        f'    id: "{post_id}",\n'
        f'    type: "image",\n'
        f'    date: "{date}",\n'
        f'    content: "",\n'
        f'    image: "/shredder/{slug}",\n'
        f'  }},'
    )
    log.info(f"  image → /shredder/{slug}")


def parse_url_file(data: bytes, stem: str) -> tuple[str, str]:
    text = data.decode("utf-8", errors="ignore")
    # macOS .webloc plist
    m = re.search(r"<string>(https?://[^<]+)</string>", text)
    if m:
        return m.group(1).strip(), stem
    # Windows .url
    m = re.search(r"URL=(.+)", text)
    if m:
        return m.group(1).strip(), stem
    # plain URL on first line
    lines = [l.strip() for l in text.splitlines() if l.strip()]
    if lines and lines[0].startswith("http"):
        title = lines[1] if len(lines) > 1 else stem
        return lines[0], title
    return "", stem


def process_url(name: str, data: bytes, date: str) -> None:
    stem = Path(name).stem
    url, title = parse_url_file(data, stem)
    if not url:
        log.warning(f"  could not parse URL from {name}, skipping")
        return
    post_id = next_post_id()
    append_entry(
        f'  {{\n'
        f'    id: "{post_id}",\n'
        f'    type: "link",\n'
        f'    date: "{date}",\n'
        f'    content: "",\n'
        f'    url: "{url}",\n'
        f'    linkTitle: "{title}",\n'
        f'  }},'
    )
    log.info(f"  link → {url}")


def process_text(name: str, data: bytes, date: str) -> None:
    text = data.decode("utf-8", errors="ignore").strip()
    lines = [l.strip() for l in text.splitlines() if l.strip()]
    if not lines:
        log.warning(f"  empty text file {name}, skipping")
        return

    # If first line is a URL, treat as link post
    if lines[0].startswith("http"):
        url = lines[0]
        title = lines[1] if len(lines) > 1 else Path(name).stem
        post_id = next_post_id()
        append_entry(
            f'  {{\n'
            f'    id: "{post_id}",\n'
            f'    type: "link",\n'
            f'    date: "{date}",\n'
            f'    content: "",\n'
            f'    url: "{url}",\n'
            f'    linkTitle: "{title}",\n'
            f'  }},'
        )
        log.info(f"  link → {url}")
    else:
        # Escape for TS string
        content = text.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")
        post_id = next_post_id()
        append_entry(
            f'  {{\n'
            f'    id: "{post_id}",\n'
            f'    type: "text",\n'
            f'    date: "{date}",\n'
            f'    content: "{content}",\n'
            f'  }},'
        )
        log.info(f"  text → {content[:60]}...")


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    folder_id = os.environ.get("GDRIVE_FOLDER_ID", "").strip()
    if not folder_id:
        log.error("GDRIVE_FOLDER_ID is not set")
        sys.exit(1)

    service = build_drive_service()
    processed = load_manifest()
    files = list_drive_files(service, folder_id)

    from datetime import date
    today = date.today().isoformat()

    new_count = 0
    for f in files:
        file_id = f["id"]
        name = f["name"]
        ext = Path(name).suffix.lower()

        if file_id in processed:
            continue

        log.info(f"Processing: {name}")
        try:
            data = download_file(service, file_id)

            if ext in IMAGE_EXTS:
                process_image(name, data, today)
                new_count += 1
            elif ext in URL_EXTS:
                process_url(name, data, today)
                new_count += 1
            elif ext == ".txt":
                process_text(name, data, today)
                new_count += 1
            else:
                log.info(f"  unsupported type {ext}, skipping")

        except Exception as e:
            log.error(f"  error processing {name}: {e}")

        processed.add(file_id)

    save_manifest(processed)

    if new_count:
        log.info(f"\nDone — {new_count} new post(s) added.")
    else:
        log.info("Nothing new.")


if __name__ == "__main__":
    main()
