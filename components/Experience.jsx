import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-6 border-l border-line pl-6">
        {experience.map((e, idx) => (
          <Reveal as="li" key={e.role} delay={idx * 150} className="relative">
            <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <p className="text-sm text-muted">
              {e.company}{e.place ? `, ${e.place}` : ""}. {e.period}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
