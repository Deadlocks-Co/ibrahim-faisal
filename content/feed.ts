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
];
