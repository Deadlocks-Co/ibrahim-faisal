# Changelog

## Unreleased — Sprint 02: Publishing Foundation

### Added

- `lib/content.ts` — lightweight MDX/Markdown content loader using `fs` and `gray-matter`
- `content/workbench/` — four Workbench entries as MDX files with frontmatter
- `content/labs/` — placeholder directory for future Deadlock Labs content
- `content/notes/` — placeholder directory for Sprint 03 Lab Notes
- `app/workbench/page.tsx` — Workbench listing page backed by MDX
- `app/workbench/[slug]/page.tsx` — Workbench item detail page backed by MDX
- `docs/sprints/sprint-02.md` — sprint record
- `docs/decisions/0003-mdx-publishing-foundation.md` — ADR for the content architecture decision
- `CHANGELOG.md` — this file

### Changed

- `components/workbench-preview.tsx` — now reads from `lib/content.ts` instead of the TypeScript content array
- `content/nav.ts` — "Projects" navigation link renamed to "Workbench" and points to `/workbench`
- `next.config.ts` — added permanent redirects from `/projects` → `/workbench` and `/projects/:slug` → `/workbench/:slug`

### Removed

- `content/workbench.ts` — retired; replaced by `content/workbench/*.mdx` and `lib/content.ts`

### Dependencies

- Added: `gray-matter ^4.0.3`

---

## Sprint 01: Workbench Foundation

### Added

- Workbench concept replacing Projects as the public-facing section name
- `content/workbench.ts` — temporary TypeScript content model (retired in Sprint 02)
- `components/workbench-preview.tsx` — homepage preview section
- Homepage updated to include Workbench preview

### Changed

- Deadlock Labs landing, thesis, pipeline, and founder pages
- Legacy venture-studio routes redirected to Deadlock Labs equivalents
