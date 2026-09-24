type EventLogoProps = {
  src: string;
  alt: string;
  /**
   * "silhouette" turns a transparent-background logo solid black.
   * "knockout" is for logos delivered on an opaque white background: it
   * skips the color filter and blends the white away with mix-blend-mode
   * instead, since brightness(0) would otherwise crush it into a solid block.
   */
  mode?: "silhouette" | "knockout";
};

export default function EventLogo({ src, alt, mode = "silhouette" }: EventLogoProps) {
  const modeClass = mode === "silhouette" ? "grayscale brightness-0" : "mix-blend-multiply";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`h-9 w-auto object-contain sm:h-10 ${modeClass}`} />
  );
}
