"use client";

import { useState } from "react";
import { PhotoCard } from "@/components/photo-card";
import type { Photo } from "@/content/photos";

const categories = ["All", "Street", "Travel", "Nature", "Architecture", "Portrait"] as const;

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof categories)[number]>("All");

  const filtered =
    activeFilter === "All" ? photos : photos.filter((photo) => photo.category === activeFilter);

  return (
    <div className="mt-12">
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              activeFilter === cat ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((photo, index) => (
          <div key={photo.id} className="mb-4 break-inside-avoid">
            <PhotoCard photo={photo} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}