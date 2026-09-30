import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

export type CTAVariant = "primary" | "secondary" | "link" | "inverted" | "link-inverted";
type CTASize = "md" | "lg";

type CTAButtonProps = {
  href?: string;
  /** When set, renders a real <button> instead of a link (e.g. to open a
   * modal) — href is ignored in that case. */
  onClick?: () => void;
  variant?: CTAVariant;
  size?: CTASize;
  className?: string;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "onClick">;

const variantClasses: Record<CTAVariant, string> = {
  primary: "bg-ink text-white hover:bg-ink-2",
  secondary: "bg-transparent border border-line text-ink hover:border-ink-3",
  link: "bg-transparent text-ink underline decoration-transparent hover:decoration-ink underline-offset-4 px-0 h-auto",
  inverted: "bg-white text-ink hover:bg-white/90",
  "link-inverted": "bg-transparent text-white underline decoration-transparent hover:decoration-white underline-offset-4 px-0 h-auto",
};

const sizeClasses: Record<CTASize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function CTAButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CTAButtonProps) {
  const isLink = variant === "link" || variant === "link-inverted";
  const classes = `inline-flex items-center justify-center rounded-md font-medium transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${variantClasses[variant]} ${isLink ? "" : sizeClasses[size]} ${className}`;

  if (onClick) {
    // rest is typed for anchor attributes (target, rel, download, ...) which
    // don't apply to a real <button> — link-only passthrough props aren't
    // meaningful in onClick mode, so they're intentionally not forwarded.
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  const isExternal = href?.startsWith("http") ?? false;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href ?? "#"} className={classes} {...rest}>
      {children}
    </Link>
  );
}
