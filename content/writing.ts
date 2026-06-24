export interface WritingItem {
  title: string;
  url: string;
  platform: "Medium" | "Substack" | "X";
  category: "Technical" | "Personal" | "Quick";
  date: string;
  blurb?: string;
}

export const writingItems: WritingItem[] = [
  {
    title: "On autonomous AI systems",
    url: "https://medium.com/@ikfaisal",
    platform: "Medium",
    category: "Technical",
    date: "2024-12-15",
    blurb: "Notes on practical AI systems and delivery thinking."
  },
  {
    title: "Travel notes from the Blue Mountains",
    url: "https://substack.com/@ikfaisal",
    platform: "Substack",
    category: "Personal",
    date: "2024-11-20",
    blurb: "A slower, more personal travel entry."
  },
  {
    title: "Quick reaction: A-League final",
    url: "https://x.com/IbrahimKFaisal",
    platform: "X",
    category: "Quick",
    date: "2024-10-28",
    blurb: "Immediate match reaction."
  }
];