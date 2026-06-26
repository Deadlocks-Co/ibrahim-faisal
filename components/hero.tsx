export function Hero() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Founder of Deadlock Labs
        </p>
        <h1 className="mt-5 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
          Ibrahim Faisal
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          AI Systems Architect and Data Platform Builder exploring ideas across AI, data, language, community businesses, and interactive products.
        </p>
        <div className="mt-4 max-w-2xl text-sm text-muted-foreground">
          Deadlock Labs · Snowflake · Informatica · Salesforce · AWS · Kafka · AI Delivery Systems
        </div>
        <div className="mt-8 flex gap-4 text-sm">
          <a href="/deadlock-labs" className="underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground">
            Explore Deadlock Labs
          </a>
          <a href="/workbench" className="underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground">
            View Workbench
          </a>
        </div>
      </div>
    </section>
  );
}
