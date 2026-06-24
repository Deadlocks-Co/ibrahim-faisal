import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { photos } from "@/content/photos";

export function PhotoPreview() {
  const previewPhotos = photos.slice(0, 3);

  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">Photography</p>
            <h2 className="text-2xl font-light tracking-tight">Recent frames</h2>
          </div>
          <Link href="/photography" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {previewPhotos.map((photo) => (
            <div key={photo.id} className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}