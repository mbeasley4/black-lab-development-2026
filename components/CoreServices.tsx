import Link from "next/link";

const services = [
    {
        label: "Custom Website Development",
        description: "Handcrafted, production-grade builds. No templates, no builders — just clean code that performs.",
        href: "/services/b2b-website-design",
    },
    {
        label: "Lead Generation & Conversion Optimization",
        description: "Conversion architecture built around how your buyers actually think and behave.",
        href: "/services/conversion-optimization",
    },
    {
        label: "Ecommerce Performance Optimization",
        description: "Higher AOV, better retention, faster checkout — without starting from scratch.",
        href: "/services/ecommerce",
    },
    {
        label: "Site Speed & Performance Improvements",
        description: "Core Web Vitals green across the board. Fast everywhere, on every device.",
        href: "/services/site-speed",
    },
    {
        label: "Technical SEO Foundations",
        description: "Structure, crawlability, and indexing done right — so search efforts actually compound.",
        href: "/services/technical-seo",
    },
];

export default function CoreServices() {
    return (
        <section className="w-full bg-linear-to-b from-black to-slate-950 text-white py-24 relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.15) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="mb-14">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                        Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        What We Do
                    </h2>
                </div>

                {/* Service list */}
                <div className="divide-y divide-slate-800/60">
                    {services.map((service, i) => (
                        <Link
                            key={service.label}
                            href={service.href}
                            className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-7 hover:bg-amber-500/3 -mx-4 px-4 rounded-lg transition-colors duration-200"
                        >
                            <span className="shrink-0 text-xs font-mono text-amber-500/40 w-6">
                                0{i + 1}
                            </span>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors duration-200">
                                    {service.label}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                                    {service.description}
                                </p>
                            </div>
                            <svg
                                className="hidden sm:block shrink-0 w-4 h-4 text-amber-500/30 group-hover:text-amber-500 transition-all duration-200 translate-x-0 group-hover:translate-x-1"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
