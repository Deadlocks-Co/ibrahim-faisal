export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-light tracking-tight sm:text-4xl">{title}</h1>
      {description && <p className="mt-4 max-w-xl text-muted-foreground">{description}</p>}
    </div>
  );
}