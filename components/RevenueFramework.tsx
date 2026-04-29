const steps = [
    {
        number: "01",
        title: "Positioning",
        description:
            "I define your ideal buyer, their real pain points, and what makes you the only logical choice. Messaging that resonates with decision-makers — not just anyone who lands on the page.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "UX for Buyers",
        description:
            "B2B buyers aren't consumers. I build for long sales cycles, multiple stakeholders, and the skepticism that comes with six-figure decisions — so every page earns the next click.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Conversion Architecture",
        description:
            "Strategic placement of CTAs, forms, and trust signals that guide buyers toward action. Not guesswork — a deliberate structure built from how B2B buying decisions actually happen.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Build",
        description:
            "Clean, fast, production-grade code. No page builders, no bloated themes. I build to perform — on Core Web Vitals, in search results, and under real traffic.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Optimization",
        description:
            "Launch is the beginning, not the end. I track what the data tells us and make continuous improvements — messaging tests, UX changes, and conversion rate work tied to real pipeline numbers.",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
];

export default function RevenueFramework() {
    return (
        <section className="w-full bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 text-white py-24 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="mx-auto max-w-[1500px] px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                        Our Approach
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                        The Revenue-Driven
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Website System
                        </span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Most agencies hand you a site. I hand you a system. Here&apos;s the framework that turns your website from a digital brochure into your best-performing sales asset.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden lg:block absolute left-[27px] top-12 bottom-12 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/30 to-cyan-500/0" />

                    <div className="space-y-0">
                        {steps.map((step, i) => (
                            <div
                                key={step.number}
                                className="group relative grid grid-cols-1 lg:grid-cols-[56px_1fr] gap-6 lg:gap-10 items-start py-8 lg:py-10"
                            >
                                {/* Step indicator */}
                                <div className="flex items-center gap-4 lg:block lg:pt-1">
                                    <div className="relative flex-shrink-0 w-14 h-14 rounded-full border-2 border-slate-700 bg-slate-900 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all duration-300 z-10">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:pb-4">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-xs font-mono text-cyan-500/60 tracking-widest">{step.number}</span>
                                        <div className="h-px w-8 bg-cyan-500/30" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed max-w-2xl group-hover:text-slate-300 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Divider between steps */}
                                {i < steps.length - 1 && (
                                    <div className="lg:col-span-2 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
