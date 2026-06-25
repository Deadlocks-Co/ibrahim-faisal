# Deadlock Labs Portfolio Progress

## Current Sprint

Sprint 03: Lab Notes Foundation

## Current Focus

Sprint 03 is complete. Lab Notes is live, MDX body rendering is wired, and the first real note is published.

Sprint 04 candidate: Deadlock Labs content migration or Photography section improvements.

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

## Sprint 3 Tasks — Complete

### 1. MDX Body Rendering

- [x] Evaluate and select a body rendering approach.
- [x] Install `next-mdx-remote` for RSC-compatible MDX rendering.
- [x] Install `@tailwindcss/typography` for prose styling.
- [x] Update `tailwind.config.ts` to register the typography plugin.
- [x] Decision documented in `docs/decisions/0004-mdx-body-rendering.md`.

### 2. First Real Lab Note

- [x] Write one substantive lab note in `content/notes/`.
- [x] Full frontmatter: title, slug, summary, published, updated, tags, draft.
- [x] Body: 400–600 words, real observations, not placeholder content.
- [x] `content/notes/.gitkeep` removed now that the directory has real content.

### 3. Lab Notes Routes

- [x] `app/lab-notes/page.tsx` listing page using `getCollection("notes")`.
- [x] `app/lab-notes/[slug]/page.tsx` detail page with MDX body rendering.
- [x] Title, summary, dates, and tags shown in the page header.
- [x] `generateStaticParams` wired for static generation.

### 4. Homepage and Navigation

- [x] `components/lab-notes-preview.tsx` created, matching WorkbenchPreview style.
- [x] `app/page.tsx` updated: `<WritingPreview />` replaced with `<LabNotesPreview />`.
- [x] `content/nav.ts` updated: "Writing" → "Lab Notes" linking `/lab-notes`.
- [x] `next.config.ts` updated: `/writing` permanently redirects to `/lab-notes`.

### 5. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-03.md` added.
- [x] `docs/decisions/0004-mdx-body-rendering.md` added.
- [x] `CHANGELOG.md` Sprint 03 section added.

### 6. Quality Gate

- [x] Build passes.
- [x] TypeScript compiles.
- [x] No broken routes.
- [x] No direct commits to `main`.
- [x] No placeholder content shipped.
- [x] `/writing` redirect confirmed.

## Definition of Done — Sprint 3

- [x] `/lab-notes` listing renders real notes from MDX.
- [x] `/lab-notes/[slug]` renders formatted body content.
- [x] Homepage shows Lab Notes preview instead of Writing.
- [x] Navigation shows "Lab Notes".
- [x] `/writing` redirects to `/lab-notes`.
- [x] One real lab note published.
- [x] Documentation explains what changed and why.
- [x] PR opened from `feature/lab-notes-foundation` into `main`.

## Next Sprint Candidate

Sprint 04: Deadlock Labs content migration or Photography improvements.

Expected focus (TBD):

- Migrate Deadlock Labs ideas into `content/labs/*.mdx`.
- Or improve the Photography section with better layout and metadata.
- Or introduce Lab Notes search/filtering if note volume warrants it.
