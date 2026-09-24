"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  text: string;
  speedMs?: number;
  className?: string;
};

export default function Typewriter({ text, speedMs = 60, className = "" }: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setDisplay(text));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let i = 0;
        const id = setInterval(() => {
          i += 1;
          setDisplay(text.slice(0, i));
          if (i >= text.length) clearInterval(id);
        }, speedMs);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [text, speedMs]);

  return (
    <span ref={ref} className={className}>
      {display}
      <span className="inline-block w-[1px] animate-pulse bg-current align-middle" style={{ height: "1em" }} />
    </span>
  );
}
