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
        className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-slate-900/85 to-black/90 z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[85vh] md:min-h-[70vh] px-6 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-375 w-full">
          <div className="text-center md:text-left">
            <span className="inline-block mb-3 md:mb-4 text-xs md:text-sm tracking-[0.2em] uppercase text-cyan-400 font-medium">
              Black Lab Development
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 md:mb-6">
              <span className="block text-white">Right Tech.</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Built for How You Work.
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-blue-50/90 mb-8 md:mb-10 leading-relaxed max-w-2xl md:max-w-3xl">
              I design digital solutions for how teams really operate—not how software demos pretend they do. Tech that fits, scales, and holds up long-term. No fluff. No overengineering. Just solid, purposeful builds.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 text-black px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/30"
              >
                Start a Project
              </a>

              <a
                href="/work"
                className="inline-flex items-center justify-center rounded-md border-2 border-cyan-400/60 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-cyan-500/10 hover:border-cyan-300 transition-all duration-200"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyan-400 opacity-80" />
      </div>
    </section>
  );
};

export default HomepageHero;
