import Section from "./Section";
import { education, certifications, languages } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-3 font-semibold">Education</h3>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.title}>
                <p className="font-medium">{e.title}</p>
                <p className="text-sm text-muted">{e.org}. {e.period}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">Languages: {languages}</p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Certifications</h3>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
