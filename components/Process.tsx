const steps = [
    {
        label: "Identify what's holding you back",
        detail: "We audit your site, your traffic, and your conversion gaps before touching a line of code.",
    },
    {
        label: "Fix the structure",
        detail: "Architecture, speed, and navigation — rebuilt around how your buyers actually move.",
    },
    {
        label: "Build it properly",
        detail: "Clean, production-grade code. No builders, no bloat, no shortcuts.",
    },
    {
        label: "Improve it over time",
        detail: "Performance is ongoing. We stay in it with you — testing, refining, compounding.",
    },
];

export default function Process() {
    return (
        <section className="w-full bg-linear-to-b from-black to-slate-950 text-white py-28 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700/40 to-transparent" />
            <div className="absolute bottom-0 left-1/3 w-125 h-125 bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div>
                        <span className="inline-block mb-5 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            Process
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                            Simple,<br />On Purpose
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                        No bloated discovery phases. No drawn-out timelines. Just a clear path from broken to performing.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800/30">
                    {steps.map((step, i) => (
                        <div key={step.label} className="group relative bg-slate-950/70 hover:bg-amber-500/5 p-10 transition-colors duration-300 overflow-hidden">
                            <div className="absolute top-6 right-6 text-7xl font-black text-slate-900 group-hover:text-amber-500/10 transition-colors duration-500 leading-none select-none pointer-events-none">
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="relative z-10">
                                <div className="w-8 h-px bg-amber-500 mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-amber-400 transition-colors duration-200">
                                    {step.label}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                                    {step.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
