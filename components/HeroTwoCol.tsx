import Reveal from "./Reveal";
import Chip from "./Chip";
import TickerVertical from "./TickerVertical";
import CountUp from "./CountUp";
import EntryModule from "./EntryModule";
import CTAButton, { type CTAVariant } from "./CTAButton";

type Stat = {
  icon: React.ReactNode;
  text: string;
};

type EntryOption = {
  label: string;
  result: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type HeroCTAButton = {
  label: string;
  href: string;
  variant?: CTAVariant;
};

type HeroTwoColProps = {
  id?: string;
  chipLabel: string;
  tickerItems: string[];
  tickerHref: string;
  title: string;
  chapo: string;
  stats: Stat[];
  reassurance: string;
  mediaLabel: string;
  mediaImageUrl?: string;
  kpiLabel: string;
  kpiValue: number;
  kpiSuffix?: string;
  ctaButtons?: HeroCTAButton[];
  entryQuestion?: string;
  entryButtonLabel?: string;
  entryStepQuestion?: string;
  entryOptions?: EntryOption[];
  entryCtaLabel?: string;
  entryCtaHref?: string;
};

export default function HeroTwoCol({
  id,
  chipLabel,
  tickerItems,
  tickerHref,
  title,
  chapo,
  stats,
  reassurance,
  mediaLabel,
  mediaImageUrl,
  kpiLabel,
  kpiValue,
  kpiSuffix,
  ctaButtons,
  entryQuestion,
  entryButtonLabel,
  entryStepQuestion,
  entryOptions,
  entryCtaLabel,
  entryCtaHref,
}: HeroTwoColProps) {
  return (
    <section
      id={id}
      className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1200px] items-center px-6 py-8 sm:px-8"
    >
      <div className="grid w-full min-w-0 gap-12 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16">
        <Reveal className="min-w-0">
          <a href={tickerHref} className="inline-block">
            <Chip variant="accent" dot>
              {chipLabel}
              <TickerVertical items={tickerItems} className="ml-1 font-semibold" />
            </Chip>
          </a>

          <h1 className="mt-5 max-w-3xl text-[28px] font-semibold leading-[1.18] tracking-[-0.02em] text-ink sm:text-[36px] lg:text-[44px] xl:text-[50px]">
            {title}
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-[1.5] text-ink-2 sm:text-xl">{chapo}</p>

          <div className="mt-6 flex flex-nowrap gap-2 overflow-x-auto pb-1">
            {stats.map((stat) => (
              <div
                key={stat.text}
                className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink"
              >
                <span className="text-ink-2">{stat.icon}</span>
                {stat.text}
              </div>
            ))}
          </div>

          {ctaButtons ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {ctaButtons.map((button) => (
                <CTAButton key={button.label} href={button.href} variant={button.variant ?? "primary"} size="lg">
                  {button.label}
                </CTAButton>
              ))}
            </div>
          ) : (
            entryQuestion &&
            entryButtonLabel &&
            entryStepQuestion &&
            entryOptions &&
            entryCtaLabel &&
            entryCtaHref && (
              <EntryModule
                className="mt-8"
                teaserQuestion={entryQuestion}
                buttonLabel={entryButtonLabel}
                stepQuestion={entryStepQuestion}
                options={entryOptions}
                ctaLabel={entryCtaLabel}
                ctaHref={entryCtaHref}
              />
            )
          )}

          <p className="mt-3 text-[13px] text-ink-3">{reassurance}</p>
        </Reveal>

        <Reveal delayMs={150} className="relative mx-auto w-[85%] lg:w-auto">
          <div
            className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-line bg-surface-muted lg:h-[56vh] lg:max-h-[500px] lg:w-[352px]"
            style={{ boxShadow: "var(--shadow-mockup)" }}
          >
            {mediaImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={mediaImageUrl} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center p-6 text-center text-sm text-ink-3">
                {mediaLabel}
              </div>
            )}
          </div>

          <div
            className="absolute -bottom-6 -left-6 w-44 rounded-lg border border-line bg-surface p-4"
            style={{ boxShadow: "var(--shadow-mockup)" }}
          >
            <p className="text-[13px] text-ink-3">{kpiLabel}</p>
            <p className="mt-1 text-2xl font-semibold text-ink">
              <CountUp value={kpiValue} suffix={kpiSuffix} />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
