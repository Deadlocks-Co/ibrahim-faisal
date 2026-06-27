import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Globe2, Languages, Network, Sparkles, Store, Trophy, Wrench } from "lucide-react";
import { StudioNav } from "@/components/studio-nav";

const categories = [
  {
    title: "AI Systems",
    description: "Products where AI handles context, conversation, translation, or structured decision support.",
    ventures: [
      {
        slug: "bangla-translator",
        title: "Bangla Translator",
        status: "Prototype",
        icon: Languages,
        thesis: "Sense-for-sense translation that preserves meaning, tone, and cultural context across Bangla and English.",
      },
    ],
  },
  {
    title: "Vertical SaaS",
    description: "Narrow products for underserved operating niches where workflow pain is obvious and repeated.",
    ventures: [
      {
        slug: "sidekick",
        title: "Side Kick",
        status: "Concept",
        icon: Wrench,
        thesis: "AI workforce for Australian trades, covering quoting, scheduling, customer follow-up, and admin work.",
      },
      {
        slug: "pally",
        title: "Pally",
        status: "Concept",
        icon: Store,
        thesis: "Loyalty infrastructure for ethnic grocery stores, designed around repeat purchasing and local community commerce.",
      },
    ],
  },
  {
    title: "Interactive Experiences",
    description: "Games and participatory products where content, competition, and mechanics create repeat engagement.",
    ventures: [
      {
        slug: "world-cup-quiz-battle",
        title: "World Cup Quiz Battle",
        status: "Prototype",
        icon: Trophy,
        thesis: "A football quiz game where answers influence match outcomes, turning trivia into a playable tournament format.",
      },
    ],
  },
];

const metrics = [
  { label: "Venture lanes", value: "3" },
  { label: "Active concepts", value: "5" },
  { label: "Core themes", value: "AI + Data" },
  { label: "Build mode", value: "Prototype first" },
];

const principles = [
  "Start from repeated operational pain, not technology theatre.",
  "Build the smallest useful wedge before expanding the surface area.",
  "Use AI where context, labour, or decision quality compounds.",
  "Treat every concept as a testable system, not a pitch deck with better shoes.",
];

function statusClass(status: string) {
  return status === "Prototype"
    ? "border-foreground/20 bg-foreground text-background"
    : "border-border bg-muted text-muted-foreground";
}

export default function VentureStudio() {
  return (
    <main className="min-h-screen">
      <StudioNav active="studio" />

      <section className="border-b">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Venture Studio
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-light tracking-tight sm:text-6xl">
              Building products at the intersection of AI, data, language, and community.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              A product lab for startup explorations, practical prototypes, and focused venture bets. The studio turns repeated workflow pain into small systems that can be tested, sharpened, and scaled.
            </p>
          </div>

          <div className="rounded-3xl border bg-muted/30 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border bg-background p-3">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium">Studio thesis</p>
                <p className="text-sm text-muted-foreground">AI-native products for overlooked workflows.</p>
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
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Portfolio map</p>
            <h2 className="mt-3 text-3xl font-light tracking-tight">Venture categories</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Each category groups concepts by product behaviour rather than buzzword. Revolutionary stuff: sorting things by what they actually do.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <section key={category.title} className="rounded-3xl border p-5 sm:p-6">
              <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-light tracking-tight">{category.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{category.description}</p>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  <Network className="h-3.5 w-3.5" /> {category.ventures.length} concepts
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {category.ventures.map((venture) => {
                  const Icon = venture.icon;

                  return (
                    <Link key={venture.slug} href={`/venture-studio/${venture.slug}`} className="group rounded-2xl border bg-background p-5 transition hover:bg-muted/40">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl border bg-muted/40 p-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-xs ${statusClass(venture.status)}`}>
                          {venture.status}
                        </span>
                      </div>
                      <h4 className="mt-5 text-lg font-medium tracking-tight">{venture.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{venture.thesis}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition group-hover:text-foreground">
                        Read concept <ArrowUpRight className="h-4 w-4" />
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
              <Globe2 className="h-3.5 w-3.5" /> Operating logic
            </div>
            <h2 className="mt-5 text-3xl font-light tracking-tight">How ideas move through the studio</h2>
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
