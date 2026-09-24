"use client";

import { useEffect, useRef, useState } from "react";

export function useRevealSequence(steps: number, stepMs = 400) {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => setStage(steps - 1));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        for (let i = 1; i < steps; i += 1) {
          setTimeout(() => setStage(i), i * stepMs);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [steps, stepMs]);

  return { ref, stage };
}
