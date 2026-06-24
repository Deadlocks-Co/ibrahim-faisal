import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cultureSections } from "@/content/culture";

export function CulturePreview() {
  const items = cultureSections.flatMap((section) =>
    section.items.map((item) => ({ ...item, group: section.label }))
  ).slice(0, 4);

  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Culture</p>
            <h2 className="text-2xl font-light tracking-tight">Outside the terminal</h2>
          </div>
          <Link href="/culture" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            Explore
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="bg-background p-6">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{item.group}</p>
              <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}