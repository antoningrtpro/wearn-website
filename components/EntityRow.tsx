type EntityRowProps = {
  avatarLabel: string;
  name: string;
  meta: string[];
  value?: string;
  valueSlot?: React.ReactNode;
  muted?: boolean;
};

export default function EntityRow({ avatarLabel, name, meta, value, valueSlot, muted = false }: EntityRowProps) {
  return (
    <div className={`flex items-center gap-3 py-3 ${muted ? "opacity-50" : ""}`}>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-muted text-xs font-semibold text-ink-2">
        {avatarLabel}
        <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-surface bg-accent" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-ink">{name}</p>
        <p className="truncate text-[13px] text-ink-3">{meta.join(" · ")}</p>
      </div>
      {valueSlot ?? (
        <span className="tabular-nums shrink-0 text-sm font-semibold text-ink">{value}</span>
      )}
    </div>
  );
}
