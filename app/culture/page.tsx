import { SectionHeading } from "@/components/section-heading";
import { getItem } from "@/lib/content";

export const metadata = {
  title: "Culture — Ibrahim Faisal",
  description: "What I'm watching, following, and thinking about outside work."
};

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

export default function CulturePage() {
  const culture = getItem("culture", "culture");
  const sections = Array.isArray(culture?.sections) ? (culture.sections as CultureSection[]) : [];

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading
        eyebrow="Culture"
        title="Outside the terminal."
        description="Football, cricket, cinema, television, and audio."
      />

      <div className="mt-14 space-y-14">
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
    </main>
  );
}
