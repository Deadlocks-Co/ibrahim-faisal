import Link from "next/link";
import { buildMetadata } from "@/lib/og";
import { getCollection } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Workbench — Ibrahim Faisal",
  description: "Tools, systems, and engineering artefacts from Deadlock Labs.",
  url: "/workbench"
});

export default function WorkbenchPage() {
  const items = getCollection("workbench");
  const featured = items.filter((item) => item.featured);
  const archive = items.filter((item) => !item.featured);

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-light tracking-tight">Workbench</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Small systems, utilities, and engineering artefacts that emerge while exploring ideas in Deadlock Labs.
        </p>
      </div>

      {featured.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">Featured</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <Link
                key={item.slug}
                href={`/workbench/${item.slug}`}
                className="rounded-xl border p-6 hover:bg-muted/40"
              >
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{String(item.category)}</span>
                  <span>{String(item.status)}</span>
                </div>
                <p className="mt-5 text-sm font-medium">{String(item.title)}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{String(item.summary)}</p>
                {Array.isArray(item.stack) && (
                  <p className="mt-4 text-xs text-muted-foreground">
                    {(item.stack as string[]).slice(0, 3).join(" · ")}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {archive.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">Archive</h2>
          <div className="space-y-4">
            {archive.map((item) => (
              <Link
                key={item.slug}
                href={`/workbench/${item.slug}`}
                className="block rounded-xl border p-5 hover:bg-muted/40"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-medium">{String(item.title)}</p>
                    <p className="text-sm text-muted-foreground">{String(item.summary)}</p>
                  </div>
                  <p className="shrink-0 text-xs text-muted-foreground">{String(item.year)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
