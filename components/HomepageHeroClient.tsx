"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import HeroImage from "./HeroImage";
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
          <circle cx="32" cy="32" r={RING_R} fill="none" stroke="rgba(15,33,56,0.08)" strokeWidth="5" />
          <circle
            cx="32"
            cy="32"
            r={RING_R}
            fill="none"
            stroke="#a8b522"
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
      {/* Soft lime halo behind the card */}
      <div aria-hidden="true" className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(168,181,34,0.28),transparent)] blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_90px_-30px_rgba(15,33,56,0.45)] ring-1 ring-volt-500/30">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 bg-volt-500" />
        <div className="relative rounded-2xl bg-surface/90 backdrop-blur-xl">
          {/* Browser chrome */}
          <div className="band-navy flex items-center gap-2 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 flex-1 truncate rounded-md bg-[#ffffff]/10 px-3 py-1 text-[11px] text-neutral-300 font-mono">
              yourbusiness.com
            </span>
          </div>

          <div className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                Launch-day target
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-neutral-300">
                <span className="relative inline-flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-volt-500 opacity-75 motion-safe:animate-ping" /><span className="relative inline-flex h-2 w-2 rounded-full bg-volt-500" /></span>
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
                <span className="text-xs font-semibold text-[#5f6a16]">↑ trending up</span>
              </div>
              <svg viewBox="0 0 200 48" className="h-12 w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="hero-spark" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#a8b522" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#a8b522" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 42 L25 38 L50 40 L75 30 L100 32 L125 22 L150 18 L175 10 L200 4 L200 48 L0 48 Z" fill="url(#hero-spark)" />
                <motion.path
                  d="M0 42 L25 38 L50 40 L75 30 L100 32 L125 22 L150 18 L175 10 L200 4"
                  fill="none"
                  stroke="#8f9b1c"
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
      <div className="absolute inset-0 bg-linear-to-br from-[#ffffff] via-[#f8fafc] to-[#eef2f7] z-0" aria-hidden="true" />

      {/* Photo layer — fades in on load and is masked from the right */}
      <div
        className="absolute inset-x-0 bottom-0 top-[calc(var(--header-h)-4px)] lg:left-[35%] z-0 overflow-hidden lg:[mask-image:linear-gradient(to_right,transparent_0%,black_45%)] max-lg:[mask-image:linear-gradient(to_bottom,black_0%,transparent_85%)]"
        aria-hidden="true"
      >
        <HeroImage src="/images/home/hero-wireframes.jpg" opacity={0.75} className="brightness-105" />
      </div>

      {/* White wash behind the copy so the headline keeps full contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-[#ffffff]/95 from-30% via-[#ffffff]/70 via-55% to-[#ffffff]/5 max-lg:bg-none max-lg:bg-[#ffffff]/80"
        aria-hidden="true"
      />
      {/* Subtle pop: lime wash on the right, fine dot grid, lime base rule */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(40% 55% at 78% 45%, rgba(168,181,34,0.14), transparent 70%), radial-gradient(rgba(15,33,56,0.07) 1px, transparent 1px) 0 0 / 22px 22px",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-linear-to-r from-transparent via-volt-500/70 to-transparent pointer-events-none" aria-hidden="true" />


      {/* ── Content ── */}
      <motion.div
        className="hero-frame relative z-20"
        initial="visible"
        animate={animState}
      >
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-16 items-center">

            {/* Left: copy + CTAs */}
            <div className="text-center lg:text-left">
              <motion.span
                variants={fadeIn(0, 0)}
                className="inline-flex items-center gap-2 mb-5 rounded-full border border-volt-500/40 bg-volt-500/10 px-4 py-1.5 text-[11px] md:text-xs tracking-[0.2em] uppercase text-neutral-300 font-semibold"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-volt-500" />
                Skip the middlemen<span className="hidden sm:inline"> · Work directly with the developer</span>
              </motion.span>

              <h1 className="text-[2.15rem] sm:text-5xl md:text-6xl lg:text-[3.4rem] xl:text-[3.75rem] font-bold leading-[1.04] tracking-tight mb-6 text-white">
                <span className="block overflow-hidden pb-1">
                  <motion.span className="block" variants={maskLine(0.12)}>
                    Custom Web Design
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <motion.span className="block text-neutral-400" variants={maskLine(0.26)}>
                    for Small Businesses<br />
                    &amp; Agencies.
                  </motion.span>
                </span>
              </h1>

              <motion.p
                variants={fadeIn(0.5)}
                className="text-lg md:text-xl text-[#24344b] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9"
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
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-volt-500 text-neutral-100 px-8 py-4 text-base font-bold transition-colors duration-200 hover:bg-volt-400"
                >
                  <span className="relative">Schedule a Call</span>
                  <svg className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white/80 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black"
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
            <motion.div variants={panelVariants} className="hidden md:block px-6 sm:px-10 lg:px-0">
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default HomepageHeroClient;
