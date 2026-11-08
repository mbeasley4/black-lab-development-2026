"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
            style={{ filter: "drop-shadow(0 0 6px rgba(227,245,68,0.6))" }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-volt-400 tabular-nums">
          {value}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-wider text-slate-400 text-center leading-tight">
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

const chips = [
  { value: "+312%", label: "appointment bookings", className: "-top-6 -left-10 animate-float", delay: "0s" },
  { value: "+164%", label: "average order value", className: "-bottom-14 -right-6 animate-float", delay: "1.2s" },
  { value: "68%", label: "faster page loads", className: "-bottom-7 left-6 animate-float", delay: "2.4s" },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Spinning conic border */}
      <div className="relative overflow-hidden rounded-2xl p-px shadow-2xl shadow-volt-500/10">
        <div
          className="absolute -inset-[50%] animate-[spin_7s_linear_infinite] motion-reduce:animate-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(227,245,68,0.9) 60deg, transparent 120deg, transparent 360deg)",
          }}
          aria-hidden="true"
        />
        <div className="relative rounded-2xl bg-[#0a0b0c]/90 backdrop-blur-xl">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-slate-400 font-mono">
              yourbusiness.com
            </span>
          </div>

          <div className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                Launch-day target
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-volt-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-volt-500" />
                </span>
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
                <span className="text-xs text-slate-400">Leads / month</span>
                <span className="text-xs font-semibold text-volt-400">↑ trending up</span>
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

      {/* Floating real-result chips */}
      {chips.map((c) => (
        <div
          key={c.value}
          className={`absolute hidden sm:flex items-center gap-2 rounded-full border border-volt-500/30 bg-black/80 px-4 py-2 backdrop-blur-md shadow-lg shadow-black/50 ${c.className}`}
          style={{ animationDelay: c.delay }}
        >
          <span className="text-sm font-bold text-volt-400">{c.value}</span>
          <span className="text-xs text-slate-300 whitespace-nowrap">{c.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────

const HomepageHeroClient = () => {
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktop, getDesktopServer);
  const animState = isDesktop ? "animate" : "visible";

  // Cursor-follow spotlight: write CSS vars directly to avoid re-renders
  const sectionRef = useRef<HTMLElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="group/hero relative w-full overflow-hidden"
    >
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
          className="object-cover object-center opacity-45 saturate-[0.6] animate-ken-burns"
        />
      </div>

      {/* Hexagonal grid texture — the site's own motif, layered over the photo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-hero" width="34.64" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(2.2)">
              <path d="M17.32 0 L34.64 10 L34.64 30 L17.32 40 L0 30 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-volt-500" />
              <path d="M0 30 L17.32 40 L17.32 60 L0 70 L-17.32 60 L-17.32 40 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-volt-500" />
              <path d="M34.64 30 L51.96 40 L51.96 60 L34.64 70 L17.32 60 L17.32 40 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-volt-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-hero)" />
        </svg>
      </div>

      {/* Horizontal volt scan beam sweeping down the hero */}
      <div className="absolute inset-x-0 top-0 z-10 h-px animate-scan-beam pointer-events-none bg-linear-to-r from-transparent via-volt-500/70 to-transparent shadow-[0_0_24px_4px_rgba(227,245,68,0.35)] motion-reduce:hidden" aria-hidden="true" />

      {/* Brand glow */}
      <div className="absolute top-0 right-0 w-175 h-175 bg-volt-500/10 rounded-full blur-[180px] z-0 pointer-events-none" />

      {/* Dark overlay + headline contrast mask */}
      <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 65% at 25% 40%, rgba(0,0,0,0.8) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Cursor spotlight — desktop pointers only, fades in on hover */}
      <div
        className="hidden md:block absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx, 70%) var(--my, 40%), rgba(227,245,68,0.13), transparent 60%)",
        }}
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
                className="inline-flex items-center gap-2 mb-5 rounded-full border border-volt-500/30 bg-volt-500/5 px-4 py-1.5 text-[11px] md:text-xs tracking-[0.2em] uppercase text-volt-400 font-semibold"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-volt-500" />
                </span>
                Taking new clients &amp; partners
              </motion.span>

              <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.02] tracking-tight mb-6 text-white">
                <span className="block overflow-hidden pb-1">
                  <motion.span className="block" variants={maskLine(0.12)}>
                    Skip the Middlemen.
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <motion.span className="block text-volt-500 text-volt-shimmer" variants={maskLine(0.26)}>
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
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-volt text-black px-8 py-4 text-base font-bold shadow-[0_0_40px_rgba(227,245,68,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(227,245,68,0.6)] hover:-translate-y-0.5"
                >
                  {/* Sheen sweep on hover */}
                  <span className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/50 transition-all duration-700 group-hover:left-[150%]" aria-hidden="true" />
                  <span className="relative">Schedule a Call</span>
                  <svg className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-volt-500/10 hover:border-volt-400 hover:-translate-y-0.5"
                >
                  Agency? Partner With Me
                </Link>
              </motion.div>

              <motion.p
                variants={fadeIn(0.9, 0)}
                className="mt-6 text-xs text-slate-500 tracking-wide"
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

      {/* Scroll indicator */}
      <div className="hidden lg:block absolute bottom-5 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="w-6 h-6 text-volt-500 opacity-80" />
      </div>
    </section>
  );
};

export default HomepageHeroClient;
