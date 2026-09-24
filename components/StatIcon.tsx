export type StatIconName = "trending-up" | "clock" | "zap" | "users" | "map-pin" | "percent" | "calendar";

const common = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function StatIcon({ name }: { name: StatIconName }) {
  switch (name) {
    case "trending-up":
      return (
        <svg {...common}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M15 7h6v6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
          <path d="M16 6.5c1.7.3 3 1.7 3 3.5s-1.3 3.2-3 3.5" />
          <path d="M18 20c0-2.5-1.5-4.5-3.5-5.5" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      );
    case "percent":
      return (
        <svg {...common}>
          <path d="M5 19 19 5" />
          <circle cx="7" cy="7" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
  }
}
