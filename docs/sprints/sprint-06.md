# Sprint 06: About Page Redesign

## Status

Complete.

## Goal

Replace the two-paragraph placeholder About page with a proper MDX-backed singleton. The page should render real prose content via MDX body rendering and show structured sidebar data (focus areas, links) from frontmatter, following the same patterns established in previous sprints.

## Branch

`feature/about-page` → `main`

## What was built

### MDX content

- `content/about/about.mdx` — singleton MDX file with:
  - Frontmatter: title, role, location, tagline, focus (string array), links (array of label/href objects)
  - Body: ~350 word prose bio in Ibrahim's voice — professional background, AI systems work, Deadlock Labs rationale, outside interests

### Updated route

- `app/about/page.tsx` — redesigned as an async Server Component:
  - Header: role + location eyebrow, h1 name, tagline below
  - Two-column layout (`lg:grid-cols-[1fr_240px]`): MDX body on the left, sticky sidebar on the right
  - MDX body rendered via `next-mdx-remote/rsc` with `prose` Tailwind classes
  - Sidebar: focus areas list, external links with `ExternalLink` icon
  - Consistent with the workbench detail page layout pattern

## Design decisions

### Singleton collection pattern

`content/about/` mirrors `content/now/` — a single file accessed via `getItem("about", "about")`. No changes to `lib/content.ts`. The loader treats it as a standard collection; the convention is one file per singleton domain.

### Async page for MDX rendering

The page is `async` to support `MDXRemote` (an async React Server Component). This is consistent with how lab notes detail pages work. Static generation is not blocked — Next.js statically renders the page at build time because there are no dynamic segments.

### Inline metadata export

`export const metadata` uses the standard `Metadata` type from Next.js rather than reading from the MDX frontmatter. The description in `metadata` is kept independent of the tagline in the MDX to give fine-grained control over SEO copy.

## What was deferred

- Contact page redesign — still placeholder content; can follow the same singleton MDX pattern when ready
- Culture page migration — structured list data; left in TypeScript until there is clear benefit to MDX

## Next sprint candidate

Sprint 07 (TBD): Contact page redesign, culture page migration, or a new content section.
