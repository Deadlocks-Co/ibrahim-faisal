import Link from "next/link";
import { ArrowUpRight, Bot, BrainCircuit, FlaskConical, Languages, Network, Sparkles, Store, Trophy, Wrench } from "lucide-react";
import type { ElementType } from "react";
import { StudioNav } from "@/components/studio-nav";
import { getCollection } from "@/lib/content";

const iconMap: Record<string, ElementType> = {
  Languages, Bot, Wrench, Store, Trophy, BrainCircuit, Sparkles, Network, FlaskConical
};

const categoryMeta: Record<string, { description: string }> = {
  "AI Systems": {
    description: "Ideas where AI handles context, conversation, translation, or structured decision support."
  },
  "Vertical Products": {
    description: "Focused product ideas for overlooked operational niches where the pain is obvious and repeated."
  },
  "Interactive Experiences": {
    description: "Playable ideas where content, competition, and mechanics create repeat engagement."
  }
};

const metrics = [
  { label: "Exploration lanes", value: "3" },
  { label: "Active ideas", value: "5" },
  { label: "Core themes", value: "AI + Data" },
  { label: "Build mode", value: "Prototype first" }
];

const principles = [
  "Publish the thinking instead of leaving ideas in notebooks.",
  "Start from repeated pain, not technology theatre.",
  "Build the smallest useful version before expanding the surface area.",
  "Share ideas with friends, colleagues, builders, and people who can sharpen the thinking."
];

function statusClass(status: string) {
  return status === "Prototype"
    ? "border-foreground/20 bg-foreground text-background"
    : "border-border bg-muted text-muted-foreground";
}

export default function DeadlockLabsPage() {
  const ideas = getCollection("labs");

  const grouped = Object.entries(categoryMeta).map(([title, meta]) => ({
    title,
    description: meta.description,
    explorations: ideas.filter((idea) => idea.category === title).sort((a, b) => String(a.title).localeCompare(String(b.title)))
  })).filter((g) => g.explorations.length > 0);

  return (
    <main className="min-h-screen">
      <StudioNav active="studio" />

      <section className="border-b">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Deadlock Labs
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-light tracking-tight sm:text-6xl">
              A personal lab for ideas, systems, prototypes, and future products.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Deadlock Labs is where I share the brainchildren I am exploring across AI, data, language, communities, and interactive products. Some ideas will stay as thought experiments. Some become prototypes. A few might become something larger.
            </p>
          </div>

          <div className="rounded-3xl border bg-muted/30 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border bg-background p-3">
                <FlaskConical className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium">Lab thesis</p>
                <p className="text-sm text-muted-foreground">Build openly. Test carefully. Keep the useful ideas alive.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border bg-background p-4">
                  <p className="text-xl font-light tracking-tight">{metric.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Lab map</p>
            <h2 className="mt-3 text-3xl font-light tracking-tight">Areas of exploration</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            These are not all companies. They are serious explorations: some product-shaped, some prototype-shaped, some still waiting for stronger validation.
          </p>
        </div>

        <div className="space-y-8">
          {grouped.map((category) => (
            <section key={category.title} className="rounded-3xl border p-5 sm:p-6">
              <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-light tracking-tight">{category.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{category.description}</p>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  <Network className="h-3.5 w-3.5" /> {category.explorations.length} {category.explorations.length === 1 ? "idea" : "ideas"}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {category.explorations.map((exploration) => {
                  const Icon = iconMap[String(exploration.icon)] ?? BrainCircuit;
                  const status = String(exploration.status);

                  return (
                    <Link key={exploration.slug} href={`/deadlock-labs/${exploration.slug}`} className="group rounded-2xl border bg-background p-5 transition hover:bg-muted/40">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl border bg-muted/40 p-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-xs ${statusClass(status)}`}>
                          {status}
                        </span>
                      </div>
                      <h4 className="mt-5 text-lg font-medium tracking-tight">{String(exploration.title)}</h4>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{String(exploration.summary)}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition group-hover:text-foreground">
                        Read idea <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <BrainCircuit className="h-3.5 w-3.5" /> Operating logic
            </div>
            <h2 className="mt-5 text-3xl font-light tracking-tight">How ideas survive the lab</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <div key={principle} className="rounded-2xl border p-5">
                <p className="text-xs text-muted-foreground">0{index + 1}</p>
                <p className="mt-3 text-sm leading-7">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
