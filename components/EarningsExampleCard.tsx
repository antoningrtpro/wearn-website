export type EarningsExample = {
  name: string;
  detail: string;
  story: string;
};

type EarningsExampleCardProps = {
  example: EarningsExample;
};

export default function EarningsExampleCard({ example }: EarningsExampleCardProps) {
  return (
    <div className="h-full rounded-lg border border-line bg-surface p-6">
      <p className="font-semibold text-ink">{example.name}</p>
      <p className="text-sm text-accent-dark">{example.detail}</p>
      <p className="mt-3 text-sm leading-[1.5] text-ink-2">{example.story}</p>
    </div>
  );
}
