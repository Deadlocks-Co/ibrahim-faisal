import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects — Ibrahim Faisal",
  description: "Selected work in autonomous AI systems, cloud-native data platforms, and developer tooling."
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-light tracking-tight">Projects</h1>
        <p className="mt-4 text-muted-foreground">
          A mix of platform engineering, AI systems, delivery tooling, and architecture work.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">Featured</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-xl border p-6 hover:bg-muted/40"
            >
              <p className="text-sm font-medium">{project.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
              <p className="mt-4 text-xs text-muted-foreground">{project.stack.join(" · ")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">Archive</h2>
        <div className="space-y-4">
          {archive.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block rounded-xl border p-5 hover:bg-muted/40"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="text-sm text-muted-foreground">{project.summary}</p>
                </div>
                <p className="text-xs text-muted-foreground">{project.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}