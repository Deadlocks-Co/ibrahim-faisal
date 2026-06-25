# Sprint 04: Deadlock Labs Content Migration

## Status

Complete.

## Goal

Migrate all hardcoded Deadlock Labs idea content from TypeScript objects embedded in page files into `content/labs/*.mdx` files. Apply the same MDX-first pattern established in Sprint 02 (Workbench) and Sprint 03 (Lab Notes).

## Branch

`feature/labs-content-migration` → `main`

## What was built

### MDX content files

- `content/labs/sidekick.mdx`
- `content/labs/pally.mdx`
- `content/labs/bangla-translator.mdx`
- `content/labs/conversational-host-engine.mdx` — this idea existed in the listing page but had no detail page; the migration fills that gap
- `content/labs/world-cup-quiz-battle.mdx`

All five files use consistent frontmatter: title, slug, summary, framing, category, status, icon, published, updated, draft, tags, problem, exploration, audience, model, risks, notes.

### Updated routes

- `app/deadlock-labs/[slug]/page.tsx` — replaced the hardcoded `ideas` record with `getItem("labs", slug)`; added `generateStaticParams` so all slugs are statically generated at build time
- `app/deadlock-labs/page.tsx` — replaced the hardcoded `categories` array with `getCollection("labs")` grouped by `category` frontmatter field; icon strings are mapped to Lucide components via a local `iconMap`; category descriptions remain hardcoded (they are editorial, not per-item)

### Removed

- `content/labs/.gitkeep` — replaced by real content

## Design decisions

### Icon mapping

Lucide icons cannot be stored as React components in frontmatter. Each idea stores its icon as a string (e.g., `icon: Wrench`). The listing page maps these strings to Lucide components via:

```ts
const iconMap: Record<string, ElementType> = {
  Languages, Bot, Wrench, Store, Trophy, BrainCircuit, Sparkles, Network, FlaskConical
};
const Icon = iconMap[String(exploration.icon)] ?? BrainCircuit;
```

This is the simplest pattern that avoids framework overhead. Adding a new icon requires adding it to both the frontmatter string and the `iconMap`.

### Category descriptions

Category descriptions (e.g., "Ideas where AI handles context…") are kept hardcoded in the listing page component. They are editorial, change rarely, and do not belong in individual idea files. This avoids requiring each idea to duplicate the category description.

### `conversational-host-engine` gap

This idea existed in the categories listing but had no entry in the old `ideas` record, so its detail page returned 404. The MDX migration closes this gap — a real `conversational-host-engine.mdx` file with a complete set of fields is now available.

## What was deferred

- MDX body content for lab ideas — all prose fields are in frontmatter. The MDX body is empty for all ideas in this sprint. Richer narrative content can be added to the body in future iterations without any architecture change.
- Tag filtering / search on the Deadlock Labs listing — not in scope for this sprint.

## Next sprint candidate

Sprint 05 (TBD): Additional lab notes, Photography section improvements, or search/filtering across the site.
