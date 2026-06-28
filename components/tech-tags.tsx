import { type ElementType } from "react";
import {
  Database,
  Cpu,
  Building2,
  Trophy,
  Rocket,
  Camera,
  BrainCircuit,
  Cloud,
  Server,
  Code2,
} from "lucide-react";

type ImgTag = { label: string; kind: "img"; slug: string; darkInvert?: boolean };
type IconTag = { label: string; kind: "icon"; Icon: ElementType };
type Tag = ImgTag | IconTag;

// darkInvert: true = brand hex is black/near-black, needs white override in dark mode
const rows: Tag[][] = [
  [
    { label: "Anthropic",   kind: "img",  slug: "anthropic",  darkInvert: true },
    { label: "OpenAI",      kind: "icon", Icon: BrainCircuit },
    { label: "Kimi",        kind: "img",  slug: "moonshotai", darkInvert: true },
    { label: "Snowflake",   kind: "img",  slug: "snowflake" },
    { label: "Antigravity", kind: "icon", Icon: Rocket },
  ],
  [
    { label: "Azure",      kind: "icon", Icon: Cloud },
    { label: "AWS",        kind: "icon", Icon: Server },
    { label: "Python",     kind: "img",  slug: "python" },
    { label: "SQL",        kind: "icon", Icon: Database },
    { label: "C#",         kind: "icon", Icon: Code2 },
    { label: "Automation", kind: "icon", Icon: Cpu },
    { label: "Vercel",     kind: "img",  slug: "vercel",     darkInvert: true },
    { label: "Cloudflare", kind: "img",  slug: "cloudflare" },
  ],
  [
    { label: "Social Business", kind: "icon", Icon: Building2 },
    { label: "Sports",          kind: "icon", Icon: Trophy },
    { label: "Photography",     kind: "icon", Icon: Camera },
  ],
];

const CDN = "https://cdn.simpleicons.org";
const MAX_COLS = 8; // widest row (row 2)

export function TechTags() {
  return (
    <div
      className="mt-4 grid gap-x-6 gap-y-3"
      style={{ gridTemplateColumns: `repeat(${MAX_COLS}, max-content)` }}
    >
      {rows.flatMap((row, ri) =>
        row.map((tag, ci) => (
          <span
            key={tag.label}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground"
            style={{ gridRow: ri + 1, gridColumn: ci + 1 }}
          >
            {tag.kind === "img" ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${CDN}/${tag.slug}`}
                  alt=""
                  aria-hidden="true"
                  className={`h-4 w-4${tag.darkInvert ? " dark:hidden" : ""}`}
                />
                {tag.darkInvert && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${CDN}/${tag.slug}/ffffff`}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 hidden dark:block"
                  />
                )}
              </>
            ) : (
              <tag.Icon className="h-4 w-4" />
            )}
            {tag.label}
          </span>
        ))
      )}
    </div>
  );
}
