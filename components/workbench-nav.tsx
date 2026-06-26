import Link from "next/link";

const workbenchLinks = [
  { label: "Build", href: "/workbench" },
  { label: "Lab Notes", href: "/workbench/notes" },
];

type WorkbenchNavProps = {
  active: "build" | "notes";
};

const activeByHref: Record<WorkbenchNavProps["active"], string> = {
  build: "/workbench",
  notes: "/workbench/notes",
};

export function WorkbenchNav({ active }: WorkbenchNavProps) {
  const activeHref = activeByHref[active];

  return (
    <nav aria-label="Workbench navigation" className="mx-auto max-w-6xl px-6 pt-8">
      <div className="flex flex-wrap gap-2 rounded-2xl border bg-muted/20 p-2">
        {workbenchLinks.map((link) => {
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
