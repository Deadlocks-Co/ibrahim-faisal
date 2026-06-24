import Link from "next/link";

const labLinks = [
  { label: "Deadlock Labs", href: "/deadlock-labs" },
  { label: "Thesis", href: "/deadlock-labs/thesis" },
  { label: "Pipeline", href: "/deadlock-labs/pipeline" },
  { label: "Founder Letter", href: "/deadlock-labs/founder" }
];

type StudioNavProps = {
  active: "studio" | "thesis" | "pipeline" | "founder";
};

const activeByHref: Record<StudioNavProps["active"], string> = {
  studio: "/deadlock-labs",
  thesis: "/deadlock-labs/thesis",
  pipeline: "/deadlock-labs/pipeline",
  founder: "/deadlock-labs/founder"
};

export function StudioNav({ active }: StudioNavProps) {
  const activeHref = activeByHref[active];

  return (
    <nav aria-label="Deadlock Labs navigation" className="mx-auto max-w-6xl px-6 pt-8">
      <div className="flex flex-wrap gap-2 rounded-2xl border bg-muted/20 p-2">
        {labLinks.map((link) => {
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
