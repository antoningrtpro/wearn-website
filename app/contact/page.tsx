import type { Metadata } from "next";
import SectionIntro from "@/components/SectionIntro";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Lancer ma campagne — Wearn",
  description: "Parlez-nous de votre marque et de vos objectifs, notre équipe revient vers vous rapidement pour lancer votre campagne.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[720px] px-6 py-16 sm:px-8 lg:py-24">
      <SectionIntro
        eyebrow="Contact"
        title="Lancer ma campagne"
        subtitle="Parlez-nous de votre marque et de vos objectifs. Notre équipe revient vers vous rapidement pour construire votre campagne."
      />
      <div className="mt-12">
        <ContactForm />
      </div>
    </section>
  );
}
