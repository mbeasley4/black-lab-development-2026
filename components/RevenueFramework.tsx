const bullets = [
    "Turn traffic into qualified leads and sales",
    "Support complex buying journeys and user flows",
    "Give marketing and SEO efforts something solid to work with",
];

export default function RevenueFramework() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-slate-950 text-white py-24 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-0 w-125 h-125 bg-amber-500/4 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-125 h-125 bg-blue-500/4 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: headline */}
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            The Problem
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            Most Websites Look Fine.
                            <span className="block text-amber-500">That&apos;s the Problem.</span>
                        </h2>
                    </div>

                    {/* Right: body + bullets */}
                    <div>
                        <div className="mb-8 space-y-0 divide-y divide-slate-800/60">
                            {[
                                { text: "They launch.", dim: false },
                                { text: "They sit there.", dim: true },
                                { text: "They underperform.", dim: true },
                            ].map(({ text, dim }) => (
                                <p
                                    key={text}
                                    className={`py-4 text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                                        dim ? "text-slate-600" : "text-white"
                                    }`}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        <p className="text-slate-500 text-sm uppercase tracking-widest mb-5">We build websites that:</p>

                        <ul className="space-y-4">
                            {bullets.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                                    <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
