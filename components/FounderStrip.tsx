import Image from "next/image";
import Link from "next/link";

const credentials = [
  "60+ B2B & manufacturing sites built",
  "15+ years in web development",
  "Core Web Vitals & technical SEO specialist",
];

export default function FounderStrip() {
  return (
    <section className="w-full bg-charcoal text-white py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-surface via-surface-raised to-neutral-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-neutral-800">
              <Image
                src="/images/michael-beasley.webp"
                alt="Michael Beasley — Founder, Black Lab Development"
                fill
                sizes="(min-width: 1024px) 256px, 224px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-3 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
              Who You&apos;ll Work With
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Michael Beasley
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mb-6">
              Senior web developer and founder of Black Lab Development. Every engagement is hands-on — you work directly with the person writing the code, making the technical decisions, and owning the outcome. No handoffs. No layers.
            </p>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-white/[0.04] px-4 py-2 text-xs font-medium text-neutral-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  {cred}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 transition-colors duration-200"
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
