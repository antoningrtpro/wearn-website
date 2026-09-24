"use client";

import { useRevealSequence } from "@/lib/useRevealSequence";
import Chip from "./Chip";

function Avatar({ label, size = 8 }: { label: string; size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-surface-muted text-[11px] font-semibold text-ink-2"
      style={{ height: `${size * 4}px`, width: `${size * 4}px` }}
    >
      {label}
    </span>
  );
}

export function MockupStatusNotification({
  statusStep,
  statusSubinfo,
  notifText,
  primaryLabel,
  secondaryLabel,
}: {
  statusStep: string;
  statusSubinfo: string;
  notifText: string;
  primaryLabel: string;
  secondaryLabel: string;
}) {
  const { ref, stage } = useRevealSequence(3);
  return (
    <div ref={ref} className="rounded-lg border border-line bg-surface p-4">
      <div className="rounded-md bg-surface-muted px-3 py-2.5">
        <p className="text-sm font-semibold text-ink">{statusStep}</p>
        <p className="text-[13px] text-ink-3">{statusSubinfo}</p>
      </div>
      <div
        className={`mt-3 rounded-md border border-line p-3 transition-opacity duration-300 ${
          stage >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-[13px] text-ink-2">{notifText}</p>
        <div className="mt-3 flex gap-2">
          <span
            className={`inline-flex h-8 items-center rounded-md px-3 text-[13px] font-medium text-white transition-colors ${
              stage >= 2 ? "bg-ink" : "bg-ink-3"
            }`}
          >
            {primaryLabel}
          </span>
          <span className="inline-flex h-8 items-center rounded-md border border-line px-3 text-[13px] font-medium text-ink">
            {secondaryLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

export function MockupConversation({
  proposalText,
  replyAvatar,
  replyText,
  recapLabel,
  amount,
}: {
  proposalText: string;
  replyAvatar: string;
  replyText: string;
  recapLabel: string;
  amount: string;
}) {
  const { ref, stage } = useRevealSequence(3);
  return (
    <div ref={ref} className="rounded-lg border border-line bg-surface p-4">
      <div className="max-w-[80%] rounded-md bg-surface-muted px-3 py-2 text-[13px] text-ink">{proposalText}</div>
      <div
        className={`mt-2 flex max-w-[85%] items-start gap-2 transition-opacity duration-300 ${
          stage >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Avatar label={replyAvatar} size={6} />
        <div className="rounded-md border border-line px-3 py-2 text-[13px] text-ink">{replyText}</div>
      </div>
      <div
        className={`mt-3 flex items-center justify-between rounded-md bg-surface-muted px-3 py-2.5 transition-opacity duration-300 ${
          stage >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <Chip variant="success" dot>
          {recapLabel}
        </Chip>
        <span className="tabular-nums text-sm font-semibold text-ink">{amount}</span>
      </div>
    </div>
  );
}

export function MockupSelectionModal({
  title,
  avatarLabels,
  extraCount,
  paramLabel,
  paramValue,
  cancelLabel,
  actionLabel,
  actionCount,
}: {
  title: string;
  avatarLabels?: string[];
  extraCount?: number;
  paramLabel: string;
  paramValue: string;
  cancelLabel: string;
  actionLabel: string;
  actionCount?: number;
}) {
  const { ref, stage } = useRevealSequence(3);
  return (
    <div ref={ref} className="rounded-lg border border-line bg-surface p-4">
      <p className="text-sm font-semibold text-ink">{title}</p>
      {avatarLabels && avatarLabels.length > 0 && (
        <div
          className={`mt-3 flex items-center transition-opacity duration-300 ${stage >= 1 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex -space-x-2">
            {avatarLabels.map((label) => (
              <span key={label} className="ring-2 ring-surface rounded-full">
                <Avatar label={label} size={8} />
              </span>
            ))}
          </div>
          {typeof extraCount === "number" && (
            <span className="ml-3 text-[13px] text-ink-3">+{extraCount} sélectionnés</span>
          )}
        </div>
      )}
      <div
        className={`mt-3 flex items-center justify-between border-t border-line pt-3 text-[13px] transition-opacity duration-300 ${
          stage >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-ink-3">{paramLabel}</span>
        <span className="font-medium text-ink">{paramValue}</span>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <span className="inline-flex h-8 items-center rounded-md border border-line px-3 text-[13px] font-medium text-ink">
          {cancelLabel}
        </span>
        <span
          className={`inline-flex h-8 items-center rounded-md px-3 text-[13px] font-medium text-white transition-colors ${
            stage >= 2 ? "bg-ink" : "bg-ink-3"
          }`}
        >
          {actionLabel}
          {typeof actionCount === "number" ? ` (${actionCount})` : ""}
        </span>
      </div>
    </div>
  );
}

export function MockupApproval({
  avatarLabel,
  identifier,
  explanation,
  approveLabel,
  laterLabel,
}: {
  avatarLabel: string;
  identifier: string;
  explanation: string;
  approveLabel: string;
  laterLabel: string;
}) {
  const { ref, stage } = useRevealSequence(3);
  return (
    <div ref={ref} className="rounded-lg border border-line bg-surface p-4">
      <div className="flex items-center gap-3">
        <Avatar label={avatarLabel} size={9} />
        <p className="text-sm font-semibold text-ink">{identifier}</p>
      </div>
      <p
        className={`mt-3 text-[13px] leading-[1.5] text-ink-2 transition-opacity duration-300 ${
          stage >= 1 ? "opacity-100" : "opacity-0"
        }`}
      >
        {explanation}
      </p>
      <div className="mt-4 flex gap-2">
        <span
          className={`inline-flex h-8 items-center rounded-md px-3 text-[13px] font-medium text-white transition-colors ${
            stage >= 2 ? "bg-ink" : "bg-ink-3"
          }`}
        >
          {approveLabel}
        </span>
        <span className="inline-flex h-8 items-center rounded-md border border-line px-3 text-[13px] font-medium text-ink">
          {laterLabel}
        </span>
      </div>
    </div>
  );
}
