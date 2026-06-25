# Deadlock Labs Portfolio Progress

## Current Sprint

Sprint 09: Real Photos and Fourth Lab Note

## Current Focus

Sprint 09 is complete. Four real photos live in `public/photos/` and `content/photos.ts` updated. Fourth lab note published: "Why AI Demos Don't Survive Production."

Sprint 10 candidate: Workbench MDX body content, image optimisation (WebP, blur placeholders), or a new Deadlock Labs idea.

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

## Sprint 4 Tasks — Complete

### 1. MDX Content Files

- [x] `content/labs/sidekick.mdx` — Vertical Products, Seed idea
- [x] `content/labs/pally.mdx` — Vertical Products, Seed idea
- [x] `content/labs/bangla-translator.mdx` — AI Systems, Prototype
- [x] `content/labs/conversational-host-engine.mdx` — AI Systems, Researching (gap fix: existed in listing but had no detail page)
- [x] `content/labs/world-cup-quiz-battle.mdx` — Interactive Experiences, Prototype
- [x] Consistent frontmatter on all five: title, slug, summary, framing, category, status, icon, published, updated, draft, tags, problem, exploration, audience, model, risks, notes
- [x] `content/labs/.gitkeep` removed

### 2. Updated Routes

- [x] `app/deadlock-labs/[slug]/page.tsx` — reads from `getItem("labs", slug)`; `generateStaticParams` added; hardcoded `ideas` record removed
- [x] `app/deadlock-labs/page.tsx` — reads from `getCollection("labs")` grouped by `category`; icon strings mapped to Lucide components via `iconMap`; category descriptions kept hardcoded (editorial, not per-item)

### 3. Design Decisions

- [x] Icon mapping: store icon as string in frontmatter; map to Lucide component in the listing page via `iconMap: Record<string, ElementType>` with `BrainCircuit` as fallback
- [x] Category descriptions: kept in `categoryMeta` constant in the listing page — they are editorial and change rarely; not duplicated per-idea
- [x] `lib/content.ts` unchanged — the existing loader supports the labs collection without modification

### 4. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-04.md` added.
- [x] `CHANGELOG.md` Sprint 04 section added.

### 5. Quality Gate

- [x] Build passes.
- [x] TypeScript compiles.
- [x] No broken routes.
- [x] No direct commits to `main`.
- [x] No placeholder content shipped.
- [x] All five lab ideas render at `/deadlock-labs/[slug]`.

## Definition of Done — Sprint 4

- [x] All five Deadlock Labs ideas backed by MDX files.
- [x] `/deadlock-labs` listing reads from content loader.
- [x] `/deadlock-labs/[slug]` reads from content loader.
- [x] `conversational-host-engine` detail page no longer 404s.
- [x] Old hardcoded TypeScript content removed from page files.
- [x] Documentation explains what changed and why.
- [x] PR opened from `feature/labs-content-migration` into `main`.

## Sprint 5 Tasks — Complete

### 1. New Lab Notes

- [x] `content/notes/the-evaluation-problem.mdx` — evaluation layers in agentic systems (~500 words)
- [x] `content/notes/building-in-public.mdx` — Deadlock Labs rationale in prose form (~500 words)
- [x] Full frontmatter on both: title, slug, summary, published, updated, tags, draft: false
- [x] Substantive bodies — no placeholder content

### 2. Now Page MDX Migration

- [x] `content/now/now.mdx` created with YAML-structured sections and items in frontmatter
- [x] `app/now/page.tsx` updated to read from `getItem("now", "now")`
- [x] Sections typed locally with `Array.isArray` guard before type-assertion
- [x] `content/now.ts` removed

### 3. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-05.md` added.
- [x] `CHANGELOG.md` Sprint 05 section added.

### 4. Quality Gate

- [x] Build passes — 36 pages, TypeScript clean.
- [x] `/lab-notes/the-evaluation-problem` and `/lab-notes/building-in-public` generate statically.
- [x] `/now` renders from MDX content.
- [x] No direct commits to `main`.
- [x] No placeholder content shipped.
- [x] `lib/content.ts` unchanged.

## Definition of Done — Sprint 5

- [x] Two real lab notes published and accessible at `/lab-notes/[slug]`.
- [x] Now page reads from `content/now/now.mdx` — no code change needed to update it.
- [x] `content/now.ts` retired.
- [x] Documentation explains what changed and why.
- [x] PR opened from `feature/content-refresh` into `main`.

## Sprint 6 Tasks — Complete

### 1. About MDX Content

- [x] `content/about/about.mdx` created with full frontmatter: title, role, location, tagline, focus, links
- [x] Prose body ~350 words in Ibrahim's practitioner voice — professional background, AI systems work, Deadlock Labs, outside interests
- [x] No placeholder content

### 2. About Page Redesign

- [x] `app/about/page.tsx` redesigned as async Server Component
- [x] Header: role + location eyebrow, h1 name, tagline
- [x] Two-column layout `lg:grid-cols-[1fr_240px]`: MDX prose body (left) + sticky sidebar (right)
- [x] MDX body rendered via `next-mdx-remote/rsc` with `prose prose-sm prose-neutral dark:prose-invert` classes
- [x] Sidebar: focus areas list, external links with `ExternalLink` icon
- [x] Inline hardcoded text removed

### 3. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-06.md` added.
- [x] `CHANGELOG.md` Sprint 06 section added.

### 4. Quality Gate

