import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Founder of Deadlock Labs
        </p>
        <h1 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
          Ibrahim F<span className="text-violet-500">ai</span>sal
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          AI Systems Architect and Data Platform Builder exploring ideas across AI, data, language, community businesses, and interactive products.
        </p>
        <div className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Deadlock Labs · Anthropic · OpenAI · Kimi · Snowflake · Azure · AWS · Python · SQL · C# · API · Automation · Social Business · Mentor · Sports · Antigravity · Photography
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <a
            href="/deadlock-labs"
            className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition hover:bg-foreground/5"
          >
            Explore Deadlock Labs <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="/workbench"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            View Workbench <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
