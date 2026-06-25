# ADR 0003: MDX Publishing Foundation

## Status

Accepted — Sprint 02

## Context

Sprint 01 introduced `content/workbench.ts`, a TypeScript array used as a temporary content model. It worked for rendering but had two structural problems:

1. Adding or editing content required modifying TypeScript source files, coupling content authoring to code deployment.
2. The model had no obvious path to rich editorial content such as Lab Notes, timeline entries, or long-form writing.

The project needed a durable content layer that a) separates content from code, b) is human-readable in PR review, and c) can grow to support future sections without requiring a framework migration.

## Decision

Adopt MDX files with frontmatter as the canonical content format.

- One file represents one content item.
- Frontmatter holds all structured metadata.
- The MDX body is available for future long-form content.
- A lightweight server-side loader (`lib/content.ts`) reads files using Node.js `fs` and `gray-matter`.
- No Content Collections, no CMS, no remote data layer.

## Alternatives considered

### Content Collections (Astro / custom)

Deferred. Adds framework coupling and schema enforcement overhead that is not justified at this stage. The project can adopt a validation layer later if the number of content types grows.

### Remote CMS (Sanity, Contentful, etc.)

Rejected for this stage. Introduces infrastructure dependency, cost, and operational complexity that is not warranted for a personal publishing system.

### Keep TypeScript content arrays

Rejected. Editing content in `.ts` files mixes content authoring with code changes. It does not support rich editorial body content.

## Consequences

**Positive:**
- Content is readable and editable without touching application code.
- PR diffs of content changes are human-readable frontmatter.
- The loader is portable — it can serve any section (`workbench`, `notes`, `labs`) without a per-section implementation.
- No new framework dependency; only `gray-matter` added.

**Negative / risks:**
- No schema validation at build time. Typos in frontmatter keys fail silently (item renders with missing fields rather than a build error). Acceptable for a personal site; can be addressed with Zod validation in a future sprint if needed.
- MDX body rendering (React components in body) is not wired up yet. Lab Notes requiring rich content will need `next-mdx-remote` or `@next/mdx` in Sprint 03.

## Operational impact

None. `lib/content.ts` reads from the filesystem at request time (server components). No build step or external service required.
