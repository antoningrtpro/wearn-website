import type { Metadata } from "next";
import HeroTwoCol from "@/components/HeroTwoCol";
import StatIcon from "@/components/StatIcon";
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
import SignatureBlock from "@/components/SignatureBlock";
import type { ActionCard } from "@/components/ActionCardDeck";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import EarningsExampleCard, { type EarningsExample } from "@/components/EarningsExampleCard";
import TargetsGrid from "@/components/TargetsGrid";
import BentoGrid from "@/components/BentoGrid";
import Icon from "@/components/Icons";
import ObjectionsSection, { type Objection } from "@/components/ObjectionsSection";
import MidCTA from "@/components/MidCTA";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import { RUNNER_SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wearn pour les coureurs — Courez, portez un logo, soyez payé",
  description:
    "Transformez vos courses en revenu complémentaire. Vous choisissez les campagnes, vous connaissez le montant avant d'accepter.",
};

const PARCOURS_SUB_BLOCKS: SubBlock[] = [
  {
    number: "01",
    title: "Vous recevez une proposition",
    paragraph: "Événement, emplacement, montant : tout est affiché avant de répondre.",
    mockup: (
      <MockupStatusNotification
        statusStep="Nouvelle proposition"
        statusSubinfo="Marathon de Paris · 45 €"
        notifText="Une marque de nutrition sportive vous propose une campagne."
        primaryLabel="Voir"
        secondaryLabel="Plus tard"
      />
    ),
  },
  {
    number: "02",
    title: "Vous acceptez",
    paragraph: "En un clic, sans engagement pour les suivantes.",
    mockup: (
      <MockupConversation
        proposalText="Marquage dos de t-shirt, Marathon de Paris, 45€."
        replyAvatar="Vs"
        replyText="J'accepte"
        recapLabel="Campagne confirmée"
        amount="45 €"
      />
    ),
  },
  {
    number: "03",
    title: "Vous confirmez la réception",
    paragraph: "Le marquage arrive directement chez vous, prêt à poser.",
    mockup: (
      <MockupApproval
        avatarLabel="Vs"
        identifier="Marquage Marathon de Paris"
        explanation="Marquage bien reçu, prêt à être posé avant la course."
        approveLabel="Confirmer"
        laterLabel="Plus tard"
      />
    ),
  },
  {
    number: "04",
    title: "Vous êtes payé",
    paragraph: "Le règlement arrive une fois la course terminée.",
    mockup: (
      <MockupSelectionModal
        title="Paiement"
        paramLabel="Montant"
        paramValue="45 €"
        cancelLabel="Détails"
        actionLabel="Reçu"
      />
    ),
  },
];

const ACTION_CARDS: ActionCard[] = [
  {
    avatarLabel: "NS",
    title: "Marque nutrition sportive",
    subtitle: "Marathon de Paris · Dos de t-shirt",
    description: "Emplacement disponible sur votre profil, événement dans votre ville. Montant confirmé avant validation.",
    tags: ["Paiement à J+2"],
    amount: "45 €",
    primaryLabel: "Accepter",
    confirmationText: "Campagne acceptée",
    ignoreReasons: ["Montant trop faible", "Événement trop loin", "Autre raison"],
  },
  {
    avatarLabel: "AS",
    title: "Marque assurance",
    subtitle: "Semi de Lyon · Manche",
    description: "Emplacement disponible sur votre profil, événement dans votre ville. Montant confirmé avant validation.",
    tags: ["Paiement à J+2"],
    amount: "22 €",
    primaryLabel: "Accepter",
    confirmationText: "Campagne acceptée",
    ignoreReasons: ["Montant trop faible", "Événement trop loin", "Autre raison"],
  },
  {
    avatarLabel: "TX",
    title: "Marque textile running",
    subtitle: "10km de Bordeaux · Short",
    description: "Emplacement disponible sur votre profil, événement dans votre ville. Montant confirmé avant validation.",
    tags: ["Paiement à J+2"],
    amount: "18 €",
    primaryLabel: "Accepter",
    confirmationText: "Campagne acceptée",
    ignoreReasons: ["Montant trop faible", "Événement trop loin", "Autre raison"],
  },
];

