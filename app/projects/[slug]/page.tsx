import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { projects, type Project } from "@/content/projects";

const contactLinks = [
  {
    label: "Email me",
    href: "mailto:ibrahim.faisal@vivanti.com?subject=Project%20conversation",
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: Linkedin
  },
  {
    label: "GitHub",
    href: "https://github.com/ikfaisal",
    icon: Github
  }
];

const identityConfig = {
  "command-center": {
    wrapper: "bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_top_left,rgba(15,23,42,0.08),transparent_28%)]",
    hero: "border-blue-500/20 bg-blue-500/5",
    label: "Mission Control",
    motif: "Agentic orchestration · hard gates · audit trail"
  },
  "knowledge-map": {
    wrapper: "bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_32%)]",
    hero: "border-purple-500/20 bg-purple-500/5",
    label: "Knowledge Map",
    motif: "Context · decisions · reusable memory"
  },
  toolkit: {
    wrapper: "bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_30%)]",
    hero: "border-emerald-500/20 bg-emerald-500/5",
    label: "Engineering Toolkit",
    motif: "Standards · defaults · delivery patterns"
  },
  editorial: {
    wrapper: "bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.16),transparent_30%)]",
    hero: "border-border bg-muted/30",
    label: "Editorial System",
    motif: "Publishing · identity · personal platform"
  }
};

