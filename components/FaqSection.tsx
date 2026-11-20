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

  // Light section: the one deliberate break in the dark page rhythm. Volt has
  // poor contrast on light backgrounds, so accents here are black/neutral.
  return (
    <section className="w-full bg-neutral-100 text-neutral-900 py-24 md:py-28" aria-labelledby={headingId}>
      <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-block mb-4 text-xs tracking-[0.2em] uppercase font-semibold text-neutral-500">
            Common Questions
          </span>
          <h2 id={headingId} className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-neutral-600">
            Straight answers about how projects work. Don&apos;t see yours?{" "}
            <a href="/contact" className="font-semibold text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-950">
              Ask directly
            </a>
            .
          </p>
        </div>

        <div className="divide-y divide-neutral-300 border-y border-neutral-300">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 rounded-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-md bg-neutral-950 text-volt-500 text-xs font-bold">
                      Q
                    </span>
                    <span className="text-base md:text-lg font-semibold leading-snug text-neutral-950">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-neutral-950 bg-neutral-950 text-white rotate-180"
                        : "border-neutral-400 text-neutral-600 group-hover:border-neutral-950 group-hover:text-neutral-950"
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
                  <p className="text-[15px] text-neutral-700 leading-relaxed pl-11 pb-6 max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
