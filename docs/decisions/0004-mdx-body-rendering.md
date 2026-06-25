# ADR 0004: MDX Body Rendering with next-mdx-remote

## Status

Accepted — Sprint 03

## Context

Sprint 02 established `lib/content.ts` which reads MDX files and returns the raw body as a string. Workbench items store all prose in frontmatter fields, so no body renderer was needed then.

Lab Notes require a body renderer. Notes are actual written content — paragraphs, headings, inline code, lists — that must be formatted correctly in the browser. The raw string must be compiled to React output.

## Decision

Use `next-mdx-remote` (`next-mdx-remote/rsc`) for MDX body rendering.

In the detail page:
```tsx
import { MDXRemote } from "next-mdx-remote/rsc";
// ...
<MDXRemote source={note.body} />
```

The `body` string comes from `gray-matter`'s content output — already in `lib/content.ts`.

Use `@tailwindcss/typography` (the `prose` plugin) for body styling.

## Alternatives considered

### remark + rehype → HTML + dangerouslySetInnerHTML

Requires `remark`, `remark-html` (or `rehype-stringify`), and careful sanitisation. More control at a higher implementation cost. `dangerouslySetInnerHTML` is safe for content we author but adds a mental overhead and lint warnings. Rejected as heavier without meaningful benefit for a personal site.

### @next/mdx (Next.js config-level)

Integrates MDX at the Next.js config level, making `.mdx` files loadable as pages or components directly. Does not compose cleanly with the dynamic file-reading pattern in `lib/content.ts` — it expects MDX to be imported as modules, not read from disk at runtime. Rejected for this use case.

### No body rendering (frontmatter-only notes)

Rejected. Lab Notes without body text are not useful as notes.

## Consequences

**Positive:**
- `MDXRemote` server component is zero-client-JS overhead — content compiles on the server.
- Custom React components can be passed into MDX bodies in future (callouts, code blocks, embeds) without changing the architecture.
- Single dependency addition covering all current and near-future body rendering needs.

**Negative / risks:**
- `next-mdx-remote` adds 114 transitive packages. These are well-maintained, but the footprint is larger than the `remark` alternative.
- MDX body content could theoretically embed `<script>` tags or React component imports. For a self-authored personal site this is not a meaningful risk, but worth noting if the site ever accepts external content.

## Operational impact

None. All rendering is server-side. No build pipeline changes required.
