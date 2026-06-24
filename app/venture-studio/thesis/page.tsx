import Link from "next/link";
import { ArrowLeft, BrainCircuit } from "lucide-react";

const beliefs = [
  "Useful AI products start with repeated workflow pain, not model novelty.",
  "Data infrastructure is a product surface when it improves decisions and speed.",
  "Community businesses need better software, not generic enterprise leftovers.",
  "Small prototypes reveal more truth than polished pitch decks.",
];

const boundaries = [
  "No vague AI wrappers without a painful job to do.",
  "No marketplaces before there is a supply or demand wedge.",
  "No complexity unless it compounds clarity, trust, or speed.",
];

export default function VentureStudioThesisPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <Link href="/venture-studio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to Venture Studio
      </Link>
      <div className="mt-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          <BrainCircuit className="h-3.5 w-3.5" /> Studio Thesis
        </div>
        <h1 className="mt-6 text-4xl font-light tracking-tight sm:text-6xl">Build where AI, data, and community create operating leverage.</h1>
        <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
          The Venture Studio exists to test focused product bets around overlooked workflows. The goal is not to collect ideas. The goal is to turn repeated friction into useful systems that can be validated quickly.
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
      <section className="mt-16 rounded-3xl border bg-muted/20 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">What I will not build</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {boundaries.map((boundary) => (
            <div key={boundary} className="rounded-2xl border bg-background p-5 text-sm leading-7 text-muted-foreground">
              {boundary}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
