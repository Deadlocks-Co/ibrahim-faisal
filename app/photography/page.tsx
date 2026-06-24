import { SectionHeading } from "@/components/section-heading";
import { PhotoGallery } from "@/components/photo-gallery";
import { photos } from "@/content/photos";

export const metadata = {
  title: "Photography — Ibrahim Faisal",
  description: "Street, travel, and everyday moments."
};

export default function PhotographyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Photography"
        title="Seeing the world, one frame at a time."
        description="Street scenes, travel landscapes, and quiet everyday moments."
      />
      <PhotoGallery photos={photos} />
    </main>
  );
}