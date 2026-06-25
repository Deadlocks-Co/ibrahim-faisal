# Sprint 02: Publishing Foundation

## Status

Complete.

## Goal

Replace temporary TypeScript content models with an MDX-first publishing foundation. One content item equals one MDX file with frontmatter.

## Branch

`feature/publishing-foundation` → `main`

## What was built

### MDX content layer

- `content/workbench/*.mdx` — four workbench items migrated from `content/workbench.ts`
- `content/labs/` — placeholder directory for future Deadlock Labs content migration
- `content/notes/` — placeholder directory for Sprint 03 Lab Notes

### Content loader

- `lib/content.ts` — lightweight server-side loader using Node.js `fs` and `gray-matter`
- Exposes `getCollection(name)` and `getItem(name, slug)`
- Filters drafts by default
- Sorts by `updated` descending, falls back to `published`

### Workbench routes

- `app/workbench/page.tsx` — listing page reading from MDX
- `app/workbench/[slug]/page.tsx` — detail page reading from MDX
- `components/workbench-preview.tsx` — updated to use MDX loader

### Navigation and redirects

- `content/nav.ts` — "Projects" renamed to "Workbench", linking `/workbench`
- `next.config.ts` — `/projects` and `/projects/:slug` permanently redirect to `/workbench` and `/workbench/:slug`

### Retired

- `content/workbench.ts` — removed; replaced entirely by MDX files and the content loader

## Frontmatter convention

Base fields on all content types:

```yaml
title:
slug:
summary:
published:      # YYYY-MM-DD
updated:        # YYYY-MM-DD
tags:           # list of strings
featured:       # boolean
draft:          # boolean — filtered out by loader
```

Workbench-specific fields:

```yaml
category:
status:
year:
stack:          # list of strings
links:          # list of { label, href }
relatedLabs:    # list of strings
purpose:
problem:
approach:
learned:
```

## Dependencies added

- `gray-matter ^4.0.3` — frontmatter parsing. Standard, maintained, zero transitive deps for server-side use.

## What was deferred

- Content Collections — deferred intentionally. See `docs/decisions/0003-mdx-publishing-foundation.md`.
- MDX body rendering (React components in body) — not needed for Workbench content structure. Lab Notes in Sprint 03 will evaluate whether to add `next-mdx-remote` or `@next/mdx`.
- Full Deadlock Labs content migration — `content/labs/` exists but entries are not migrated yet to avoid a partial broken state.

## Next sprint candidate

Sprint 03: Lab Notes Foundation

- Create `/lab-notes` listing page
- Create `/lab-notes/[slug]` detail page
- Use `lib/content.ts` from Sprint 02
- Add real lab notes as MDX files under `content/notes/`
- Evaluate MDX body rendering if rich content is needed
