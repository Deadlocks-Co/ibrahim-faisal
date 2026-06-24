export function Hero() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
          Ibrahim Faisal
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Software engineer building autonomous AI systems, cloud-native data
          platforms, and architecture-to-delivery execution.
        </p>
        <div className="mt-8 flex gap-4 text-sm">
          <a href="/projects" className="underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground">
            View projects
          </a>
          <a href="/writing" className="text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground">
            Read writing
          </a>
        </div>
      </div>
    </section>
  );
}