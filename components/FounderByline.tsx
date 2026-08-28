import Image from "next/image";
import Link from "next/link";

/**
 * Compact founder credibility strip for service/platform/industry pages.
 * A lighter-weight sibling to FounderStrip (which is homepage-only) —
 * reinforces "you work directly with me" on the pages people actually
 * land on from search, right before the closing CTA.
 */
export default function FounderByline() {
  return (
    <section className="w-full py-14 border-t border-volt-500/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#111214]/40 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto max-w-2xl flex flex-col sm:flex-row items-center gap-5 rounded-xl border border-volt-500/15 bg-[#0b0b0c]/60 px-6 py-5 text-center sm:text-left">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-volt-500/25 shrink-0">
            <Image
              src="/images/michael-beasley.png"
              alt="Michael Beasley — Founder, Black Lab Development"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-white">Michael Beasley</p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Senior Web Developer &amp; Founder — you work directly with me on every engagement. No account managers, no bench of junior developers.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200 whitespace-nowrap"
          >
            More about me
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
