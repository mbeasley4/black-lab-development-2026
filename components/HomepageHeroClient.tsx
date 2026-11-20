"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// Bezier typed as the 4-tuple Framer Motion requires
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─── Desktop detection (SSR-safe, no setState-in-effect) ───────────────────

const DESKTOP_QUERY = "(min-width: 768px)";
function subscribeDesktop(cb: () => void) {
  const mql = window.matchMedia(DESKTOP_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
const getDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;
const getDesktopServer = () => false;

// ─── Variants ──────────────────────────────────────────────────────────────
// "visible" keeps content immediately visible on SSR + mobile.
// On desktop we switch to "animate" to run the entrance.

const fadeIn = (delay: number, y = 10): Variants => ({
  visible: { opacity: 1, y: 0 },
  animate: { opacity: [0, 1], y: [y, 0], transition: { duration: 0.65, ease: EASE, delay } },
});

const maskLine = (delay: number): Variants => ({
  visible: { y: 0 },
  animate: { y: ["110%", "0%"], transition: { duration: 0.95, ease: EASE, delay } },
});

const panelVariants: Variants = {
  visible: { opacity: 1, y: 0, rotate: 0 },
  animate: {
    opacity: [0, 1],
    y: [30, 0],
    rotate: [2, 0],
    transition: { duration: 0.9, ease: EASE, delay: 0.45 },
  },
};

// ─── Animated score ring ───────────────────────────────────────────────────

const RING_R = 26;
const RING_C = 2 * Math.PI * RING_R;

function ScoreRing({ label, score, delay }: { label: string; score: number; delay: number }) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? score : 0);

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * score));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, score, delay]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-16 w-16">
        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="32" cy="32" r={RING_R} fill="none" stroke="rgba(227,245,68,0.12)" strokeWidth="5" />
          <circle
            cx="32"
            cy="32"
            r={RING_R}
            fill="none"
            stroke="#E3F544"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={RING_C}
            strokeDashoffset={RING_C * (1 - value / 100)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white tabular-nums">
          {value}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-wider text-neutral-400 text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

// ─── Hero visual: glass "launch report" panel with floating result chips ───

const scores = [
  { label: "Performance", score: 100 },
  { label: "Accessibility", score: 100 },
  { label: "Best Practices", score: 100 },
  { label: "SEO", score: 100 },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
        <div className="relative rounded-2xl bg-surface/90 backdrop-blur-xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-neutral-400 font-mono">
              yourbusiness.com
            </span>
          </div>

          <div className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                Launch-day target
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-volt-500" />
                Live
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {scores.map((s, i) => (
                <ScoreRing key={s.label} label={s.label} score={s.score} delay={0.8 + i * 0.15} />
              ))}
            </div>

            {/* Mini conversion sparkline */}
            <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="mb-2 flex items-baseline justify-between">
                <span className="text-xs text-neutral-400">Leads / month</span>
                <span className="text-xs font-semibold text-neutral-300">↑ trending up</span>
              </div>
              <svg viewBox="0 0 200 48" className="h-12 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="hero-spark" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#E3F544" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#E3F544" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 42 L25 38 L50 40 L75 30 L100 32 L125 22 L150 18 L175 10 L200 4 L200 48 L0 48 Z" fill="url(#hero-spark)" />
                <motion.path
                  d="M0 42 L25 38 L50 40 L75 30 L100 32 L125 22 L150 18 L175 10 L200 4"
                  fill="none"
                  stroke="#E3F544"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: EASE, delay: 1 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────

const HomepageHeroClient = () => {
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktop, getDesktopServer);
  const animState = isDesktop ? "animate" : "visible";

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#050506] to-black z-0" aria-hidden="true" />

      {/* Photo layer — slow Ken Burns drift, faded in from the right so the headline stays legible */}
      <div
        className="absolute inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_45%)] max-lg:[mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]"
        aria-hidden="true"
      >
        <Image
          src="/images/home/hero-code.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 saturate-[0.4]"
        />
      </div>




      {/* Dark overlay + headline contrast mask */}
      <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 65% at 25% 40%, rgba(0,0,0,0.8) 0%, transparent 65%)" }}
        aria-hidden="true"
      />


      {/* ── Content ── */}
      <motion.div
        className="relative z-20 pt-28 pb-16 md:pt-32 md:pb-20 lg:min-h-[640px] lg:flex lg:items-center"
        initial="visible"
        animate={animState}
      >
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-16 items-center">

            {/* Left: copy + CTAs */}
            <div className="text-center lg:text-left">
              <motion.span
                variants={fadeIn(0, 0)}
                className="inline-flex items-center gap-2 mb-5 rounded-full border border-neutral-800 bg-white/[0.04] px-4 py-1.5 text-[11px] md:text-xs tracking-[0.2em] uppercase text-neutral-300 font-semibold"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-volt-500" />
                Taking new clients &amp; partners
              </motion.span>

              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.02] tracking-tight mb-6 text-white">
                <span className="block overflow-hidden pb-1">
                  <motion.span className="block" variants={maskLine(0.12)}>
                    Skip the Middlemen.
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <motion.span className="block text-volt-500" variants={maskLine(0.26)}>
                    Keep the Results.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={fadeIn(0.5)}
                className="text-lg md:text-xl text-[#e5e7eb]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9"
              >
                You work directly with the senior engineer building your site —
                not a sales rep, a PM, and a junior dev learning on your dime.
              </motion.p>

              <motion.div
                variants={fadeIn(0.7)}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-volt-500 text-black px-8 py-4 text-base font-bold transition-colors duration-200 hover:bg-volt-400"
                >
                  <span className="relative">Schedule a Call</span>
                  <svg className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-md border-2 border-neutral-800 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/5 hover:border-neutral-500"
                >
                  Agency? Partner With Me
                </Link>
              </motion.div>

              <motion.p
                variants={fadeIn(0.9, 0)}
                className="mt-6 text-xs text-neutral-400 tracking-wide"
              >
                Cincinnati-based · Serving small businesses &amp; agencies nationwide
              </motion.p>
            </div>

            {/* Right: animated launch-report visual */}
            <motion.div variants={panelVariants} className="px-6 sm:px-10 lg:px-0">
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default HomepageHeroClient;
