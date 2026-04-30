import Link from "next/link";

const services = [
    {
        label: "B2B Website Design",
        headline: "Designed for Long Sales Cycles",
        description:
            "B2B buyers don't convert on the first visit. I build websites architected around how enterprise and mid-market buyers actually research, evaluate, and decide — with every page designed to move complex deals forward.",
        keyword: "b2b website design agency",
        href: "/services/b2b-website-design",
        cta: "See Our B2B Approach",
        borderClass: "group-hover:border-amber-500/50",
        glowClass: "group-hover:shadow-amber-500/15",
        accentClass: "from-amber-500 to-amber-400",
        ctaClass: "text-amber-500 group-hover:text-amber-400",
    },
    {
        label: "Conversion Optimization",
        headline: "Traffic Without Conversions Is Just Overhead",
        description:
            "I diagnose exactly why your site isn't converting, then systematically fix it — messaging alignment, UX friction points, CTA structure, and form strategy — measured before and after with real data.",
        keyword: "b2b website conversion optimization",
        href: "/services/conversion-optimization",
        cta: "See How I Optimize",
        borderClass: "group-hover:border-blue-500/50",
        glowClass: "group-hover:shadow-blue-500/15",
        accentClass: "from-blue-500 to-blue-400",
        ctaClass: "text-blue-400 group-hover:text-blue-300",
    },
    {
        label: "Manufacturing Websites",
        headline: "Built for Engineers, Procurement, and Operations Buyers",
        description:
            "Manufacturing buyers are technical, skeptical, and slow to decide. I build industry-specific websites that speak their language, surface the right specs, and generate RFQs — not just contact form submissions.",
        keyword: "manufacturing website design",
        href: "/services/manufacturing-website-design",
        cta: "See Manufacturing Work",
        borderClass: "group-hover:border-amber-500/50",
        glowClass: "group-hover:shadow-amber-500/15",
        accentClass: "from-amber-500 to-amber-400",
        ctaClass: "text-amber-500 group-hover:text-amber-400",
    },
];

export default function CoreServices() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-black text-white py-24 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.15) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                        Core Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                        Three Ways I Generate
                        <span className="block text-amber-500">
                            Pipeline for B2B Companies
                        </span>
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.label}
                            href={service.href}
                            className={`group relative rounded-2xl border border-slate-800/60 bg-linear-to-br from-slate-900/80 to-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.borderClass} ${service.glowClass} overflow-hidden flex flex-col`}
                        >
                            {/* Top accent bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${service.accentClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`} />

                            {/* Label */}
                            <span className={`inline-block mb-5 text-xs tracking-[0.25em] uppercase font-semibold ${service.ctaClass} transition-colors duration-300`}>
                                {service.label}
                            </span>

                            {/* Headline */}
                            <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                                {service.headline}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-400 leading-relaxed mb-8 grow group-hover:text-slate-300 transition-colors duration-300">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <div className={`flex items-center gap-2 text-sm font-semibold ${service.ctaClass} transition-all duration-300 group-hover:gap-3`}>
                                <span>{service.cta}</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
