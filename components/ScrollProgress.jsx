"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-30 h-0.5">
      <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
