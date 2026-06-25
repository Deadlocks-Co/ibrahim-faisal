import type { Metadata } from "next";

export function buildMetadata(config: {
  title: string;
  description: string;
  url?: string;
  image?: string;
}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const fullUrl = config.url ? `${siteUrl}${config.url}` : siteUrl;
  const imageUrl = config.image
    ? config.image.startsWith("http") ? config.image : `${siteUrl}${config.image}`
    : `${siteUrl}/og.svg`;

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: "Ibrahim Faisal",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: config.title }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [imageUrl]
    }
  };
}