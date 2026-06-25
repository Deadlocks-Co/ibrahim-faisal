# Changelog

## Unreleased — Sprint 05: Content Refresh and Now Page Migration

### Added

- `content/notes/the-evaluation-problem.mdx` — lab note on evaluation layers in agentic systems
- `content/notes/building-in-public.mdx` — lab note on the Deadlock Labs rationale
- `content/now/now.mdx` — Now page content as a single MDX file with frontmatter-structured sections
- `docs/sprints/sprint-05.md` — sprint record

### Changed

- `app/now/page.tsx` — reads from `getItem("now", "now")` instead of `content/now.ts`

### Removed

- `content/now.ts` — retired; replaced by `content/now/now.mdx`

---

## Sprint 04: Deadlock Labs Content Migration

### Added

- `content/labs/sidekick.mdx`
- `content/labs/pally.mdx`
- `content/labs/bangla-translator.mdx`
- `content/labs/conversational-host-engine.mdx` (new — idea existed in listing but had no detail page)
- `content/labs/world-cup-quiz-battle.mdx`
- `docs/sprints/sprint-04.md` — sprint record

### Changed

- `app/deadlock-labs/[slug]/page.tsx` — reads from `getItem("labs", slug)`; `generateStaticParams` added
- `app/deadlock-labs/page.tsx` — reads from `getCollection("labs")`; icon strings mapped to Lucide components

### Removed

- `content/labs/.gitkeep` — replaced by real content

---

## Sprint 03: Lab Notes Foundation

### Added

- `content/notes/agentic-delivery-observations.mdx` — first real lab note
- `app/lab-notes/page.tsx` — Lab Notes listing page backed by MDX loader
- `app/lab-notes/[slug]/page.tsx` — Lab Notes detail page with MDX body rendering
- `components/lab-notes-preview.tsx` — homepage preview for Lab Notes
- `docs/sprints/sprint-03.md` — sprint record
- `docs/decisions/0004-mdx-body-rendering.md` — ADR for MDX body rendering decision

### Changed

- `app/page.tsx` — replaced `<WritingPreview />` with `<LabNotesPreview />`
- `content/nav.ts` — "Writing" renamed to "Lab Notes", links `/lab-notes`
- `next.config.ts` — added permanent redirect `/writing` → `/lab-notes`
- `tailwind.config.ts` — registered `@tailwindcss/typography` plugin

### Dependencies

- Added: `next-mdx-remote` (MDX body rendering in React Server Components)
- Added (dev): `@tailwindcss/typography` (prose styling)

---

## Sprint 02: Publishing Foundation

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