function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project — Ibrahim Faisal"
    };
  }

  return {
    title: `${project.title} — Ibrahim Faisal`,
    description: project.summary
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border bg-background/70 p-6 shadow-sm">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function ContactButton({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Mail }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm hover:bg-muted/60"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function AgenticArchitecturePanel() {
  const agents = ["Planner", "Implementer", "Reviewer", "Tester", "PR Raiser"];
  const outputs = ["Code artefacts", "Review report", "Test results", "Bitbucket PR", "Jira update"];

  return (
    <div className="rounded-2xl border border-blue-500/20 bg-background/80 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-blue-500">Orchestration map</p>
          <h2 className="mt-2 text-2xl font-light tracking-tight">Six commands in. Production delivery out.</h2>
        </div>
        <p className="text-sm text-muted-foreground">Main agent · specialised subagents · deterministic gates</p>
      </div>

      <div className="mt-8 rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
        <span className="font-mono">/ude discover</span>
        <span className="mx-2">·</span>
        <span className="font-mono">/ude init</span>
        <span className="mx-2">·</span>
        <span className="font-mono">/ude develop</span>
        <span className="mx-2">·</span>
        <span className="font-mono">/ude publish</span>
        <span className="mx-2">·</span>
        <span className="font-mono">/ude diagnose</span>
        <span className="mx-2">·</span>
        <span className="font-mono">/ude review-pr</span>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {agents.map((agent, index) => (
          <div key={agent} className="rounded-xl border bg-background p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white">
                {index + 1}
              </span>
              <p className="font-medium">{agent}</p>
            </div>
            <p className="mt-8 text-xs text-muted-foreground">
              {index === 0 && "Plans stories and delivery scope."}
              {index === 1 && "Generates implementation artefacts."}
              {index === 2 && "Checks ADRs and naming rules."}
              {index === 3 && "Runs validation and tests."}
              {index === 4 && "Raises PRs and posts updates."}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {outputs.map((output) => (
          <span key={output} className="rounded-full border border-emerald-500/30 px-3 py-1 text-xs text-emerald-600">
            {output}
          </span>
        ))}
      </div>
    </div>
  );
}

function GuardrailPanel() {
  const hooks = [
    ["block_main_push.py", "Blocks direct pushes to protected branches."],
    ["dbt_compile_check.sh", "Compiles models immediately after SQL writes."],
    ["alert_hook.py", "Surfaces test failures in real time."],
    ["jira_session_summary.py", "Posts audit summaries back to Jira."]
  ];

  return (
    <Section title="Deterministic guardrails">
      <p>
        The key design choice was not letting the language model be the control plane for quality. LLM judgement is useful for generation and remediation, but structural correctness is enforced through hooks that run at the tool and workflow level.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {hooks.map(([name, description]) => (
          <div key={name} className="rounded-xl border bg-muted/30 p-4">
            <p className="font-mono text-xs text-foreground">{name}</p>
            <p className="mt-2 text-xs text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AgenticCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <section className="grid gap-4 md:grid-cols-4">
        {(project.metrics ?? []).map((metric) => (
          <div key={metric} className="rounded-2xl border bg-background/80 p-5 shadow-sm">
            <p className="text-sm leading-6 text-muted-foreground">{metric}</p>
          </div>
        ))}
      </section>

      <Section title="Executive summary">
        <p>
          This project turns delivery standards into an executable operating model. A main agent reads requirements, validates contracts, delegates work to specialised subagents, routes failures back through hard gates, and produces implementation artefacts, review reports, test results, pull requests, and Jira updates in one controlled session.
        </p>
      </Section>

      <Section title="Challenge">
        <p>{project.context}</p>
        <p className="mt-4">
          The real problem was not only the amount of engineering effort. It was the dependency on tacit knowledge, manual coordination across Jira and Bitbucket, inconsistent review discipline, and quality checks that happened too late in the delivery lifecycle.
        </p>
      </Section>

      <AgenticArchitecturePanel />

      <Section title="Architecture approach">
        <p>{project.approach}</p>
        <p className="mt-4">
          The architecture separates planning, implementation, review, testing, and pull-request creation into explicit responsibilities. Each gate must pass before the next agent takes control. Failed gates route work back to the implementing agent with concrete remediation feedback.
        </p>
      </Section>

      <GuardrailPanel />

      <Section title="My role">
        <p>
          As {project.role}, I shaped the delivery architecture, agent orchestration strategy, governance model, quality gates, and architecture-to-delivery workflow. The goal was to make the system repeatable enough for client engagements, not merely impressive as an AI demo.
        </p>
      </Section>

      <Section title="Outcome">
        <p>{project.impact}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Live", "Operational framework ready for repeatable delivery."],
            ["Secure", "Deterministic hooks enforce guardrails the model cannot bypass."],
            ["Reusable", "Patterns can be reused across future data-platform engagements."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border bg-muted/30 p-4">
              <p className="text-sm font-medium text-foreground">{title}</p>
              <p className="mt-2 text-xs text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function GenericCaseStudy({ project }: { project: Project }) {
  return (
    <>
      {project.metrics && project.metrics.length > 0 && (
        <section className="grid gap-4 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric} className="rounded-2xl border bg-background/80 p-5 shadow-sm">
              <p className="text-sm leading-6 text-muted-foreground">{metric}</p>
            </div>
          ))}
        </section>
      )}
      <Section title="Challenge">
        <p>{project.context}</p>
      </Section>
      <Section title="Architecture">
        <p>{project.approach}</p>
      </Section>
      <Section title="Outcome">
        <p>{project.impact}</p>
      </Section>
    </>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const identity = identityConfig[project.identity ?? "editorial"];

  return (
    <main className={identity.wrapper}>
      <div className="mx-auto max-w-6xl px-6 py-24">
        <section className={`rounded-3xl border p-8 md:p-12 ${identity.hero}`}>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span>{project.eyebrow ?? "Project"}</span>
            {project.status && <span>· {project.status}</span>}
            <span>· {identity.label}</span>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-light tracking-tight md:text-6xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{project.summary}</p>
            </div>
            <div className="rounded-2xl border bg-background/70 p-5 text-sm text-muted-foreground">
              <p className="text-xs font-medium uppercase tracking-widest text-foreground">Identity</p>
              <p className="mt-3">{identity.motif}</p>
              {project.role && <p className="mt-4 text-foreground">{project.role}</p>}
              <p className="mt-2">{project.year}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <ContactButton key={link.label} {...link} />
            ))}
          </div>
        </section>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-6">
            {project.slug === "agentic-data-platform-delivery-engine" ? (
              <AgenticCaseStudy project={project} />
            ) : (
              <GenericCaseStudy project={project} />
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border bg-background/80 p-5">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-background/80 p-5">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Links</h2>
              <div className="mt-4 space-y-3">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} className="flex items-center justify-between rounded-xl border px-3 py-2 text-sm hover:bg-muted/60">
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-background/80 p-5">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Interested?</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Talk to me about solution architecture, AI-assisted delivery, or data platform operating models.
              </p>
              <div className="mt-4 space-y-2">
                {contactLinks.slice(0, 2).map((link) => (
                  <a key={link.label} href={link.href} className="block rounded-xl border px-3 py-2 text-sm hover:bg-muted/60">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}