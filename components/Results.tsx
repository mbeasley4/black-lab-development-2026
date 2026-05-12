import Image from "next/image";
import Link from "next/link";

const outcomes = [
    {
        label: "More Qualified Leads",
        detail: "Visitors who are ready to buy, not just browse.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
    },
    {
        label: "Faster Load Times",
        detail: "Core Web Vitals green — on every device, every time.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        label: "Higher Conversion Rates",
        detail: "Structure and copy that turns traffic into action.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
    },
    {
        label: "Better Search Visibility",
        detail: "Technical foundations that let SEO actually compound.",
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
            </svg>
        ),
    },
];

const screenshots = [
    { src: "/images/work/faztek-screenshot.jpg", alt: "Faztek" },
    { src: "/images/work/melink-screenshot.jpg", alt: "Melink" },
    { src: "/images/work/haag-streit-screenshot.jpg", alt: "Haag-Streit" },
];

export default function Results() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 to-black text-white py-28 relative overflow-hidden border-t border-slate-800/50">
            <div className="absolute bottom-0 right-0 w-150 h-150 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                    <div>
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            Outcomes
                        </span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            What You Get
                        </h2>
                    </div>
                    <Link
                        href="/work"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors duration-200 shrink-0"
                    >
                        See Our Work
                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Outcomes grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {outcomes.map((item) => (
                        <div key={item.label} className="group flex flex-col min-h-64 p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-8 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                                {item.icon}
                            </div>
                            <p className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-200 leading-snug flex-1">
                                {item.label}
                            </p>
                            <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
