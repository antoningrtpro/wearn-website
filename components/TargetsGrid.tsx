import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export type Target = {
  title: string;
  description: string;
};

type TargetsGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  targets: Target[];
};

export default function TargetsGrid({ id, eyebrow, title, targets }: TargetsGridProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <SectionIntro eyebrow={eyebrow} title={title} />

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {targets.map((target, i) => (
          <Reveal key={target.title} delayMs={i * 100}>
            <div className="h-full rounded-lg border border-line bg-surface p-6">
              <h3 className="text-lg font-semibold text-ink">{target.title}</h3>
              <p className="mt-2 text-sm leading-[1.5] text-ink-2">{target.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
