# Deadlock Labs Portfolio Progress

## Current Sprint

Sprint 02: Publishing Foundation

## Current Focus

Replace temporary TypeScript content models with an MDX-first publishing foundation.

The repository should move toward a simple rule:

> One content item equals one MDX file.

This sprint is architectural. Do not optimize for visible features. Optimize for durable content authoring, maintainability, and future sections such as Lab Notes, Timeline, Search, and Related Content.

## Operating Rules

- Do not commit directly to `main`.
- Work from `feature/publishing-foundation`.
- Keep the PR focused on publishing architecture.
- Avoid Content Collections for now.
- Avoid premature schema frameworks.
- Prefer simple MDX files with frontmatter and a lightweight loader.
- Remove or isolate temporary TypeScript content arrays where practical.
- Update this file before opening the PR.
- Add or update sprint handoff documentation before opening the PR.

## Completed Baseline

- [x] Deadlock Labs landing experience exists.
- [x] Deadlock Labs thesis page exists.
- [x] Deadlock Labs pipeline page exists.
- [x] Deadlock Labs founder page exists.
- [x] Workbench replaced Projects as the public concept.
- [x] `/projects` legacy URLs are expected to redirect to `/workbench`.
- [x] Sprint 2 branch created: `feature/publishing-foundation`.

## Sprint 2 Tasks

### 1. MDX Dependencies and Configuration

- [ ] Add the minimal dependencies required to read MDX or Markdown files with frontmatter.
- [ ] Prefer simple server-side parsing over a heavy content framework.
- [ ] Keep the implementation compatible with the current Next.js App Router setup.
- [ ] Do not introduce Content Collections in this sprint.

### 2. Content Folder Structure

Create or normalize this structure:

```text
content/
  labs/
  workbench/
  notes/
```

Acceptance criteria:

- [ ] `content/workbench/*.mdx` contains the migrated Workbench entries.
- [ ] `content/labs/` exists and is ready for later migration.
- [ ] `content/notes/` exists and is ready for Lab Notes.
- [ ] One file represents one content item.

### 3. Frontmatter Convention

Define a shared frontmatter convention.

Base fields:

```yaml
title:
slug:
summary:
published:
updated:
tags:
related:
featured:
draft:
```

Workbench-specific fields:

```yaml
category:
status:
year:
stack:
links:
relatedLabs:
```

Acceptance criteria:

- [ ] Every migrated Workbench MDX file uses consistent frontmatter.
- [ ] Frontmatter is human-readable in PR review.
- [ ] No duplicate metadata is required outside the MDX file.

### 4. Lightweight Content Loader

Implement a shared loader, probably under `lib/content.ts` or `lib/mdx.ts`.

Required behavior:

- [ ] Read files from a collection directory.
- [ ] Parse frontmatter.
- [ ] Return typed metadata plus body content.
- [ ] Filter out drafts by default.
- [ ] Sort consistently, preferably by `updated` or `published` descending.
- [ ] Provide helpers such as `getCollection("workbench")` and `getItem("workbench", slug)`.

Do not overbuild:

- [ ] No database.
- [ ] No remote CMS.
- [ ] No Content Collections.
- [ ] No custom validation framework unless absolutely necessary.

### 5. Workbench Migration

Replace the temporary `content/workbench.ts` model with MDX-backed content.

Acceptance criteria:

- [ ] `/workbench` reads from MDX content.
- [ ] `/workbench/[slug]` reads from MDX content.
- [ ] Homepage Workbench preview reads from MDX content.
- [ ] Existing Workbench entries are preserved in content and tone.
- [ ] The old TypeScript content array is removed or no longer used.

### 6. Lab Notes Preparation

Sprint 2 does not need a full Lab Notes UI.

Acceptance criteria:

- [ ] `content/notes/` exists.
- [ ] Add one example non-placeholder note only if it helps verify the loader.
- [ ] Do not add fake placeholder content.
- [ ] If no real note is added, leave the folder with a `.gitkeep` file or equivalent.

### 7. Deadlock Labs Preparation

Sprint 2 does not need to fully migrate all lab ideas unless it is straightforward.

Acceptance criteria:

- [ ] `content/labs/` exists.
- [ ] Document the intended migration path.
- [ ] Avoid partial broken migrations.

### 8. Documentation

- [ ] Update `PROGRESS.md` before PR.
- [ ] Add `docs/sprints/sprint-02.md`.
- [ ] Add `docs/decisions/0003-mdx-publishing-foundation.md`.
- [ ] Update `CHANGELOG.md` if it exists. Create it if it does not.
- [ ] Mention that Content Collections were explicitly deferred.

### 9. Quality Gate

Before opening PR:

- [ ] Run lint if available.
- [ ] Run build if available.
- [ ] Confirm no routes are broken.
- [ ] Confirm no direct commits were made to `main`.
- [ ] Confirm no placeholder content shipped.
- [ ] Confirm `/projects` legacy redirects still work.
- [ ] Confirm TypeScript compiles.

## Definition of Done

Sprint 2 is complete when:

- [ ] Workbench is MDX-backed.
- [ ] The temporary Workbench TypeScript content model is removed or unused.
- [ ] A reusable content loader exists.
- [ ] `content/labs`, `content/workbench`, and `content/notes` exist.
- [ ] Documentation explains what changed and why.
- [ ] A PR is opened from `feature/publishing-foundation` into `main`.

## Next Sprint Candidate

Sprint 03: Lab Notes Foundation

Expected focus:

- Create `/lab-notes`.
- Create `/lab-notes/[slug]`.
- Use the MDX loader from Sprint 2.
- Replace the old Writing concept with Lab Notes.
- Introduce notebook-style writing conventions.
