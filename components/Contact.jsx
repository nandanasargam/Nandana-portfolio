import Section from "./Section";
import { profile } from "@/data/content";

export default function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["LinkedIn", "linkedin.com/in/nandanasargam", profile.linkedin],
    ["GitHub", "github.com/nandanasargam", profile.github],
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="mb-6 max-w-xl text-muted">
        I am open to full-stack and backend roles. Email is the fastest way to reach me.
      </p>
      <a href={`mailto:${profile.email}`} className="inline-block rounded-md bg-accent px-5 py-2.5 font-medium text-on transition-opacity hover:opacity-90">
        Email Nandana
      </a>
      <dl className="mt-8 grid max-w-xl gap-3 text-sm sm:grid-cols-[6rem_1fr]">
        {rows.map(([k, v, href]) => (
          <div key={k} className="contents">
            <dt className="text-muted">{k}</dt>
            <dd><a href={href} className="break-all hover:text-accent">{v}</a></dd>
          </div>
        ))}
        <div className="contents">
          <dt className="text-muted">Location</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>
    </Section>
  );
}
