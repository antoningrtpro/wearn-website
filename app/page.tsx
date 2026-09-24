import HeroTwoCol from "@/components/HeroTwoCol";
import EventsMarquee from "@/components/EventsMarquee";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureFilteredList from "@/components/FeatureFilteredList";
import FeatureSubBlocks, { type SubBlock } from "@/components/FeatureSubBlocks";
import {
  MockupStatusNotification,
  MockupConversation,
  MockupSelectionModal,
  MockupApproval,
} from "@/components/SubBlockMockups";
import FeatureDashboard from "@/components/FeatureDashboard";
import ValueProposition from "@/components/ValueProposition";
import TargetsGrid from "@/components/TargetsGrid";
import SectionIntro from "@/components/SectionIntro";
import ComparisonTable from "@/components/ComparisonTable";
import FinalCTA from "@/components/FinalCTA";
import StatIcon from "@/components/StatIcon";
import { ANNONCEURS_PATH, CONTACT_PATH, COUREURS_PATH } from "@/lib/constants";

const SUB_BLOCKS: SubBlock[] = [
  {
    number: "01",
    title: "La proposition arrive",
    paragraph: "Le coureur reçoit une notification avec l'événement, l'emplacement et le montant proposé.",
    mockup: (
      <MockupStatusNotification
        statusStep="Nouvelle proposition"
        statusSubinfo="Marathon de Paris · Dos de t-shirt"
        notifText="Vous avez reçu une nouvelle proposition de campagne."
        primaryLabel="Voir"
        secondaryLabel="Plus tard"
      />
    ),
  },
  {
    number: "02",
    title: "Le coureur valide",
    paragraph: "Il accepte ou refuse en toute connaissance de cause, montant compris.",
    mockup: (
      <MockupConversation
        proposalText="Marquage dos de t-shirt, Marathon de Paris, 12€."
        replyAvatar="TL"
        replyText="J'accepte"
        recapLabel="Campagne confirmée"
        amount="12 €"
      />
    ),
  },
  {
    number: "03",
    title: "L'emplacement est fixé",
    paragraph: "La marque valide la sélection finale de coureurs pour son emplacement.",
    mockup: (
      <MockupSelectionModal
        title="Sélection des coureurs"
        avatarLabels={["ML", "CD", "SL"]}
        extraCount={197}
        paramLabel="Emplacement"
        paramValue="Dos de t-shirt"
        cancelLabel="Annuler"
        actionLabel="Valider"
        actionCount={200}
      />
    ),
  },
  {
    number: "04",
    title: "La réception est confirmée",
    paragraph: "Le coureur confirme avoir reçu son marquage, prêt pour le jour J.",
    mockup: (
      <MockupApproval
        avatarLabel="TL"
        identifier="Thomas L."
        explanation="Marquage bien reçu, prêt à être posé avant la course."
        approveLabel="Confirmer"
        laterLabel="Plus tard"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      <HeroTwoCol
        id="hero"
        chipLabel="Nouveau"
        tickerItems={[
          "Ciblage précis par ville et âge",
          "Un revenu à chaque course",
          "Présence répétée, course après course",
        ]}
        tickerHref="#comment-ca-marche"
        title="Votre marque, portée par des milliers de coureurs"
        chapo="Wearn équipe des coureurs inscrits à des courses partout en France avec un marquage à votre effigie. Vous choisissez l'événement et le ciblage et notre équipe s'occupe du reste !"
        stats={[
          { icon: <StatIcon name="users" />, text: "500+ coureurs" },
          { icon: <StatIcon name="trending-up" />, text: "30+ marques" },
          { icon: <StatIcon name="map-pin" />, text: "15 villes" },
        ]}
        ctaButtons={[
          { label: "Je suis une marque", href: ANNONCEURS_PATH, variant: "primary" },
          { label: "Je suis coureur", href: COUREURS_PATH, variant: "secondary" },
        ]}
        reassurance="Sans engagement, vous choisissez toujours ce qui vous convient."
        mediaLabel="Photo à intégrer : un coureur avec un marquage de marque visible sur sa tenue"
        mediaImageUrl="https://images.pexels.com/photos/10313674/pexels-photo-10313674.jpeg"
        kpiLabel="Coureurs actifs"
        kpiValue={5000}
        kpiSuffix="+"
      />

      <EventsMarquee
        reassurance="Wearn est présent sur des courses partout en France"
        events={[
          "Marathon de Paris",
          "Trail des Templiers",
          "Semi-marathon de Lyon",
          "10km de Bordeaux",
          "Marathon de Nantes",
          "Trail du Ventoux",
        ]}
      />

      <ProblemSolution
        id="probleme"
        eyebrow="La plateforme"
        title="Le sponsoring classique a un angle mort"
        painParagraph="Un stand touche qui passe devant, pas qui vous ressemble. Un naming coûte cher pour une visibilité diffuse. Une opération d'influence ponctuelle ne dure qu'un post."
        answerParagraph="Wearn vous met devant l'audience exacte que vous ciblez, pendant toute la durée de l'événement — et à nouveau à la course suivante."
      />

      <FeatureFilteredList
        id="comment-ca-marche"
        number="01"
        name="Ciblage"
        title="Notre équipe trouve les coureurs qu'il vous faut"
        eyebrowColor="green"
        paragraph="Vous choisissez la course et le profil recherché. Notre équipe identifie, parmi les coureurs inscrits, ceux qui correspondent à votre ciblage et s'occupe de les contacter."
        searchQuery="Femmes, 25-35 ans, Paris"
        filters={["Âge : 25-35", "Sexe : Femme", "Ville : Paris"]}
        columnLabels={["Coureur", "Score"]}
        rows={[
          { avatarLabel: "ML", name: "Marie L.", meta: ["Paris", "Marathon", "Régulière"], value: "94" },
          { avatarLabel: "CD", name: "Camille D.", meta: ["Paris", "10km", "Occasionnelle"], value: "88" },
          {
            avatarLabel: "JN",
            name: "Julie N.",
            meta: ["Paris", "Trail", "Confirmée"],
            muted: true,
            warningLabel: "Indisponible",
          },
        ]}
        counterLabel="coureurs analysés"
        counterValue={2480}
      />

      <FeatureSubBlocks
        id="parcours"
        number="02"
        name="Parcours"
        title="De la demande au paiement, sans friction"
        eyebrowColor="blue"
        paragraph="Chaque étape est pensée pour rester simple, des deux côtés."
        subBlocks={SUB_BLOCKS}
      />

      <FeatureDashboard
        id="dashboard"
        number="03"
        name="Suivi"
        title="Un suivi clair, pour les marques et les coureurs"
        eyebrowColor="purple"
        benefits={[
          { title: "Une photo horodatée à chaque événement", description: "Le coureur confirme sa présence et la visibilité du marquage directement depuis l'application." },
          { title: "Une validation par notre équipe", description: "Chaque participation est vérifiée avant d'être validée, pour garantir la fiabilité de chaque campagne." },
          { title: "Un paiement automatique", description: "Dès la validation, la rémunération du coureur est déclenchée sans délai." },
        ]}
        mainKpiLabel="Coureurs engagés"
        mainKpiValue={512}
        mainKpiDelta="+18% ce mois-ci"
        miniKpis={[
          { value: 15, label: "Villes couvertes" },
          { value: 32, label: "Courses prévues" },
          { value: 92, suffix: "%", label: "Taux d'acceptation" },
        ]}
        rankingTitle="Dernières courses"
        ranking={[
          { avatarLabel: "MP", name: "Marathon de Paris", category: "Marathon", volume: "200 coureurs", amount: "2 400 €" },
          { avatarLabel: "TT", name: "Trail des Templiers", category: "Trail", volume: "80 coureurs", amount: "960 €" },
          { avatarLabel: "SL", name: "Semi de Lyon", category: "Semi", volume: "120 coureurs", amount: "1 440 €" },
        ]}
      />

      <ValueProposition
        id="avantages"
        eyebrow="La proposition"
        title="Plus de visibilité, moins de dépenses"
        subtitle="Une même mécanique, un bénéfice concret de chaque côté."
        brandValue={{
          eyebrow: "Pour les marques",
          title: "Une visibilité renforcée, un coût maîtrisé",
          description: "Vous gagnez en présence sur le terrain, course après course, sans multiplier votre budget marketing.",
        }}
        runnerValue={{
          eyebrow: "Pour les coureurs",
          title: "Un dossard qui coûte moins cher, voire rien du tout",
          description: "Les revenus perçus permettent de réduire, voire de rembourser intégralement, le prix de votre inscription à la course.",
        }}
      />

      <div className="bg-[#F9A8D4]">
        <TargetsGrid
          eyebrow="Pour qui"
          title="Wearn s'adresse à deux mondes"
          targets={[
            { title: "Marques nationales", description: "Nutrition sportive, assurance, banque : une audience sportive engagée, ciblée précisément." },
            { title: "Marques locales", description: "Commerces et enseignes qui veulent être vus sur leur territoire, course après course." },
            { title: "Coureurs de tous niveaux", description: "Du joggeur occasionnel au trailer confirmé, chacun peut rentabiliser ses dossards." },
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

      <div className="bg-[#86EFAC]">
        <FinalCTA
          title="Rejoignez ceux qui courent déjà avec Wearn"
          buttons={[
            { label: "Lancer ma campagne", href: CONTACT_PATH, variant: "inverted" },
            { label: "Devenir coureur", href: COUREURS_PATH, variant: "link-inverted" },
          ]}
        />
      </div>
    </>
  );
}
