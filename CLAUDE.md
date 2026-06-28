# Project Rules — Ibrahim Faisal Portfolio

## Deadlock Labs — Adding a New Entry

When adding any new idea to `content/labs/`, follow these rules every time:

1. **Read the live product page first.** If the idea has a URL, fetch it and take a screenshot before writing anything. Never describe the product from lab notes alone.

2. **Write all MDX sections from what the product actually is.** `summary`, `framing`, `problem`, `exploration`, `audience`, `model`, `risks`, `notes` must reflect the real product.

3. **Card thumbnail must match the product's visual identity.** Extract the product's actual colors, logo mark, and typography. Add a `cardTheme` field to the MDX and implement the branded card style in `app/deadlock-labs/page.tsx` so the card is immediately recognisable as that product.

4. **Status must use the enum.** The only valid values for `status` in any lab MDX are: `Seed Idea`, `Researching`, `Prototype`, `Testing`, `Building`. No other values.

5. **Pipeline and metrics must stay in sync.** After any add, update, or status change:
   - Update `app/deadlock-labs/pipeline/page.tsx` — move the idea's name into the correct stage `items` array to match its MDX status.
   - Update the `Active ideas` metric value in `app/deadlock-labs/page.tsx` to match the total number of non-draft lab entries.
