import { buildMetadata } from "@/lib/og";
import { OutsideNav } from "@/components/outside-nav";
import { PhotoGallery } from "@/components/photo-gallery";
import { Camera } from "lucide-react";
import { photos } from "@/content/photos";

export const metadata = buildMetadata({
  title: "Outside the Terminal — Ibrahim Faisal",
  description: "Photography, travelogue, and pop culture — life outside the work.",
  url: "/outside"
});

export default function OutsidePage() {
  return (
    <main className="min-h-screen">
      <OutsideNav active="photography" />

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <Camera className="h-3.5 w-3.5" /> Outside the Terminal
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-light tracking-tight sm:text-5xl">
            Life outside the work. Photography, travel, and what I&apos;m watching.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Street scenes, travel landscapes, and quiet everyday moments — captured on the way.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <PhotoGallery photos={photos} />
      </div>
    </main>
  );
}
