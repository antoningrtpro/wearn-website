import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";

export type Objection = {
  question: string;
  answer: string;
};

type ObjectionsSectionProps = {
  title: string;
  objections: Objection[];
};

export default function ObjectionsSection({ title, objections }: ObjectionsSectionProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <SectionIntro title={title} />

      <div className="mx-auto mt-12 grid max-w-3xl gap-4">
        {objections.map((item, i) => (
          <Reveal key={item.question} delayMs={i * 80}>
            <div className="rounded-lg border border-line border-l-4 border-l-accent bg-surface p-6">
              <p className="text-base font-semibold text-ink">{item.question}</p>
              <p className="mt-2 text-sm leading-[1.55] text-ink-2">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
