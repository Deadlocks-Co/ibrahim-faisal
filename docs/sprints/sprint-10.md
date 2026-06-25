# Sprint 10: Workbench Prose Bodies

## Status

Complete.

## Goal

Add MDX body rendering to the workbench detail page and write substantive prose narratives for all four workbench entries. The frontmatter cards (purpose, problem, approach, learned) remain in place as structured summaries; the prose body provides the fuller narrative context that the card format cannot hold.

## Branch

`feature/workbench-prose-bodies` → `main`

## What was built

### Code change

- `app/workbench/[slug]/page.tsx` — added `MDXRemote` import and a body section that renders between the hero and the card grid when `item.body` is non-empty. No structural changes to the existing layout.

### Prose bodies

Four MDX bodies written, one per workbench entry:

- **Agentic Data Platform Delivery Engine** — covers the reproducibility problem in platform onboarding, how the agent role separation emerged, the hook-based quality gate pattern, and the limits of the current system. ~500 words.
- **ARB** — covers why delivery friction accumulates in small inconsistencies, what the toolkit packages and what it deliberately does not do, and its current prototype state. ~400 words.
- **ContextAtlas** — covers the two kinds of engineering output (visible and invisible), why invisible output is increasingly load-bearing in agentic workflows, how the system structures decision records and artefact metadata, and where active design questions sit. ~550 words.
- **Personal Publishing System** — covers why traditional portfolio sites optimise for the wrong thing, the three architectural decisions that changed this site's direction, and what the site is becoming. ~400 words.

## Design decisions

### Body placement: between hero and card grid

The prose body sits below the hero (title, category, status, summary) and above the existing card grid (purpose/problem/approach/learned + sidebar). This order mirrors how a reader would naturally approach the content: summary → narrative → structured detail.

The cards are retained. They provide at-a-glance structured information that prose cannot. The body extends rather than replaces them.

### Conditional render

The body section only renders when `item.body` is non-empty. This keeps the layout correct for any future workbench entry that omits a prose body.

### `lib/content.ts` unchanged

The loader already returns `body` as a string. No change required.

## Next sprint candidate

Sprint 11 (TBD): A new Deadlock Labs idea, a fifth lab note, image optimisation (WebP conversion, blur placeholders), or workbench content updates.
