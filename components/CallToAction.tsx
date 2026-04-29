import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative overflow-hidden w-full py-28 border-t border-cyan-500/20">
            {/* Background layers */}
            <div className="absolute inset-0">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/close-bg.png')",
                    }}
                />

                {/* Vibrant gradient overlay instead of dark black */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-cyan-950 to-slate-900" />
                
                {/* Additional color layer for vibrancy */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
            </div>

            {/* Animated ambient glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[1500px] px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent pb-2 leading-tight">
                        Let&apos;s Turn Your Website Into a Pipeline Engine
                    </h2>

                    <p className="text-xl md:text-2xl text-cyan-50/90 leading-relaxed mb-12 max-w-3xl mx-auto">
                        Whether you need a full B2B website redesign, a conversion audit, or a manufacturing-focused web presence — we build for pipeline, not pageviews.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-5 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                            <span className="relative z-10 flex items-center gap-2">
                                Get a Website Audit
                                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>

                        <Link
                            href="/work"
                            className="group inline-flex items-center justify-center rounded-lg border-2 border-cyan-400/60 bg-cyan-500/10 px-12 py-5 text-base font-bold uppercase tracking-wide text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
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
                    <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 backdrop-blur-sm shadow-lg shadow-cyan-500/20">
                        <svg className="w-5 h-5 text-cyan-300 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium text-cyan-200 tracking-wide">
                            Trusted by B2B &amp; manufacturing brands across the US
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </section>
    );
}