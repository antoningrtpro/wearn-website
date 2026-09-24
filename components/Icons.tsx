type IconProps = {
  name: IconName;
};

export type IconName =
  | "shirt-back"
  | "sleeve"
  | "shorts"
  | "bib"
  | "marathon"
  | "semi"
  | "trail"
  | "local-race";

const common = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function Icon({ name }: IconProps) {
  switch (name) {
    case "shirt-back":
      return (
        <svg {...common}>
          <path d="M8 4l4 2 4-2 4 4-3 3v10H7V11L4 8l4-4Z" />
          <path d="M12 9v9" strokeDasharray="1.5 2.5" />
        </svg>
      );
    case "sleeve":
      return (
        <svg {...common}>
          <path d="M4 8l5-4 3 2 3-2 5 4-3 4-2-1v9H9v-9l-2 1-3-4Z" />
        </svg>
      );
    case "shorts":
      return (
        <svg {...common}>
          <path d="M5 4h14l1 8h-5l-1 8h-3l-1-8-1 8H6l1-8-2-8Z" />
        </svg>
      );
    case "bib":
      return (
        <svg {...common}>
          <rect x="5" y="6" width="14" height="13" rx="1.5" />
          <path d="M5 8l-2-3M19 8l2-3" />
          <path d="M9 12h6M9 15h4" />
        </svg>
      );
    case "marathon":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14l2-4 2 2 2-5" />
        </svg>
      );
    case "semi":
      return (
        <svg {...common}>
          <path d="M4 18c3-8 6-12 8-12s5 4 8 12" />
          <circle cx="12" cy="6" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "trail":
      return (
        <svg {...common}>
          <path d="M3 18l6-11 4 6 2-3 6 8Z" />
        </svg>
      );
    case "local-race":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
          <circle cx="12" cy="9.5" r="2.2" />
        </svg>
      );
  }
}
