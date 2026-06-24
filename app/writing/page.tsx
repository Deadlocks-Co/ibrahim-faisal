import { SectionHeading } from "@/components/section-heading";
import { WritingArchive } from "@/components/writing-archive";
import { XEmbed } from "@/components/x-embed";

export const metadata = {
  title: "Writing — Ibrahim Faisal",
  description: "Technical writing, personal notes, and quick reactions."
};

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading
        eyebrow="Writing"
        title="One place for everything I write."
        description="Technical notes on Medium, personal writing on Substack, and quick reactions on X."
      />

      <section className="mt-12 rounded-xl border bg-muted/30 p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-black px-2 py-1 text-xs font-medium text-white">From X</span>
          <span className="text-sm text-muted-foreground">Quick reactions and threads</span>
        </div>
        <XEmbed handle="IbrahimKFaisal" height={350} />
      </section>

      <section className="mt-12">
        <WritingArchive />
      </section>
    </main>
  );
}