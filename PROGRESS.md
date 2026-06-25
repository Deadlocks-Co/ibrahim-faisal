# Deadlock Labs Portfolio Progress

## Current Sprint

Sprint 03: Lab Notes Foundation (candidate)

## Current Focus

Sprint 02 is complete. Workbench is MDX-backed. The publishing foundation is in place.

Sprint 03 will build Lab Notes on top of `lib/content.ts`.

## Operating Rules

- Do not commit directly to `main`.
- Work from a `feature/` branch per sprint.
- Keep PRs focused on a single sprint's scope.
- Avoid Content Collections until explicitly reconsidered.
- Avoid premature schema frameworks.
- Prefer simple MDX files with frontmatter and the existing lightweight loader.
- Update this file before opening each PR.
- Add sprint handoff documentation before opening each PR.

## Completed Baseline

- [x] Deadlock Labs landing experience exists.
- [x] Deadlock Labs thesis page exists.
- [x] Deadlock Labs pipeline page exists.
- [x] Deadlock Labs founder page exists.
- [x] Workbench replaced Projects as the public concept.
- [x] `/projects` legacy URLs redirect to `/workbench`.
- [x] Sprint 2 branch created: `feature/publishing-foundation`.

## Sprint 2 Tasks — Complete

### 1. MDX Dependencies and Configuration

- [x] Add the minimal dependencies required to read MDX or Markdown files with frontmatter.
- [x] Prefer simple server-side parsing over a heavy content framework.
- [x] Keep the implementation compatible with the current Next.js App Router setup.
- [x] Do not introduce Content Collections in this sprint.

### 2. Content Folder Structure

- [x] `content/workbench/*.mdx` contains the migrated Workbench entries.
- [x] `content/labs/` exists and is ready for later migration.
- [x] `content/notes/` exists and is ready for Lab Notes.
- [x] One file represents one content item.

### 3. Frontmatter Convention

- [x] Every migrated Workbench MDX file uses consistent frontmatter.
- [x] Frontmatter is human-readable in PR review.
- [x] No duplicate metadata is required outside the MDX file.

### 4. Lightweight Content Loader

- [x] Read files from a collection directory.
- [x] Parse frontmatter.
- [x] Return typed metadata plus body content.
- [x] Filter out drafts by default.
- [x] Sort consistently by `updated` or `published` descending.
- [x] Provide helpers: `getCollection("workbench")` and `getItem("workbench", slug)`.
- [x] No database.
- [x] No remote CMS.
- [x] No Content Collections.
- [x] No custom validation framework.

### 5. Workbench Migration

- [x] `/workbench` reads from MDX content.
- [x] `/workbench/[slug]` reads from MDX content.
- [x] Homepage Workbench preview reads from MDX content.
- [x] Existing Workbench entries are preserved in content and tone.
- [x] The old TypeScript content array (`content/workbench.ts`) is removed.

### 6. Lab Notes Preparation

- [x] `content/notes/` exists.
- [x] No fake placeholder content added.
- [x] Folder contains `.gitkeep`.

### 7. Deadlock Labs Preparation

- [x] `content/labs/` exists.
- [x] Migration path documented in `docs/sprints/sprint-02.md`.
- [x] No partial broken migrations.

### 8. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-02.md` added.
- [x] `docs/decisions/0003-mdx-publishing-foundation.md` added.
- [x] `CHANGELOG.md` created.
- [x] Content Collections explicitly deferred and documented.

### 9. Quality Gate

- [x] Lint passed.
- [x] Build passed.
- [x] No routes broken.
- [x] No direct commits to `main`.
- [x] No placeholder content shipped.
- [x] `/projects` legacy redirects confirmed working.
- [x] TypeScript compiles.

## Definition of Done — Sprint 2

- [x] Workbench is MDX-backed.
- [x] The temporary Workbench TypeScript content model is removed.
- [x] A reusable content loader exists.
- [x] `content/labs`, `content/workbench`, and `content/notes` exist.
- [x] Documentation explains what changed and why.
- [x] PR opened from `feature/publishing-foundation` into `main`.

## Next Sprint Candidate

Sprint 03: Lab Notes Foundation

Expected focus:

- Create `/lab-notes` listing page.
- Create `/lab-notes/[slug]` detail page.
- Use `lib/content.ts` from Sprint 02.
- Add real lab notes as MDX files under `content/notes/`.
- Evaluate whether MDX body rendering (`next-mdx-remote` or `@next/mdx`) is needed for rich content.
- Replace the old Writing concept with Lab Notes in navigation.
- Introduce notebook-style writing conventions.
