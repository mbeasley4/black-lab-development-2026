import Image from "next/image";
import Link from "next/link";

const credentials = [
  "60+ B2B & manufacturing sites built",
  "15+ years in web development",
  "Core Web Vitals & technical SEO specialist",
];

export default function FounderStrip() {
  return (
    <section className="w-full py-28 border-t border-volt-500/15 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c] via-[#111214] to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-125 h-125 bg-volt-500/4 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-volt-500/25 shadow-[0_0_40px_rgba(227,245,68,0.12)]">
              <Image
                src="/images/michael-beasley.png"
                alt="Michael Beasley — Founder, Black Lab Development"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              Who You&apos;ll Work With
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Michael Beasley
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-6">
              Senior web developer and founder of Black Lab Development. Every engagement is hands-on — you work directly with the person writing the code, making the technical decisions, and owning the outcome. No handoffs. No layers.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="inline-flex items-center gap-2 rounded-full border border-volt-500/20 bg-volt-500/5 px-4 py-2 text-xs font-medium text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-volt-500" />
                  {cred}
                </span>
              ))}
            </div>

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
