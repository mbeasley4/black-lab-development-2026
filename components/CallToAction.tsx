import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative overflow-hidden w-full py-28 border-t border-volt-500/15">
            {/* Background layers */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/close-bg.png')" }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c] via-[#111214] to-[#1f2328]" />
                <div className="absolute inset-0 bg-linear-to-tr from-volt-500/6 via-transparent to-transparent" />
            </div>

            {/* Ambient glows */}
            <div className="absolute top-0 left-1/4 w-150 h-150 bg-volt-500/15 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-volt-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-375 px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 pb-2 leading-[1.05]">
                        <span className="block text-white">If Your Website Isn&apos;t Driving Results,</span>
                        <span className="block text-volt-500 drop-shadow-[0_0_40px_rgba(227,245,68,0.4)]">It&apos;s Holding You Back</span>
                    </h2>

                    <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-6 mb-12 leading-relaxed">
                        Schedule a discovery call. I&apos;ll talk through what&apos;s limiting your site and what it would take to fix it — no commitment required.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
                        <Link
                            href="/contact"
                            className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-volt px-8 sm:px-12 py-5 text-base font-bold uppercase tracking-wide text-black transition-all duration-300 hover:brightness-110 hover:shadow-2xl hover:shadow-volt/40 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Schedule a Discovery Call
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>

                        <Link
                            href="/case-studies"
                            className="group inline-flex w-full sm:w-auto items-center justify-center rounded-lg border-2 border-volt-500/50 bg-volt-500/8 px-8 sm:px-12 py-5 text-base font-bold uppercase tracking-wide text-volt-400 backdrop-blur-sm transition-all duration-300 hover:border-volt-400 hover:bg-volt-500/15 hover:text-white hover:shadow-xl hover:shadow-volt-500/20 hover:scale-105"
                        >
                            <span className="flex items-center gap-2">
                                View Case Studies
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Trust line */}
                    <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-volt-500/25 bg-volt-500/8 px-5 py-2.5 backdrop-blur-sm">
                        <svg className="w-5 h-5 text-volt-400 drop-shadow-[0_0_6px_rgba(227,245,68,0.7)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium text-[#e5e7eb] tracking-wide">
                            Trusted by teams that expect their website to perform
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-volt-500/60 to-transparent" />
        </section>
    );
}
