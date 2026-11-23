import type { ReactNode } from "react";
import HeroImage from "./HeroImage";

interface HeroSplitProps {
  image: string;
  /** CSS object-position: the point to keep in frame when the photo is cropped. */
  imagePosition?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Inner-page hero: the copy panel sits beside the photo (above lg) or below it
 * (smaller screens), so the panel never covers the subject. See `.hero-split`
 * in globals.css for the geometry.
 */
export default function HeroSplit({ image, imagePosition, className = "", children }: HeroSplitProps) {
  return (
    <section className="hero-split watermark watermark-left watermark-light">
      <div className="hero-split-media">
        <HeroImage src={image} position={imagePosition} sizes="(min-width: 1024px) 75vw, 100vw" />
      </div>
      <div className="hero-split-body">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 w-full">
          <div className={`hero-split-panel relative overflow-hidden rounded-2xl bg-[#ffffff] p-7 shadow-[0_30px_80px_-30px_rgba(15,33,56,0.45)] ring-1 ring-[#0f2138]/10 sm:p-10 ${className}`}>
            {/* Lime accent edge */}
            <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-volt-500" />
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
