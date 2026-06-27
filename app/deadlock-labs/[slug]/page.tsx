import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StudioNav } from "@/components/studio-nav";
import { getCollection, getItem } from "@/lib/content";

export function generateStaticParams() {
  return getCollection("labs").map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const idea = getItem("labs", slug);
  if (!idea) return { title: "Deadlock Labs — Ibrahim Faisal" };
  return {
    title: `${String(idea.title)} — Deadlock Labs`,
    description: String(idea.framing || idea.summary)
  };
}

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
  const idea = getItem("labs", slug);

  if (!idea) notFound();

  return (
    <main className="min-h-screen">
      <StudioNav active="studio" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/deadlock-labs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Deadlock Labs
        </Link>

        <div className="mt-12">
          <p className="text-sm text-muted-foreground">{String(idea.status)}</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-6xl">{String(idea.title)}</h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">{String(idea.framing || idea.summary)}</p>
          {idea.url ? (
            <a
              href={String(idea.url)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-80"
            >
              Visit {String(idea.title)} <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <div className="mt-14 space-y-6">
          {sections.map(([label, key]) =>
            idea[key] != null ? (
              <section key={label} className="rounded-2xl border p-6">
                <h2 className="text-sm font-medium">{label}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{String(idea[key])}</p>
              </section>
            ) : null
          )}
        </div>
      </section>
    </main>
  );
}
