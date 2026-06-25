import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCollection, getItem } from "@/lib/content";

export function generateStaticParams() {
  return getCollection("workbench").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem("workbench", slug);
  if (!item) return { title: "Workbench — Ibrahim Faisal" };
  return {
    title: `${String(item.title)} — Ibrahim Faisal`,
    description: String(item.summary)
  };
}

function ProseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border bg-background/70 p-6 shadow-sm">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{children}</p>
    </section>
  );
}

export default async function WorkbenchItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getItem("workbench", slug);
  if (!item) notFound();

  const stack = Array.isArray(item.stack) ? (item.stack as string[]) : [];
  const links = Array.isArray(item.links) ? (item.links as { label: string; href: string }[]) : [];
  const relatedLabs = Array.isArray(item.relatedLabs) ? (item.relatedLabs as string[]) : [];

  return (
    <main>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <section className="rounded-3xl border bg-muted/20 p-8 md:p-12">
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span>{String(item.category)}</span>
            {item.status != null && <span> · {String(item.status)}</span>}
            {item.year != null && <span> · {String(item.year)}</span>}
          </div>
          <h1 className="mt-6 text-4xl font-light tracking-tight md:text-5xl">{String(item.title)}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{String(item.summary)}</p>
        </section>

        {item.body && (
          <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none mt-10">
            <MDXRemote source={String(item.body)} />
          </article>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-6">
            {item.purpose != null && <ProseSection title="Purpose">{String(item.purpose)}</ProseSection>}
            {item.problem != null && <ProseSection title="Problem">{String(item.problem)}</ProseSection>}
            {item.approach != null && <ProseSection title="Approach">{String(item.approach)}</ProseSection>}
            {item.learned != null && <ProseSection title="What I learned">{String(item.learned)}</ProseSection>}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            {stack.length > 0 && (
              <div className="rounded-2xl border bg-background/80 p-5">
                <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span key={item} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {relatedLabs.length > 0 && (
              <div className="rounded-2xl border bg-background/80 p-5">
                <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Related Labs</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedLabs.map((lab) => (
                    <span key={lab} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                      {lab}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {links.length > 0 && (
              <div className="rounded-2xl border bg-background/80 p-5">
                <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Links</h2>
                <div className="mt-4 space-y-3">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between rounded-xl border px-3 py-2 text-sm hover:bg-muted/60"
                    >
                      {link.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
