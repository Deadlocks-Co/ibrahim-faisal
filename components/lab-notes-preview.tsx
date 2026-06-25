import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { getCollection } from "@/lib/content";

export function LabNotesPreview() {
  const notes = getCollection("notes").slice(0, 3);

  if (notes.length === 0) return null;

  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Lab Notes
            </div>
            <h2 className="text-2xl font-light tracking-tight">Notes from the work</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Observations, decisions, and thinking written while building. Not polished essays — notes.
            </p>
          </div>
          <Link href="/lab-notes" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            All notes
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-px">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/lab-notes/${note.slug}`}
              className="group flex flex-col gap-1 border-b border-border/50 py-4 hover:border-border"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="text-sm font-medium">{String(note.title)}</p>
                <p className="shrink-0 text-xs text-muted-foreground">
                  {String(note.updated || note.published || "")}
                </p>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{String(note.summary)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
