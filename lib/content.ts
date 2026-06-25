import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

export interface ContentItem {
  slug: string;
  body: string;
  [key: string]: unknown;
}

export function getCollection(collection: string): ContentItem[] {
  const dir = path.join(contentRoot, collection);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const items = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      const slug = data.slug || file.replace(/\.(mdx|md)$/, "");
      return { ...data, slug, body: content.trim() } as ContentItem;
    })
    .filter((item) => !item.draft);

  items.sort((a, b) => {
    const aDate = String(a.updated || a.published || "");
    const bDate = String(b.updated || b.published || "");
    return bDate.localeCompare(aDate);
  });

  return items;
}

export function getItem(collection: string, slug: string): ContentItem | undefined {
  return getCollection(collection).find((item) => item.slug === slug);
}
