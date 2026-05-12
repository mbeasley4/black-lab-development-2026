const bullets = [
    {
        label: "Fast.",
        detail: 'Not "we\'ll optimize it later" fast.',
    },
    {
        label: "SEO-ready structure",
        detail: "from day one.",
    },
    {
        label: "No bloated builders",
        detail: "or fragile setups.",
    },
    {
        label: "Built to scale",
        detail: "as your business grows.",
    },
];

export default function Differentiation() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-black text-white py-24 relative overflow-hidden border-t border-slate-800/50">
            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left */}
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            How We Build
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Built Right<br />From the Start
                        </h2>
                    </div>

                    {/* Right: bullets */}
                    <div className="space-y-6">
                        {bullets.map((item, i) => (
                            <div key={item.label} className="flex items-start gap-5">
                                <span className="shrink-0 mt-1 w-7 h-7 rounded-full border border-amber-500/30 bg-amber-500/8 flex items-center justify-center text-xs font-mono text-amber-500/70">
                                    {i + 1}
                                </span>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    <span className="font-semibold text-white">{item.label}</span>{" "}
                                    {item.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
