import Link from "next/link";
import { ArrowUpRight, Wrench } from "lucide-react";
import { workbenchItems } from "@/content/workbench";

export function WorkbenchPreview() {
  const featured = workbenchItems.filter((item) => item.featured).slice(0, 3);

  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Wrench className="h-3.5 w-3.5" /> Workbench
            </div>
            <h2 className="text-2xl font-light tracking-tight">Tools from the bench</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Small systems, utilities, and engineering artefacts that emerge while exploring ideas in Deadlock Labs.
            </p>
          </div>
          <Link href="/workbench" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            View the workbench
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <Link key={item.slug} href={`/workbench/${item.slug}`} className="rounded-xl border p-6 transition hover:bg-muted/40">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                <span>{item.category}</span>
                <span>{item.status}</span>
              </div>
              <h3 className="mt-5 text-sm font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
