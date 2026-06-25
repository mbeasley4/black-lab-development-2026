"use client";

import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { createTimeline, stagger, set } from "animejs";

const HERO_STATS = [
  { value: "312%", label: "More appointment bookings" },
  { value: "164%", label: "Increase in AOV" },
  { value: "<1s", label: "Average load time" },
];

const HomepageHero = () => {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const creditRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const statItems = statsRef.current
      ? (Array.from(statsRef.current.children) as HTMLElement[])
      : [];

    const els = [
      eyebrowRef.current,
      headingRef.current,
      paraRef.current,
      ...statItems,
      ctasRef.current,
      creditRef.current,
    ].filter((el): el is HTMLElement => el !== null);

    set(els, { opacity: 0, translateY: 15 });

    const tl = createTimeline({
      defaults: { ease: "outExpo", duration: 600 },
    });

    tl
      .add(eyebrowRef.current!, { opacity: 1, translateY: 0 }, 0)
      .add(headingRef.current!, { opacity: 1, translateY: 0, duration: 750 }, 150)
      .add(paraRef.current!, { opacity: 1, translateY: 0 }, 450)
      .add(statItems, { opacity: 1, translateY: 0, duration: 500, delay: stagger(80) }, 620)
      .add(ctasRef.current!, { opacity: 1, translateY: 0, duration: 500 }, 900)
      .add(creditRef.current!, { opacity: 1, translateY: 0, duration: 400 }, 1060);

    return () => { tl.cancel(); };
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[75vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(/images/background-bld.png)" }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-br from-[#0b0b0c]/92 via-[#111214]/88 to-black/85 z-10"
        aria-hidden="true"
      />
      {/* Radial mask — fades code out under the headline on the left */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 25% 50%, rgba(11,11,12,0.55) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Brand accent glow */}
      <div className="absolute bottom-0 left-1/4 w-150 h-150 bg-volt-500/6 rounded-full blur-[160px] z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex items-center min-h-[90vh] md:min-h-[75vh] pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-375 px-6 w-full">
          <div className="text-center md:text-left">
            <span
              ref={eyebrowRef}
              className="inline-block mb-3 md:mb-4 text-xs md:text-sm tracking-[0.2em] uppercase text-volt-500 font-medium"
            >
              Performance-Driven Web Development
            </span>

            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5 md:mb-6 text-white"
            >
              Websites Built to Generate{" "}<br/>
              <span className="text-volt-500">Leads, Bookings, and Pipeline</span>
            </h1>

            <p
              ref={paraRef}
              className="text-base md:text-lg lg:text-xl text-[#e5e7eb]/80 mb-8 md:mb-10 leading-relaxed max-w-2xl md:max-w-3xl"
            >
              312% more appointment bookings for a Cincinnati dermatology clinic. 164% higher AOV for an ecommerce brand in 7 days. We build websites that generate measurable revenue — not just traffic.
            </p>

            {/* Stat proof bar */}
            <div ref={statsRef} className="flex flex-wrap gap-4 md:gap-6 mb-8 md:mb-10">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-lg border border-volt/20 bg-volt/5 backdrop-blur-sm px-5 py-3"
                >
                  <span className="text-2xl md:text-3xl font-bold text-volt leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wide leading-tight max-w-24">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div ref={ctasRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-7">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-volt text-black px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold hover:brightness-110 transition-all duration-200 shadow-lg shadow-volt/25"
              >
                Get a Free Website Audit
              </a>

              <a
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/50 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-volt-500/10 hover:border-volt-400 transition-all duration-200"
              >
                View Case Studies
              </a>
            </div>

            <p
              ref={creditRef}
              className="text-xs text-slate-500 tracking-wide"
            >
              Based in Cincinnati — working with clients in Chicago, Michigan, Massachusetts, and across the East Coast
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="w-6 h-6 text-volt-500 opacity-80" />
      </div>
    </section>
  );
};

export default HomepageHero;
