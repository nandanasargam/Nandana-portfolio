import Image from "next/image";
import Typewriter from "./Typewriter";
import { profile } from "@/data/content";

const chips = [
  ["C#", "top-6 -left-2 sm:-left-8", "0s"],
  [".NET", "top-1/3 -right-2 sm:-right-8", "1.2s"],
  ["React", "bottom-28 -left-2 sm:-left-8", "2.1s"],
  ["SQL Server", "bottom-12 -right-2 sm:-right-8", "0.6s"],
];

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-14 px-5 py-14 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr]">
      <div className="order-2 lg:order-1">
        <p className="animate-rise text-muted">Hi, I am</p>
        <h1 className="animate-rise mt-1 text-4xl font-bold leading-tight tracking-tight sm:text-6xl" style={{ animationDelay: "120ms" }}>
          {profile.name}
        </h1>
        <div className="animate-rise mt-3" style={{ animationDelay: "260ms" }}>
          <Typewriter words={profile.roles} />
        </div>
        <p className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: "400ms" }}>
          {profile.positioning}
        </p>
        <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "540ms" }}>
          <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-medium text-on transition hover:-translate-y-0.5 hover:opacity-90">
            See my projects
          </a>
          <a href="#contact" className="rounded-md border border-line px-5 py-2.5 font-medium transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative order-1 mx-auto w-full max-w-[320px] sm:max-w-sm lg:order-2">
        <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent/60" />
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={640}
          height={800}
          priority
          className="animate-reveal relative aspect-[4/5] w-full rounded-2xl object-cover"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-line bg-panel/90 px-3 py-1.5 text-xs backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {profile.status}
        </div>
        {chips.map(([label, pos, delay]) => (
          <span key={label} aria-hidden style={{ animationDelay: delay }}
                className={`animate-float absolute ${pos} rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs shadow-md`}>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
