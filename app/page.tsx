import HomeHero from "@/components/HomeHero";
import EventsMarquee from "@/components/EventsMarquee";
import EventLogo from "@/components/EventLogo";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureFilteredList from "@/components/FeatureFilteredList";
import FeatureSubBlocks, { type SubBlock } from "@/components/FeatureSubBlocks";
import {
  MockupStatusNotification,
  MockupConversation,
  MockupApproval,
} from "@/components/SubBlockMockups";
import FeatureDashboard from "@/components/FeatureDashboard";
import ValueProposition from "@/components/ValueProposition";
import TargetsGrid from "@/components/TargetsGrid";
import SectionIntro from "@/components/SectionIntro";
import ComparisonTable from "@/components/ComparisonTable";
import FinalCTA from "@/components/FinalCTA";
import StatIcon from "@/components/StatIcon";
import { CONTACT_PATH, COUREURS_PATH } from "@/lib/constants";

const SUB_BLOCKS: SubBlock[] = [
  {
    number: "01",
    title: "La proposition arrive",
    paragraph: "Le coureur reçoit une notification avec l'événement, l'emplacement du marquage et le montant proposé.",
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
    title: "La photo est envoyée",
    paragraph: "Le coureur envoie une photo depuis l'application pour confirmer sa participation, notre équipe valide en quelques heures.",
    wide: true,
    mockup: (
      <MockupApproval
        avatarLabel="TL"
        identifier="Thomas L."
        explanation="Envoyez une photo pour confirmer votre présence et la visibilité du marquage."
        approveLabel="Envoyer la photo"
        laterLabel="Plus tard"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      <HomeHero
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
          { icon: <StatIcon name="trending-up" />, text: "30+ marques" },
          { icon: <StatIcon name="calendar" />, text: "1000+ événements sportifs" },
          { icon: <StatIcon name="percent" />, text: "100% de visibilité" },
        ]}
        mediaLabel="Photo à intégrer : un coureur avec un marquage de marque visible sur sa tenue"
        mediaImageUrl="https://images.pexels.com/photos/10313674/pexels-photo-10313674.jpeg"
        kpiLabel="Coureurs actifs"
        kpiValue={5000}
        kpiSuffix="+"
      />

      <EventsMarquee
        reassurance="Wearn est présent sur des courses partout en France"
        events={[
          <EventLogo
            key="lsl"
            src="https://cdn.prod.website-files.com/69431a153154265f304215bb/69df61bad91dba61ede84571_LSL.png"
            alt="LSL"
          />,
          <EventLogo
            key="berlin-marathon"
            src="https://static.wikia.nocookie.net/logopedia/images/9/9b/BMWBerlinMarathon_2020.svg/revision/latest/scale-to-width-down/250?cb=20230123120640"
            alt="BMW Berlin Marathon"
          />,
          <EventLogo
            key="toulouse-run-experience"
            src="https://harmonie-mutuelle.toulouserunexperience.fr/wp-content/files/toulouse-metropole-run-experience-accueil-Toulouse-Metropole-Run-Experience-logo-monochrome-rose-1024x412.png"
            alt="Toulouse Métropole Run Experience"
          />,
          <EventLogo
            key="lyon-urban-trail"
            src="https://followmysport.com/wp-content/uploads/2024/10/lyonurbantraillutbynight.webp"
            alt="Lyon Urban Trail by Night"
            mode="knockout"
          />,
          <EventLogo
            key="grand-raid-ventoux"
            src="https://thumb.wikimedia.org/wikipedia/fr/thumb/a/ac/Logo_Grand_Raid_Ventoux_by_UTMB.png/1280px-Logo_Grand_Raid_Ventoux_by_UTMB.png"
            alt="Grand Raid Ventoux by UTMB"
          />,
        ]}
      />

      <ProblemSolution
        id="probleme"
        eyebrow="La plateforme"
        title="Le sponsoring classique a un angle mort"
        painParagraph="Un stand touche qui passe devant, pas qui vous ressemble. Un naming coûte cher pour une visibilité diffuse. Une opération d'influence ponctuelle ne dure qu'un post."
        answerParagraph="Wearn vous met devant l'audience exacte que vous ciblez, pendant toute la durée de l'événement, et à nouveau à la course suivante."
      />

      <FeatureFilteredList
        id="comment-ca-marche"
        number="01"
        name="Ciblage"
        title="Notre équipe trouve les coureurs qu'il vous faut"
        eyebrowColor="green"
        paragraph="Vous choisissez la course et les profils recherchés. Notre équipe identifie, parmi les coureurs inscrits, ceux qui correspondent à votre ciblage et s'occupe de les contacter."
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
          { title: "Une photo horodatée à chaque événement", description: "Le coureur confirme sa présence et la visibilité du marquage directement depuis notre plateforme." },
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
        rankingTitle="Dernières validations"
        ranking={[
          { avatarLabel: "TL", name: "Thomas L.", category: "Photo validée", volume: "Paiement envoyé", amount: "45 €" },
          { avatarLabel: "CD", name: "Camille D.", category: "Photo validée", volume: "Paiement envoyé", amount: "22 €" },
          { avatarLabel: "ML", name: "Marie L.", category: "Photo validée", volume: "Paiement envoyé", amount: "18 €" },
        ]}
      />

      <div className="bg-accent-soft">
        <ValueProposition
          id="avantages"
          eyebrow="La proposition"
          brands={{
            tabLabel: "Pour les marques",
            stat: "30+",
            statLabel: "marques accompagnées",
            caption: "font déjà confiance à Wearn pour leur visibilité sur le terrain.",
            points: [
              {
                title: "Une présence répétée",
                description: "Ça fonctionne d'autant mieux quand l'activation est répétée sur plusieurs événements.",
              },
              {
                title: "Un ciblage précis",
                description: "Vous choisissez le profil des coureurs et notre équipe s'occupe du reste.",
              },
              {
                title: "Un coût maîtrisé",
                description: "Vous gagnez en présence sur le terrain sans multiplier votre budget marketing.",
              },
            ],
          }}
          runners={{
            tabLabel: "Pour les coureurs",
            stat: "5000+",
            statLabel: "coureurs actifs",
            caption: "portent déjà une marque à chaque course.",
            points: [
              {
                title: "Un revenu à chaque course",
                description: "Vous êtes rémunéré pour porter une marque le temps d'une course.",
              },
              {
                title: "Aucun engagement",
                description: "Vous choisissez les propositions qui vous conviennent, course après course.",
              },
              {
                title: "Un dossard moins cher",
                description: "Les revenus perçus réduisent, voire remboursent, le prix de votre inscription.",
              },
            ],
          }}
        />
      </div>

      <div className="bg-surface-muted">
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

      <div className="bg-success-soft">
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

      <FinalCTA
        title="Rejoignez ceux qui courent déjà avec Wearn"
        buttons={[
          { label: "Lancer ma campagne", href: CONTACT_PATH, variant: "inverted" },
          { label: "Devenir coureur", href: COUREURS_PATH, variant: "link-inverted" },
        ]}
      />
    </>
  );
}
