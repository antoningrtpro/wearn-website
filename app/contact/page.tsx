import type { Metadata } from "next";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/Eyebrow";
import Marquee from "@/components/Marquee";
import TargetsGrid from "@/components/TargetsGrid";
import SectionIntro from "@/components/SectionIntro";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Wearn, lancer ma campagne",
  description: "Parlez-nous de votre marque et de vos objectifs, notre équipe revient vers vous rapidement pour lancer votre campagne.",
};

// To fill in once the partner logos are provided.
const PARTNER_LOGOS: ReactNode[] = [];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
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

          <div className="rounded-[28px] bg-surface-muted p-6 sm:p-10 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="bg-[#F9A8D4]">
        <TargetsGrid
          id="avantages"
          eyebrow="Vos avantages"
          title="Pourquoi les marques choisissent Wearn"
          targets={[
            { title: "Visibilité répétée", description: "Votre marque est portée à chaque course, sur le terrain, sans se limiter à un seul événement." },
            { title: "Attractif financièrement", description: "Un coût maîtrisé et défini au devis, sans multiplier votre budget marketing." },
            { title: "Rapide à déployer", description: "Une campagne lancée en quelques jours, du ciblage jusqu'au jour de la course." },
          ]}
        />
      </div>

      <div className="bg-[#93C5FD]">
        <section id="comparatif" className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
          <SectionIntro eyebrow="Comparatif" title="Pourquoi Wearn plutôt qu'un stand" />
          <ComparisonTable
            headers={["Stand événementiel", "Micro-influence", "Wearn"]}
            highlightColumnIndex={2}
            rows={[
              { label: "Coût par contact", values: ["Élevé", "Variable", "Maîtrisé, défini au devis"] },
              { label: "Répétition de l'exposition", values: ["Un seul jour", "Un post, quelques heures", "À chaque course, avec de nouveaux coureurs"] },
              { label: "Durée de visibilité", values: ["Le temps de l'événement", "Un post, quelques heures", "Toute la course, en mouvement"] },
              { label: "Mise en place", values: ["Plusieurs semaines", "Négociation individuelle", "Devis sous 48h"] },
            ]}
          />
        </section>
      </div>
    </>
  );
}
