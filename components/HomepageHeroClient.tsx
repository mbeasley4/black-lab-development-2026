"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FeaturedArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string | null;
  imageAlt: string;
  category: string | null;
  publishedAt: string | null;
};

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

// Featured article fades + scales up slightly
const featuredArticleVariants: Variants = {
  visible: { opacity: 1, y: 0, scale: 1 },
  animate: {
    opacity: [0, 1],
    y: [16, 0],
    scale: [0.97, 1.01, 1],
    transition: { duration: 0.55, ease: EASE, delay: 0.7 },
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

function formatDate(date?: string | null) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ─── Component ────────────────────────────────────────────────────────────

const HomepageHeroClient = ({ featuredArticle }: { featuredArticle: FeaturedArticle | null }) => {
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
      {/* Background base */}
      <div
        className="absolute inset-0 bg-linear-to-br from-black via-[#050506] to-black z-0"
        aria-hidden="true"
      />

      {/* Hexagonal grid texture — the site's own motif (see FaqSection), not a stock photo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* True regular hexagons (pointy-top honeycomb), s=20 */}
            <pattern id="hex-hero" width="34.64" height="60" patternUnits="userSpaceOnUse" patternTransform="scale(2.2)">
              <path d="M17.32 0 L34.64 10 L34.64 30 L17.32 40 L0 30 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-volt-500" />
              <path d="M0 30 L17.32 40 L17.32 60 L0 70 L-17.32 60 L-17.32 40 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-volt-500" />
              <path d="M34.64 30 L51.96 40 L51.96 60 L34.64 70 L17.32 60 L17.32 40 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-volt-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-hero)" />
        </svg>
      </div>

      {/* Brand glow behind the hex grid for extra depth */}
      <div className="absolute top-0 right-0 w-175 h-175 bg-volt-500/10 rounded-full blur-[180px] z-0 pointer-events-none" />

      {/* Uniform dark overlay — deepens the whole hero, not just the headline zone */}
      <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none" aria-hidden="true" />

      {/* Radial mask — punches the hex texture down specifically behind the headline for contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 25% 32%, rgba(0,0,0,0.8) 0%, transparent 65%)",
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
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 w-full">
          <div className={featuredArticle ? "flex flex-col lg:grid lg:grid-cols-[1fr_380px] lg:gap-16" : ""}>

            {/* Top-left: eyebrow, heading, body copy */}
            <div className="order-1 text-center lg:text-left lg:col-start-1 lg:row-start-1">

              {/* Eyebrow */}
              <motion.span
                variants={eyebrowVariants}
                className="inline-block mb-4 md:mb-5 text-xs md:text-sm tracking-[0.2em] uppercase text-volt-500 font-medium"
              >
                Website Development &amp; Technical SEO
              </motion.span>

              {/* Heading — each line is a mask-reveal */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-5 md:mb-6 text-white">
                {/* Line 1 */}
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    variants={headingLine1Variants}
                  >
                    I Don&apos;t Ghost.
                  </motion.span>
                </span>

                {/* Line 2 — volt accent */}
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    className="block text-volt-500"
                    variants={headingLine2Variants}
                  >
                    I Ship.
                  </motion.span>
                </span>
              </h1>

              {/* Body copy */}
              <motion.p
                variants={paraVariants}
                className="text-base md:text-lg lg:text-xl text-[#e5e7eb]/80 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0"
              >
                You&apos;re either a business owner tired of a templated site
                with your phone number slapped on it — or an agency tired of
                watching in-house dev capacity crater your margins. Either
                way, you don&apos;t need a 40-slide deck with &ldquo;synergy&rdquo;
                in it — you need someone who ships. No templates. No offshore
                handoffs. No junior dev cutting their teeth on your codebase
                while you pay senior rates.
              </motion.p>
            </div>

            {/* Right: featured article — spans both rows, centered vertically alongside the text */}
            {featuredArticle && (
              <motion.div
                variants={featuredArticleVariants}
                className="order-3 mt-8 mb-8 md:mt-10 md:mb-10 lg:my-0 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center max-w-md mx-auto lg:max-w-none lg:mx-0"
              >
                <Link
                  href={`/articles/${featuredArticle.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-volt/20 bg-volt/5 backdrop-blur-sm text-left transition-colors duration-200 hover:border-volt-500/50 hover:bg-volt/10"
                >
                  <div className="relative h-44 w-full shrink-0 overflow-hidden bg-neutral-900">
                    {featuredArticle.imageUrl && (
                      <Image
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 448px, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />
                  </div>
                  <div className="min-w-0 flex flex-col p-5">
                    <span className="mb-2 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-wide font-semibold">
                      <span className="rounded-sm bg-volt-500 px-1.5 py-0.5 text-black">Latest Article</span>
                      {featuredArticle.category && (
                        <span className="text-volt-500/80">{featuredArticle.category}</span>
                      )}
                    </span>
                    <span className="block text-lg font-semibold text-white leading-snug group-hover:text-volt-400 transition-colors duration-200">
                      {featuredArticle.title}
                    </span>
                    {featuredArticle.excerpt && (
                      <span className="block mt-2 text-sm text-slate-400 leading-relaxed line-clamp-2">
                        {featuredArticle.excerpt}
                      </span>
                    )}
                    {featuredArticle.publishedAt && (
                      <span className="block mt-3 text-xs text-slate-500">
                        {formatDate(featuredArticle.publishedAt)}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Bottom-left: CTAs + location credit */}
            <div className="order-2 text-center lg:text-left lg:col-start-1 lg:row-start-2">
              {/* CTAs */}
              <motion.div
                variants={ctaVariants}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 sm:gap-4 md:gap-6 mb-7"
              >
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-slate-500 font-semibold">
                    Own a business
                  </span>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-volt text-black px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold hover:brightness-110 transition-all duration-200 shadow-lg shadow-volt/25"
                  >
                    Schedule a Call
                  </a>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-2">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-slate-500 font-semibold">
                    Run an agency
                  </span>
                  <a
                    href="/partners"
                    className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/50 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-semibold text-white hover:bg-volt-500/10 hover:border-volt-400 transition-all duration-200"
                  >
                    Partner With Us
                  </a>
                </div>
              </motion.div>

              {/* Capacity signal */}
              <motion.p
                variants={creditVariants}
                className="mb-3 text-xs text-volt-500/90 font-medium tracking-wide"
              >
                Currently taking on new partners &amp; direct clients
              </motion.p>

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
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ChevronDown className="w-6 h-6 text-volt-500 opacity-80" />
      </div>
    </section>
  );
};

export default HomepageHeroClient;
