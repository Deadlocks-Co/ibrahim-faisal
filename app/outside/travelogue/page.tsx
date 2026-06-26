import { buildMetadata } from "@/lib/og";
import { OutsideNav } from "@/components/outside-nav";
import { MapPin } from "lucide-react";

export const metadata = buildMetadata({
  title: "Travelogue — Ibrahim Faisal",
  description: "Places, journeys, and what they leave behind.",
  url: "/outside/travelogue"
});

export default function TraveloguePage() {
  return (
    <main className="min-h-screen">
      <OutsideNav active="travelogue" />

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Travelogue
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-light tracking-tight sm:text-5xl">
            Places, journeys, and what they leave behind.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Notes and images from wherever the work and curiosity lead.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <MapPin className="h-8 w-8 text-muted-foreground/40" />
          <p className="mt-4 text-sm text-muted-foreground">No entries yet. The journey continues.</p>
        </div>
      </div>
    </main>
  );
}
