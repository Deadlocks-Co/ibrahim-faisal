export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ibrahim Faisal</p>
        <div className="flex gap-4">
          <a href="https://x.com/IbrahimKFaisal" className="hover:text-foreground">X</a>
          <a href="https://github.com/" className="hover:text-foreground">GitHub</a>
          <a href="https://linkedin.com/" className="hover:text-foreground">LinkedIn</a>
          <a href="https://medium.com/@ikfaisal" className="hover:text-foreground">Medium</a>
          <a href="https://substack.com/@ikfaisal" className="hover:text-foreground">Substack</a>
        </div>
      </div>
    </footer>
  );
}