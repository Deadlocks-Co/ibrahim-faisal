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
    id: "jacaranda-bird",
    src: "/photos/DLF_7196.JPG",
    alt: "A bird perched among purple jacaranda blossoms against a blue sky",
    title: "Among the Jacarandas",
    category: "Nature",
    location: "Sydney, Australia",
    width: 1200,
    height: 800
  },
  {
    id: "turtles-pond",
    src: "/photos/PXL_20251129_053948506.jpg",
    alt: "Two turtles basking on rocks beside a still garden pond",
    title: "Afternoon Sun",
    category: "Nature",
    location: "Sydney, Australia",
    width: 1200,
    height: 904
  },
  {
    id: "full-moon",
    src: "/photos/PXL_20260103_102418113~2.jpg",
    alt: "A full moon glowing through cloud cover against a dark night sky",
    title: "Full Moon",
    category: "Nature",
    location: "Sydney, Australia",
    width: 1200,
    height: 904
  },
  {
    id: "floral-tribute",
    src: "/photos/PXL_20260214_072717489.jpg",
    alt: "A floral wreath on a red carpet outside a building decorated with colourful geometric murals",
    title: "Floral Tribute",
    category: "Street",
    location: "Sydney, Australia",
    width: 1200,
    height: 904
  }
];
