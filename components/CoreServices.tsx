const edges = [
    {
        label: "Engineering-first",
        description: "No templates. No shortcuts. Built for performance from the start.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
    },
    {
        label: "SEO-first architecture",
        description: "Clean structure, fast load times, and built to rank from day one.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
            </svg>
        ),
    },
    {
        label: "Conversion-driven UX",
        description: "Every page is designed to move users toward action.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
];

export default function CoreServices() {
    return (
        <section className="w-full bg-linear-to-b from-black to-slate-950 text-white py-28 relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(227,245,68,0.2) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/20 to-transparent" />

            <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
                <div className="mb-16">
                    <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                        My Approach
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                        Built Differently —<br/>
                        <span className="text-volt-500">Because It Is</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-xl">
                        This isn&apos;t a traditional agency model.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {edges.map((edge, i) => (
                        <div
                            key={edge.label}
                            className="group relative flex flex-col p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-volt-500/40 hover:bg-volt-500/5 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-volt-500/4 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

                            <div className="flex items-start justify-between mb-6">
                                <div className="w-10 h-10 rounded-lg bg-volt-500/10 border border-volt-500/20 flex items-center justify-center text-volt-400 group-hover:bg-volt-500/20 group-hover:border-volt-500/40 transition-all duration-300">
                                    {edge.icon}
                                </div>
                                <span className="text-xs font-mono text-slate-700 group-hover:text-volt-500/40 transition-colors duration-300">
                                    0{i + 1}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-volt-400 transition-colors duration-200 leading-snug">
                                {edge.label}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed flex-1 group-hover:text-slate-400 transition-colors duration-200">
                                {edge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
