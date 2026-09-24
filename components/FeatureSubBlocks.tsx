import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export type SubBlock = {
  number: string;
  title: string;
  paragraph: string;
  mockup: React.ReactNode;
};

type FeatureSubBlocksProps = {
  id?: string;
  number: string;
  name: string;
  title: string;
  paragraph: string;
  subBlocks: SubBlock[];
  eyebrowColor?: "default" | "green" | "blue" | "purple";
};

export default function FeatureSubBlocks({
  id,
  number,
  name,
  title,
  paragraph,
  subBlocks,
  eyebrowColor = "default",
}: FeatureSubBlocksProps) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <Reveal className="max-w-[720px]">
        <Eyebrow color={eyebrowColor}>
          {number} · {name}
        </Eyebrow>
        <h3 className="mt-4 text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[32px]">
          {title}
        </h3>
        <p className="mt-4 text-base leading-[1.55] text-ink-2">{paragraph}</p>
      </Reveal>

      <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0">
        {subBlocks.map((block, i) => (
          <Reveal
            key={block.number}
            delayMs={i * 100}
            className="w-[85%] shrink-0 snap-start sm:w-auto sm:shrink"
          >
            <div className="h-full rounded-2xl bg-surface-muted p-6 sm:p-8">
              <span className="text-sm font-medium text-ink-3">{block.number}</span>
              <h4 className="mt-2 text-lg font-semibold text-ink">{block.title}</h4>
              <p className="mt-1 text-sm leading-[1.5] text-ink-2">{block.paragraph}</p>
              <div className="mt-5">{block.mockup}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
