import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Ibrahim Faisal — Solutions Architect",
  description: "Solutions Architect focused on data platforms, AI systems, and architecture-to-delivery execution.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Ibrahim Faisal — Solutions Architect",
    description: "Solutions Architect focused on data platforms, AI systems, and architecture-to-delivery execution.",
    url: siteUrl,
    siteName: "Ibrahim Faisal",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Ibrahim Faisal" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Faisal — Solutions Architect",
    description: "Solutions Architect focused on data platforms, AI systems, and architecture-to-delivery execution.",
    images: ["/og.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}