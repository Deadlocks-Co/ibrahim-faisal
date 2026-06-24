export const metadata = {
  title: "Contact — Ibrahim Faisal",
  description: "Get in touch for consulting, collaboration, or conversation."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="text-3xl font-light tracking-tight">Contact</h1>
      <div className="mt-6 space-y-3 text-muted-foreground">
        <p>Email: hello@example.com</p>
        <p>X: @IbrahimKFaisal</p>
        <p>Use this page for consulting, collaboration, or general conversation.</p>
      </div>
    </main>
  );
}