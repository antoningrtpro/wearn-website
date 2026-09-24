import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import MockupCard from "./MockupCard";
import Chip from "./Chip";
import EntityRow from "./EntityRow";
import Typewriter from "./Typewriter";
import CountUp from "./CountUp";

type ListRow = {
  avatarLabel: string;
  name: string;
  meta: string[];
  value?: string;
  warningLabel?: string;
  muted?: boolean;
};

type FeatureFilteredListProps = {
  id?: string;
  number: string;
  name: string;
  title: string;
  paragraph: string;
  searchQuery: string;
  filters: string[];
  columnLabels: [string, string];
  rows: ListRow[];
  counterLabel: string;
  counterValue: number;
  eyebrowColor?: "default" | "green" | "blue" | "purple";
};

export default function FeatureFilteredList({
  id,
  number,
  name,
  title,
  paragraph,
  searchQuery,
  filters,
  columnLabels,
  rows,
  counterLabel,
  counterValue,
  eyebrowColor = "default",
}: FeatureFilteredListProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow color={eyebrowColor}>
            {number} · {name}
          </Eyebrow>
          <h3 className="mt-4 text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[32px]">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-[1.55] text-ink-2">{paragraph}</p>
        </Reveal>

        <Reveal delayMs={150}>
          <MockupCard>
            <div className="rounded-md border border-line bg-bg px-4 py-2.5 text-sm text-ink">
              <Typewriter text={searchQuery} />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Chip key={filter}>{filter}</Chip>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-b border-line pb-2 text-[13px] font-medium text-ink-3">
              <span>{columnLabels[0]}</span>
              <span>{columnLabels[1]}</span>
            </div>

            <div className="divide-y divide-line">
              {rows.map((row) => (
                <EntityRow
                  key={row.name}
                  avatarLabel={row.avatarLabel}
                  name={row.name}
                  meta={row.meta}
                  value={row.value}
                  muted={row.muted}
                  valueSlot={row.warningLabel ? <Chip variant="warning">{row.warningLabel}</Chip> : undefined}
                />
              ))}
            </div>

            <p className="mt-4 text-[13px] text-ink-3">
              <CountUp value={counterValue} /> {counterLabel}
            </p>
          </MockupCard>
        </Reveal>
      </div>
    </section>
  );
}
