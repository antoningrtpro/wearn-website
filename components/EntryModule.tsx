"use client";

import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

type EntryOption = {
  label: string;
  result: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type EntryModuleProps = {
  teaserQuestion: string;
  buttonLabel: string;
  stepQuestion: string;
  options: EntryOption[];
  ctaLabel: string;
  ctaHref: string;
  className?: string;
};

export default function EntryModule({
  teaserQuestion,
  buttonLabel,
  stepQuestion,
  options,
  ctaLabel,
  ctaHref,
  className = "",
}: EntryModuleProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<EntryOption | null>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    setSelected(null);
  }

  return (
    <div className={className}>
      <p className="text-sm font-medium text-ink-2">{teaserQuestion}</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-ink-2"
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 px-4"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-xl border border-line bg-surface p-6 sm:p-8"
            style={{ boxShadow: "var(--shadow-mockup)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-lg font-semibold text-ink">{selected ? "Votre estimation" : stepQuestion}</p>
              <button
                type="button"
                onClick={close}
                aria-label="Fermer"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-3 hover:text-ink"
              >
                ✕
              </button>
            </div>

            {!selected ? (
              <div className="mt-5 grid gap-2">
                {options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setSelected(option)}
                    className="rounded-md border border-line px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-ink-3"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="mt-5">
                <p className="text-sm leading-[1.5] text-ink-2">{selected.result}</p>
                <div className="mt-6">
                  <CTAButton href={selected.ctaHref ?? ctaHref} variant="primary" size="md" className="w-full">
                    {selected.ctaLabel ?? ctaLabel}
                  </CTAButton>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
