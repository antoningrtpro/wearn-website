"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type ValuePoint = {
  title: string;
  description: string;
};

type ValueTab = {
  tabLabel: string;
  stat: string;
  statLabel: string;
  caption: string;
  points: ValuePoint[];
};

type ValuePropositionProps = {
  id?: string;
  eyebrow: string;
  brands: ValueTab;
  runners: ValueTab;
};

export default function ValueProposition({ id, eyebrow, brands, runners }: ValuePropositionProps) {
  const [active, setActive] = useState<"brands" | "runners">("brands");
  const current = active === "brands" ? brands : runners;

  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <div className="overflow-hidden rounded-[26px] border border-line bg-surface">
        <Reveal>
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-3">{eyebrow}</span>
              <div className="inline-flex rounded-full border border-line bg-surface-muted p-1">
                <button
                  type="button"
                  onClick={() => setActive("brands")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === "brands" ? "bg-ink text-white" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {brands.tabLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setActive("runners")}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === "runners" ? "bg-ink text-white" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {runners.tabLabel}
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="text-[40px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[48px]">
                {current.stat}
              </span>
              <span className="text-lg text-ink-2 sm:text-xl">{current.statLabel}</span>
            </div>
            <p className="mt-2 text-sm text-ink-3">{current.caption}</p>
          </div>
        </Reveal>

        <div className="grid gap-8 border-t border-line bg-surface-muted p-6 sm:grid-cols-3 sm:p-10 lg:p-12">
          {current.points.map((point, index) => (
            <div key={point.title} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-xs font-semibold text-ink-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-semibold text-ink">{point.title}</p>
                <p className="mt-1 text-sm leading-[1.5] text-ink-2">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
