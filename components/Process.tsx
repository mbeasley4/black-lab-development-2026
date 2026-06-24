const advantages = [
    {
        label: "No account managers",
        detail: "You talk directly to the person making decisions and writing code.",
    },
    {
        label: "No junior developers",
        detail: "Every line is written by someone who owns the outcome.",
    },
    {
        label: "No delays between idea and implementation",
        detail: "Strategy and execution aren't separated by layers of process.",
    },
    {
        label: "Faster decisions, better outcomes",
        detail: "Fewer handoffs mean fewer gaps — and faster results.",
    },
];

export default function Process() {
    return (
        <section className="w-full bg-linear-to-b from-black to-slate-950 text-white py-28 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700/40 to-transparent" />
            <div className="absolute bottom-0 left-1/3 w-125 h-125 bg-volt-500/4 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div>
                        <span className="inline-block mb-5 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                            The Difference
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                            You Work Directly With the <span className="text-volt-500">Person Doing the Work</span>
                        </h2>
                    </div>
                    <div className="space-y-3">
                        <p className="text-slate-400 text-lg leading-relaxed">
                            No layers. No handoffs. No disconnect between strategy and execution.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800/30 mb-12">
                    {advantages.map((item, i) => (
                        <div key={item.label} className="group relative bg-slate-950/70 hover:bg-volt-500/5 p-10 transition-colors duration-300 overflow-hidden">
                            <div className="absolute top-6 right-6 text-7xl font-black text-slate-900 group-hover:text-volt-500/10 transition-colors duration-500 leading-none select-none pointer-events-none">
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="relative z-10">
                                <div className="w-8 h-px bg-volt-500 mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-volt-400 transition-colors duration-200">
                                    {item.label}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl space-y-2">
                    <p className="text-slate-400 text-base leading-relaxed">
                        Most agencies sell strategy and outsource execution.
                    </p>
                    <p className="text-white text-base font-semibold leading-relaxed">
                        This is execution-driven strategy.
                    </p>
                </div>
            </div>
        </section>
    );
}
