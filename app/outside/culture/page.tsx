import { buildMetadata } from "@/lib/og";
import { OutsideNav } from "@/components/outside-nav";
import { getItem } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Pop Culture — Ibrahim Faisal",
  description: "Football, cricket, cinema, television, and audio.",
  url: "/outside/culture"
});

interface CultureItem {
  title: string;
  subtitle: string;
  status: string;
  note?: string;
}

interface CultureSection {
  label: string;
  items: CultureItem[];
}

export default function OutsideCulturePage() {
  const culture = getItem("culture", "culture");
  const sections = Array.isArray(culture?.sections) ? (culture.sections as CultureSection[]) : [];

  return (
    <main className="min-h-screen">
      <OutsideNav active="culture" />

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="mt-6 max-w-4xl text-4xl font-light tracking-tight sm:text-5xl">
            Football, cricket, cinema, television, and audio.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            What I follow outside professional work. Honest about what&apos;s worth the attention.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.label}>
              <h2 className="mb-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {section.label}
              </h2>
              <div className="space-y-5">
                {section.items.map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
                    {item.note && (
                      <p className="mt-2 text-xs leading-6 text-muted-foreground">{item.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
