import CTAButton, { type CTAVariant } from "./CTAButton";
import Reveal from "./Reveal";

type MidCTAButton = {
  label: string;
  href: string;
  variant?: CTAVariant;
};

type MidCTAProps = {
  title: string;
  buttons: MidCTAButton[];
};

export default function MidCTA({ title, buttons }: MidCTAProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10 text-center sm:px-8 lg:py-12">
      <Reveal>
        <h2 className="mx-auto max-w-2xl text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-ink sm:text-[32px]">
          {title}
        </h2>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {buttons.map((button) => (
            <CTAButton key={button.label} href={button.href} variant={button.variant ?? "primary"} size="lg">
              {button.label}
            </CTAButton>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
