"use client";

import { useEffect, useRef, useState } from "react";

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function OdometerDigit({ digit, active }: { digit: number; active: boolean }) {
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden align-bottom" aria-hidden="true">
      <span
        className="absolute left-0 top-0 flex flex-col transition-transform ease-out"
        style={{
          transitionDuration: "1400ms",
          transform: `translateY(${active ? -digit : 0}em)`,
        }}
      >
        {DIGITS.map((d) => (
          <span key={d} data-digit={d} className="h-[1em] leading-[1em] before:content-[attr(data-digit)]" />
        ))}
      </span>
    </span>
  );
}

type OdometerProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function Odometer({ value, prefix = "", suffix = "", className = "" }: OdometerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = requestAnimationFrame(() => {
        setReduceMotion(true);
        setActive(true);
      });
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const digits = value.toLocaleString("fr-FR").split("");

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span aria-hidden="true">
        {prefix && <span data-value={prefix} className="before:content-[attr(data-value)]" />}
        {reduceMotion
          ? digits.map((char, i) => (
              <span key={i} data-value={char} className="before:content-[attr(data-value)]" />
            ))
          : digits.map((char, i) =>
              /\d/.test(char) ? (
                <OdometerDigit key={i} digit={Number(char)} active={active} />
              ) : (
                <span key={i} data-value={char} className="before:content-[attr(data-value)]" />
              )
            )}
        {suffix && <span data-value={suffix} className="before:content-[attr(data-value)]" />}
      </span>
      <span className="sr-only">
        {prefix}
        {value.toLocaleString("fr-FR")}
        {suffix}
      </span>
    </span>
  );
}
