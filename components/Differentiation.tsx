const bullets = [
    {
        label: "Fast.",
        detail: 'Not "optimized later" fast.',
    },
    {
        label: "Clean builds —",
        detail: "no bloated builders or patchwork fixes.",
    },
    {
        label: "SEO-ready structure",
        detail: "baked in.",
    },
    {
        label: "Designed to scale",
        detail: "without constant rebuilds.",
    },
];

export default function Differentiation() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-black text-white py-28 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute top-1/2 right-0 w-125 h-125 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left */}
                    <div className="lg:sticky lg:top-32">
                        <span className="inline-block mb-5 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            How We Build
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                            Built Right<br />From the Start
                        </h2>
                        <p className="mt-6 text-slate-500 text-base leading-relaxed max-w-sm">
                            Every decision made at the foundation level — so nothing needs to be undone later.
                        </p>
                    </div>

                    {/* Right: bullets */}
                    <div className="space-y-0 divide-y divide-slate-800/60">
                        {bullets.map((item, i) => (
                            <div key={item.label} className="group flex items-start gap-6 py-8">
                                <span className="shrink-0 text-4xl font-black text-slate-800 group-hover:text-amber-500/30 transition-colors duration-300 leading-none mt-1 select-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-xl md:text-2xl text-slate-300 leading-snug font-medium group-hover:text-white transition-colors duration-300">
                                    <span className="text-white font-bold">{item.label}</span>{" "}
                                    <span className="text-slate-400">{item.detail}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
