import Link from "next/link";

const caseStudies = [
    {
        industry: "Dermatology Clinic",
        metric: "312%",
        outcome: "More appointment bookings",
        detail: "Cincinnati practice, 6 months post-launch",
        href: "/case-studies",
    },
    {
        industry: "Ecommerce Brand",
        metric: "164%",
        outcome: "Increase in average order value",
        detail: "Redesign + CRO, measured in first 7 days",
        href: "/case-studies/ecommerce-website-redesign-increase-aov",
    },
    {
        industry: "Manufacturing Company",
        metric: "4.2×",
        outcome: "More qualified RFQs",
        detail: "Industrial website rebuild",
        href: "/case-studies",
    },
    {
        industry: "B2B SaaS",
        metric: "68%",
        outcome: "Faster page load times",
        detail: "Performance optimization engagement",
        href: "/case-studies",
    },
];

export default function Results() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-black text-white py-32 relative overflow-hidden border-t border-volt-500/15">
            <div className="absolute bottom-0 right-0 w-150 h-150 bg-volt-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/30 to-transparent" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                            Case Studies
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Proof Over <span className="text-volt-500">Promises</span>
                        </h2>
                    </div>
                    <Link
                        href="/case-studies"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200 shrink-0"
                    >
                        View All Case Studies
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {caseStudies.map((item) => (
                        <Link key={item.industry} href={item.href} className="group flex flex-col p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-volt-500/40 hover:bg-volt-500/5 transition-all duration-300">
                            <p className="text-xs uppercase tracking-widest text-slate-600 mb-4 group-hover:text-volt-500/60 transition-colors duration-200">
                                {item.industry}
                            </p>
                            <p className="text-5xl md:text-6xl font-bold text-volt-500 leading-none mb-3 drop-shadow-[0_0_20px_rgba(227,245,68,0.3)]">
                                {item.metric}
                            </p>
                            <p className="text-lg font-semibold text-white leading-snug mb-2 group-hover:text-volt-400 transition-colors duration-200">
                                {item.outcome}
                            </p>
                            <p className="text-xs text-slate-500 mt-auto">
                                {item.detail}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-volt-500 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                Read the story →
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-volt px-8 py-4 text-sm font-bold text-black hover:brightness-110 transition-all duration-200 shadow-lg shadow-volt/20"
                    >
                        Schedule a Discovery Call →
                    </Link>
                </div>
            </div>
        </section>
    );
}
