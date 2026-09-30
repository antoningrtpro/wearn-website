"use client";

import { type ComponentProps } from "react";
import HeroTwoCol from "./HeroTwoCol";
import { useEstimator } from "@/lib/estimator-context";
import { RUNNER_APP_URL } from "@/lib/constants";

type CoureursHeroProps = Omit<ComponentProps<typeof HeroTwoCol>, "ctaButtons">;

/** Wraps HeroTwoCol in a client boundary just to give "Estimer mon gain" a
 * click handler (opens the shared earnings estimator modal) instead of a
 * plain link — everything else about the hero stays exactly as HeroTwoCol
 * renders it. */
export default function CoureursHero(props: CoureursHeroProps) {
  const { openEstimator } = useEstimator();

  return (
    <HeroTwoCol
      {...props}
      ctaButtons={[
        { label: "Estimer mon gain", onClick: openEstimator, variant: "primary" },
        { label: "Connexion à votre espace", href: RUNNER_APP_URL, variant: "secondary" },
      ]}
    />
  );
}
