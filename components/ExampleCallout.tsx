import Reveal from "./Reveal";

type ExampleCalloutProps = {
  eyebrow: string;
  children: React.ReactNode;
};

export default function ExampleCallout({ eyebrow, children }: ExampleCalloutProps) {
  return (
    <Reveal className="mx-auto mt-12 max-w-3xl">
      <div className="rounded-lg border border-line bg-surface-muted p-6 sm:p-8">
        <span className="text-sm font-medium text-ink-3">{eyebrow}</span>
        <p className="mt-3 text-base leading-[1.5] text-ink sm:text-lg">{children}</p>
      </div>
    </Reveal>
  );
}
