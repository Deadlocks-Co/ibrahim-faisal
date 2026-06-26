import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/og";
import { getCollection } from "@/lib/content";
import { WorkbenchNav } from "@/components/workbench-nav";

export const metadata = buildMetadata({
  title: "Lab Notes — Ibrahim Faisal",
  description: "Observations, decisions, and thinking from inside the work.",
  url: "/workbench/notes"
});

export default function WorkbenchNotesPage() {
  const notes = getCollection("notes");

  return (
    <main className="min-h-screen">
      <WorkbenchNav active="notes" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Lab Notes</p>
          <h2 className="mt-3 text-3xl font-light tracking-tight">Observations from inside the work.</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Not polished essays — notes. Decisions made, patterns spotted, things worth writing down.
          </p>
        </div>

        <div className="mt-12 space-y-px">
          {notes.map((note) => {
            const thumbnail = note.thumbnail != null ? String(note.thumbnail) : null;
            return (
              <Link
                key={note.slug}
                href={`/lab-notes/${note.slug}`}
                className="group flex gap-5 border-b border-border/50 py-5 hover:border-border"
              >
                {thumbnail && (
                  <div className="hidden shrink-0 overflow-hidden rounded-lg border sm:block">
                    <Image
                      src={thumbnail}
                      alt={String(note.title)}
                      width={120}
                      height={80}
                      className="h-20 w-[120px] object-cover transition-opacity group-hover:opacity-90"
                    />
                  </div>
                )}
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between gap-6">
                    <p className="text-sm font-medium group-hover:text-foreground">{String(note.title)}</p>
                    <p className="shrink-0 text-xs text-muted-foreground">{String(note.updated || note.published || "")}</p>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{String(note.summary)}</p>
                  {Array.isArray(note.tags) && note.tags.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {(note.tags as string[]).map((tag) => (
                        <span key={tag} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
