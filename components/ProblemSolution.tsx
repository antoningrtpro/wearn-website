import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

type ProblemSolutionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  painParagraph: string;
  answerParagraph: string;
};

export default function ProblemSolution({ id, eyebrow, title, painParagraph, answerParagraph }: ProblemSolutionProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[38px]">
            {title}
          </h2>
        </Reveal>
        <Reveal delayMs={100} className="space-y-4">
          <p className="text-lg leading-[1.5] text-ink-2">{painParagraph}</p>
          <p className="text-lg leading-[1.5] text-ink-2">{answerParagraph}</p>
        </Reveal>
      </div>
    </section>
  );
}
