# Sprint 07: Contact and Culture MDX Migration

## Status

Complete.

## Goal

Retire the last two hardcoded TypeScript content files that have no real content — the placeholder Contact page (fake email, bare layout) and `content/culture.ts`. Apply the singleton MDX pattern established in Sprints 05 and 06.

## Branch

`feature/contact-and-culture` → `main`

## What was built

### Contact page

- `content/contact/contact.mdx` — singleton MDX file with frontmatter (tagline, links) and a short prose body about preferred contact methods. Drops the `hello@example.com` placeholder; uses real social links only (X / Twitter, GitHub).
- `app/contact/page.tsx` — redesigned as an async Server Component: header with eyebrow, h1, and tagline; prominent link cards with ExternalLink icons; MDX body below. Layout is compact (`max-w-2xl`) consistent with the Now page.

### Culture page

- `content/culture/culture.mdx` — singleton MDX file; YAML-structured sections (label + items array: title, subtitle, status, optional note). Content is identical to `culture.ts` — no data was changed.
- `app/culture/page.tsx` — updated to use `getItem("culture", "culture")`; sections typed locally with `Array.isArray` guard before type-assertion.
- `components/culture-preview.tsx` — updated to use `getItem("culture", "culture")`. This component was also importing from `content/culture` and would have broken on deletion.
- `content/culture.ts` — removed.

## Design decisions

### Contact page — no email

The only email in the previous contact page was a placeholder (`hello@example.com`). Rather than invent a real one, the MDX file uses social links only. The email field can be added to the frontmatter at any time without touching the page component.

### culture-preview.tsx

This component was an implicit dependency on `culture.ts` not caught until `grep` before deletion. The fix is straightforward — same `getItem` pattern as the page. Both the page and the preview now read from the same source, so culture data only needs to be updated in one place.

### `lib/content.ts` unchanged

All four singleton collections (`now`, `about`, `contact`, `culture`) use `getItem(collection, slug)` with no loader changes.

## Remaining hardcoded TS content files

- `content/photos.ts` — placeholder SVG paths; needs real images before it is worth migrating
- `content/writing.ts` — legacy; not mounted anywhere (homepage uses Lab Notes, redirect in place)
- `content/projects.ts` — if it still exists; worth checking

## Next sprint candidate

Sprint 08 (TBD): `content/writing.ts` cleanup, Photography with real images, or a new feature on the Deadlock Labs or Lab Notes sections.
