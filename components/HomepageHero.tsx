import React from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  backgroundMobileImage?: string;
  backgroundImage?: string;
  backgroundVideoMp4?: string;
  backgroundVideoWebm?: string;
}

const HomepageHero: React.FC<HeroProps> = ({
  backgroundMobileImage = "/images/homepage-hero-bg.png",
  backgroundImage = "/images/homepage-hero-bg-b.png",
  backgroundVideoMp4 = "/videos/homepage-hero-bg.mp4",
  backgroundVideoWebm = "/videos/homepage-hero-bg.webm",
}) => {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[70vh] overflow-hidden">
      {/* Desktop Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={backgroundImage}
        aria-hidden="true"
      >
        <source src={backgroundVideoWebm} type="video/webm" />
        <source src={backgroundVideoMp4} type="video/mp4" />
      </video>

      {/* Mobile Image Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 block md:hidden"
        style={{ backgroundImage: `url(${backgroundMobileImage})` }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-br from-[#0b0b0c]/85 via-[#111214]/80 to-black/90 z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[85vh] md:min-h-[70vh] pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-375 px-6 w-full">
          <div className="text-center md:text-left">
            <span className="inline-block mb-3 md:mb-4 text-xs md:text-sm tracking-[0.2em] uppercase text-amber-500 font-medium">
              B2B Website Design
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 md:mb-6">
              <span className="block text-white">Your Website Should</span>
              <span className="block text-amber-500">
                Generate Pipeline —
              </span>
              <span className="block text-white">Not Just Traffic.</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-[#e5e7eb]/80 mb-8 md:mb-10 leading-relaxed max-w-2xl md:max-w-3xl">
              I build B2B websites that turn skeptical buyers into qualified pipeline — engineered for long sales cycles, multiple stakeholders, and decisions that don&apos;t happen on the first visit.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 text-black px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold hover:bg-amber-400 transition-colors duration-200 shadow-lg shadow-amber-500/25"
              >
                Get a Website Audit
              </a>

              <a
                href="/services/conversion-optimization"
                className="inline-flex items-center justify-center rounded-md border-2 border-amber-500/50 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-200"
              >
                See How I Increase Conversions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="w-6 h-6 text-amber-500 opacity-80" />
      </div>
    </section>
  );
};

export default HomepageHero;
