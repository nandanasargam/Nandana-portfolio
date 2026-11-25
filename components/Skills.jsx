import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, idx) => (
          <Reveal key={s.group} delay={idx * 80}>
            <h3 className="mb-2 font-semibold">{s.group}</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {s.items.map((i) => (
                <li key={i} className="rounded-md border border-line bg-panel px-2.5 py-1 text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">{i}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
