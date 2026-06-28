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
    content: "Has there ever been a World Cup where a team is playing in the host country on the literal same day that the host country is bombing that team's country?",
    image: "/shredder/mehdi-hasan-world-cup.png",
    url: "https://x.com/mehdirhasan/status/2070713185934418163",
    linkTitle: "Mehdi Hasan on X",
  },
];
