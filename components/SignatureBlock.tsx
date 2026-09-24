import Reveal from "./Reveal";
import SectionIntro from "./SectionIntro";
import ActionCardDeck, { type ActionCard } from "./ActionCardDeck";
import ActivityTicker from "./ActivityTicker";

type StepItem = {
  number: string;
  title: string;
  description: string;
};

type SignatureBlockProps = {
  id?: string;
  eyebrow: string;
  title: string;
  chapo: string;
  stepsTitle: string;
  steps: StepItem[];
  cards: ActionCard[];
  finalTitle: string;
  finalSummaryTemplate: string;
  activityRowOne: string[];
  activityRowTwo: string[];
};

export default function SignatureBlock({
  id,
  eyebrow,
  title,
  chapo,
  stepsTitle,
  steps,
  cards,
  finalTitle,
  finalSummaryTemplate,
  activityRowOne,
  activityRowTwo,
}: SignatureBlockProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <div className="rounded-[28px] bg-surface-muted p-6 sm:p-10 lg:p-14">
        <SectionIntro eyebrow={eyebrow} title={title} subtitle={chapo} />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-xl font-semibold text-ink">{stepsTitle}</h3>
            <ol className="mt-6 divide-y divide-line border-t border-line">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-4 py-4">
                  <span className="text-sm font-semibold text-ink-3">{step.number}</span>
                  <div>
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm leading-[1.5] text-ink-2">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delayMs={150} className="h-full">
            <ActionCardDeck cards={cards} finalTitle={finalTitle} finalSummaryTemplate={finalSummaryTemplate} />
          </Reveal>
        </div>

        <ActivityTicker rowOne={activityRowOne} rowTwo={activityRowTwo} />
      </div>
    </section>
  );
}
