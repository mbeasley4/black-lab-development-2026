interface PageCloseProps {
  title: string;
  bodyPrimary: string;
  bodySecondary: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export default function PageClose({
  title,
  bodyPrimary,
  bodySecondary,
  secondaryHref,
  secondaryLabel,
}: PageCloseProps) {
  return (
    <section className="relative overflow-hidden border-t border-cyan-500/20 py-28">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/close-bg.png')" }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-cyan-950 to-slate-900" />
        <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/15 via-blue-500/10 to-purple-500/15" />
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent pb-1 leading-tight">
            {title}
          </h2>

          <p className="text-cyan-50/80 leading-relaxed mb-6">{bodyPrimary}</p>

          <p className="text-cyan-50/80 leading-relaxed mb-10">{bodySecondary}</p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
            >
              Start a Conversation
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href={secondaryHref}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 underline underline-offset-4 hover:text-cyan-200 transition-colors duration-200"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}
