import Link from "next/link";
import { ArrowUpRight, Wrench, Network } from "lucide-react";
import { buildMetadata } from "@/lib/og";
import { getCollection } from "@/lib/content";
import { WorkbenchNav } from "@/components/workbench-nav";

const metrics = [
  { label: "Active builds", value: "5" },
  { label: "Build mode", value: "Ship first" },
  { label: "Primary stack", value: "AI + Data" },
  { label: "Artefacts", value: "5" },
];

function statusClass(status: string) {
  return status === "Active"
    ? "border-foreground/20 bg-foreground text-background"
    : "border-border bg-muted text-muted-foreground";
}

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
    <main className="min-h-screen">
      <WorkbenchNav active="build" />

      <section className="border-b">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Wrench className="h-3.5 w-3.5" /> Workbench
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-light tracking-tight sm:text-6xl">
              Small systems, utilities, and engineering artefacts.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Things that get built while exploring ideas in Deadlock Labs. Some are tools, some are experiments, some are half-finished and worth keeping anyway.
            </p>
          </div>

          <div className="rounded-3xl border bg-muted/30 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border bg-background p-3">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium">Build posture</p>
                <p className="text-sm text-muted-foreground">Ship fast. Observe. Discard what doesn&apos;t earn its place.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border bg-background p-4">
                  <p className="text-xl font-light tracking-tight">{metric.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {featured.length > 0 && (
          <>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Featured</p>
                <h2 className="mt-3 text-3xl font-light tracking-tight">Active builds</h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
                <Network className="h-3.5 w-3.5" /> {featured.length} {featured.length === 1 ? "build" : "builds"}
              </div>
            </div>
            <div className="rounded-3xl border p-5 sm:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {featured.map((item) => {
                  const status = String(item.status);
                  return (
                    <Link key={item.slug} href={`/workbench/${item.slug}`} className="group rounded-2xl border bg-background p-5 transition hover:bg-muted/40">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl border bg-muted/40 p-3">
                          <Wrench className="h-5 w-5" />
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-xs ${statusClass(status)}`}>
                          {status}
                        </span>
                      </div>
                      <h4 className="mt-5 text-lg font-medium tracking-tight">{String(item.title)}</h4>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{String(item.summary)}</p>
                      {Array.isArray(item.stack) && (
                        <p className="mt-3 text-xs text-muted-foreground">
                          {(item.stack as string[]).slice(0, 3).join(" · ")}
                        </p>
                      )}
                      <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition group-hover:text-foreground">
                        View build <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {archive.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">Archive</h2>
            <div className="space-y-px">
              {archive.map((item) => (
                <Link
                  key={item.slug}
                  href={`/workbench/${item.slug}`}
                  className="group flex items-center justify-between border-b border-border/50 py-5 hover:border-border"
                >
                  <div>
                    <p className="text-sm font-medium">{String(item.title)}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{String(item.summary)}</p>
                  </div>
                  <p className="shrink-0 text-xs text-muted-foreground">{String(item.year)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
