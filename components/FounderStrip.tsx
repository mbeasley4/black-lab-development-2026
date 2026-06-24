import Image from "next/image";
import Link from "next/link";

export default function FounderStrip() {
  return (
    <section className="w-full py-20 border-t border-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c] via-[#111214] to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-375 px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="shrink-0">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-volt-500/25 shadow-[0_0_30px_rgba(227,245,68,0.15)]">
              <Image
                src="/images/michael-beasley.png"
                alt="Michael Beasley — Founder, Black Lab Development"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              Who You&apos;ll Work With
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Michael Beasley
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl mb-5">
              Senior web developer with 15+ years building B2B websites, manufacturing platforms, and revenue-focused digital infrastructure. Every engagement is hands-on — you work directly with the person writing the code and making the technical decisions.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
            >
              More about Michael
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
