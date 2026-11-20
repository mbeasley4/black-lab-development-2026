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
    <section className="w-full bg-surface px-6 py-16 sm:px-10 md:px-14 md:py-20 lg:px-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white px-8 py-12 text-neutral-950 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:px-12 md:px-16 md:py-16">
        {/* Subtle texture so the card isn't a flat slab */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "18px 18px" }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Now booking new projects
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-balance md:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-neutral-600 text-balance">{body}</p>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center md:flex-col md:items-stretch">
            <a
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-neutral-950 px-7 py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
            >
              {primaryLabel}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-7 py-4 text-sm font-semibold text-neutral-900 transition-colors duration-200 hover:border-neutral-950 hover:bg-neutral-50"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
