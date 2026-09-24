import Marquee from "./Marquee";

type ActivityTickerProps = {
  rowOne: string[];
  rowTwo: string[];
};

function ActivityPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-7 items-center rounded-full border border-line bg-surface px-3 text-[13px] font-medium text-ink-2 shadow-sm">
      {children}
    </span>
  );
}

export default function ActivityTicker({ rowOne, rowTwo }: ActivityTickerProps) {
  return (
    <div className="mt-8 space-y-3">
      <Marquee
        items={rowOne.map((item) => (
          <ActivityPill key={item}>{item}</ActivityPill>
        ))}
        direction="left"
        durationSeconds={50}
      />
      <Marquee
        items={rowTwo.map((item) => (
          <ActivityPill key={item}>{item}</ActivityPill>
        ))}
        direction="right"
        durationSeconds={65}
      />
    </div>
  );
}
