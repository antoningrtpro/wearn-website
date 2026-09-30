"use client";

import { type ComponentProps } from "react";
import HeroTwoCol from "./HeroTwoCol";
import { useEstimator } from "@/lib/estimator-context";
import { CONTACT_PATH } from "@/lib/constants";

type HomeHeroProps = Omit<ComponentProps<typeof HeroTwoCol>, "ctaButtons">;

/** Same idea as CoureursHero: only "Coureur, estimer mes gains" needs a
 * click handler (opens the shared earnings estimator modal) instead of
 * navigating to the coureurs page — the rest of the hero is untouched. */
export default function HomeHero(props: HomeHeroProps) {
  const { openEstimator } = useEstimator();

  return (
    <HeroTwoCol
      {...props}
      ctaButtons={[
        { label: "Marque, créer ma campagne", href: CONTACT_PATH, variant: "primary" },
        { label: "Coureur, estimer mes gains", onClick: openEstimator, variant: "secondary" },
      ]}
    />
  );
}
