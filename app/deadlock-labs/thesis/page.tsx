import { BrainCircuit, CheckCircle2, XCircle } from "lucide-react";
import { StudioNav } from "@/components/studio-nav";

const beliefs = [
  "Useful AI products start with repeated workflow pain, not model novelty.",
  "Data infrastructure becomes a product surface when it improves decisions and speed.",
  "Community businesses need better software, not generic enterprise leftovers.",
  "Small prototypes reveal more truth than polished pitch decks."
];

const boundaries = [
  "No vague AI wrappers without a painful job to do.",
  "No marketplaces before there is a supply or demand wedge.",
  "No complexity unless it compounds clarity, trust, or speed."
];

const buildRules = [
  "Write the idea clearly enough that another builder can challenge it.",
  "Prototype the narrowest useful wedge before expanding the ambition.",
  "Share early with friends, colleagues, and people close to the problem.",
  "Let weak ideas die without turning them into theatre."
];

export default function DeadlockLabsThesisPage() {
  return (
    <main className="min-h-screen">
      <StudioNav active="thesis" />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <BrainCircuit className="h-3.5 w-3.5" /> Deadlock Labs Thesis
          </div>
          <h1 className="mt-6 text-4xl font-light tracking-tight sm:text-6xl">
            Build where AI, data, and community create practical leverage.
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            Deadlock Labs exists because ideas are easier to ignore when they stay private. I use the lab to publish my thinking, test small prototypes, and invite sharper conversations with like-minded friends, colleagues, and builders.
          </p>
        </div>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          {beliefs.map((belief, index) => (
            <div key={belief} className="rounded-2xl border p-6">
              <p className="text-xs text-muted-foreground">Belief 0{index + 1}</p>
              <p className="mt-4 text-sm leading-7">{belief}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border bg-muted/20 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" /> Build philosophy
            </div>
            <div className="mt-6 space-y-4">
              {buildRules.map((rule) => (
                <p key={rule} className="text-sm leading-7 text-muted-foreground">
                  {rule}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border p-6 sm:p-8">
            <div className="flex items-center gap-2 text-sm font-medium">
              <XCircle className="h-4 w-4" /> What I will not build
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {boundaries.map((boundary) => (
                <div key={boundary} className="rounded-2xl border bg-background p-5 text-sm leading-7 text-muted-foreground">
                  {boundary}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
