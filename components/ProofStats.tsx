import Image from "next/image";
import Link from "next/link";

const stats = [
    {
        value: "+164%",
        label: "Average Order Value",
        detail: "eCommerce redesign — revenue up 88% in 7 days",
        href: "/work/ecommerce-website-redesign-increase-aov",
        cta: "Read the case study",
    },
    {
        value: "9x",
        label: "Qualified Leads",
        detail: "3 → 27 qualified leads/month for a manufacturing client",
        href: "/services/conversion-optimization",
        cta: "See how I do it",
    },
    {
        value: "+320%",
        label: "Returning Customers",
        detail: "Post-redesign retention lift — same traffic, more revenue per visitor",
        href: "/work/ecommerce-website-redesign-increase-aov",
        cta: "Full breakdown",
    },
];

const logos = [
    { src: "/images/work/faztek-logo.png", alt: "Faztek" },
    { src: "/images/work/haag-streit-logo.png", alt: "Haag-Streit" },
    { src: "/images/work/melink-logo.png", alt: "Melink" },
    { src: "/images/work/plastechmold-logo.png", alt: "PlastechMold" },
    { src: "/images/work/shortening-shuttle-logo.png", alt: "The Shortening Shuttle" },
    { src: "/images/work/enduir-logo.png", alt: "Enduir" },
    { src: "/images/work/luma-logo.png", alt: "Luma" },
    { src: "/images/work/providence-logo-w.png", alt: "Providence" },
];

export default function ProofStats() {
    return (
        <section className="w-full bg-linear-to-b from-black to-slate-950 text-white py-20 border-t border-amber-500/10">
            <div className="mx-auto max-w-375 px-6">

                {/* Stats row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/40 mb-16">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group bg-slate-900/80 px-10 py-10 text-center hover:bg-slate-900 transition-colors duration-300 flex flex-col items-center"
                        >
                            <div className="text-5xl md:text-6xl font-black bg-linear-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                            <div className="text-sm text-slate-400 leading-relaxed mb-4">{stat.detail}</div>
                            <Link
                                href={stat.href}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                            >
                                {stat.cta}
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Client logos */}
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-8">
                        Trusted by B2B &amp; manufacturing brands
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {logos.map((logo) => (
                            <div key={logo.alt} className="relative h-8 w-28 opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
