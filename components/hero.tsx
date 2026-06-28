import { type ElementType } from "react";
import {
  ArrowUpRight,
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
import { LabCarousel } from "@/components/lab-carousel";
import type { ContentItem } from "@/lib/content";

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

export function Hero({ labs }: { labs: ContentItem[] }) {
  const carouselLabs = labs.map((l) => ({
    title: String(l.title),
    framing: String(l.framing || l.summary),
    status: String(l.status),
    slug: String(l.slug),
    category: String(l.category),
  }));

  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Founder of Deadlock Labs
        </p>
        <h1 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
          Ibrahim F<span className="text-violet-500">ai</span>sal
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          AI Systems Architect and Data Platform Builder exploring ideas across AI, data, language, community businesses, and interactive products.
        </p>
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

        <LabCarousel labs={carouselLabs} />

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <a
            href="/deadlock-labs"
            className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition hover:bg-foreground/5"
          >
            Explore Deadlock Labs <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="/workbench"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            View Workbench <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
