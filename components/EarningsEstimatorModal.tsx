"use client";

import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import { RUNNER_SIGNUP_URL } from "@/lib/constants";

type FrequencyOption = {
  label: string;
  racesPerMonth: number;
};

type EventTypeOption = {
  label: string;
  avgPayout: number;
};

const FREQUENCY_OPTIONS: FrequencyOption[] = [
  { label: "1 course", racesPerMonth: 1 },
  { label: "2 à 3 courses", racesPerMonth: 2.5 },
  { label: "4 courses ou plus", racesPerMonth: 4.5 },
];

const EVENT_TYPE_OPTIONS: EventTypeOption[] = [
  { label: "Courses locales", avgPayout: 15 },
  { label: "Trails", avgPayout: 25 },
  { label: "Gros événements (marathon, semi...)", avgPayout: 35 },
];

const TOTAL_STEPS = 3;

type EarningsEstimatorModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function EarningsEstimatorModal({ open, onClose }: EarningsEstimatorModalProps) {
  const [step, setStep] = useState(1);
  const [frequency, setFrequency] = useState<FrequencyOption | null>(null);
  const [eventType, setEventType] = useState<EventTypeOption | null>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  function selectFrequency(option: FrequencyOption) {
    setFrequency(option);
    setStep(2);
  }

  function selectEventType(option: EventTypeOption) {
    setEventType(option);
    setStep(3);
  }

  const estimate = frequency && eventType ? Math.round(frequency.racesPerMonth * eventType.avgPayout) : null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl border border-line bg-surface p-6 sm:p-8"
        style={{ boxShadow: "var(--shadow-mockup)" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-1 gap-1.5">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-ink transition-all duration-300"
                  style={{ width: i < step ? "100%" : "0%" }}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-3 hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-lg font-semibold text-ink">
            {step === 1 && "Combien de courses fais-tu par mois ?"}
            {step === 2 && "Quel type d'événements ?"}
            {step === 3 && "Votre estimation"}
          </p>
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="shrink-0 text-sm text-ink-3 hover:text-ink"
            >
              Retour
            </button>
          )}
        </div>

        {step === 1 && (
          <div className="mt-4 grid gap-2">
            {FREQUENCY_OPTIONS.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => selectFrequency(option)}
                className="rounded-md border border-line px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-ink-3"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="mt-4 grid gap-2">
            {EVENT_TYPE_OPTIONS.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => selectEventType(option)}
                className="rounded-md border border-line px-4 py-3 text-left text-sm font-medium text-ink transition-colors hover:border-ink-3"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {step === 3 && estimate !== null && (
          <div className="mt-4">
            <div className="rounded-lg border border-line bg-surface-muted p-4 text-center">
              <p className="text-sm text-ink-2">Estimation mensuelle</p>
              <p className="mt-1 text-3xl font-semibold text-ink">~{estimate} €/mois</p>
            </div>

            <div className="mt-5">
              <CTAButton href={RUNNER_SIGNUP_URL} variant="primary" size="md" className="w-full">
                Devenir coureur partenaire
              </CTAButton>
              <p className="mt-2 text-center text-[13px] text-ink-3">Gratuit et sans engagement</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
