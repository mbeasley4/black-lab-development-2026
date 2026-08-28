"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  headingId?: string;
}

export default function FaqSection({ faqs, headingId = "faq-heading" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-28 border-t border-volt-500/20 relative overflow-hidden" aria-labelledby={headingId}>
      {/* Hexagonal grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-faq" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path d="M28 2 L50 18 L50 50 L28 66 L6 50 L6 18 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-volt-400" />
              <path d="M28 34 L50 50 L50 82 L28 98 L6 82 L6 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-volt-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-faq)" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-volt-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-volt-500/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />

      <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase font-semibold text-volt-500">
            Common Questions
          </span>
          <h2 id={headingId} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="text-volt-500 drop-shadow-[0_0_12px_rgba(227,245,68,0.5)]">
              Questions
            </span>
          </h2>
          <div className="mt-4 mx-auto w-20 h-px bg-linear-to-r from-transparent via-volt-500 to-transparent" />
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-slate-800/60">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/50 rounded-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-volt-500/10 border border-volt-500/20 text-volt-400 text-xs font-bold transition-colors duration-200 group-hover:bg-volt-500/20">
                      Q
                    </span>
                    <span className={`text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-volt-400" : "text-white group-hover:text-volt-300"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-volt-500/60 bg-volt-500/10 text-volt-400 rotate-180"
                        : "border-slate-700 text-slate-500 group-hover:border-volt-500/40 group-hover:text-volt-500"
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="text-sm text-slate-400 leading-relaxed pl-11 pb-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />
    </section>
  );
}
