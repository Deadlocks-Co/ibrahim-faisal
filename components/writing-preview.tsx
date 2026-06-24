import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { writingItems } from "@/content/writing";

export function WritingPreview() {
  const items = writingItems.slice(0, 3);

  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Writing</p>
            <h2 className="text-2xl font-light tracking-tight">Recent thoughts</h2>
          </div>
          <Link href="/writing" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            Read all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <a key={item.title} href={item.url} className="flex items-center justify-between border-b border-border/50 py-3">
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-muted-foreground">
                  {item.platform} · {item.category}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}