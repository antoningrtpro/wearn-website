"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  id?: string;
  title?: string;
  items: FAQItem[];
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="#9a9690"
      strokeWidth="1.5"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQAccordion({ id = "faq", title = "Questions fréquentes", items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="mx-auto max-w-[1200px] scroll-mt-20 px-6 py-12 sm:px-8 lg:py-16">
      <SectionIntro title={title} />

      <Reveal delayMs={100} className="mx-auto mt-10 max-w-2xl">
        <div className="divide-y divide-line rounded-lg border border-line bg-surface">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-sm font-medium text-ink sm:text-base">{item.question}</span>
                  <ChevronIcon open={open} />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-[1.55] text-ink-2">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
