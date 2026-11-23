import Image from "next/image";
import { Check } from "lucide-react";

interface PageCloseProps {
  title: string;
  /** One short line (about 15 words). */
  body: string;
  secondaryHref: string;
  secondaryLabel: string;
  primaryHref?: string;
  primaryLabel?: string;
}

// Closing call to action: a short headline, one line of copy, and two
// actions. Keep it brief; the page above has already made the case.
export default function PageClose({
  title,
  body,
  secondaryHref,
  secondaryLabel,
  primaryHref = "/contact",
  primaryLabel = "Schedule a Call",
}: PageCloseProps) {
  return (
    <section className="relative w-full overflow-hidden bg-surface px-6 py-20 sm:px-10 md:px-14 md:py-24 lg:px-20">
      {/* Lime halo behind the card so it lifts off the page */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(55% 65% at 50% 55%, rgba(168,181,34,0.22), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white px-8 py-14 text-neutral-950 ring-1 ring-volt-500/40 shadow-[0_50px_120px_-40px_rgba(15,33,56,0.65),0_0_0_1px_rgba(168,181,34,0.25)] sm:px-12 md:px-16 md:py-20">
        {/* Lime top bar */}
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-volt-500" />
        {/* Lime glow in the corner and a fine diagonal texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(45% 60% at 100% 0%, rgba(168,181,34,0.30), transparent 70%), repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 16px)",
          }}
        />
        {/* Brand mark watermark */}
        <Image
          src="/images/blacklabdevelopment.png"
          alt=""
          width={360}
          height={494}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-auto w-72 opacity-[0.09] md:w-96"
        />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-volt-500/40 bg-volt-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-volt-500">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-volt-500 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-volt-500" />
              </span>
              Now booking new projects
            </span>
            <h2 className="mb-4 text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-[3.25rem]">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600 text-balance md:text-xl">{body}</p>
            <ul className="mt-7 flex flex-col gap-2 text-sm font-medium text-neutral-700 sm:flex-row sm:gap-6">
              {["Work directly with a senior developer", "Cincinnati-based, serving clients nationwide"].map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-volt-500" strokeWidth={2.75} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center md:flex-col md:items-stretch">
            <a
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-volt-500 px-9 py-5 text-base font-bold text-neutral-100 shadow-[0_12px_30px_-8px_rgba(168,181,34,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-volt-400 hover:shadow-[0_16px_40px_-8px_rgba(168,181,34,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f2138]"
            >
              {primaryLabel}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-lg border border-[#ffffff]/30 bg-transparent px-9 py-5 text-base font-semibold text-[#ffffff] transition-colors duration-200 hover:border-volt-500 hover:text-volt-500"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
