export const metadata = {
  title: "About — Ibrahim Faisal",
  description: "Software engineer, writer, photographer, and football obsessive."
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-light tracking-tight">About</h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          I’m a software engineer based in Sydney, focused on autonomous AI systems,
          cloud-native data platforms, and architecture-to-delivery execution.
        </p>
        <p>
          Outside work, I write, shoot photography, follow football and cricket,
          and keep notes on film, television, and culture.
        </p>
      </div>
    </main>
  );
}