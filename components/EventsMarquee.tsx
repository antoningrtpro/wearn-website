import Marquee from "./Marquee";

type EventsMarqueeProps = {
  reassurance: string;
  events: React.ReactNode[];
};

export default function EventsMarquee({ reassurance, events }: EventsMarqueeProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-8 sm:px-8">
      <p className="text-center text-sm text-ink-3">{reassurance}</p>
      <Marquee className="mt-6" items={events} durationSeconds={40} />
    </section>
  );
}
