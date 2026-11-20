import Link from "next/link";
import Image from "next/image";

// Every stat is named and links to the project it came from.
const caseStudies = [
    {
        client: "Mona Dermatology",
        industry: "Healthcare",
        metric: "312%",
        outcome: "More appointment bookings",
        detail: "Cincinnati practice, 6 months post-launch",
        href: "/work/mona-dermatology-wordpress-woocommerce",
    },
    {
        client: "The Shortening Shuttle",
        industry: "Ecommerce",
        metric: "+164%",
        outcome: "Average order value",
        detail: "Redesign + CRO, measured in the first 7 days",
        href: "/work/ecommerce-website-redesign-increase-aov",
    },
    {
        client: "Zero Gravity NKY",
        industry: "Medical Spa",
        metric: "80ms",
        outcome: "Total blocking time",
        detail: "Down from 400ms after the performance rebuild",
        href: "/work/zero-gravity-performance-rebuild",
    },
    {
        client: "Global Environmental Products",
        industry: "Manufacturing",
        metric: "57",
        outcome: "Legacy URLs redirected",
        detail: "Search rankings protected through a full rebuild",
        href: "/work/global-environmental-products-wordpress-rebuild",
    },
];

export default function Results() {
    return (
        <section className="w-full bg-linear-to-b from-neutral-950 to-black text-white py-32 relative overflow-hidden border-t border-neutral-800">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                            Selected Work
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Proof Over <span className="text-neutral-400">Promises</span>
                        </h2>
                    </div>
                    <Link
                        href="/work"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200 shrink-0"
                    >
                        View All Work
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Latest win — featured block, front and center */}
                <Link
                    href="/work/zero-gravity-performance-rebuild"
                    className="group relative mb-6 flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-linear-to-br from-white/10 via-neutral-900/70 to-neutral-950 p-8 md:p-10 transition-all duration-300 hover:border-volt-500/60 hover:shadow-[0_0_70px_rgba(227,245,68,0.18)]"
                >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-white/10 via-white/10 to-white/10" />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                        <div className="shrink-0 flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
                            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-volt-500 text-black shadow-lg">
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

                        <div className="hidden md:block w-px self-stretch bg-white/[0.04]" />

                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2 group-hover:text-volt-100 transition-colors duration-200">
                                Zero Gravity of Northern Kentucky
                            </h3>
                            <p className="text-sm md:text-base text-neutral-300 leading-relaxed mb-4 max-w-2xl">
                                A Northern Kentucky medical spa&apos;s WordPress site, rebuilt for speed — WooCommerce ripped out, booking links generalized, and page load times cut dramatically.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["WooCommerce removed", "Booking links generalized", "Major page speed gains"].map((tag) => (
                                    <span key={tag} className="text-xs font-medium text-volt-400 bg-white/[0.04] border border-neutral-800 rounded-full px-3 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="shrink-0 self-start md:self-center">
                            <span className="inline-flex items-center gap-2 rounded-md bg-volt-500 text-black px-5 py-3 text-sm font-bold group-hover:bg-volt-400 group-hover:gap-3 transition-all duration-200 shadow-lg whitespace-nowrap">
                                See the Project
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {caseStudies.map((item) => (
                        <Link key={item.client} href={item.href} className="group flex flex-col p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/40 hover:border-volt-500/40 hover:bg-volt-500/5 transition-all duration-300">
                            <p className="mb-4">
                                <span className="block text-sm font-semibold text-neutral-200">{item.client}</span>
                                <span className="block text-xs uppercase tracking-widest text-neutral-500">{item.industry}</span>
                            </p>
                            <p className="text-5xl md:text-6xl font-bold text-white leading-none mb-3">
                                {item.metric}
                            </p>
                            <p className="text-lg font-semibold text-white leading-snug mb-2 group-hover:text-volt-400 transition-colors duration-200">
                                {item.outcome}
                            </p>
                            <p className="text-xs text-neutral-400 mt-auto">
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
                        className="inline-flex items-center justify-center rounded-md bg-volt-500 px-8 py-4 text-sm font-bold text-black hover:bg-volt-400 transition-colors duration-200"
                    >
                        Schedule a Discovery Call →
                    </Link>
                </div>
            </div>
        </section>
    );
}
