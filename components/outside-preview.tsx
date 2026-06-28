import Link from "next/link";
import { ArrowUpRight, Camera, Clapperboard, MapPin, Tv2 } from "lucide-react";

const sections = [
  {
    href: "/outside",
    icon: Camera,
    label: "Photography",
    description: "Street scenes, travel landscapes, and quiet everyday moments — captured on the way.",
  },
  {
    href: "/outside/culture",
    icon: Tv2,
    label: "Culture",
    description: "Football, cricket, cinema, television, and audio. Honest about what's worth the attention.",
  },
  {
    href: "/outside/travelogue",
    icon: MapPin,
    label: "Travelogue",
    description: "Places, journeys, and what they leave behind.",
  },
];

export function OutsidePreview() {
  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <Clapperboard className="h-3.5 w-3.5" /> Outside the Terminal
            </div>
            <h2 className="text-2xl font-light tracking-tight">Life outside the work</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Photography, culture, and travel — the threads that run alongside the technical work.
            </p>
          </div>
          <Link href="/outside" className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            Explore Outside
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(({ href, icon: Icon, label, description }) => (
            <Link key={href} href={href} className="rounded-xl border p-6 transition hover:bg-muted/40">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <Icon className="h-3.5 w-3.5" />
                <span>{label}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
