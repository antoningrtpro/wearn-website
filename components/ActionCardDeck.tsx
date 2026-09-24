"use client";

import { useState } from "react";
import Chip from "./Chip";
import EntityRow from "./EntityRow";

export type ActionCardEntity = {
  avatarLabel: string;
  name: string;
  meta: string[];
};

export type ActionCard = {
  avatarLabel: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  amount?: string;
  entities?: ActionCardEntity[];
  extraCount?: number;
  primaryLabel: string;
  confirmationText: string;
  ignoreReasons: string[];
};

type ActionCardDeckProps = {
  cards: ActionCard[];
  finalTitle: string;
  finalSummaryTemplate: string;
};

export default function ActionCardDeck({ cards, finalTitle, finalSummaryTemplate }: ActionCardDeckProps) {
  const [index, setIndex] = useState(0);
  const [actioned, setActioned] = useState(0);
  const [ignoreOpen, setIgnoreOpen] = useState(false);
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);

  const card = cards[index];
  const done = index >= cards.length;

  function advance(message: string) {
    setConfirmation(message);
    setIgnoreOpen(false);
    setTimeout(() => {
      setLeaving(true);
      setTimeout(() => {
        setActioned((n) => n + 1);
        setIndex((i) => i + 1);
        setConfirmation(null);
        setLeaving(false);
      }, 250);
    }, 700);
  }

  if (done) {
    return (
      <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-xl border border-line bg-surface p-8 text-center" style={{ boxShadow: "var(--shadow-mockup)" }}>
        <p className="text-lg font-semibold text-ink">{finalTitle}</p>
        <p className="mt-2 text-sm text-ink-2">{finalSummaryTemplate.replace("{total}", String(cards.length)).replace("{actioned}", String(actioned))}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <p className="mb-3 text-[13px] text-ink-3">
        {index + 1} sur {cards.length}
      </p>

      <div
        className={`flex flex-1 flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-250 ${
          leaving ? "-translate-x-4 opacity-0" : "translate-x-0 opacity-100"
        }`}
        style={{ boxShadow: "var(--shadow-mockup)" }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-muted text-sm font-semibold text-ink-2">
              {card.avatarLabel}
            </span>
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-ink">{card.title}</p>
              <p className="truncate text-[13px] text-ink-3">{card.subtitle}</p>
            </div>
          </div>
          {card.amount && (
            <span className="tabular-nums shrink-0 text-base font-semibold text-ink">{card.amount}</span>
          )}
        </div>

        <p className="mt-4 text-sm leading-[1.55] text-ink-2">{card.description}</p>

        {card.entities && (
          <div className="mt-4 divide-y divide-line border-y border-line">
            {card.entities.map((entity) => (
              <EntityRow key={entity.name} avatarLabel={entity.avatarLabel} name={entity.name} meta={entity.meta} />
            ))}
            {card.extraCount ? (
              <p className="py-2 text-[13px] text-ink-3">+ {card.extraCount} autres</p>
            ) : null}
          </div>
        )}

        {card.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {card.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        )}

        {confirmation ? (
          <p className="mt-auto pt-5 text-sm font-medium text-success">✓ {confirmation}</p>
        ) : (
          <div className="relative mt-auto flex items-center gap-2 pt-5">
            <button
              type="button"
              onClick={() => advance(card.confirmationText)}
              className="h-9 rounded-md bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-ink-2"
            >
              {card.primaryLabel}
            </button>
            <button
              type="button"
              onClick={() => setIgnoreOpen((v) => !v)}
              className="h-9 rounded-md border border-line px-4 text-sm font-medium text-ink"
            >
              Ignorer
            </button>

            {ignoreOpen && (
              <div
                className="absolute left-0 top-full z-10 mt-2 w-56 rounded-lg border border-line bg-surface p-1"
                style={{ boxShadow: "var(--shadow-mockup)" }}
              >
                {card.ignoreReasons.map((reason) => (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => advance(reason)}
                    className="block w-full rounded-md px-3 py-2 text-left text-[13px] text-ink hover:bg-surface-muted"
                  >
                    {reason}
                  </button>
                ))}
                <div className="my-1 border-t border-line" />
                <button
                  type="button"
                  onClick={() => setIgnoreOpen(false)}
                  className="block w-full rounded-md px-3 py-2 text-left text-[13px] text-ink-3 hover:bg-surface-muted"
                >
                  Annuler
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
