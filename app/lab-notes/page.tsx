import Link from "next/link";
import { buildMetadata } from "@/lib/og";
import { getCollection } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Lab Notes — Ibrahim Faisal",
  description: "Observations, decisions, and thinking from inside the work.",
  url: "/lab-notes"
});

export default function LabNotesPage() {
  const notes = getCollection("notes");

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-light tracking-tight">Lab Notes</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Observations, decisions, and thinking from inside the work. Not polished essays — notes.
        </p>
      </div>

      <div className="mt-12 space-y-px">
        {notes.map((note) => (
          <Link
            key={note.slug}
            href={`/lab-notes/${note.slug}`}
            className="group flex flex-col gap-1 border-b border-border/50 py-5 hover:border-border"
          >
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
          </Link>
        ))}
      </div>
    </main>
  );
}
