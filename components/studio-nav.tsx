import Link from "next/link";

const studioLinks = [
  { label: "Venture Studio", href: "/venture-studio" },
  { label: "Thesis", href: "/venture-studio/thesis" },
  { label: "Pipeline", href: "/venture-studio/pipeline" },
  { label: "Founder Letter", href: "/founder" }
];

type StudioNavProps = {
  active: "studio" | "thesis" | "pipeline" | "founder";
};

const activeByHref: Record<StudioNavProps["active"], string> = {
  studio: "/venture-studio",
  thesis: "/venture-studio/thesis",
  pipeline: "/venture-studio/pipeline",
  founder: "/founder"
};

export function StudioNav({ active }: StudioNavProps) {
  const activeHref = activeByHref[active];

  return (
    <nav aria-label="Venture Studio navigation" className="mx-auto max-w-6xl px-6 pt-8">
      <div className="flex flex-wrap gap-2 rounded-2xl border bg-muted/20 p-2">
        {studioLinks.map((link) => {
          const isActive = link.href === activeHref;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-xl px-4 py-2 text-sm transition ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-background hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
