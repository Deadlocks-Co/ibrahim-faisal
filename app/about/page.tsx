import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getItem } from "@/lib/content";

const mdxOptions = { remarkPlugins: [remarkGfm] };

export const metadata: Metadata = {
  title: "About — Ibrahim Faisal",
  description: "Software engineer based in Sydney, focused on autonomous AI systems and cloud-native data platforms."
};

export default async function AboutPage() {
  const about = getItem("about", "about");

  const focus = Array.isArray(about?.focus) ? (about.focus as string[]) : [];
  const role = about?.role != null ? String(about.role) : "";
  const location = about?.location != null ? String(about.location) : "";
  const tagline = about?.tagline != null ? String(about.tagline) : "";
  const body = about?.body ?? "";

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <header className="mb-14">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {role}{role && location ? " · " : ""}{location}
        </p>
        <h1 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
          Ibrahim F<span className="text-violet-500">ai</span>sal
        </h1>
        {tagline && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {tagline}
          </p>
        )}
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
        <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={String(body)} options={{ mdxOptions }} />
        </article>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          {focus.length > 0 && (
            <div className="rounded-2xl border bg-background/80 p-5">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Focus</h2>
              <ul className="mt-4 space-y-2">
                {focus.map((item) => (
                  <li key={item} className="text-sm leading-6 text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          )}

        </aside>
      </div>
    </main>
  );
}
