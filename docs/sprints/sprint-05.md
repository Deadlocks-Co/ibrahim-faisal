# Sprint 05: Content Refresh and Now Page Migration

## Status

Complete.

## Goal

Two parallel goals: add content density to Lab Notes, and migrate the Now page from a hardcoded TypeScript file to an MDX-backed file so it can be updated without a code change.

## Branch

`feature/content-refresh` → `main`

## What was built

### New lab notes

- `content/notes/the-evaluation-problem.mdx` — observations on why evaluation is the hardest unsolved problem in agentic systems; covers the three layers of correctness (functional, semantic, business) and the limits of judge models
- `content/notes/building-in-public.mdx` — the Deadlock Labs rationale in prose form; why publishing half-formed ideas is more productive than keeping them private until ready

Both notes have full frontmatter (title, slug, summary, published, updated, tags, draft: false) and substantive bodies (~500 words each).

### Now page MDX migration

- `content/now/now.mdx` — single MDX file; sections and items stored as YAML arrays in frontmatter; `lastUpdated` stored as a frontmatter string
- `app/now/page.tsx` — updated to read from `getItem("now", "now")`; sections typed locally as `NowSection[]`/`NowItem[]` with an `Array.isArray` guard before type-asserting from `unknown`
- `content/now.ts` — removed

## Design decisions

### now.ts structure in MDX frontmatter

The `now.ts` file held a nested array of sections, each with an array of key/value items. This is valid YAML and round-trips cleanly through gray-matter as a JavaScript array. The page reads `now.sections` and type-asserts it after an `Array.isArray` guard, which is consistent with how `lib/content.ts` returns all frontmatter as `unknown`.

No changes to `lib/content.ts` were needed — `getItem("now", "now")` works because the loader treats any collection directory generically.

### Singleton collections

`content/now/` contains exactly one file. Using `getItem("now", "now")` is a deliberate pattern: a "collection" with one file is the simplest way to fit a singleton into the existing loader without adding a `getSingleton` helper. The pattern is consistent and the tradeoff (a directory for one file) is acceptable.

## What was deferred

- `content/culture.ts` migration — culture sections are structured list data that changes infrequently; left in TypeScript until there is a clear benefit to migrating
- Lab Notes pagination or filtering — 3 notes is not enough volume to warrant it
- Photography — still placeholder SVGs; no real photos to migrate

## Next sprint candidate

Sprint 06 (TBD): About page prose content, a third content domain, or Photography once real images are available.
