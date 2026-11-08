import Image from "next/image";
import Link from "next/link";

const audiences = [
    {
        eyebrow: "Small Businesses",
        title: "A site that actually brings in customers",
        description:
            "Custom-built, fast, and designed around how your customers buy — not a template with your logo dropped in.",
        cta: "Small business websites",
        href: "/services/small-business-website-design",
        image: "/images/home/small-business.jpg",
        alt: "Small business owner helping a customer at the checkout counter",
    },
    {
        eyebrow: "Agency Partners",
        title: "Senior dev capacity, under your brand",
        description:
            "White-label builds delivered on time, to spec, with zero client contact unless you want it. Your margins stay intact.",
        cta: "Partner with me",
        href: "/partners",
        image: "/images/home/agency-partners.jpg",
        alt: "Two colleagues celebrating a project win with a high five",
    },
];

export default function WhoIWorkWith() {
    return (
        <section className="w-full bg-black text-white py-28 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/20 to-transparent" />

            <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
                <div className="mb-14 max-w-2xl">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                        Who I Work With
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                        Two Kinds of Clients.<br />
                        <span className="text-volt-500">One Standard.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {audiences.map((a) => (
                        <Link
                            key={a.href}
                            href={a.href}
                            className="group relative flex min-h-[460px] md:min-h-[520px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-800/60 transition-all duration-500 hover:border-volt-500/60 hover:shadow-2xl hover:shadow-volt-500/10 hover:-translate-y-1"
                        >
                            <Image
                                src={a.image}
                                alt={a.alt}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                            />
                            {/* Legibility gradient + volt wash on hover */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-black/10" />
                            <div className="absolute inset-0 bg-linear-to-tr from-volt-500/0 to-volt-500/0 transition-colors duration-700 group-hover:from-volt-500/15" />

                            <div className="relative p-8 md:p-10">
                                <span className="mb-3 inline-block rounded-sm bg-volt-500 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-black">
                                    {a.eyebrow}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-3">
                                    {a.title}
                                </h3>
                                <p className="text-slate-300 leading-relaxed max-w-md mb-6">
                                    {a.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-volt-400">
                                    {a.cta}
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
