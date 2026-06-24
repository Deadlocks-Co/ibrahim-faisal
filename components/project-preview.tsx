import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";

export function ProjectPreview() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Projects</p>
            <h2 className="text-2xl font-light tracking-tight">Selected work</h2>
          </div>
          <Link href="/projects" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-lg border p-6 hover:bg-muted/40">
              <h3 className="text-sm font-medium">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}