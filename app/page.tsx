import { Hero } from "@/components/hero";
import { ProjectPreview } from "@/components/project-preview";
import { WritingPreview } from "@/components/writing-preview";
import { PhotoPreview } from "@/components/photo-preview";
import { CulturePreview } from "@/components/culture-preview";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectPreview />
      <WritingPreview />
      <PhotoPreview />
      <CulturePreview />
    </main>
  );
}