import { SectionHeading } from "@/components/section-heading";
import { nowSections, lastUpdated } from "@/content/now";

export const metadata = {
  title: "Now — Ibrahim Faisal",
  description: "What I’m currently doing, building, and following."
};

export default function NowPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <SectionHeading eyebrow="Now" title="What I’m doing at the moment." />

      <div className="mt-12 space-y-12">
        {nowSections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 sm:flex-row sm:gap-8">
                  <span className="min-w-[90px] text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
    </main>
  );
}