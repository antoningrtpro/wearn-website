import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import MockupCard from "./MockupCard";
import Chip from "./Chip";
import Odometer from "./Odometer";
import EntityRow from "./EntityRow";

type Benefit = {
  title: string;
  description: string;
};

type MiniKpi = {
  value: number;
  suffix?: string;
  label: string;
};

type RankingRow = {
  avatarLabel: string;
  name: string;
  category: string;
  volume: string;
  amount: string;
};

type FeatureDashboardProps = {
  id?: string;
  number: string;
  name: string;
  title: string;
  paragraph?: string;
  eyebrowColor?: "default" | "green" | "blue" | "purple";
  benefits: Benefit[];
  mainKpiLabel: string;
  mainKpiValue: number;
  mainKpiSuffix?: string;
  mainKpiDelta: string;
  miniKpis: MiniKpi[];
  rankingTitle: string;
  ranking: RankingRow[];
};

export default function FeatureDashboard({
  id,
  number,
  name,
  title,
  paragraph,
  eyebrowColor = "default",
  benefits,
  mainKpiLabel,
  mainKpiValue,
  mainKpiSuffix,
  mainKpiDelta,
  miniKpis,
  rankingTitle,
  ranking,
}: FeatureDashboardProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="lg:order-2">
          <Eyebrow color={eyebrowColor}>
            {number} · {name}
          </Eyebrow>
          <h3 className="mt-4 text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[32px]">
            {title}
          </h3>
          {paragraph && <p className="mt-4 max-w-md text-base leading-[1.55] text-ink-2">{paragraph}</p>}

          <ul className="mt-8 divide-y divide-line border-t border-line">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="py-4">
                <p className="font-semibold text-ink">{benefit.title}</p>
                <p className="mt-1 text-sm text-ink-2">{benefit.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={150} className="lg:order-1">
          <MockupCard>
            <p className="text-[13px] text-ink-3">{mainKpiLabel}</p>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-[44px] font-semibold leading-none tracking-[-0.02em] text-ink">
                <Odometer value={mainKpiValue} suffix={mainKpiSuffix} />
              </span>
              <Chip variant="success" dot>
                {mainKpiDelta}
              </Chip>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 border-y border-line py-4">
              {miniKpis.map((kpi) => (
                <div key={kpi.label}>
                  <p className="text-xl font-semibold text-ink">
                    <Odometer value={kpi.value} suffix={kpi.suffix} />
                  </p>
                  <p className="text-[13px] text-ink-3">{kpi.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[13px] font-medium text-ink-3">{rankingTitle}</p>
            <div className="mt-1 divide-y divide-line">
              {ranking.map((row) => (
                <EntityRow
                  key={row.name}
                  avatarLabel={row.avatarLabel}
                  name={row.name}
                  meta={[row.category, row.volume]}
                  value={row.amount}
                />
              ))}
            </div>
          </MockupCard>
        </Reveal>
      </div>
    </section>
  );
}
