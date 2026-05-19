import Link from "next/link";

const caseStudies = [
    {
        industry: "Dermatology Clinic",
        outcome: "More appointment bookings",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        ),
    },
    {
        industry: "Med Spa",
        outcome: "Increased local search visibility + leads",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
            </svg>
        ),
    },
    {
        industry: "Education Organization",
        outcome: "Higher inquiry and application rates",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.63 48.63 0 0112 20.904a48.63 48.63 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
        ),
    },
    {
        industry: "B2B Company",
        outcome: "Better-qualified inbound pipeline",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
];

export default function Results() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-black text-white py-28 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute bottom-0 right-0 w-150 h-150 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            Case Studies
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Proof Over <span className="text-amber-500">Promises</span>
                        </h2>
                    </div>
                    <Link
                        href="/case-studies"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors duration-200 shrink-0"
                    >
                        View Case Studies
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {caseStudies.map((item) => (
                        <div key={item.industry} className="group flex flex-col min-h-64 p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-8 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                                {item.icon}
                            </div>
                            <p className="text-xs uppercase tracking-widest text-slate-600 mb-2 group-hover:text-amber-500/60 transition-colors duration-200">
                                {item.industry}
                            </p>
                            <p className="text-lg md:text-xl font-bold text-white leading-snug flex-1 group-hover:text-amber-400 transition-colors duration-200">
                                {item.outcome}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-sm text-slate-500 text-center">
                    Real businesses. Measurable outcomes.
                </p>
            </div>
        </section>
    );
}
