import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

type ValueCard = {
  eyebrow: string;
  title: string;
  description: string;
};

type ValuePropositionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  brandValue: ValueCard;
  runnerValue: ValueCard;
};

export default function ValueProposition({
  id,
  eyebrow,
  title,
  subtitle,
  brandValue,
  runnerValue,
}: ValuePropositionProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <div className="rounded-[32px] bg-[#EDE9FE] p-3 sm:p-4">
        <div className="rounded-[26px] bg-surface p-6 sm:p-10 lg:p-12">
          <SectionIntro eyebrow={eyebrow} title={title} subtitle={subtitle} />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl bg-ink p-8 text-white sm:p-10">
                <span className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  {brandValue.eyebrow}
                </span>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{brandValue.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-white/80">{brandValue.description}</p>
              </div>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="h-full rounded-2xl bg-accent p-8 text-white sm:p-10">
                <span className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  {runnerValue.eyebrow}
                </span>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{runnerValue.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-white/90">{runnerValue.description}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
