# Sprint 08: Legacy Code Cleanup

## Status

Complete.

## Goal

Remove two clusters of dead code that were never served to users: the Writing section (replaced by Lab Notes in Sprint 03) and the Projects section (replaced by Workbench in Sprint 01–02, redirects in place since Sprint 02). Reduce build output, remove stale imports, and leave the codebase consistent with the current content architecture.

## Branch

`feature/legacy-cleanup` → `main`

## What was removed

### Writing cluster

- `content/writing.ts` — legacy writing items array, never updated since initial scaffold
- `components/writing-preview.tsx` — not mounted since Sprint 03 (homepage uses LabNotesPreview)
- `components/writing-archive.tsx` — not mounted; client component with search/filter UI over writing items
- `components/x-embed.tsx` — only used by the writing page; Twitter embed component
- `app/writing/page.tsx` — the writing page itself, redirected to `/lab-notes` since Sprint 03

### Projects cluster

- `content/projects.ts` — legacy projects array; content is covered by `content/workbench/*.mdx`
- `components/project-preview.tsx` — not mounted since Sprint 01 (homepage uses WorkbenchPreview)
- `app/projects/page.tsx` — projects listing; redirected to `/workbench` since Sprint 02
- `app/projects/[slug]/page.tsx` — projects detail; redirected to `/workbench/[slug]` since Sprint 02

## Impact

- Build reduced from 36 pages to 30 pages
- No functional change — all redirects remain in place
- All deleted code was unreachable by users

## Verification

- `grep -r "content/writing\|content/projects"` across `app/` and `components/` returned no results after deletion
- `XEmbed` was only imported by `app/writing/page.tsx` — safe to delete
- `npm run build` passes clean at 30 pages, TypeScript clean

## Remaining legacy files

- `content/nav.ts` — structural configuration, not a content file, keep
- `content/photos.ts` — Photography is a live page; placeholder content until real images are available

## Next sprint candidate

Sprint 09 (TBD): Photography with real images, a new lab note, or new feature work.
