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
    <section className="relative overflow-hidden border-t border-neutral-800 py-20 md:py-24">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/close-bg.png')" }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-surface via-surface-raised to-[#1f2328]" />
        <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent" />
      </div>

      {/* Ambient glows */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl text-balance font-bold mb-4 text-white leading-tight">
            {title}
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed text-balance mb-8">{body}</p>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
            <a
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-bold text-black hover:bg-neutral-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {primaryLabel}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>

            <a
              href={secondaryHref}
              className="text-sm font-medium text-neutral-200 underline decoration-neutral-600 underline-offset-4 hover:text-white hover:decoration-white transition-colors duration-200"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
