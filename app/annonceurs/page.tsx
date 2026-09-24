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
import TargetsGrid from "@/components/TargetsGrid";
import ComparisonTable from "@/components/ComparisonTable";
import SectionIntro from "@/components/SectionIntro";
import ObjectionsSection, { type Objection } from "@/components/ObjectionsSection";
import MidCTA from "@/components/MidCTA";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import { CONTACT_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Wearn pour les marques — Ciblage et présence répétée",
  description:
    "Ciblez précisément qui porte votre logo lors des courses à pied — âge, sexe, ville, niveau — et répétez votre présence à chaque événement.",
};

const DEPLOY_SUB_BLOCKS: SubBlock[] = [
  {
    number: "01",
    title: "Vous définissez votre ciblage",
    paragraph: "Profil des coureurs, emplacement, nombre souhaité, événement visé.",
    mockup: (
      <MockupStatusNotification
        statusStep="Ciblage en cours"
        statusSubinfo="Emplacement : dos de t-shirt"
        notifText="Votre ciblage a été enregistré."
        primaryLabel="Continuer"
        secondaryLabel="Modifier"
      />
    ),
  },
  {
    number: "02",
    title: "Vous recevez un devis",
    paragraph: "Basé sur votre ciblage exact, sous 48h.",
    mockup: (
      <MockupConversation
        proposalText="Votre devis est prêt : 200 coureurs, dos de t-shirt."
        replyAvatar="W"
        replyText="Devis accepté"
        recapLabel="Devis validé"
        amount="1 800 €"
      />
    ),
  },
  {
    number: "03",
    title: "Vous validez les profils",
    paragraph: "Vous voyez chaque coureur proposé et validez individuellement.",
    mockup: (
      <MockupSelectionModal
        title="Profils proposés"
        avatarLabels={["KD", "PB", "AR"]}
        extraCount={197}
        paramLabel="Événement"
        paramValue="Semi de Lyon"
        cancelLabel="Annuler"
        actionLabel="Valider"
        actionCount={200}
      />
    ),
  },
  {
    number: "04",
    title: "Vous recevez un récapitulatif",
    paragraph: "Les visuels de chaque coureur ayant porté votre marque, réunis dans un rapport simple.",
    mockup: (
      <MockupApproval
        avatarLabel="W"
        identifier="Récapitulatif de campagne"
        explanation="Le détail de chaque coureur ayant porté votre marque le jour de l'événement."
        approveLabel="Télécharger"
        laterLabel="Plus tard"
      />
    ),
  },
];

const ACTION_CARDS: ActionCard[] = [
  {
    avatarLabel: "KD",
    title: "Karim D.",
    subtitle: "Lyon · Semi · Confirmé",
    description: "Disponible pour la plupart des courses lyonnaises, avec un bon historique de participation.",
    tags: ["Inscrit depuis 2023", "30 courses"],
    primaryLabel: "Valider",
    confirmationText: "Karim D. ajouté à la campagne",
    ignoreReasons: ["Profil non disponible", "Ne correspond pas au ciblage", "Autre raison"],
  },
  {
    avatarLabel: "4",
    title: "4 coureurs à Villeurbanne",
    subtitle: "Proposés pour le 10km",
    description: "Tous basés à Villeurbanne ou à proximité, disponibles pour la date de l'événement, sans conflit avec une autre marque.",
    entities: [
      { avatarLabel: "AR", name: "Antoine R.", meta: ["Villeurbanne", "10km"] },
      { avatarLabel: "LM", name: "Léa M.", meta: ["Villeurbanne", "10km"] },
    ],
    extraCount: 2,
    primaryLabel: "Valider les 4",
    confirmationText: "4 coureurs ajoutés à la campagne",
    ignoreReasons: ["Trop de coureurs proposés", "Ciblage à ajuster", "Autre raison"],
  },
  {
    avatarLabel: "PB",
    title: "Paul B.",
    subtitle: "Lyon · Trail · Confirmé",
    description: "Expérience confirmée sur trail, avec l'emplacement demandé disponible sur son profil.",
    tags: ["Inscrit depuis 2024", "18 courses"],
    primaryLabel: "Valider",
    confirmationText: "Paul B. ajouté à la campagne",
    ignoreReasons: ["Profil non disponible", "Ne correspond pas au ciblage", "Autre raison"],
  },
];

