const perfBullets = [
    "Core Web Vitals optimized",
    "Clean, indexable code",
    "Structured data and SEO best practices",
    "Built for long-term performance — not short-term patches",
];

const locations = [
    "Cincinnati & Northern Kentucky",
    "Chicago",
    "Across Michigan and Massachusetts",
    "Throughout the East Coast",
];

export default function PositioningStrike() {
    return (
        <section className="w-full py-24 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c] via-[#111214] to-slate-950" />
            <div className="absolute inset-0 bg-linear-to-tr from-volt-500/4 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/30 to-transparent" />

            <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

                    {/* Performance + SEO */}
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                            Performance &amp; SEO
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
                            Fast. Searchable. Built to Last.
                        </h2>

                        <div className="space-y-0 divide-y divide-slate-800/50 mb-8">
                            {perfBullets.map((item) => (
                                <div key={item} className="flex items-center gap-4 py-4">
                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-volt-500" />
                                    <p className="text-base text-slate-300">{item}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed">
                            Because speed, structure, and visibility directly impact conversions.
                        </p>
                    </div>

                    {/* Local SEO */}
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                            Local &amp; Nationwide
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
                            Trusted by Businesses Locally and Nationwide
                        </h2>

                        <p className="text-slate-400 text-base mb-6">I work with companies in:</p>

                        <div className="space-y-0 divide-y divide-slate-800/50 mb-8">
                            {locations.map((loc) => (
                                <div key={loc} className="flex items-center gap-4 py-4">
                                    <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-volt-500" />
                                    <p className="text-base text-slate-300">{loc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed">
                            From local clinics to multi-location organizations, the goal is the same — a website that performs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
