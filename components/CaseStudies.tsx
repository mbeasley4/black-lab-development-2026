"use client";

import Link from "next/link";
import Image from "next/image";

type ThemeColor = "amber" | "blue";

type CaseStudy = {
  title: string;
  industry: string;
  summary: string;
  metric: string;
  metricLabel: string;
  image: string;
  href?: string;
  color: ThemeColor;
}

const caseStudies: CaseStudy[] = [
    {
        title: "Faztek",
        industry: "Industrial Manufacturing",
        summary:
            "Full website redesign targeting engineers and procurement buyers — new positioning, SEO architecture, and conversion-focused product pages.",
        metric: "+240%",
        metricLabel: "Organic Traffic",
        image: "/images/work/faztek-screenshot.jpg",
        href: "/work",
        color: "amber",
    },
    {
        title: "Haag-Streit",
        industry: "Healthcare Manufacturer",
        summary:
            "Modernized UX and messaging for a global optics manufacturer — redesigned for multiple buyer personas across clinical and procurement audiences.",
        metric: "+180%",
        metricLabel: "Lead Quality",
        image: "/images/work/haag-streit-screenshot.jpg",
        href: "/work",
        color: "blue",
    },
    {
        title: "PlastechMold",
        industry: "Precision Manufacturing",
        summary:
            "Conversion architecture overhaul for a custom injection molding firm — redesigned around RFQ generation and technical buyer journeys.",
        metric: "3x",
        metricLabel: "Qualified Leads/Mo",
        image: "/images/work/plastechmold-screenshot.png",
        href: "/work",
        color: "amber",
    },
    {
        title: "eCommerce Redesign",
        industry: "eCommerce",
        summary:
            "Conversion architecture overhaul that increased average order value 164% and total revenue 88% — measured within 7 days of launch.",
        metric: "+164%",
        metricLabel: "Avg Order Value",
        image: "/images/work/shortening-shuttle-screenshot.png",
        href: "/work/ecommerce-website-redesign-increase-aov",
        color: "blue",
    },
];

const colorClasses = {
    amber: {
        border: "group-hover:border-amber-500/50",
        glow: "group-hover:shadow-amber-500/25",
        overlay: "from-[#111214]/80 via-slate-950/90 to-black",
        accent: "bg-amber-500",
        ctaText: "text-amber-500",
        titleHover: "group-hover:text-amber-400",
        bottomLine: "group-hover:via-amber-500",
    },
    blue: {
        border: "group-hover:border-blue-500/50",
        glow: "group-hover:shadow-blue-500/25",
        overlay: "from-[#111214]/80 via-slate-950/90 to-black",
        accent: "bg-blue-500",
        ctaText: "text-blue-400",
        titleHover: "group-hover:text-blue-300",
        bottomLine: "group-hover:via-blue-500",
    },
};

export default function CaseStudies() {
    return (
        <section className="w-full bg-linear-to-b from-[#111214] via-slate-950 to-[#0b0b0c] text-white py-24 relative overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                            Case Studies
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                            Results, Not{" "}
                            <span className="text-amber-500">
                                Brochures
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Every engagement is measured against real pipeline outcomes — qualified leads, conversion rates, and revenue attributed to the website.
                        </p>
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {caseStudies.map((project) => {
                        const colors = colorClasses[project.color];
                        return (
                            <Link
                                key={project.title}
                                href={project.href || "/work"}
                                className={`group relative rounded-2xl overflow-hidden border-2 border-slate-800/50 bg-slate-900/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${colors.border} ${colors.glow} backdrop-blur-sm`}
                            >
                                {/* Image */}
                                <div className="relative h-55 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-linear-to-t ${colors.overlay} opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />

                                    {/* Color accent bar at top */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />

                                    <div className="relative z-10">
                                        {/* Industry tag */}
                                        <span className="inline-block text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                                            {project.industry}
                                        </span>
                                        <h3 className={`text-lg font-bold mb-2 text-white ${colors.titleHover} transition-all duration-300`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                                            {project.summary}
                                        </p>

                                        {/* View Project CTA */}
                                        <div className={`flex items-center ${colors.ctaText} translate-x-0 group-hover:translate-x-2 transition-all duration-300`}>
                                            <span className="text-sm font-semibold">View project</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-transparent to-transparent ${colors.bottomLine} transition-all duration-500`} />
                            </Link>
                        );
                    })}
                </div>

                {/* View All */}
                <div className="mt-16 text-center">
                    <Link
                        href="/work"
                        className="inline-flex items-center justify-center rounded-md border-2 border-amber-500/40 bg-amber-500/8 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-amber-400 transition-all duration-300 hover:border-amber-400 hover:bg-amber-500/15 hover:text-white hover:shadow-lg hover:shadow-amber-500/20"
                    >
                        View Full Portfolio
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
