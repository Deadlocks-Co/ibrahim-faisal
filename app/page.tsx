import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Layers3, Rocket } from "lucide-react";
import { Hero } from "@/components/hero";
import { ProjectPreview } from "@/components/project-preview";
import { WritingPreview } from "@/components/writing-preview";
import { PhotoPreview } from "@/components/photo-preview";
import { CulturePreview } from "@/components/culture-preview";

const studioStats = [
  { label: "Venture lanes", value: "3" },
  { label: "Active concepts", value: "5" },
  { label: "Build mode", value: "Prototype first" },
];

function VentureStudioHomeSection() {
  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-3xl border bg-muted/20 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Rocket className="h-3.5 w-3.5" /> Venture Studio
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-light tracking-tight sm:text-4xl">
              Building products at the intersection of AI, data, language, and community.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              A product lab for focused concepts, practical prototypes, and overlooked workflows where software creates useful operating leverage.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["AI Systems", "Vertical SaaS", "Interactive Experiences"].map((lane) => (
                <span key={lane} className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                  {lane}
                </span>
              ))}
            </div>
            <Link href="/venture-studio" className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground">
              Explore Venture Studio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {studioStats.map((stat, index) => (
              <div key={stat.label} className="rounded-2xl border bg-background p-5">
                <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                  {index === 0 ? <Layers3 className="h-4 w-4" /> : <BrainCircuit className="h-4 w-4" />}
                  <span className="text-xs">0{index + 1}</span>
                </div>
                <p className="text-xl font-light tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VentureStudioHomeSection />
      <ProjectPreview />
      <WritingPreview />
      <PhotoPreview />
      <CulturePreview />
    </main>
  );
}
