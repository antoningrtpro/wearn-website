import Eyebrow from "./Eyebrow";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className = "",
}: SectionIntroProps) {
  const alignClasses = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const subtitleColor = tone === "dark" ? "text-white/70" : "text-ink-2";

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2
        className={`mx-auto max-w-4xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:text-[48px] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-base leading-[1.5] sm:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