const EARNINGS_EXAMPLES: EarningsExample[] = [
  {
    name: "Marie, 34 ans",
    detail: "Marathon de Paris",
    story:
      "Un emplacement dos de t-shirt pour une marque de nutrition sportive lui a rapporté jusqu'à 45€ sur un seul événement.",
  },
  {
    name: "Thomas, 28 ans",
    detail: "Trail des Templiers",
    story:
      "En cumulant deux emplacements (manche + short) pour deux marques différentes sur la même course, il a touché 60€.",
  },
  {
    name: "Camille, 41 ans",
    detail: "Courses locales régulières",
    story:
      "En acceptant une proposition par mois en moyenne sur des courses de sa région, elle génère un complément de plus de 150€ sur une saison.",
  },
];

const OBJECTIONS: Objection[] = [
  {
    question: "Est-ce sérieux, pas une arnaque ?",
    answer:
      "Wearn est une plateforme avec un cadre clair : vous connaissez toujours le montant avant d'accepter, et vous êtes payé une fois votre course terminée, jamais avant.",
  },
  {
    question: "Le marquage va-t-il abîmer mon t-shirt ou me gêner en course ?",
    answer:
      "Non, il s'agit d'un thermocollant temporaire conçu pour un usage ponctuel, sans impact sur le tissu ni sur votre confort de course.",
  },
  {
    question: "Suis-je obligé d'accepter si je m'inscris ?",
    answer:
      "Non, absolument aucun engagement. Vous voyez chaque proposition et décidez librement d'accepter ou non.",
  },
  {
    question: "Dois-je déclarer cette rémunération ?",
    answer:
      "Selon le montant perçu, votre situation peut relever de la déclaration en micro-entrepreneur. Nous vous accompagnons sur ce point lors de votre inscription.",
  },
  {
    question: "À quelle fréquence vais-je recevoir des propositions ?",
    answer:
      "Ça dépend des campagnes en cours et de votre profil (ville, disponibilités, courses prévues) — plus vous complétez votre profil, plus vous augmentez vos chances de recevoir des propositions adaptées.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Sur quels types de courses puis-je participer ?",
    answer:
      "Marathons, semi-marathons, trails, courses locales — tout type d'événement running partout en France.",
  },
  {
    question: "Puis-je porter plusieurs marquages pour plusieurs marques sur une même course ?",
    answer: "Oui, si plusieurs emplacements disponibles sur votre tenue sont validés séparément.",
  },
  {
    question: "Que se passe-t-il si je n'arrive pas à prendre ma photo le jour J ?",
    answer: "Contactez-nous rapidement, cela peut affecter votre rémunération pour cette campagne.",
  },
  {
    question: "Puis-je me désinscrire à tout moment ?",
    answer: "Oui, sans condition.",
  },
];

