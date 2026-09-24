import CTAButton, { type CTAVariant } from "./CTAButton";
import Reveal from "./Reveal";

type FinalCTAButton = {
  label: string;
  href: string;
  variant?: CTAVariant;
};

type FinalCTAProps = {
  eyebrow?: string;
  title: string;
  buttons: FinalCTAButton[];
};

export default function FinalCTA({ eyebrow, title, buttons }: FinalCTAProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
      <Reveal>
        <div className="rounded-xl bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          {eyebrow && (
            <span className="mb-3 inline-block text-sm font-medium text-white/60">{eyebrow}</span>
          )}
          <h2 className="mx-auto max-w-3xl text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]">
            {title}
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {buttons.map((button) => (
              <CTAButton
                key={button.label}
                href={button.href}
                variant={button.variant ?? "inverted"}
                size="lg"
              >
                {button.label}
              </CTAButton>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
