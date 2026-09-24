import Link from "next/link";
import { ANNONCEURS_PATH, CONTACT_PATH, COUREURS_PATH } from "@/lib/constants";

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { label: "Comment ça marche", href: "/#comment-ca-marche" },
      { label: "Annonceurs", href: ANNONCEURS_PATH },
      { label: "Coureurs", href: COUREURS_PATH },
    ],
  },
  {
    title: "Marques",
    links: [
      { label: "Comment ça marche", href: `${ANNONCEURS_PATH}#comment-ca-marche` },
      { label: "Comparatif", href: `${ANNONCEURS_PATH}#comparatif` },
      { label: "Cas d'usage", href: `${ANNONCEURS_PATH}#cas-usage` },
      { label: "Lancer ma campagne", href: CONTACT_PATH },
    ],
  },
  {
    title: "Coureurs",
    links: [
      { label: "Comment ça marche", href: `${COUREURS_PATH}#comment-ca-marche` },
      { label: "Exemples de gains", href: `${COUREURS_PATH}#exemples-gains` },
      { label: "FAQ coureur", href: `${COUREURS_PATH}#faq` },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Conditions générales", href: "#" },
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "Politique de cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-[1200px] px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <Link href="/" className="text-lg font-semibold text-ink">
              Wearn
            </Link>
            <p className="mt-2 text-sm text-ink-2">La publicité qui court avec vous.</p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a href={link.href} className="text-sm text-ink-2 hover:text-ink">
                          {link.label}
                          <span className="sr-only"> (ouvre un nouvel onglet)</span>
                        </a>
                      ) : (
                        <Link href={link.href} className="text-sm text-ink-2 hover:text-ink">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ink-3 sm:flex-row sm:px-8">
          <p>© {year} Wearn. Tous droits réservés.</p>
          <a href="#" className="hover:text-ink-2">
            Gérer les cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
