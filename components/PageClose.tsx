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
      {/* Soft glow behind the card so it lifts off the dark band */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 70% at 50% 50%, rgba(255,255,255,0.10), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white px-8 py-14 text-neutral-950 ring-1 ring-white/30 shadow-[0_40px_120px_-30px_rgba(255,255,255,0.18),0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:px-12 md:px-16 md:py-20">
        {/* Brand mark watermark */}
        <Image
          src="/images/blacklabdevelopment.png"
          alt=""
          width={360}
          height={494}
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-auto w-72 opacity-[0.06] grayscale md:w-96"
        />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.75} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center md:flex-col md:items-stretch">
            <a
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-950 px-9 py-5 text-base font-bold text-white shadow-lg shadow-neutral-950/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            >
              {primaryLabel}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-9 py-5 text-base font-semibold text-neutral-900 transition-colors duration-200 hover:border-neutral-950 hover:bg-neutral-50"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
