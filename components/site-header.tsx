import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { navLinks } from "@/content/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Ibrahim Faisal
        </Link>

        <nav className="flex items-center gap-6">
          <div className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}