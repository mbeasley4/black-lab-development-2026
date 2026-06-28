"use client";

import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_STATS = [
  { value: "312%", label: "More appointment bookings" },
  { value: "164%", label: "Increase in AOV" },
  { value: "<1s", label: "Average load time" },
];

// Bezier typed as the 4-tuple Framer Motion requires
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─── Variants ──────────────────────────────────────────────────────────────

// Parent just propagates the "visible" / "animate" state down the tree
const containerVariants: Variants = {
  visible: {},
  animate: {},
};

// Eyebrow slides in from a slight left offset + fades
const eyebrowVariants: Variants = {
  visible: { opacity: 1, x: 0 },
  animate: {
    opacity: [0, 1],
    x: [-10, 0],
    transition: { duration: 0.65, ease: EASE, delay: 0 },
  },
};

// ── Mask reveal: the outer span is overflow-hidden, the inner motion.span
//    translates from below the clip area upward. ──────────────────────────

const headingLine1Variants: Variants = {
  visible: { y: 0 },
  animate: {
    y: ["110%", "0%"],
    transition: { duration: 0.95, ease: EASE, delay: 0.12 },
  },
};

const headingLine2Variants: Variants = {
  visible: { y: 0 },
  animate: {
    y: ["110%", "0%"],
    transition: { duration: 0.95, ease: EASE, delay: 0.26 },
  },
};

// Para fades in with a blur clearing
const paraVariants: Variants = {
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  animate: {
    opacity: [0, 1],
    filter: ["blur(8px)", "blur(0px)"],
    y: [10, 0],
    transition: { duration: 0.8, ease: EASE, delay: 0.52 },
  },
};

// Stats stagger in with a scale pop
const statsContainerVariants: Variants = {
  visible: {},
  animate: {
    transition: { staggerChildren: 0.09, delayChildren: 0.7 },
  },
};

const statItemVariants: Variants = {
  visible: { opacity: 1, y: 0, scale: 1 },
  animate: {
    opacity: [0, 1],
    y: [16, 0],
    scale: [0.9, 1.04, 1],
    transition: { duration: 0.55, ease: EASE },
  },
};

// CTAs fade + slight scale
const ctaVariants: Variants = {
  visible: { opacity: 1, y: 0 },
  animate: {
    opacity: [0, 1],
    y: [12, 0],
    transition: { duration: 0.55, ease: EASE, delay: 0.95 },
  },
};

// Credit fades in last
const creditVariants: Variants = {
  visible: { opacity: 1 },
  animate: {
    opacity: [0, 1],
    transition: { duration: 0.5, delay: 1.1 },
  },
};

// ─── Component ────────────────────────────────────────────────────────────

const HomepageHero = () => {
  // "visible" keeps content immediately visible on SSR + mobile.
  // On desktop after mount we switch to "animate" to run the entrance.
  const [animState, setAnimState] = useState<"visible" | "animate">("visible");

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setAnimState("animate");
    }
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[75vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(/images/background-bld.png)" }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-linear-to-br from-[#0b0b0c]/92 via-[#111214]/88 to-black/85 z-10"
        aria-hidden="true"
      />

      {/* Radial mask — softens the code background under the headline */}
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

      {/* ── Content ── */}
      <motion.div
        className="relative z-20 flex items-center min-h-[90vh] md:min-h-[75vh] pt-24 pb-12 md:pt-28 md:pb-16"
        variants={containerVariants}
        initial="visible"
        animate={animState}
      >
        <div className="mx-auto max-w-375 px-6 w-full">
          <div className="text-center md:text-left">

            {/* Eyebrow */}
            <motion.span
              variants={eyebrowVariants}
              className="inline-block mb-4 md:mb-5 text-xs md:text-sm tracking-[0.2em] uppercase text-volt-500 font-medium"
            >
              Performance-Driven Web Development
            </motion.span>

            {/* Heading — each line is a mask-reveal */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 md:mb-6 text-white">
              {/* Line 1 */}
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  variants={headingLine1Variants}
                >
                  Websites Built to Generate
                </motion.span>
              </span>

              {/* Line 2 — volt accent */}
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block text-volt-500"
                  variants={headingLine2Variants}
                >
                  Leads, Bookings, and Pipeline
                </motion.span>
              </span>
            </h1>

            {/* Body copy */}
            <motion.p
              variants={paraVariants}
              className="text-base md:text-lg lg:text-xl text-[#e5e7eb]/80 mb-8 md:mb-10 leading-relaxed max-w-2xl md:max-w-3xl"
            >
              312% more appointment bookings for a Cincinnati dermatology clinic.
              164% higher AOV for an ecommerce brand in 7 days. We build websites
              that generate measurable revenue — not just traffic.
            </motion.p>

            {/* Stat proof bar */}
            <motion.div
              variants={statsContainerVariants}
              className="flex flex-wrap gap-4 md:gap-6 mb-8 md:mb-10"
            >
              {HERO_STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statItemVariants}
                  className="flex items-center gap-3 rounded-lg border border-volt/20 bg-volt/5 backdrop-blur-sm px-5 py-3"
                >
                  <span className="text-2xl md:text-3xl font-bold text-volt leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 uppercase tracking-wide leading-tight max-w-24">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={ctaVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-7"
            >
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
            </motion.div>

            {/* Location credit */}
            <motion.p
              variants={creditVariants}
              className="text-xs text-slate-500 tracking-wide"
            >
              Based in Cincinnati — working with clients in Chicago, Michigan,
              Massachusetts, and across the East Coast
            </motion.p>

          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="w-6 h-6 text-volt-500 opacity-80" />
      </div>
    </section>
  );
};

export default HomepageHero;
