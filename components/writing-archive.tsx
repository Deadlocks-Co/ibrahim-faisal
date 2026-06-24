"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { writingItems } from "@/content/writing";

const filters = ["All", "Technical", "Personal", "Quick", "Medium", "Substack", "X"] as const;

export function WritingArchive() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const items = useMemo(() => {
    return writingItems.filter((item) => {
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.platform.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      const matchesFilter =
        active === "All" || item.category === active || item.platform === active;

      return matchesQuery && matchesFilter;
    });
  }, [query, active]);

  return (
    <div>
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search writing..."
          className="h-10 w-full rounded-md border bg-background pl-9 pr-4 text-sm"
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              active === filter ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <a key={item.title} href={item.url} className="block rounded-xl border p-5 hover:bg-muted/40">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">
                  {item.platform} · {item.category}
                </p>
                {item.blurb && <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>}
              </div>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
          </a>
        ))}

        {items.length === 0 && (
          <div className="rounded-xl border p-5 text-sm text-muted-foreground">
            No writing items match this filter.
          </div>
        )}
      </div>
    </div>
  );
}