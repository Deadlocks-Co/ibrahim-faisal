# Deadlock Labs — Add New Entry Agent

Use this agent whenever the user wants to add a new idea to Deadlock Labs.

## Clarifying questions

Before writing any file, ask for anything that is missing from the user's request. Ask only what you cannot derive yourself. Collect:

1. **Product name** — the display title (e.g. "Evenstar AI", "Dig Truth 1971").
2. **Live URL** — the deployed site or landing page. If there is one, fetch it and take a screenshot before writing content. Never describe the product from memory or assumptions.
3. **Local project path** — if there is no live URL, ask for the local repo path so you can read the source to understand what the product actually is.
4. **Status** — one of exactly: `Seed Idea`, `Researching`, `Prototype`, `Testing`, `Building`. No other values are valid. If the user is vague ("early stage", "just an idea"), map to `Seed Idea`. If they say "built a version" or "working demo", map to `Prototype`.
5. **Category** — one of exactly: `AI Systems`, `Vertical Products`, `Interactive Experiences`. Offer these three and ask the user to pick, or infer confidently if the product clearly fits one.

Do not ask about summary, framing, problem, exploration, audience, model, risks, or notes. Derive those from the live page or local source. Do not ask about card theme colours — derive those from the product's visual identity.

If the user has already provided some of these in their message, do not ask again. Only ask for what is missing.

## What to do once you have the information

### Step 1 — Read the product

- If a live URL exists: fetch it with WebFetch. Take a screenshot with Playwright (`mcp__playwright__browser_navigate` then `mcp__playwright__browser_take_screenshot`). Save screenshots to `ui/screenshots/` in the project root. Navigate to `http://` — never `file://`.
- If no live URL: read the local project's README and key source files (homepage, layout, CLAUDE.md) to understand what the product is.
- Write all MDX content fields from what the product actually is, not from the user's brief.

### Step 2 — Create the MDX file

File: `content/labs/{slug}.mdx`

Slug: kebab-case of the title (e.g. "Dig Truth 1971" → `dig-truth-1971`).

Required frontmatter fields (in this order):

```yaml
---
title:       # Display name
slug:        # kebab-case
summary:     # One sentence — what the product does, concrete and specific. No marketing language.
framing:     # "What if..." question that describes the core hypothesis.
category:    # AI Systems | Vertical Products | Interactive Experiences
status:      # Seed Idea | Researching | Prototype | Testing | Building
icon:        # One of: Languages Bot Wrench Store Trophy BrainCircuit Sparkles Network FlaskConical
cardTheme:   # Short slug you will invent, e.g. "digtruth", "evenstar", "galleryside"
published:   # Today's date as "YYYY-MM-DD"
updated:     # Same as published
url:         # Live URL if it exists. Omit if none.
draft:       false
tags:
  - tag-one
  - tag-two
problem:     # Paragraph — what problem is being solved, grounded in real behaviour.
exploration: # Paragraph — what was built or explored, technically specific.
audience:    # Sentence — who uses it and how.
model:       # Sentence — what the business or product model is.
risks:       # Paragraph — honest risks: content accuracy, dependency, scope, adoption.
notes:       # Paragraph — non-obvious design decisions, interesting tensions, open questions.
---
```

Pick `icon` by what best represents the product domain. Do not invent new icon names — only use the ones listed above.

### Step 3 — Update the pipeline page

File: `app/deadlock-labs/pipeline/page.tsx`

Find the `stages` array. Locate the stage whose `name` matches the MDX `status` exactly. Add the product's display title to that stage's `items` array.

```ts
// Example: adding "Dig Truth 1971" to Researching
{ name: "Researching", items: ["World Cup Quiz Battle", "Dig Truth 1971"] }
```

### Step 4 — Update the labs page

File: `app/deadlock-labs/page.tsx`

**4a. Increment Active ideas count.**

Find the `metrics` array. Increment the `value` for `"Active ideas"` by 1.

```ts
{ label: "Active ideas", value: "8" }  // → "9" after adding one entry
```

**4b. Add card theme.**

The labs page renders each card with a `cardTheme` string from the MDX frontmatter. Every themed card needs five additions. Follow this pattern exactly — one addition per location:

**Location 1 — `isThemed` boolean block** (around line 120):
```ts
const isDigTruth = String(exploration.cardTheme ?? "") === "digtruth";
// add your new theme here, e.g.:
const isNewThing = String(exploration.cardTheme ?? "") === "newthing";
const isThemed = isCitadel || isEvenstar || isBangla || isGallerySide || isDigTruth || isNewThing;
```

**Location 2 — Card `<Link>` background/border** (the `style=` on the `<Link>` element):
```ts
: isNewThing ? { backgroundColor: "#XXXXXX", borderColor: "#YYYYYY" }
: undefined
```

**Location 3 — Icon box** (the icon `<div>` block inside the card):
```tsx
} : isNewThing ? (
  <div className="rounded-2xl border p-3" style={{ backgroundColor: "#XXXXXX", borderColor: "#YYYYYY30" }}>
    <span style={{ color: "#YYYYYY", fontSize: "14px", lineHeight: 1, fontFamily: "monospace", fontWeight: 700 }}>AB</span>
  </div>
) : (
```
- Use a 2–3 character text symbol that represents the product (initials, year, letter, or a Unicode character from the product's domain).
- Match the product's primary accent colour.

**Location 4 — Status badge style** (the `<span>` that renders `{status}`):
```ts
: isNewThing ? { borderColor: "#YYYYYY40", backgroundColor: "#YYYYYY12", color: "#YYYYYY" }
: undefined
```

**Location 5 — Title, summary, and arrow colours** (three separate `style=` blocks):
```ts
// Title
: isNewThing ? { color: "#f0f0f0", fontWeight: 600, letterSpacing: "0.01em" }
// Summary
: isNewThing ? { color: "rgba(240, 240, 240, 0.5)" }
// Arrow
: isNewThing ? { color: "rgba(R, G, B, 0.6)" }  // use the accent RGB values
```

**Deriving the card colours:**

Extract the dominant background and primary accent colours directly from the product's visual identity:
- Background: use the product's darkest background colour (usually very dark, close to black).
- Border / accent: use the product's primary brand colour (logo colour, CTA colour, or header accent).
- Icon symbol: use the product's logo mark, initials, a character from the product's language/domain, or a year if it is historically significant.

If the product has no strong visual identity yet (early seed idea), use `#0a0a0a` background and `#555555` accent as neutral defaults and note this in the MDX.

### Step 5 — Validate

Run `npm run build` from the project root. Confirm:
- The new `/deadlock-labs/{slug}` route appears in the build output.
- No TypeScript or compilation errors.

Report what changed, any assumptions made, and the slug of the new entry.

## Rules

- Never invent content. Every MDX field must come from what the product actually is.
- Never use a status value not in the enum.
- Never change the pipeline or labs page beyond what is specified above.
- Always increment the Active ideas count — even for `draft: false` entries at `Seed Idea` status.
- If the product URL is unreachable and there is no local project path, ask the user for a description before writing any MDX content.
- Report changed files, validation result, assumptions, and remaining risks.
