export type WorkbenchStatus = "Daily Use" | "Active" | "Prototype" | "Learning" | "Archived";
export type WorkbenchCategory = "Automation" | "AI Systems" | "Data Engineering" | "Developer Tools" | "Publishing";

export interface WorkbenchItem {
  slug: string;
  title: string;
  summary: string;
  purpose: string;
  problem: string;
  approach: string;
  learned: string;
  category: WorkbenchCategory;
  status: WorkbenchStatus;
  year: string;
  featured: boolean;
  stack: string[];
  relatedLabs?: string[];
  links: { label: string; href: string }[];
}

export const workbenchItems: WorkbenchItem[] = [
  {
    slug: "agentic-data-platform-delivery-engine",
    title: "Agentic Data Platform Delivery Engine",
    summary: "A multi-agent delivery system for turning architecture standards into repeatable data-platform implementation workflows.",
    purpose: "Built to test whether AI agents can coordinate real delivery work through explicit roles, hard gates, pull requests, and audit trails.",
    problem: "Platform onboarding work often depends on tacit senior-engineer knowledge, manual ticket updates, repeated scaffolding, and late quality checks. That makes delivery slower than it should be and harder to reproduce across engagements.",
    approach: "The system separates planning, implementation, review, testing, documentation, and pull-request creation into specialised agents. Deterministic hooks enforce branch, compile, test, and audit rules so the model generates work while the workflow controls quality.",
    learned: "Agentic systems become useful when the model is not treated as the control plane. The durable pattern is structured context, explicit responsibility boundaries, and boring guardrails that do not negotiate.",
    category: "AI Systems",
    status: "Active",
    year: "2026",
    featured: true,
    stack: ["Claude Code", "Multi-Agent Architecture", "Snowflake", "dbt", "Terraform", "AWS", "Jira", "Bitbucket"],
    relatedLabs: ["SideKick"],
    links: [
      { label: "GitHub", href: "https://github.com/ikfaisal" },
      { label: "Discuss this tool", href: "mailto:ibrahim.faisal@vivanti.com?subject=Agentic%20Delivery%20Engine" }
    ]
  },
  {
    slug: "contextatlas",
    title: "ContextAtlas",
    summary: "A context system for keeping engineering decisions, project memory, and delivery trails easier to navigate.",
    purpose: "Built after noticing that context loss was often more expensive than code complexity.",
    problem: "Engineering work creates scattered traces across chats, repositories, tickets, diagrams, and documents. Important decisions become hard to recover exactly when they are needed again.",
    approach: "ContextAtlas organises project knowledge around decisions, artefacts, and workflows rather than folders alone. The goal is to make technical memory searchable, portable, and easier to reuse between sessions.",
    learned: "Context is infrastructure. Once a project crosses a small threshold of collaborators, agents, or repositories, memory needs its own architecture.",
    category: "Developer Tools",
    status: "Prototype",
    year: "2025",
    featured: true,
    stack: ["TypeScript", "Knowledge Systems", "Automation"],
    relatedLabs: ["SideKick"],
    links: [{ label: "Notes", href: "/lab-notes" }]
  },
  {
    slug: "arb",
    title: "ARB",
    summary: "A pragmatic engineering toolkit for standardising delivery patterns and reducing setup friction.",
    purpose: "Built to turn repeatable delivery judgement into reusable defaults.",
    problem: "Small inconsistencies in setup, naming, workflow, and handoff compound across projects. They do not look dramatic, but they quietly tax every future implementation.",
    approach: "ARB packages delivery conventions, templates, and workflow helpers into a lightweight toolkit. It favours clear defaults over clever abstractions.",
    learned: "Good tooling is usually less about automation volume and more about making the correct path obvious.",
    category: "Automation",
    status: "Prototype",
    year: "2025",
    featured: true,
    stack: ["Platform Engineering", "Developer Experience", "Workflow Design"],
    links: [{ label: "Notes", href: "/lab-notes" }]
  },
  {
    slug: "portfolio-site",
    title: "Personal Publishing System",
    summary: "The website system behind Ibrahim Faisal and Deadlock Labs.",
    purpose: "Built to make the site behave less like a portfolio and more like a public workshop for ideas, tools, notes, photography, and culture.",
    problem: "A traditional portfolio over-emphasises completed projects. It does not explain how ideas evolve, what gets learned, or which tools emerge along the way.",
    approach: "The site is being shaped around Deadlock Labs, Workbench, Lab Notes, and timeline-based documentation. Content structure does the narrative work instead of decorative marketing sections.",
    learned: "Information architecture is positioning. Renaming a section is cosmetic; changing the model changes what the site can become.",
    category: "Publishing",
    status: "Active",
    year: "2026",
    featured: false,
    stack: ["Next.js", "React", "Tailwind CSS", "Content Architecture"],
    relatedLabs: ["Deadlock Labs"],
    links: [{ label: "Home", href: "/" }]
  }
];

export function getWorkbenchItem(slug: string) {
  return workbenchItems.find((item) => item.slug === slug);
}

export function getWorkbenchCategories() {
  return Array.from(new Set(workbenchItems.map((item) => item.category)));
}
