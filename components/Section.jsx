import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <h2 className="mb-8 flex items-center gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
          <span aria-hidden className="h-px flex-1 bg-line" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
