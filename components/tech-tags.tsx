import { type ElementType } from "react";
import {
  Database,
  Braces,
  Cpu,
  Building2,
  GraduationCap,
  Trophy,
  Rocket,
  Camera,
  BrainCircuit,
  Cloud,
  Server,
  Code2,
} from "lucide-react";

type ImgTag = { label: string; kind: "img"; src: string };
type IconTag = { label: string; kind: "icon"; Icon: ElementType };
type Tag = ImgTag | IconTag;

const si = (slug: string): string =>
  `https://cdn.simpleicons.org/${slug}/000000`;

const rows: Tag[][] = [
  [
    { label: "Anthropic", kind: "img",  src: si("anthropic") },
    { label: "OpenAI",    kind: "icon", Icon: BrainCircuit },
    { label: "Kimi",      kind: "img",  src: si("moonshotai") },
    { label: "Snowflake", kind: "img",  src: si("snowflake") },
  ],
  [
    { label: "Azure",      kind: "icon", Icon: Cloud },
    { label: "AWS",        kind: "icon", Icon: Server },
    { label: "Python",     kind: "img",  src: si("python") },
    { label: "SQL",        kind: "icon", Icon: Database },
    { label: "C#",         kind: "icon", Icon: Code2 },
    { label: "API",        kind: "icon", Icon: Braces },
    { label: "Automation", kind: "icon", Icon: Cpu },
  ],
  [
    { label: "Social Business", kind: "icon", Icon: Building2 },
    { label: "Mentor",          kind: "icon", Icon: GraduationCap },
    { label: "Sports",          kind: "icon", Icon: Trophy },
    { label: "Antigravity",     kind: "icon", Icon: Rocket },
    { label: "Photography",     kind: "icon", Icon: Camera },
  ],
];

export function TechTags() {
  return (
    <div className="mt-4 space-y-2">
      {rows.map((row, ri) => (
        <div key={ri} className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {row.map((tag) => {
            const Icon = tag.kind === "icon" ? tag.Icon : null;
            return (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                {tag.kind === "img" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={tag.src}
                    alt=""
                    aria-hidden="true"
                    className="h-3.5 w-3.5 dark:invert"
                  />
                ) : (
                  Icon && <Icon className="h-3.5 w-3.5" />
                )}
                {tag.label}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
