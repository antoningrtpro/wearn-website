type MarqueeProps = {
  items: React.ReactNode[];
  durationSeconds?: number;
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
};

// Repeated an even number of times so translateX(-50%) always lands exactly
// on the boundary between two identical halves, however narrow the source
// items are relative to the container (a short list would otherwise leave
// visible gaps and break the seamless loop).
const REPEAT_COUNT = 6;

export default function Marquee({
  items,
  durationSeconds = 40,
  direction = "left",
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const repeatedItems = Array.from({ length: REPEAT_COUNT }, () => items).flat();

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
        {repeatedItems.map((item, i) => (
          <span key={i} className={`shrink-0 ${itemClassName}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
