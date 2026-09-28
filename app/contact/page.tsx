import type { Metadata } from "next";
import type { ReactNode } from "react";
import SectionIntro from "@/components/SectionIntro";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Wearn, lancer ma campagne",
  description: "Parlez-nous de votre marque et de vos objectifs, notre équipe revient vers vous rapidement pour lancer votre campagne.",
};

// To fill in once the partner logos are provided.
const PARTNER_LOGOS: ReactNode[] = [];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <Eyebrow>Découvrir Wearn</Eyebrow>
          <h1 className="mt-6 max-w-md text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[38px]">
            Donnez de la visibilité à votre marque grâce à Wearn.
          </h1>
          <p className="mt-5 max-w-md text-base leading-[1.6] text-ink-2 sm:text-lg">
            Découvrez comment notre équipe vous accompagnera dans le déploiement d&apos;une activation le temps d&apos;un événement et vous fera gagner en visibilité auprès de votre public cible !
          </p>

          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-3">
              Rejoignez les marques qui développent leur visibilité avec Wearn
            </p>
            {PARTNER_LOGOS.length > 0 ? (
              <Marquee className="mt-6" items={PARTNER_LOGOS} durationSeconds={40} gapClassName="gap-16" />
            ) : (
              <div className="mt-6 flex h-10 items-center rounded-lg border border-dashed border-line px-4 text-sm text-ink-3">
                Logos à venir
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[28px] bg-surface-muted p-6 sm:p-10 lg:p-14">
          <SectionIntro
            align="left"
            eyebrow="Contact"
            title="Lancer ma campagne"
            subtitle="Parlez-nous de votre marque et de vos objectifs. Notre équipe revient vers vous rapidement pour construire votre campagne."
          />
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