export default function CoureursPage() {
  return (
    <>
      <HeroTwoCol
        id="hero"
        chipLabel="Nouveau"
        tickerItems={["Un revenu à chaque course", "Aucun engagement", "Montant connu avant d'accepter"]}
        tickerHref="#comment-ca-marche"
        title="Courez. Portez un logo. Soyez payé."
        chapo="Vous courez déjà régulièrement. Transformez chaque sortie en revenu complémentaire, sans engagement."
        stats={[
          { icon: <StatIcon name="trending-up" />, text: "Jusqu'à 45 €/course" },
          { icon: <StatIcon name="zap" />, text: "0 engagement" },
          { icon: <StatIcon name="percent" />, text: "100% liberté" },
        ]}
        entryQuestion="Combien de courses faites-vous par an ?"
        entryButtonLabel="Estimer mon gain"
        entryStepQuestion="Votre fréquence de course"
        entryOptions={[
          { label: "1 à 5 courses", result: "Un complément ponctuel, sans aucune contrainte." },
          { label: "6 à 15 courses", result: "De quoi générer un complément régulier tout au long de la saison." },
          { label: "Plus de 15 courses", result: "Vous multipliez les opportunités de campagnes à chaque sortie." },
        ]}
        entryCtaLabel="Devenir coureur partenaire"
        entryCtaHref={RUNNER_SIGNUP_URL}
        reassurance="Exemples illustratifs à titre indicatif, les montants réels varient selon chaque campagne."
        mediaLabel="Photo à intégrer : un coureur avec un marquage de marque visible sur sa tenue"
        kpiLabel="Coureurs partenaires"
        kpiValue={500}
        kpiSuffix="+"
      />

      <ProblemSolution
        id="pourquoi"
        eyebrow="La plateforme"
        title="Courir a un coût, rarement un revenu"
        painParagraph="Inscriptions, équipement, déplacements : la pratique régulière de la course à pied représente un vrai budget, sans contrepartie."
        answerParagraph="Wearn transforme chaque course en opportunité de revenu, sans changer votre pratique ni votre matériel."
      />

      <FeatureFilteredList
        id="comment-ca-marche"
        number="01"
        name="Propositions"
        title="Des campagnes adaptées à votre profil"
        paragraph="Ville, distance, marque : vous ne voyez que les propositions qui vous correspondent."
        searchQuery="Marathon, Paris, dos de t-shirt"
        filters={["Ville : Paris", "Format : Marathon", "Emplacement : Dos"]}
        columnLabels={["Campagne", "Montant"]}
        rows={[
          { avatarLabel: "NS", name: "Marque nutrition sportive", meta: ["Marathon de Paris", "Dos de t-shirt"], value: "45 €" },
          { avatarLabel: "AS", name: "Marque assurance", meta: ["Semi de Lyon", "Manche"], value: "22 €" },
          { avatarLabel: "TX", name: "Marque textile", meta: ["10km de Bordeaux", "Short"], value: "18 €" },
          {
            avatarLabel: "FT",
            name: "Application fitness",
            meta: ["Trail du Ventoux", "Dossard"],
            muted: true,
            warningLabel: "Complet",
          },
        ]}
        counterLabel="campagnes analysées"
        counterValue={340}
      />

      <FeatureSubBlocks
        id="parcours"
        number="02"
        name="Parcours"
        title="Du premier clic au paiement"
        paragraph="Chaque étape est simple, sans surprise à aucun moment."
        subBlocks={PARCOURS_SUB_BLOCKS}
      />

      <FeatureDashboard
        id="dashboard"
        number="03"
        name="Suivi"
        title="Vos gains, course après course"
        paragraph="Suivez vos campagnes en cours et vos revenus cumulés depuis votre inscription."
        benefits={[
          { title: "Un revenu qui s'accumule", description: "Chaque nouvelle course s'ajoute à la précédente." },
          { title: "Un historique complet", description: "Retrouvez chaque campagne acceptée et son montant." },
          { title: "Un paiement automatique", description: "Le règlement est déclenché dès la course validée." },
        ]}
        mainKpiLabel="Revenu cumulé"
        mainKpiValue={385}
        mainKpiSuffix=" €"
        mainKpiDelta="+45 € ce mois-ci"
        miniKpis={[
          { value: 9, label: "Courses réalisées" },
          { value: 4, label: "Marques différentes" },
          { value: 1, label: "Campagne en cours" },
        ]}
        rankingTitle="Dernières campagnes"
        ranking={[
          { avatarLabel: "NS", name: "Marathon de Paris", category: "Nutrition sportive", volume: "Dos de t-shirt", amount: "45 €" },
          { avatarLabel: "AS", name: "Semi de Lyon", category: "Assurance", volume: "Manche", amount: "22 €" },
          { avatarLabel: "TX", name: "10km de Bordeaux", category: "Textile", volume: "Short", amount: "18 €" },
        ]}
      />

      <SignatureBlock
        id="validation"
        eyebrow="Vous restez libre"
        title="Vous choisissez chaque campagne"
        chapo="Aucune proposition n'est imposée : vous acceptez ou refusez en toute liberté."
        stepsTitle="Comment ça marche"
        steps={[
          { number: "01", title: "Vous vous inscrivez", description: "Vos infos, votre profil, vos préférences d'emplacement." },
          { number: "02", title: "Vous recevez une proposition", description: "Événement, emplacement, montant proposé — vous voyez tout avant de répondre." },
          { number: "03", title: "Vous acceptez ou refusez", description: "Aucune obligation, vous décidez librement." },
          { number: "04", title: "Vous êtes payé", description: "Une fois la course terminée et votre participation confirmée." },
        ]}
        cards={ACTION_CARDS}
        finalTitle="Tout est traité"
        finalSummaryTemplate="{total} propositions examinées → {actioned} acceptées"
        activityRowOne={[
          "Camille a accepté une campagne à Nantes",
          "Marquage envoyé pour le Marathon de Paris",
          "Paiement reçu pour le Trail des Templiers",
          "Nouvelle proposition disponible à Lyon",
        ]}
        activityRowTwo={[
          "Thomas a validé sa participation",
          "45 € crédités après une course à Paris",
          "Nouvelle marque disponible à Bordeaux",
          "Marquage confirmé pour un semi à Lyon",
        ]}
      />

      <section id="exemples-gains" className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
        <SectionIntro
          eyebrow="En vrai"
          title="Ce que ça peut représenter"
          subtitle="Le montant dépend de la marque, de l'emplacement, de l'événement et du ciblage demandé — chaque campagne est différente. Voici quelques exemples pour vous donner une idée."
        />
        {/* Ne pas retirer : mention légale sur le caractère illustratif des exemples */}
        <p className="mx-auto mt-3 max-w-2xl text-center text-[13px] text-ink-3">
          Exemples illustratifs à titre indicatif, les montants réels varient selon chaque campagne.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {EARNINGS_EXAMPLES.map((example, i) => (
            <Reveal key={example.name} delayMs={i * 100}>
              <EarningsExampleCard example={example} />
            </Reveal>
          ))}
        </div>
      </section>

      <TargetsGrid
        id="profils"
        eyebrow="Pour qui"
        title="Quel que soit votre niveau"
        targets={[
          { title: "Coureur occasionnel", description: "Une ou deux courses par an suffisent pour commencer." },
          { title: "Coureur régulier", description: "Un complément qui s'accumule à chaque sortie." },
          { title: "Traileur confirmé", description: "Des emplacements variés sur des formats plus longs." },
        ]}
      />

      <BentoGrid
        id="courses"
        eyebrow="Le terrain"
        title="Sur quel type de course ?"
        paragraph="Wearn est présent sur tous les formats, partout en France."
        featured={{
          icon: <Icon name="marathon" />,
          chipLabel: "Le plus courant",
          name: "Marathons",
          description: "",
          longDescription: "Le format le plus demandé par les marques, avec la plus grande visibilité.",
          linkLabel: "Voir les exemples de gains",
          linkHref: "#exemples-gains",
        }}
        items={[
          { icon: <Icon name="semi" />, name: "Semi-marathons", description: "Un format populaire, très représenté." },
          { icon: <Icon name="trail" />, name: "Trails", description: "Emplacements variés, formats plus longs." },
          { icon: <Icon name="local-race" />, name: "Courses locales", description: "Idéal pour commencer près de chez vous." },
        ]}
        note="Toute la France, sur tout type d'événement running."
        buttonLabel="Devenir coureur partenaire"
        buttonHref={RUNNER_SIGNUP_URL}
      />

      <ObjectionsSection title="Ce qu'on nous demande souvent" objections={OBJECTIONS} />

      <MidCTA
        title="Prêt à courir pour une bonne cause — la vôtre ?"
        buttons={[{ label: "Devenir coureur partenaire", href: RUNNER_SIGNUP_URL, variant: "primary" }]}
      />

      <FAQAccordion title="FAQ coureur" items={FAQ_ITEMS} />

      <FinalCTA
        eyebrow="Wearn pour les coureurs"
        title="Votre prochaine course peut aussi vous rapporter"
        buttons={[{ label: "Devenir coureur partenaire", href: RUNNER_SIGNUP_URL, variant: "inverted" }]}
      />
    </>
  );
}
