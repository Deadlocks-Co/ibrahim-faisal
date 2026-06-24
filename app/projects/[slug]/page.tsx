import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Project</p>
      <h1 className="mt-3 text-3xl font-light tracking-tight">{project.title}</h1>
      <p className="mt-4 text-muted-foreground">{project.summary}</p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-sm font-medium">Context</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.context}</p>
        </section>

        <section>
          <h2 className="text-sm font-medium">Approach</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.approach}</p>
        </section>

        <section>
          <h2 className="text-sm font-medium">Impact</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{project.impact}</p>
        </section>

        <section>
          <h2 className="text-sm font-medium">Stack</h2>
          <p className="mt-2 text-sm text-muted-foreground">{project.stack.join(" · ")}</p>
        </section>

        <section className="flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              {link.label}
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}