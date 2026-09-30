type LogoMarkProps = {
  className?: string;
};

/** The "w" alone — a standalone brand mark usable anywhere on its own
 * (compact header, avatars, etc.), not just inside the full wordmark below.
 * Stands out purely through color, not a filled shape, so it stays legible
 * inline wherever it's dropped. */
export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <span aria-hidden="true" className={`text-accent ${className}`}>
      w
    </span>
  );
}

type LogoProps = {
  className?: string;
};

/** Full "wearn" wordmark: the standalone LogoMark "w" followed by "earn" in
 * plain lowercase text, both inheriting the surrounding size/weight/color. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={className}>
      <LogoMark />
      <span className="sr-only">wearn</span>
      <span aria-hidden="true">earn</span>
    </span>
  );
}
