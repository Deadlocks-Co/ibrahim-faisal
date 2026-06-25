# Sprint 03: Lab Notes Foundation

## Status

Complete.

## Goal

Build the Lab Notes section on top of the `lib/content.ts` loader from Sprint 02. Replace "Writing" in the navigation and homepage with Lab Notes. Publish the first real note.

## Branch

`feature/lab-notes-foundation` → `main`

## What was built

### MDX body rendering

- Added `next-mdx-remote` for RSC-compatible MDX body rendering
- Added `@tailwindcss/typography` for prose styling
- Updated `tailwind.config.ts` to register the typography plugin

### Content

- `content/notes/agentic-delivery-observations.mdx` — first real lab note: observations on what actually breaks in agentic delivery systems, written from eighteen months of practical experience

### Lab Notes routes

- `app/lab-notes/page.tsx` — listing page, sorted by `updated` desc, tags shown inline
- `app/lab-notes/[slug]/page.tsx` — detail page with MDX body rendered via `MDXRemote`, header with title/summary/dates/tags

### Homepage and navigation

- `components/lab-notes-preview.tsx` — homepage preview showing 3 most recent notes, matching the visual style of `WorkbenchPreview`
- `app/page.tsx` — replaced `<WritingPreview />` with `<LabNotesPreview />`
- `content/nav.ts` — "Writing" → "Lab Notes" linking `/lab-notes`
- `next.config.ts` — `/writing` permanently redirects to `/lab-notes`

### Retained (not deleted)

- `components/writing-preview.tsx` — retained; no longer used on homepage
- `components/writing-archive.tsx` — retained; still used by `/writing` page (which redirects)
- `content/writing.ts` — retained; still referenced by writing-archive

## Dependencies added

- `next-mdx-remote ^5.x` — RSC-compatible MDX rendering, no Content Collections required
- `@tailwindcss/typography` (dev) — prose styling for body content

## What was deferred

- Writing section full retirement — `content/writing.ts` and the writing components remain but are only reachable via redirect. Full cleanup is a future housekeeping task.
- Additional lab notes — Sprint 03 ships one real note to validate the pipeline. Subsequent notes are authored incrementally.
- Tag filtering / search on `/lab-notes` — the listing is a plain sorted list for now. Filtering can be added in a future sprint if the volume warrants it.

## Next sprint candidate

Sprint 04: Deadlock Labs content migration or Photography section improvements.
