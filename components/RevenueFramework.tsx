const failPoints = [
    "Slow load times.",
    "Confusing structure.",
    "Weak paths to action.",
];

export default function RevenueFramework() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-slate-900 text-white py-28 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-0 w-150 h-150 bg-amber-500/6 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-125 h-125 bg-blue-500/4 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: headline */}
                    <div className="lg:sticky lg:top-32">
                        <span className="inline-block mb-5 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            The Problem
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                            <span className="block text-white">Traffic Isn&apos;t</span>
                            <span className="block text-white">the Problem.</span>
                            <span className="block text-amber-500 mt-1">Your Website Is.</span>
                        </h2>
                    </div>

                    {/* Right: body */}
                    <div className="flex flex-col gap-10">
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
                            Most teams invest in SEO, ads, and content — then send traffic to a site that doesn&apos;t convert.
                        </p>

                        <div className="space-y-0 divide-y divide-slate-800/70">
                            {failPoints.map((item) => (
                                <div key={item} className="flex items-center gap-4 py-5">
                                    <span className="shrink-0 w-2 h-2 rounded-full bg-amber-500" />
                                    <p className="text-lg md:text-xl text-slate-300 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-amber-500/80 font-semibold tracking-wide uppercase">
                            That&apos;s where performance breaks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
