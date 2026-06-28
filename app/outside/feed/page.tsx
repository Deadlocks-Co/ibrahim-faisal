import { buildMetadata } from "@/lib/og";
import { OutsideNav } from "@/components/outside-nav";
import { ExternalLink, Image as ImageIcon, Link2, MessageSquare } from "lucide-react";
import Image from "next/image";
import { feedPosts } from "@/content/feed";

export const metadata = buildMetadata({
  title: "Shredder — Ibrahim Faisal",
  description: "Screenshots, one-liners, links, and whatever's on my mind.",
  url: "/outside/feed"
});

const typeIcon = {
  text: MessageSquare,
  link: Link2,
  image: ImageIcon,
};

export default function FeedPage() {
  const posts = [...feedPosts].reverse();

  return (
    <main className="min-h-screen">
      <OutsideNav active="feed" />

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="max-w-2xl text-4xl font-light tracking-tight sm:text-5xl">
            Unhinged timeline.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Screenshots, links, one-liners, and whatever's on my mind. No curation.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 py-16">
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nothing here yet. Check back soon.</p>
        ) : (
          <div className="space-y-px">
            {posts.map((post) => {
              const Icon = typeIcon[post.type];
              return (
                <article
                  key={post.id}
                  className="group border-b border-border/50 py-6 last:border-0"
                >
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>

                  {post.type === "text" && (
                    <p className="text-sm leading-7">{post.content}</p>
                  )}

                  {post.type === "link" && (
                    <>
                      {post.content && (
                        <p className="mb-3 text-sm leading-7">{post.content}</p>
                      )}
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border bg-muted/20 px-4 py-3 text-sm transition hover:bg-muted/40"
                      >
                        <span className="truncate">{post.linkTitle || post.url}</span>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      </a>
                    </>
                  )}

                  {post.type === "image" && post.image && (
                    <>
                      {post.url ? (
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl border transition hover:opacity-90">
                          <Image
                            src={post.image}
                            alt={post.content || "Feed image"}
                            width={800}
                            height={500}
                            className="w-full object-cover"
                          />
                        </a>
                      ) : (
                        <div className="overflow-hidden rounded-xl border">
                          <Image
                            src={post.image}
                            alt={post.content || "Feed image"}
                            width={800}
                            height={500}
                            className="w-full object-cover"
                          />
                        </div>
                      )}
                      {post.content && (
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.content}</p>
                      )}
                    </>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
