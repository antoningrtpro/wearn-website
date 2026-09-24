type EyebrowColor = "default" | "green" | "blue" | "purple";

type EyebrowProps = {
  children: React.ReactNode;
  color?: EyebrowColor;
  className?: string;
};

const colorClasses: Record<EyebrowColor, string> = {
  default: "bg-ink text-white",
  green: "bg-[#34D399] text-white",
  blue: "bg-[#60A5FA] text-white",
  purple: "bg-[#A78BFA] text-white",
};

export default function Eyebrow({ children, color = "default", className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
}
