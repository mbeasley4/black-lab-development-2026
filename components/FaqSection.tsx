interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  headingId?: string;
  accent?: "cyan" | "volt";
}

export default function FaqSection({ faqs, headingId = "faq-heading", accent = "cyan" }: FaqSectionProps) {
  const isCyan = accent === "cyan";

  return (
    <section className="w-full py-28 border-t border-cyan-500/20 relative overflow-hidden" aria-labelledby={headingId}>
      {/* Hexagonal grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-faq" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path d="M28 2 L50 18 L50 50 L28 66 L6 50 L6 18 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className={isCyan ? "text-cyan-400" : "text-volt-400"} />
              <path d="M28 34 L50 50 L50 82 L28 98 L6 82 L6 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className={isCyan ? "text-cyan-400" : "text-volt-400"} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-faq)" />
        </svg>
      </div>

      {/* Ambient glows */}
      <div className={`absolute top-0 left-1/4 w-125 h-125 rounded-full blur-[120px] pointer-events-none ${isCyan ? "bg-cyan-500/8" : "bg-volt-500/8"}`} />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-blue-500/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent to-transparent ${isCyan ? "via-cyan-500/40" : "via-volt-500/40"}`} />

      <div className="mx-auto max-w-375 px-6 relative z-10">
        <div className="text-center mb-16">
          <span className={`inline-block mb-4 text-xs tracking-[0.3em] uppercase font-semibold ${isCyan ? "text-cyan-400" : "text-volt-500"}`}>
            Common Questions
          </span>
          <h2 id={headingId} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className={isCyan ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" : "text-volt-500 drop-shadow-[0_0_12px_rgba(227,245,68,0.5)]"}>
              Questions
            </span>
          </h2>
          <div className={`mt-4 mx-auto w-20 h-px bg-linear-to-r from-transparent to-transparent ${isCyan ? "via-cyan-500" : "via-volt-500"}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800/40">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`group relative p-8 md:p-10 transition-colors duration-300 overflow-hidden bg-slate-950/80 ${isCyan ? "hover:bg-cyan-500/5" : "hover:bg-volt-500/5"}`}
            >
              {/* Background number */}
              <div className={`absolute top-3 right-5 text-[5rem] font-black font-mono leading-none select-none pointer-events-none transition-colors duration-500 ${isCyan ? "text-cyan-500/3 group-hover:text-cyan-500/8" : "text-volt-500/3 group-hover:text-volt-500/8"}`}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <span className={`shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold ${isCyan ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400" : "bg-volt-500/10 border border-volt-500/20 text-volt-400"}`}>
                    Q
                  </span>
                  <h3 className={`text-base font-semibold text-white leading-snug transition-colors duration-300 ${isCyan ? "group-hover:text-cyan-300" : "group-hover:text-volt-300"}`}>
                    {faq.question}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-11">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent to-transparent ${isCyan ? "via-cyan-500/40" : "via-volt-500/40"}`} />
    </section>
  );
}
