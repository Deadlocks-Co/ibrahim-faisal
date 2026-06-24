export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "Street" | "Travel" | "Nature" | "Architecture" | "Portrait";
  location: string;
  width: number;
  height: number;
}

export const photos: Photo[] = [
  {
    id: "1",
    src: "/photos/street-1.svg",
    alt: "Street scene placeholder",
    title: "Morning Commute",
    category: "Street",
    location: "Sydney, Australia",
    width: 1200,
    height: 900
  },
  {
    id: "2",
    src: "/photos/travel-1.svg",
    alt: "Travel landscape placeholder",
    title: "Coastal Walk",
    category: "Travel",
    location: "New South Wales",
    width: 1200,
    height: 900
  },
  {
    id: "3",
    src: "/photos/architecture-1.svg",
    alt: "Architecture placeholder",
    title: "Glass and Steel",
    category: "Architecture",
    location: "Sydney CBD",
    width: 1200,
    height: 900
  },
  {
    id: "4",
    src: "/photos/nature-1.svg",
    alt: "Nature placeholder",
    title: "Bush Track",
    category: "Nature",
    location: "Blue Mountains",
    width: 1200,
    height: 900
  },
  {
    id: "5",
    src: "/photos/street-2.svg",
    alt: "Night street placeholder",
    title: "After Hours",
    category: "Street",
    location: "Darlinghurst",
    width: 1200,
    height: 900
  },
  {
    id: "6",
    src: "/photos/travel-2.svg",
    alt: "Sunset placeholder",
    title: "Golden Hour",
    category: "Travel",
    location: "Manly Beach",
    width: 1200,
    height: 900
  }
];