const OBJECTIONS: Objection[] = [
  {
    question: "Comment être sûr que le coureur porte vraiment mon logo ?",
    answer:
      "Chaque coureur valide sa participation en connaissance de cause et s'engage à porter votre visuel pendant toute la course. Une campagne non honorée n'est pas facturée.",
  },
  {
    question: "Et si peu de coureurs acceptent ma campagne ?",
    answer:
      "Nous sourçons systématiquement une marge de coureurs supplémentaire par rapport à votre demande, avec remplacement en cas de désistement.",
  },
  {
    question: "Combien de temps pour lancer une campagne ?",
    answer:
      "Devis sous 48h après votre demande, déploiement terrain en 7 à 10 jours selon la taille de la campagne.",
  },
  {
    question: "Sur quel type d'événements pouvez-vous opérer ?",
    answer: "Marathons, semi-marathons, trails et courses locales, partout en France.",
  },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quel est le budget minimum pour une campagne ?",
    answer:
      "Aucun minimum imposé, le devis s'adapte à votre ciblage et au nombre de coureurs souhaité.",
  },
  {
    question: "Comment se fait le paiement ?",
    answer:
      "Par virement ou facture, après validation du devis et avant déploiement de la campagne.",
  },
  {
    question: "Puis-je cibler plusieurs profils dans une même campagne ?",
    answer:
      "Oui, vous pouvez combiner plusieurs ciblages (ex. hommes et femmes, tranches d'âge différentes) au sein d'une même demande.",
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait des profils proposés ?",
    answer:
      "Vous validez chaque profil individuellement, vous pouvez refuser sans justification.",
  },
];

