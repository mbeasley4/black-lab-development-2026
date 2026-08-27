import Link from "next/link";
import Image from "next/image";

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

                {/* Latest win — featured block, front and center */}
                <Link
                    href="/case-studies#zero-gravity-of-northern-kentucky"
                    className="group relative mb-6 flex flex-col overflow-hidden rounded-3xl border border-volt-500/30 bg-linear-to-br from-volt-500/10 via-neutral-900/70 to-neutral-950 p-8 md:p-10 transition-all duration-300 hover:border-volt-500/60 hover:shadow-[0_0_70px_rgba(227,245,68,0.18)]"
                >
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-volt-500/25 rounded-full blur-[110px] pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-volt-500/10 rounded-full blur-[110px] pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-volt-600 via-volt-400 to-volt-600" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                        <div className="shrink-0 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
                            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-volt-500 text-black shadow-lg shadow-volt-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                                Latest Win
                            </span>
                            <div className="h-8 w-36 relative opacity-90">
                                <Image
                                    src="/images/work/zerogravity-logo.png"
                                    alt="Zero Gravity of Northern Kentucky"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>

                        <div className="hidden md:block w-px self-stretch bg-volt-500/20" />

                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2 group-hover:text-volt-100 transition-colors duration-200">
                                Zero Gravity of Northern Kentucky
                            </h3>
                            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-4 max-w-2xl">
                                A Northern Kentucky medical spa&apos;s WordPress site, rebuilt for speed — WooCommerce ripped out, booking links generalized, and page load times cut dramatically.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["WooCommerce removed", "Booking links generalized", "Major page speed gains"].map((tag) => (
                                    <span key={tag} className="text-xs font-medium text-volt-400 bg-volt-500/10 border border-volt-500/20 rounded-full px-3 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 self-start md:self-center">
                            <span className="inline-flex items-center gap-2 rounded-md bg-volt-500 text-black px-5 py-3 text-sm font-bold group-hover:bg-volt-400 group-hover:gap-3 transition-all duration-200 shadow-lg shadow-volt-500/20 whitespace-nowrap">
                                Read the Case Study
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>

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
