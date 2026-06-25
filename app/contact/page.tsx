import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ExternalLink } from "lucide-react";
import { getItem } from "@/lib/content";

const mdxOptions = { remarkPlugins: [remarkGfm] };

export const metadata: Metadata = {
  title: "Contact — Ibrahim Faisal",
  description: "Get in touch for consulting, collaboration, or conversation."
};

interface ContactLink {
  label: string;
  href: string;
}

export default async function ContactPage() {
  const contact = getItem("contact", "contact");

  const tagline = contact?.tagline != null ? String(contact.tagline) : "";
  const links = Array.isArray(contact?.links) ? (contact.links as ContactLink[]) : [];
  const body = contact?.body ?? "";

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
      <h1 className="mt-4 text-4xl font-light tracking-tight">Get in touch.</h1>
      {tagline && (
        <p className="mt-5 text-base leading-7 text-muted-foreground">{tagline}</p>
      )}

      {links.length > 0 && (
        <div className="mt-10 space-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border px-5 py-4 text-sm hover:bg-muted/60"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          ))}
        </div>
      )}

      {body && (
        <div className="prose prose-sm prose-neutral dark:prose-invert mt-10 max-w-none">
          <MDXRemote source={String(body)} options={{ mdxOptions }} />
        </div>
      )}
    </main>
  );
}
