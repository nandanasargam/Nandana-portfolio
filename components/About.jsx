import Section from "./Section";
import Reveal from "./Reveal";
import ApiPanel from "./ApiPanel";
import { about } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          {about.map((p, i) => <Reveal key={p} delay={i * 120}><p>{p}</p></Reveal>)}
        </div>
        <Reveal delay={200}><ApiPanel /></Reveal>
      </div>
    </Section>
  );
}
