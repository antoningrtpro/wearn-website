"use client";

import { useEffect, useState } from "react";

type TickerVerticalProps = {
  items: string[];
  intervalMs?: number;
  className?: string;
};

export default function TickerVertical({ items, intervalMs = 3000, className = "" }: TickerVerticalProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  return (
    <span className={`relative inline-block h-[1.4em] overflow-hidden align-bottom ${className}`}>
      <span
        className="flex flex-col transition-transform duration-500 ease-out"
        style={{ transform: `translateY(-${index * 1.4}em)` }}
      >
        {items.map((item) => (
          <span key={item} className="h-[1.4em] leading-[1.4em] whitespace-nowrap">
            {item}
          </span>
        ))}
      </span>
    </span>
  );
}
