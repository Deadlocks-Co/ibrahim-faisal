import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getCollection, getItem } from "@/lib/content";
import { buildMetadata } from "@/lib/og";
import { MdxPre } from "@/components/mdx-pre";
import { ShareButton } from "@/components/share-button";

const mdxOptions = { remarkPlugins: [remarkGfm] };

export function generateStaticParams() {
  return getCollection("notes").map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = getItem("notes", slug);
  if (!note) return { title: "Lab Notes — Ibrahim Faisal" };
  return buildMetadata({
    title: `${String(note.title)} — Ibrahim Faisal`,
    description: String(note.summary),
    url: `/lab-notes/${slug}`,
  });
}

export default async function LabNoteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getItem("notes", slug);
  if (!note) notFound();

  const tags = Array.isArray(note.tags) ? (note.tags as string[]) : [];
  const published = note.published != null ? String(note.published) : null;
  const updated = note.updated != null ? String(note.updated) : null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibrahimfaisal.com";
  const pageUrl = `${siteUrl}/lab-notes/${slug}`;
  const shareText = note.shareText != null ? String(note.shareText) : undefined;
  const thumbnail = note.thumbnail != null ? String(note.thumbnail) : null;

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <header className="mb-12">
        <h1 className="text-3xl font-light tracking-tight md:text-4xl">{String(note.title)}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{String(note.summary)}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            {updated && <span>Updated {updated}</span>}
            {published && updated !== published && <span>Published {published}</span>}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <ShareButton url={pageUrl} shareText={shareText} />
        </div>
      </header>

      {thumbnail && (
        <div className="mb-12 overflow-hidden rounded-2xl border">
          <Image
            src={thumbnail}
            alt={String(note.title)}
            width={1185}
            height={944}
            className="w-full object-cover"
            priority
          />
        </div>
      )}

      <article className="prose prose-sm prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={note.body} options={{ mdxOptions }} components={{ pre: MdxPre }} />
      </article>
    </main>
  );
}
