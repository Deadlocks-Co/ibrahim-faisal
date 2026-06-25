# Changelog

## Unreleased — Sprint 09: Real Photos and Fourth Lab Note

### Added

- `public/photos/DLF_7196.JPG` — bird in jacaranda blossom
- `public/photos/PXL_20251129_053948506.jpg` — turtles on rocks by a garden pond
- `public/photos/PXL_20260103_102418113~2.jpg` — full moon through clouds
- `public/photos/PXL_20260214_072717489.jpg` — floral tribute outside a mural building
- `content/notes/demos-vs-production.mdx` — lab note on the gap between AI demos and production
- `docs/sprints/sprint-09.md` — sprint record

### Changed

- `content/photos.ts` — real filenames, dimensions, alt text, titles, and categories; placeholder SVG entries removed

---

## Sprint 08: Legacy Code Cleanup

### Removed

- `content/writing.ts` — legacy writing items array
- `components/writing-preview.tsx` — unmounted since Sprint 03
- `components/writing-archive.tsx` — unmounted; client component with search/filter UI
- `components/x-embed.tsx` — only used by the writing page
- `app/writing/page.tsx` — redirected to `/lab-notes` since Sprint 03
- `content/projects.ts` — legacy projects array; content covered by `content/workbench/*.mdx`
- `components/project-preview.tsx` — unmounted since Sprint 01
- `app/projects/page.tsx` — redirected to `/workbench` since Sprint 02
- `app/projects/[slug]/page.tsx` — redirected to `/workbench/[slug]` since Sprint 02
- `docs/sprints/sprint-08.md` — sprint record

### Notes

Build reduced from 36 pages to 30 pages. All redirects remain in place.

---

## Sprint 07: Contact and Culture MDX Migration

### Added

- `content/contact/contact.mdx` — contact page as singleton MDX with real social links (X, GitHub); drops placeholder email
- `content/culture/culture.mdx` — culture sections as singleton MDX with YAML-structured items
- `docs/sprints/sprint-07.md` — sprint record

### Changed

- `app/contact/page.tsx` — redesigned as async Server Component with proper header, link cards, and MDX body
- `app/culture/page.tsx` — reads from `getItem("culture", "culture")` instead of `content/culture`
- `components/culture-preview.tsx` — reads from `getItem("culture", "culture")` instead of `content/culture`

### Removed

- `content/culture.ts` — retired; replaced by `content/culture/culture.mdx`

---

## Sprint 06: About Page Redesign

### Added

- `content/about/about.mdx` — real bio content as a singleton MDX file with frontmatter (role, location, tagline, focus, links)
- `docs/sprints/sprint-06.md` — sprint record

### Changed

- `app/about/page.tsx` — redesigned with two-column layout; MDX body rendered via `next-mdx-remote/rsc`; sidebar with focus areas and external links; replaces the two-paragraph placeholder

---

## Sprint 05: Content Refresh and Now Page Migration

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
