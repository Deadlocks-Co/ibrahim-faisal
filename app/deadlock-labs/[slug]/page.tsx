import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { StudioNav } from "@/components/studio-nav";

const ideas: Record<string, {
  title: string;
  stage: string;
  framing: string;
  problem: string;
  exploration: string;
  audience: string;
  model: string;
  risks: string;
  notes: string;
}> = {
  sidekick: {
    title: "SideKick",
    stage: "Seed Idea",
    framing: "Exploring AI-native operations for Australian trades.",
    problem: "Small trade businesses lose time to quoting, scheduling, missed-call recovery, customer follow-up, and administration.",
    exploration: "A lightweight AI operations layer that helps trades respond faster, follow up consistently, and reduce repetitive admin work.",
    audience: "Australian trades and field service operators.",
    model: "Potential subscription product if the workflow pain validates strongly enough.",
    risks: "Trust, workflow adoption, and whether the assistant can reliably handle messy real-world customer context.",
    notes: "This idea is interesting because trades often have strong demand but weak operational leverage. The wedge has to be narrow and practical. No grand AI workforce theatre."
  },
  pally: {
    title: "Pally",
    stage: "Seed Idea",
    framing: "Exploring loyalty infrastructure for ethnic grocery communities.",
    problem: "Independent ethnic grocers often have loyal local customers but limited digital infrastructure for retention, offers, and repeat engagement.",
    exploration: "A community-first loyalty system designed around repeat purchasing, local identity, and simple merchant operations.",
    audience: "Independent grocery retailers and the communities that already support them.",
    model: "Potential merchant subscription or lightweight transaction-linked services after validation.",
    risks: "Merchant acquisition, operational simplicity, and proving that loyalty tools create measurable repeat value.",
    notes: "The interesting part is not generic points. It is whether community commerce needs a product designed for how these stores actually work."
  },
  "bangla-translator": {
    title: "Bangla Translator",
    stage: "Prototype",
    framing: "Exploring culturally-aware Bangla and English translation.",
    problem: "Literal translation often loses cultural meaning, tone, idiom, and intent between Bangla and English.",
    exploration: "A sense-for-sense translation system focused on preserving meaning rather than only matching words.",
    audience: "Bangla-speaking communities, bilingual families, creators, students, and professionals.",
    model: "Potential API or application layer if quality, evaluation, and repeat usage are strong enough.",
    risks: "Evaluation quality, cultural nuance, and whether users trust the translation in emotionally or professionally sensitive contexts.",
    notes: "This is personal and technical at the same time. Translation should preserve what someone meant, not just what they typed."
  },
  "world-cup-quiz-battle": {
    title: "World Cup Quiz Battle",
    stage: "Prototype",
    framing: "Exploring football trivia as a playable live match.",
    problem: "Trivia games often have shallow engagement loops, while football games can be mechanically heavy for casual fans.",
    exploration: "A football quiz game where answers influence match outcomes, turning knowledge into goals, saves, comebacks, and tournament progression.",
    audience: "Football fans, quiz players, and casual mobile game players around tournament moments.",
    model: "Potential mobile game monetisation through cosmetics, ads, passes, or sponsored content if retention validates.",
    risks: "Retention, content freshness, question quality, and whether the match mechanic stays fun after repeated play.",
    notes: "The prototype matters here. The idea only works if trivia feels like football drama, not a quiz wearing a jersey."
  }
};

const sections = [
  ["Problem", "problem"],
  ["Exploration", "exploration"],
  ["Audience", "audience"],
  ["Possible Model", "model"],
  ["Risks", "risks"],
  ["Founder Notes", "notes"]
] as const;

export default async function DeadlockLabsIdeaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idea = ideas[slug];

  if (!idea) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <StudioNav active="studio" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/deadlock-labs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Deadlock Labs
        </Link>

        <div className="mt-12">
          <p className="text-sm text-muted-foreground">{idea.stage}</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-6xl">{idea.title}</h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">{idea.framing}</p>
        </div>

        <div className="mt-14 space-y-6">
          {sections.map(([label, key]) => (
            <section key={label} className="rounded-2xl border p-6">
              <h2 className="text-sm font-medium">{label}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{idea[key]}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
