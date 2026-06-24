import { StudioNav } from "@/components/studio-nav";

const stages = [
  {
    name: "Seed Idea",
    description: "A raw problem, audience, or product instinct that needs sharper framing.",
    items: ["SideKick", "Pally"]
  },
  {
    name: "Researching",
    description: "The idea is being tested through notes, specs, market reading, and conversations.",
    items: ["Conversational Host Engine"]
  },
  {
    name: "Prototype",
    description: "There is enough conviction to build a working version or realistic demo.",
    items: ["Bangla Translator", "World Cup Quiz Battle"]
  },
  {
    name: "Testing",
    description: "The prototype is ready for feedback from friends, colleagues, builders, or target users.",
    items: []
  },
  {
    name: "Building",
    description: "The idea has enough signal to deserve sustained product work.",
    items: []
  }
];

export default function DeadlockLabsPipelinePage() {
  return (
    <main className="min-h-screen">
      <StudioNav active="pipeline" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Lab Pipeline</p>
          <h1 className="mt-5 text-4xl font-light tracking-tight sm:text-6xl">Where each idea sits right now.</h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            This is not a formal startup pipeline. It is a way to make the maturity of each Deadlock Labs idea visible, from early curiosity to something worth building seriously.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {stages.map((stage, index) => (
            <section key={stage.name} className="rounded-2xl border p-5">
              <p className="text-xs text-muted-foreground">0{index + 1}</p>
              <h2 className="mt-3 font-medium">{stage.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{stage.description}</p>
              <div className="mt-5 space-y-2">
                {stage.items.length > 0 ? (
                  stage.items.map((item) => (
                    <div key={item} className="rounded-xl border bg-muted/20 px-3 py-2 text-xs">
                      {item}
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground">No ideas here yet.</p>
                )}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
