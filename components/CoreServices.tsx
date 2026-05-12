import Link from "next/link";

const services = [
    {
        label: "Custom Website Development",
        description: "Handcrafted, production-grade builds. No templates, no builders — just clean code that performs.",
        href: "/services/b2b-website-design",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
    },
    {
        label: "Lead Generation & Conversion Optimization",
        description: "Conversion architecture built around how your buyers actually think and behave.",
        href: "/services/conversion-optimization",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
    {
        label: "Ecommerce Performance Optimization",
        description: "Higher AOV, better retention, faster checkout — without starting from scratch.",
        href: "/services/ecommerce",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        ),
    },
    {
        label: "Site Speed & Performance Improvements",
        description: "Core Web Vitals green across the board. Fast everywhere, on every device.",
        href: "/services/site-speed",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        label: "Technical SEO Foundations",
        description: "Structure, crawlability, and indexing done right — so search efforts actually compound.",
        href: "/services/technical-seo",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
            </svg>
        ),
    },
];

export default function CoreServices() {
    return (
        <section className="w-full bg-linear-to-b from-black to-slate-950 text-white py-28 relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.2) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="mb-16">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                        Services
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                        What We Do
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, i) => (
                        <Link
                            key={service.label}
                            href={service.href}
                            className="group relative flex flex-col p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/4 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

                            <div className="flex items-start justify-between mb-6">
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-xs font-mono text-slate-700 group-hover:text-amber-500/40 transition-colors duration-300">
                                    0{i + 1}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-200 leading-snug">
                                {service.label}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed flex-1 group-hover:text-slate-400 transition-colors duration-200">
                                {service.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-500/40 group-hover:text-amber-400 transition-all duration-200">
                                Learn more
                                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
