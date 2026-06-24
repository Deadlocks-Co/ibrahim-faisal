export interface Project {
  slug: string;
  title: string;
  summary: string;
  context: string;
  approach: string;
  impact: string;
  stack: string[];
  year: string;
  featured: boolean;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "vivanti-delivery-brain",
    title: "Vivanti Delivery Brain",
    summary: "Autonomous AI systems for cloud-native data platform delivery.",
    context: "Built to reduce friction between architecture, planning, and delivery for platform and data work.",
    approach: "Combined structured delivery thinking with AI-assisted execution patterns and reusable operating flows.",
    impact: "Improved clarity, speed, and repeatability across engineering delivery work.",
    stack: ["Next.js", "TypeScript", "AI Systems", "Cloud"],
    year: "2026",
    featured: true,
    links: [{ label: "Case study", href: "#" }]
  },
  {
    slug: "contextatlas",
    title: "ContextAtlas",
    summary: "Architecture and workflow automation for engineering context.",
    context: "Designed to make project context easier to navigate across teams and systems.",
    approach: "Used structured knowledge, workflow design, and simple interfaces to reduce context loss.",
    impact: "Made technical decision trails easier to review and reuse.",
    stack: ["TypeScript", "Knowledge Systems", "Automation"],
    year: "2025",
    featured: true,
    links: [{ label: "Case study", href: "#" }]
  },
  {
    slug: "arb",
    title: "ARB",
    summary: "Developer tooling and platform delivery support.",
    context: "Created to improve consistency and speed in engineering execution environments.",
    approach: "Focused on pragmatic tooling, sensible defaults, and cleaner handoff paths.",
    impact: "Reduced setup friction and improved repeatable delivery workflows.",
    stack: ["Platform Engineering", "Developer Experience"],
    year: "2025",
    featured: true,
    links: [{ label: "Case study", href: "#" }]
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Site",
    summary: "A personal site bringing projects, writing, photography, and culture into one place.",
    context: "Needed a single home for professional and personal work.",
    approach: "Built a modular Next.js site with structured content files and clean page architecture.",
    impact: "Creates a clearer personal web presence and better publishing base.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    year: "2026",
    featured: false,
    links: [{ label: "Live", href: "#" }]
  }
];