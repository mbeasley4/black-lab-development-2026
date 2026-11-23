"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  /** Leave empty for decorative photos. */
  alt?: string;
  /** Final look of the photo (position, filters). Opacity is set with `opacity`. */
  className?: string;
  /** Opacity the photo settles at once it has loaded. */
  opacity?: number;
  /** CSS object-position: the point to keep in frame when cropped. */
  position?: string;
  sizes?: string;
}

/**
 * Hero photo that fades in once the photo has actually loaded,
 * so a slow download never shows as a pop or a half-painted image.
 * Fill: the parent must be positioned. Reduced motion shows it without the fade.
 */
export default function HeroImage({
  src,
  alt = "",
  className = "",
  opacity = 1,
  position = "50% 50%",
  sizes = "100vw",
}: HeroImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const reveal = () => setLoadedSrc(src);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes={sizes}
      onLoad={reveal}
      className={`object-cover transition-opacity duration-[1400ms] ease-out motion-reduce:transition-none ${className}`}
      style={{ opacity: loadedSrc === src ? opacity : 0, objectPosition: position }}
    />
  );
}
