/**
 * Shared with both Header (client, dropdown menu) and Footer (server, plain
 * list) — a single source so the two never drift out of sync. Kept in a
 * plain module rather than exported from Header.tsx itself, since a "use
 * client" file's non-component exports don't cross back into a Server
 * Component cleanly.
 */
export const PLATEFORME_LINKS = [
  {
    title: "Ciblage",
    description: "Trouvez les coureurs qui correspondent à votre besoin",
    href: "/#comment-ca-marche",
    dotColor: "#34D399",
  },
  {
    title: "Parcours",
    description: "De la demande au paiement, sans friction",
    href: "/#parcours",
    dotColor: "#60A5FA",
  },
  {
    title: "Suivi",
    description: "Un suivi clair, pour les marques et les coureurs",
    href: "/#dashboard",
    dotColor: "#A78BFA",
  },
];

export const COUREUR_LINKS = [
  {
    title: "Propositions",
    description: "Des campagnes adaptées à votre profil",
    href: "/coureurs#comment-ca-marche",
    dotColor: "#34D399",
  },
  {
    title: "Parcours",
    description: "Du premier clic au paiement",
    href: "/coureurs#parcours",
    dotColor: "#60A5FA",
  },
  {
    title: "Suivi",
    description: "Vos gains, course après course",
    href: "/coureurs#dashboard",
    dotColor: "#A78BFA",
  },
];

export const RESSOURCES_LINKS = [
  { title: "Blog", href: "/blog" },
  { title: "Guide", href: "/guide" },
  { title: "FAQ", href: "/faq" },
];
