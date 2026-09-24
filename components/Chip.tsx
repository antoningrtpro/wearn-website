type ChipVariant = "default" | "accent" | "success" | "warning";

type ChipProps = {
  children: React.ReactNode;
  variant?: ChipVariant;
  dot?: boolean;
  className?: string;
};

const variantClasses: Record<ChipVariant, string> = {
  default: "bg-surface-muted text-ink-2",
  accent: "bg-accent-soft text-accent-dark",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning",
};

const dotClasses: Record<ChipVariant, string> = {
  default: "bg-ink-3",
  accent: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
};

export default function Chip({ children, variant = "default", dot = false, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex h-7 items-center gap-1.5 rounded-sm px-2.5 text-[13px] font-medium ${variantClasses[variant]} ${className}`}
    >
      {dot && <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClasses[variant]}`} />}
      {children}
    </span>
  );
}
