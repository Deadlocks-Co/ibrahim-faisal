import Link from "next/link";
import { ArrowUpRight, PenLine } from "lucide-react";
import { getCollection } from "@/lib/content";

export function ScratchPadPreview() {
  const notes = getCollection("notes").slice(0, 5);

  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <PenLine className="h-3.5 w-3.5" /> Scratch Pad
            </div>
            <h2 className="text-2xl font-light tracking-tight">Thinking out loud</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Observations, decisions, and patterns from inside the work. Not polished essays — notes.
            </p>
          </div>
          <Link
            href="/scratch-pad"
            className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            View all notes
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-px">
          {notes.map((note) => (
            <div
              key={note.slug}
              className="flex items-start justify-between gap-6 border-b border-border/50 py-5 last:border-b-0"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-6">
                  <p className="text-sm font-medium">{String(note.title)}</p>
                  <p className="shrink-0 text-xs text-muted-foreground">
                    {String(note.updated || note.published || "")}
                  </p>
                </div>
                <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{String(note.summary)}</p>
              </div>
              <Link
                href={`/scratch-pad/${note.slug}`}
                className="shrink-0 text-xs text-muted-foreground transition hover:text-foreground"
              >
                Read →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
