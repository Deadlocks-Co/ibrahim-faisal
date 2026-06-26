import Link from "next/link";

const outsideLinks = [
  { label: "Photography", href: "/outside" },
  { label: "Travelogue", href: "/outside/travelogue" },
  { label: "Pop Culture", href: "/outside/culture" },
];

type OutsideNavProps = {
  active: "photography" | "travelogue" | "culture";
};

const activeByHref: Record<OutsideNavProps["active"], string> = {
  photography: "/outside",
  travelogue: "/outside/travelogue",
  culture: "/outside/culture",
};

export function OutsideNav({ active }: OutsideNavProps) {
  const activeHref = activeByHref[active];

  return (
    <nav aria-label="Outside the Terminal navigation" className="mx-auto max-w-6xl px-6 pt-8">
      <div className="flex flex-wrap gap-2 rounded-2xl border bg-muted/20 p-2">
        {outsideLinks.map((link) => {
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
