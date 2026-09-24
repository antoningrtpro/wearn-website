import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";
import CTAButton from "./CTAButton";
import Chip from "./Chip";

export type BentoItem = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

type FeaturedItem = BentoItem & {
  chipLabel: string;
  longDescription: string;
  linkLabel: string;
  linkHref: string;
};

type BentoGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  paragraph: string;
  featured: FeaturedItem;
  items: BentoItem[];
  note: string;
  buttonLabel: string;
  buttonHref: string;
};

export default function BentoGrid({ id, eyebrow, title, paragraph, featured, items, note, buttonLabel, buttonHref }: BentoGridProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <SectionIntro eyebrow={eyebrow} title={title} subtitle={paragraph} />

      <div className="mt-12 grid gap-4 sm:grid-cols-4 sm:grid-rows-2">
        <Reveal className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-3">
          <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
              {featured.icon}
            </span>
            <div className="mt-4">
              <Chip variant="accent">{featured.chipLabel}</Chip>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-ink">{featured.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-[1.5] text-ink-2">{featured.longDescription}</p>
            <CTAButton href={featured.linkHref} variant="link" className="mt-4 text-sm">
              {featured.linkLabel}
            </CTAButton>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:col-start-2 sm:col-end-5 sm:grid-cols-3 sm:grid-rows-2">
          {items.map((item, i) => (
            <Reveal key={item.name} delayMs={i * 60}>
              <div className="flex h-full flex-col rounded-lg border border-line bg-surface p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-ink-2">
                  {item.icon}
                </span>
                <p className="mt-3 text-sm font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-[13px] leading-[1.4] text-ink-3">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-[13px] text-ink-3">{note}</p>
        <CTAButton href={buttonHref} variant="secondary" size="md">
          {buttonLabel}
        </CTAButton>
      </div>
    </section>
  );
}
