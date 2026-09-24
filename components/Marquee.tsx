type MarqueeProps = {
  items: React.ReactNode[];
  durationSeconds?: number;
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
};

export default function Marquee({
  items,
  durationSeconds = 40,
  direction = "left",
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  return (
    <div
      className={`marquee-pausable overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)" }}
    >
      <div
        className="marquee-track flex w-max items-center gap-8"
        data-direction={direction}
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className={`shrink-0 ${itemClassName}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
