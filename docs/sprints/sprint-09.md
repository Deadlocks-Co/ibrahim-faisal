# Sprint 09: Real Photos and Fourth Lab Note

## Status

Complete.

## Goal

Two parallel goals: ship real photography content (replacing placeholder SVGs with actual images), and publish a fourth lab note.

## Branch

`feature/real-photos-and-lab-note` → `main`

## What was built

### Photography — real images

- `public/photos/DLF_7196.JPG` — bird in jacaranda blossom (DSLR shot, 6000×4000)
- `public/photos/PXL_20251129_053948506.jpg` — turtles on rocks beside a garden pond (4080×3072)
- `public/photos/PXL_20260103_102418113~2.jpg` — full moon through clouds at night (4080×3072)
- `public/photos/PXL_20260214_072717489.jpg` — floral tribute outside a building with geometric mural (4080×3072)
- `content/photos.ts` — updated with real filenames, real display dimensions, real alt text, titles, and categories inferred from image content; placeholder SVG entries removed

All four photos are served via `next/image` with proper `width`/`height` for layout stability. The masonry grid and lightbox in `photo-gallery.tsx` and `photo-card.tsx` required no code changes.

### Fourth lab note

- `content/notes/demos-vs-production.mdx` — "Why AI Demos Don't Survive Production": on the gap between controlled demo conditions and production reality; covers what demos don't test (edge cases, volume, latency, cost), the integration surface problem, confidence calibration, and what actually helps. ~550 words.

## Design decisions

### photos.ts stays as TypeScript

The `Photo` interface and array are structural — they define a typed schema for the gallery component. MDX frontmatter would require repeating the type structure in every photo file. Keeping photos.ts as TypeScript is the right call until photo volume warrants a content-loader approach.

### Display dimensions vs raw dimensions

Photos are stored at up to 6000×4000px. `next/image` uses `width`/`height` to calculate the aspect ratio for layout, not to set the rendered pixel size (CSS controls that). Display dimensions are set to 1200×800 (landscape 3:2) and 1200×904 (4:3) to match actual aspect ratios without loading multi-megabyte originals.

## Next sprint candidate

Sprint 10 (TBD): Workbench MDX body content, a new Deadlock Labs idea, or image optimisation (converting photos to WebP, adding blur placeholders).
