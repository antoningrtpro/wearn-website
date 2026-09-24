"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";
import { CONTACT_PATH, RUNNER_APP_URL } from "@/lib/constants";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M2 3.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l6-6M9 3H4M9 3v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PLATEFORME_LINKS = [
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

const RESSOURCES_LINKS = [
  { title: "Blog", href: "/blog" },
  { title: "Guide", href: "/guide" },
  { title: "FAQ", href: "/faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"plateforme" | "ressources" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<"plateforme" | "ressources" | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <>
    <header className="sticky top-0 z-50 px-3 pt-3 transition-all sm:px-4">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "max-w-4xl rounded-2xl border border-line bg-white/75 px-4 py-2.5 shadow-md backdrop-blur-lg sm:px-6"
            : "max-w-[1200px] px-3 py-3 sm:px-5"
        }`}
      >
        <Link href="/" className="text-lg font-semibold text-ink">
          Wearn
        </Link>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === "plateforme" ? null : "plateforme")}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              aria-expanded={openMenu === "plateforme"}
            >
              Plateforme
              <ChevronDown className={`transition-transform ${openMenu === "plateforme" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "plateforme" && (
              <div className="absolute left-0 top-full mt-2 w-80 rounded-lg border border-line bg-surface p-2 shadow-mockup">
                {PLATEFORME_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setOpenMenu(null)}
                    className="flex items-start gap-3 rounded-md px-3 py-2.5 hover:bg-surface-muted"
                  >
                    <span
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-sm"
                      style={{ backgroundColor: link.dotColor }}
                    />
                    <span>
                      <p className="text-sm font-semibold text-ink">{link.title}</p>
                      <p className="text-[13px] text-ink-3">{link.description}</p>
                    </span>
                  </Link>
                ))}
                <div className="my-2 border-t border-line" />
                <Link
                  href={CONTACT_PATH}
                  onClick={() => setOpenMenu(null)}
                  className="flex items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-ink hover:bg-surface-muted"
                >
                  Lancer ma campagne
                  <ArrowIcon />
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === "ressources" ? null : "ressources")}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink"
              aria-expanded={openMenu === "ressources"}
            >
              Ressources
              <ChevronDown className={`transition-transform ${openMenu === "ressources" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "ressources" && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-line bg-surface p-2 shadow-mockup">
                {RESSOURCES_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-surface-muted"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <CTAButton href={RUNNER_APP_URL} variant="secondary" size="md">
            Espace coureurs
          </CTAButton>
          <CTAButton href={CONTACT_PATH} variant="primary" size="md">
            Créer une campagne
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <span className="relative block h-3 w-4">
            <span className="absolute left-0 top-0 h-[1.5px] w-4 bg-ink" />
            <span className="absolute left-0 bottom-0 h-[1.5px] w-4 bg-ink" />
          </span>
        </button>
      </div>
    </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-bg lg:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold text-ink" onClick={() => setMobileOpen(false)}>
              Wearn
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line"
              aria-label="Fermer le menu"
            >
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-1/2 h-[1.5px] w-4 rotate-45 bg-ink" />
                <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -rotate-45 bg-ink" />
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="border-b border-line py-2">
              <button
                type="button"
                onClick={() => setMobileAccordion(mobileAccordion === "plateforme" ? null : "plateforme")}
                className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-ink"
                aria-expanded={mobileAccordion === "plateforme"}
              >
                Plateforme
                <ChevronDown className={`transition-transform ${mobileAccordion === "plateforme" ? "rotate-180" : ""}`} />
              </button>
              {mobileAccordion === "plateforme" && (
                <div className="pb-3">
                  {PLATEFORME_LINKS.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2 text-sm text-ink-2"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-sm" style={{ backgroundColor: link.dotColor }} />
                      {link.title}
                    </Link>
                  ))}
                  <Link
                    href={CONTACT_PATH}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-semibold text-ink"
                  >
                    Lancer ma campagne
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-line py-2">
              <button
                type="button"
                onClick={() => setMobileAccordion(mobileAccordion === "ressources" ? null : "ressources")}
                className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-ink"
                aria-expanded={mobileAccordion === "ressources"}
              >
                Ressources
                <ChevronDown className={`transition-transform ${mobileAccordion === "ressources" ? "rotate-180" : ""}`} />
              </button>
              {mobileAccordion === "ressources" && (
                <div className="pb-3">
                  {RESSOURCES_LINKS.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-ink-2"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>

          <div className="flex flex-col gap-2 border-t border-line px-6 py-4">
            <CTAButton href={RUNNER_APP_URL} variant="secondary" size="lg" className="w-full">
              Espace coureurs
            </CTAButton>
            <CTAButton href={CONTACT_PATH} variant="primary" size="lg" className="w-full">
              Créer une campagne
            </CTAButton>
          </div>
        </div>
      )}
    </>
  );
}