export default function AnnonceursPage() {
  return (
    <>
      <HeroTwoCol
        id="hero"
        chipLabel="Nouveau"
        tickerItems={["Ciblage par âge, sexe, ville, niveau", "Devis sous 48h", "Présence répétée à chaque course"]}
        tickerHref="#comment-ca-marche"
        title="Votre marque, portée par de vrais coureurs"
        chapo="Ciblez précisément qui porte votre logo et répétez votre présence à chaque nouvelle course."
        stats={[
          { icon: <StatIcon name="clock" />, text: "48h de devis" },
          { icon: <StatIcon name="calendar" />, text: "7-10 jours de déploiement" },
          { icon: <StatIcon name="users" />, text: "200+ coureurs" },
        ]}
        entryQuestion="Quel est votre budget approximatif ?"
        entryButtonLabel="Estimer mon ciblage"
        entryStepQuestion="Votre budget indicatif"
        entryOptions={[
          { label: "Moins de 500 €", result: "Un ciblage local, sur une ou deux courses, est tout à fait possible." },
          { label: "500 à 2000 €", result: "De quoi couvrir plusieurs courses avec un ciblage démographique précis." },
          { label: "Plus de 2000 €", result: "Une présence répétée sur plusieurs événements majeurs, avec un ciblage fin." },
        ]}
        entryCtaLabel="Lancer ma campagne"
        entryCtaHref={CONTACT_PATH}
        reassurance="Aucun minimum imposé, le devis s'adapte à votre ciblage."
        mediaLabel="Photo à intégrer : une marque visible sur plusieurs coureurs en course"
        kpiLabel="Marques accompagnées"
        kpiValue={30}
        kpiSuffix="+"
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
        title="Un ciblage plus fin qu'un panneau publicitaire"
        paragraph="Sexe, âge, ville, niveau : vous choisissez qui portera votre marque, jusqu'au dernier détail."
        searchQuery="Hommes, 30-45 ans, Lyon, niveau confirmé"
        filters={["Âge : 30-45", "Ville : Lyon", "Niveau : Confirmé"]}
        columnLabels={["Coureur", "Score"]}
        rows={[
          { avatarLabel: "KD", name: "Karim D.", meta: ["Lyon", "Semi", "Confirmé"], value: "91" },
          { avatarLabel: "PB", name: "Paul B.", meta: ["Lyon", "Trail", "Confirmé"], value: "85" },
          { avatarLabel: "AR", name: "Antoine R.", meta: ["Villeurbanne", "10km", "Régulier"], value: "79" },
          {
            avatarLabel: "NM",
            name: "Nicolas M.",
            meta: ["Lyon", "Marathon", "Confirmé"],
            muted: true,
            warningLabel: "Indisponible",
          },
        ]}
        counterLabel="profils analysés"
        counterValue={1860}
      />

      <FeatureSubBlocks
        id="deploiement"
        number="02"
        name="Déploiement"
        title="De la demande au déploiement, en 4 étapes"
        paragraph="Un parcours pensé pour aller vite, sans perdre en précision."
        subBlocks={DEPLOY_SUB_BLOCKS}
      />

      <FeatureDashboard
        id="dashboard"
        number="03"
        name="Suivi"
        title="Le suivi de votre campagne, en direct"
        paragraph="Suivez la progression de votre campagne du lancement au dernier kilomètre couru."
        benefits={[
          { title: "Une présence qui s'accumule", description: "Chaque nouvelle course ajoute de la visibilité à la précédente." },
          { title: "Un rapport à chaque campagne", description: "Retrouvez le détail de chaque coureur ayant porté votre marque." },
          { title: "Un coût maîtrisé", description: "Le montant est fixé au devis, sans surprise en cours de route." },
        ]}
        mainKpiLabel="Coureurs engagés"
        mainKpiValue={200}
        mainKpiDelta="Objectif atteint à 100%"
        miniKpis={[
          { value: 3, label: "Événements" },
          { value: 2, label: "Villes" },
          { value: 96, suffix: "%", label: "Taux d'acceptation" },
        ]}
        rankingTitle="Répartition par événement"
        ranking={[
          { avatarLabel: "SL", name: "Semi de Lyon", category: "Semi", volume: "120 coureurs", amount: "1 080 €" },
          { avatarLabel: "10K", name: "10km de Villeurbanne", category: "10km", volume: "50 coureurs", amount: "450 €" },
          { avatarLabel: "TR", name: "Trail du Pilat", category: "Trail", volume: "30 coureurs", amount: "270 €" },
        ]}
      />

      <SignatureBlock
        id="validation"
        eyebrow="Le cœur du système"
        title="Vous validez chaque profil"
        chapo="Aucun coureur n'est imposé : vous approuvez ou écartez chaque profil proposé."
        stepsTitle="Comment ça marche"
        steps={[
          { number: "01", title: "Vous définissez votre ciblage", description: "Profil des coureurs, emplacement, nombre souhaité, événement visé." },
          { number: "02", title: "Vous recevez un devis sur mesure", description: "Basé sur votre ciblage exact, sous 48h." },
          { number: "03", title: "Vous validez les profils proposés", description: "Vous voyez chaque coureur et validez individuellement." },
          { number: "04", title: "Vous recevez un récapitulatif", description: "Les visuels de chaque coureur ayant porté votre marque, réunis dans un rapport simple." },
        ]}
        cards={ACTION_CARDS}
        finalTitle="Tout est traité"
        finalSummaryTemplate="{total} profils examinés → {actioned} ajoutés à la campagne"
        activityRowOne={[
          "Devis envoyé pour un semi à Lyon",
          "Karim D. a rejoint une campagne",
          "200 coureurs ciblés pour un marathon",
          "Rapport disponible pour une campagne à Bordeaux",
        ]}
        activityRowTwo={[
          "Nouveau ciblage lancé à Villeurbanne",
          "Paul B. a validé sa participation",
          "Devis accepté pour un trail",
          "Marquage envoyé à 50 coureurs",
        ]}
      />

      <TargetsGrid
        id="cas-usage"
        eyebrow="Cas d'usage"
        title="Qui utilise Wearn"
        targets={[
          { title: "Nutrition sportive / compléments", description: "Visibilité directement sur le terrain de consommation de vos produits." },
          { title: "Assurance / banque", description: "Association à des valeurs d'effort et de dépassement de soi, ciblage démographique fin." },
          { title: "Textile / équipement running", description: "Contact direct avec votre cœur de cible, en conditions réelles." },
          { title: "Applications fitness / santé", description: "Acquisition qualifiée auprès d'une audience déjà engagée dans la pratique sportive." },
        ]}
      />

      <section id="comparatif" className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:py-16">
        <SectionIntro title="Pourquoi Wearn plutôt qu'un stand" />
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

      <ObjectionsSection title="Vos questions avant de vous lancer" objections={OBJECTIONS} />

      <MidCTA
        title="Une question, un besoin spécifique ?"
        buttons={[{ label: "Lancer ma campagne", href: CONTACT_PATH, variant: "primary" }]}
      />

      <FAQAccordion title="FAQ marque" items={FAQ_ITEMS} />

      <FinalCTA
        eyebrow="Wearn pour les marques"
        title="Prêt à mettre vos couleurs sur le terrain ?"
        buttons={[{ label: "Lancer ma campagne", href: CONTACT_PATH, variant: "inverted" }]}
      />
    </>
  );
}
