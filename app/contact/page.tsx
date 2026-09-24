import type { Metadata } from "next";
import SectionIntro from "@/components/SectionIntro";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Lancer ma campagne — Wearn",
  description: "Parlez-nous de votre marque et de vos objectifs, notre équipe revient vers vous rapidement pour lancer votre campagne.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[840px] px-6 py-16 sm:px-8 lg:py-24">
      <div className="rounded-[28px] bg-surface-muted p-6 sm:p-10 lg:p-14">
        <SectionIntro
          eyebrow="Contact"
          title="Lancer ma campagne"
          subtitle="Parlez-nous de votre marque et de vos objectifs. Notre équipe revient vers vous rapidement pour construire votre campagne."
        />
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
