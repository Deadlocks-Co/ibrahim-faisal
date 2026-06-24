export type ProjectStatus = "Live" | "Prototype" | "Concept";
export type ProjectIdentity = "command-center" | "knowledge-map" | "toolkit" | "editorial";

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
  status?: ProjectStatus;
  role?: string;
  identity?: ProjectIdentity;
  eyebrow?: string;
  metrics?: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "agentic-data-platform-delivery-engine",
    title: "Agentic Data Platform Delivery Engine",
    summary: "Multi-agent orchestration platform that turns architecture standards into production-ready infrastructure, data pipelines, analytics models, dashboards, documentation, and delivery workflows.",
    context: "New contact centre platform engagements required experienced engineers to manually coordinate scaffolding, Jira tracking, repository changes, CI/CD, Snowflake objects, dbt models, dashboards, and documentation across multiple tools and environments.",
    approach: "Designed an agentic delivery engine that coordinates specialised AI agents across platform engineering, data engineering, dbt, DevOps, reporting, and technical writing. The system converts architecture constraints into executable delivery workflows, creates and progresses Jira stories, generates implementation artefacts, raises pull requests, and keeps every onboarding run auditable and reproducible.",
    impact: "Reduced new platform onboarding from 3-5 engineer-days to under 90 minutes unattended, while improving reproducibility, delivery consistency, and architecture compliance at the point of generation instead of during late-stage review.",
    stack: ["Claude Code", "Multi-Agent Architecture", "Snowflake", "dbt", "Terraform", "AWS", "Bitbucket", "Jira", "Streamlit"],
    year: "2026",
    featured: true,
    status: "Live",
    role: "Solutions Architect / Senior Consultant",
    identity: "command-center",
    eyebrow: "Live delivery engine",
    metrics: [
      "3-5 engineer-days reduced to under 90 minutes",
      "Six specialised agents coordinated through one delivery workflow",
      "Eight-story Jira lifecycle automated per onboarding run",
      "Architecture compliance enforced before pull requests are raised"
    ],
    links: [
      { label: "GitHub", href: "https://github.com/ikfaisal" },
      { label: "Talk to me", href: "mailto:ibrahim.faisal@vivanti.com?subject=Agentic%20Data%20Platform%20Delivery%20Engine" }
    ]
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
    status: "Prototype",
    role: "Solution Designer",
    identity: "knowledge-map",
    eyebrow: "Context system",
    metrics: ["Preserves decision trails", "Reduces context loss", "Connects project knowledge across workflows"],
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
    status: "Prototype",
    role: "Platform Delivery Designer",
    identity: "toolkit",
    eyebrow: "Engineering toolkit",
    metrics: ["Standardises delivery patterns", "Improves setup consistency", "Reduces implementation friction"],
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
    status: "Live",
    role: "Designer / Developer",
    identity: "editorial",
    eyebrow: "Personal platform",
    metrics: ["Content-driven structure", "Modular project pages", "Reusable publishing base"],
    links: [{ label: "Live", href: "#" }]
  }
];