export interface NowItem {
  label: string;
  value: string;
}

export interface NowSection {
  title: string;
  items: NowItem[];
}

export const nowSections: NowSection[] = [
  {
    title: "Building",
    items: [
      { label: "Work", value: "Autonomous AI systems and cloud-native data platforms" },
      { label: "Side project", value: "Refining this portfolio and its content system" }
    ]
  },
  {
    title: "Following",
    items: [
      { label: "Football", value: "A-League and Premier League" },
      { label: "Film", value: "Festival releases and contemporary cinema" }
    ]
  },
  {
    title: "Reading",
    items: [
      { label: "Currently", value: "Technical documentation and film criticism essays" }
    ]
  },
  {
    title: "Location",
    items: [
      { label: "Based", value: "Sydney, Australia" }
    ]
  }
];

export const lastUpdated = "June 2026";