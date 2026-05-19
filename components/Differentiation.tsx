const failPoints = [
    "They look good but don't convert",
    "They rank poorly because of weak technical foundations",
    "They're slow, bloated, and hard to maintain",
    "They don't guide users to take action",
    "They create friction instead of trust",
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
                            The Problem
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                           When Your Website<br/>
                           <span className="text-amber-500">Has to Perform</span>
                        </h2>
                    </div>

                    {/* Right: bullets */}
                    <div className="divide-y divide-slate-800/60">
                        {failPoints.map((item, i) => (
                            <div key={item} className="group flex items-start gap-6 py-8">
                                <span className="shrink-0 text-4xl font-black text-slate-800 group-hover:text-amber-500/30 transition-colors duration-300 leading-none mt-1 select-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-xl md:text-2xl text-slate-300 leading-snug font-medium group-hover:text-white transition-colors duration-300">
                                    {item}
                                </p>
                            </div>
                        ))}
                        <div className="pt-8">
                            <p className="text-sm text-amber-500/80 font-semibold tracking-wide uppercase">
                                That&apos;s not a marketing problem. It&apos;s a build problem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
