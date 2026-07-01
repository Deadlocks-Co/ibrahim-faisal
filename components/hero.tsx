import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Image as ImageIcon, Link2, MessageSquare, Radio } from "lucide-react";
import { LabCarousel } from "@/components/lab-carousel";
import { TechTags } from "@/components/tech-tags";
import type { ContentItem } from "@/lib/content";
import { feedPosts } from "@/content/feed";

const typeIcon = {
  text: MessageSquare,
  link: Link2,
  image: ImageIcon,
};

export function Hero({ labs }: { labs: ContentItem[] }) {
  const carouselLabs = labs.map((l) => ({
    title: String(l.title),
    framing: String(l.framing || l.summary),
    status: String(l.status),
    slug: String(l.slug),
    category: String(l.category),
  }));

  const recentPosts = [...feedPosts].reverse().slice(0, 3);

  return (
    <section className="pt-16 pb-16 sm:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top row: intro vs shredder — shredder height is anchored to this content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-stretch">
          {/* Left: name, description, tags, carousel, CTAs */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Founder of Deadlock Labs
            </p>
            <h1 className="mt-5 text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              <span className="font-light">Ibrahim </span><span className="font-bold">F<span className="bg-gradient-to-r from-violet-500 to-blue-400 bg-clip-text text-transparent">AI</span>SAL</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              AI Systems Architect and Data Platform Builder exploring ideas across AI, data, language, community businesses, and interactive products.
            </p>
            <TechTags />

            <LabCarousel labs={carouselLabs} />

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="/deadlock-labs"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition hover:bg-foreground/5"
              >
                Explore Deadlock Labs <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="/workbench"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
              >
                View Workbench <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Shredder mini-feed */}
          <div className="hidden lg:flex lg:flex-col">
            <div className="flex h-full flex-col rounded-xl border p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Radio className="h-3.5 w-3.5" />
                  Shredder
                </div>
                <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">Unfiltered</span>
              </div>

              {recentPosts.length === 0 ? (
                <p className="text-sm text-muted-foreground">Nothing here yet.</p>
              ) : (
                <div className="flex-1 min-h-0 overflow-hidden">
                <div className="space-y-px">
                  {recentPosts.map((post) => {
                    const Icon = typeIcon[post.type];
                    return (
                      <div key={post.id} className="border-b border-border/50 py-3.5 last:border-b-0">
                        <div className="mb-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                          <Icon className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        {post.content && (
                          <p className="line-clamp-2 text-sm leading-6">{post.content}</p>
                        )}
                        {post.type === "image" && post.image && (
                          post.linkTitle ? (
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 flex items-start gap-3 overflow-hidden rounded-lg border p-2 transition hover:opacity-90"
                            >
                              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                                <Image src={post.image} alt={post.content || "Shredder image"} fill className="object-cover" />
                              </div>
                              <span className="mt-1 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                                {post.linkTitle}
                              </span>
                            </a>
                          ) : (
                            <div className="mt-2 relative h-24 w-24 overflow-hidden rounded-lg border">
                              <Image src={post.image} alt={post.content || "Shredder image"} fill className="object-cover" />
                            </div>
                          )
                        )}
                        {post.type === "link" && post.url && (
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {post.linkTitle || post.url}
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
                </div>
              )}

              <Link
                href="/outside/feed"
                className="pt-4 flex items-center gap-1 text-xs text-muted-foreground transition hover:text-foreground"
              >
                Show full timeline
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
