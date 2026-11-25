"use client";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/content";

// Profile summary styled as a REST response; lines type in when scrolled into view.
export default function ApiPanel() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const lines = [
    [0, <><span className="text-accent">GET</span> /api/candidate <span className="text-muted">200 OK</span></>],
    [0, "{"],
    [1, <>&quot;name&quot;: &quot;{profile.name}&quot;,</>],
    [1, <>&quot;role&quot;: &quot;{profile.title}&quot;,</>],
    [1, <>&quot;stack&quot;: [&quot;C#&quot;, &quot;ASP.NET Core&quot;, &quot;React.js&quot;, &quot;SQL Server&quot;],</>],
    [1, <>&quot;experience&quot;: &quot;Uniware Technologies&quot;,</>],
    [1, <>&quot;location&quot;: &quot;{profile.location}&quot;,</>],
    [1, <>&quot;status&quot;: &quot;{profile.status}&quot;</>],
    [0, "}"],
  ];
  return (
    <div ref={ref} aria-label="Profile summary in API response format"
         className="overflow-x-auto rounded-lg border border-line bg-panel p-5 font-mono text-[13px] leading-7 sm:text-sm">
      {lines.map(([indent, t], i) => (
        <div key={i} className={`whitespace-pre opacity-0 ${shown ? "animate-line" : ""}`}
             style={{ animationDelay: `${i * 130}ms`, paddingLeft: `${indent * 1.25}rem` }}>{t}</div>
      ))}
    </div>
  );
}
