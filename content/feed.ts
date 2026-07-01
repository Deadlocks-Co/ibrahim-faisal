export type FeedPostType = "text" | "link" | "image";

export interface FeedPost {
  id: string;
  type: FeedPostType;
  date: string;
  content: string;
  url?: string;
  linkTitle?: string;
  image?: string;
}

export const feedPosts: FeedPost[] = [
  {
    id: "001",
    type: "text",
    date: "2026-06-28",
    content: "Site is live. Still building it while people are landing on it. That's the point.",
  },
  {
    id: "002",
    type: "image",
    date: "2026-06-28",
    content: "",
    image: "/shredder/mehdi-hasan-world-cup.png",
    url: "https://x.com/mehdirhasan/status/2070713185934418163",
    linkTitle: "Mehdi Hasan on X",
  },
  {
    id: "003",
    type: "image",
    date: "2026-07-01",
    content: "",
    image: "/shredder/fb-img-1782645209101.jpg",
  },
  {
    id: "004",
    type: "image",
    date: "2026-07-01",
    content: "",
    image: "/shredder/fb-img-1782686581261.jpg",
  },
  {
    id: "005",
    type: "image",
    date: "2026-07-01",
    content: "",
    image: "/shredder/d0beda6314388d37686ad3ec525562196b88ab7464f4cc2dda2fced0e0947fc71.jpg",
  },
  {
    id: "006",
    type: "image",
    date: "2026-07-01",
    content: "",
    image: "/shredder/screenshot-20260629-091508.png",
  },
  {
    id: "007",
    type: "image",
    date: "2026-07-01",
    content: "",
    image: "/shredder/screenshot-20260701-192232.png",
  },
];