- [x] Build passes — 36 pages, TypeScript clean.
- [x] `/about` renders MDX content correctly.
- [x] No direct commits to `main`.
- [x] No placeholder content shipped.
- [x] `lib/content.ts` unchanged.

## Definition of Done — Sprint 6

- [x] `/about` reads from `content/about/about.mdx`.
- [x] Bio is real, specific, and in Ibrahim's voice.
- [x] Layout is consistent with the rest of the site.
- [x] Bio is updatable without touching code.
- [x] Documentation explains what changed and why.
- [x] PR opened from `feature/about-page` into `main`.

## Sprint 7 Tasks — Complete

### 1. Contact Page

- [x] `content/contact/contact.mdx` created with frontmatter (tagline, links) and prose body
- [x] Real social links only: X / Twitter, GitHub — placeholder email removed
- [x] `app/contact/page.tsx` redesigned as async Server Component with header, link cards, MDX body

### 2. Culture MDX Migration

- [x] `content/culture/culture.mdx` created with YAML-structured sections (label, items: title, subtitle, status, optional note)
- [x] `app/culture/page.tsx` updated to `getItem("culture", "culture")` with local interface types
- [x] `components/culture-preview.tsx` updated — was also importing from `content/culture`, fixed before deletion
- [x] `content/culture.ts` removed

### 3. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-07.md` added.
- [x] `CHANGELOG.md` Sprint 07 section added.

### 4. Quality Gate

- [x] Build passes — 36 pages, TypeScript clean.
- [x] `/contact` renders MDX content correctly.
- [x] `/culture` renders from MDX content correctly.
- [x] Homepage `CulturePreview` reads from MDX.
- [x] No direct commits to `main`.
- [x] `lib/content.ts` unchanged.

## Definition of Done — Sprint 7

- [x] `/contact` uses `content/contact/contact.mdx`; no placeholder email.
- [x] `/culture` and `CulturePreview` use `content/culture/culture.mdx`.
- [x] `content/culture.ts` retired.
- [x] Documentation explains what changed and why.
- [x] PR opened from `feature/contact-and-culture` into `main`.

## Sprint 8 Tasks — Complete

### 1. Writing Cluster Deleted

- [x] `content/writing.ts` removed
- [x] `components/writing-preview.tsx` removed — unmounted since Sprint 03
- [x] `components/writing-archive.tsx` removed — client component, unmounted
- [x] `components/x-embed.tsx` removed — only used by the writing page
- [x] `app/writing/page.tsx` and directory removed — redirected to `/lab-notes` since Sprint 03

### 2. Projects Cluster Deleted

- [x] `content/projects.ts` removed — content covered by `content/workbench/*.mdx`
- [x] `components/project-preview.tsx` removed — unmounted since Sprint 01
- [x] `app/projects/page.tsx` removed — redirected to `/workbench` since Sprint 02
- [x] `app/projects/[slug]/page.tsx` and directory removed — redirected to `/workbench/[slug]` since Sprint 02

### 3. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-08.md` added.
- [x] `CHANGELOG.md` Sprint 08 section added.

### 4. Quality Gate

- [x] Build passes — 30 pages (down from 36), TypeScript clean.
- [x] All redirects remain in place (`/writing` → `/lab-notes`, `/projects` → `/workbench`).
- [x] No live pages broken.
- [x] No direct commits to `main`.

## Definition of Done — Sprint 8

- [x] Writing and Projects dead code clusters fully removed.
- [x] Build output reflects only live routes.
- [x] Documentation explains what was removed and why.
- [x] PR opened from `feature/legacy-cleanup` into `main`.

## Sprint 9 Tasks — Complete

### 1. Real Photography

- [x] `public/photos/DLF_7196.JPG` — bird in jacaranda blossom (DSLR, 6000×4000)
- [x] `public/photos/PXL_20251129_053948506.jpg` — turtles on rocks (4080×3072)
- [x] `public/photos/PXL_20260103_102418113~2.jpg` — full moon through clouds (4080×3072)
- [x] `public/photos/PXL_20260214_072717489.jpg` — floral tribute outside mural building (4080×3072)
- [x] `content/photos.ts` updated — real filenames, display dimensions, alt text, titles, categories; placeholder SVG entries removed
- [x] No code changes to gallery or card components required

### 2. Fourth Lab Note

- [x] `content/notes/demos-vs-production.mdx` — "Why AI Demos Don't Survive Production"
- [x] Full frontmatter: title, slug, summary, published, updated, tags, draft: false
- [x] ~550 word body covering: what demos don't test, the integration surface problem, confidence calibration, what actually helps

### 3. Documentation

- [x] `PROGRESS.md` updated before PR.
- [x] `docs/sprints/sprint-09.md` added.
- [x] `CHANGELOG.md` Sprint 09 section added.

### 4. Quality Gate

- [x] Build passes — 31 pages, TypeScript clean.
- [x] `/lab-notes/demos-vs-production` generates statically.
- [x] `/photography` serves real images via `next/image`.
- [x] No direct commits to `main`.

## Definition of Done — Sprint 9

- [x] Photography section has real images, no placeholders.
- [x] Four lab notes published.
- [x] Documentation explains what changed and why.
- [x] PR opened from `feature/real-photos-and-lab-note` into `main`.

## Next Sprint Candidate

Sprint 10 (TBD):

- Workbench MDX body content — prose narrative in the body field of each entry.
- Image optimisation — convert photos to WebP, add blur placeholders.
- A new Deadlock Labs idea.
