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
    { label: "Antigravity", kind: "icon", Icon: Rocket },
    { label: "Vercel",      kind: "img",  slug: "vercel",     darkInvert: true },
    { label: "Cloudflare",  kind: "img",  slug: "cloudflare" },
  ],
  [
    { label: "Azure",     kind: "icon", Icon: Cloud },
    { label: "AWS",       kind: "icon", Icon: Server },
    { label: "Python",    kind: "img",  slug: "python" },
    { label: "SQL",       kind: "icon", Icon: Database },
    { label: "C#",        kind: "icon", Icon: Code2 },
    { label: "Snowflake", kind: "img",  slug: "snowflake" },
  ],
  [
    { label: "Social Business", kind: "icon", Icon: Building2 },
    { label: "Sports",          kind: "icon", Icon: Trophy },
    { label: "Photography",     kind: "icon", Icon: Camera },
    { label: "Automation",      kind: "icon", Icon: Cpu },
  ],
];

const CDN = "https://cdn.simpleicons.org";
const MAX_COLS = 6; // widest row (rows 1 and 2)

interface TechTagsProps {
  filterRows?: number[]; // 0-based row indices to include; omit for all rows
  large?: boolean;       // 25% bigger icons and text
}

export function TechTags({ filterRows, large = false }: TechTagsProps) {
  const visibleRows = filterRows ? rows.filter((_, i) => filterRows.includes(i)) : rows;
  const maxCols = Math.max(...visibleRows.map((r) => r.length));
  const iconClass = large ? "h-5 w-5" : "h-4 w-4";
  const textClass = large ? "text-sm" : "text-xs";

  return (
    <div
      className="mt-4 grid gap-x-6 gap-y-3"
      style={{ gridTemplateColumns: `repeat(${maxCols}, max-content)` }}
    >
      {visibleRows.flatMap((row, ri) =>
        row.map((tag, ci) => (
          <span
            key={tag.label}
            className={`inline-flex items-center gap-2 ${textClass} text-muted-foreground`}
            style={{ gridRow: ri + 1, gridColumn: ci + 1 }}
          >
            {tag.kind === "img" ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${CDN}/${tag.slug}`}
                  alt=""
                  aria-hidden="true"
                  className={`${iconClass}${tag.darkInvert ? " dark:hidden" : ""}`}
                />
                {tag.darkInvert && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${CDN}/${tag.slug}/ffffff`}
                    alt=""
                    aria-hidden="true"
                    className={`${iconClass} hidden dark:block`}
                  />
                )}
              </>
            ) : (
              <tag.Icon className={iconClass} />
            )}
            {tag.label}
          </span>
        ))
      )}
    </div>
  );
}
