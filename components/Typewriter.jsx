"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState(words[0]);
  const [del, setDel] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setStill(true);
  }, []);

  useEffect(() => {
    if (still) return;
    const full = words[i];
    let t;
    if (!del && txt === full) t = setTimeout(() => setDel(true), 1600);
    else if (del && txt === "") { setDel(false); setI((i + 1) % words.length); }
    else t = setTimeout(() => setTxt(full.slice(0, txt.length + (del ? -1 : 1))), del ? 35 : 75);
    return () => clearTimeout(t);
  }, [txt, del, i, still, words]);

  return (
    <p aria-label={words.join(", ")} className="min-h-[2rem] font-mono text-lg text-accent sm:text-xl">
      <span aria-hidden>{txt}</span>
      <span aria-hidden className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-accent" />
    </p>
  );
}
