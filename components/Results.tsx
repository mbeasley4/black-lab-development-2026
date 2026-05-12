import Link from "next/link";

const outcomes = [
    "More qualified leads",
    "Faster load times",
    "Higher conversion rates",
    "Better search visibility",
];

export default function Results() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-black text-white py-24 relative overflow-hidden border-t border-slate-800/50">
            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left */}
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            Outcomes
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
                            What You Get
                        </h2>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors duration-200"
                        >
                            See Results
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right: outcome list */}
                    <div className="space-y-5">
                        {outcomes.map((item, i) => (
                            <div key={item} className="flex items-center gap-5 group">
                                <span className="shrink-0 text-xs font-mono text-amber-500/30 w-5">0{i + 1}</span>
                                <div className="flex-1 py-4 border-b border-slate-800/60 group-last:border-0">
                                    <p className="text-xl font-semibold text-white">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
