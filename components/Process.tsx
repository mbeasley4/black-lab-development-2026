const steps = [
    "Identify what&apos;s holding you back",
    "Fix the structure",
    "Build it properly",
    "Improve it over time",
];

export default function Process() {
    return (
        <section className="w-full bg-linear-to-b from-black to-slate-950 text-white py-24 relative overflow-hidden border-t border-slate-800/50">
            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left */}
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            Process
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Simple,<br />On Purpose
                        </h2>
                    </div>

                    {/* Right: steps */}
                    <div className="relative">
                        {/* Connector line */}
                        <div className="absolute left-3.25 top-8 bottom-8 w-px bg-linear-to-b from-amber-500/0 via-amber-500/20 to-amber-500/0" />

                        <div className="space-y-0">
                            {steps.map((step, i) => (
                                <div key={i} className="group flex items-center gap-6 py-5">
                                    <div className="relative shrink-0 w-7 h-7 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center z-10 group-hover:border-amber-500/60 group-hover:bg-amber-500/10 transition-all duration-300">
                                        <span className="text-[10px] font-mono text-amber-500/50 group-hover:text-amber-500 transition-colors duration-300">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <p
                                        className="text-lg text-slate-400 group-hover:text-white transition-colors duration-300"
                                        dangerouslySetInnerHTML={{ __html: step }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
