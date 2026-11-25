import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/content";

function Field({ label, children }) {
  return (
    <div>
      <dt className="text-sm font-semibold">{label}</dt>
      <dd className="mt-1 text-muted">{children}</dd>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 120}>
          <article className="rounded-lg border border-line bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                     className="rounded-md border border-line px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <dl className="mt-5 grid gap-5 md:grid-cols-2">
              <Field label="Problem">{p.problem}</Field>
              <Field label="Solution">{p.solution}</Field>
              <Field label="What I did">
                <ul className="list-disc space-y-1 pl-5">{p.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
              </Field>
              <Field label="Outcome">{p.outcome}</Field>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
              {p.tech.map((t) => (
                <li key={t} className="rounded bg-accent/10 px-2 py-1 text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-on">{t}</li>
              ))}
            </ul>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
