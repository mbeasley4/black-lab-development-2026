"use client";

import Link from "next/link";
import Image from "next/image";

type ThemeColor = "volt" | "blue";

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
        title: "eCommerce Redesign",
        industry: "eCommerce",
        summary:
            "Conversion architecture overhaul that increased average order value 164% and total revenue 88% — measured within 7 days of launch.",
        metric: "+164%",
        metricLabel: "Avg Order Value",
        image: "/images/work/shortening-shuttle-screenshot.png",
        href: "/case-studies/ecommerce-website-redesign-increase-aov",
        color: "volt",
    },
    {
        title: "Rev & Rinse Auto Detailing",
        industry: "Automotive / Local Business",
        summary:
            "Brochure site for a local auto detailing business — built with Next.js and Sanity.io CMS for fast performance and easy content management.",
        metric: "",
        metricLabel: "",
        image: "/images/work/revandrinse-screenshot.png",
        href: "/case-studies",
        color: "volt",
    },
    {
        title: "Zoo Printables AI",
        industry: "Education / EdTech",
        summary:
            "A free wildlife education platform built with SEO, AEO, and GEO architecture from day one — fact-verified content, crawlable structure, and explicit AI crawler access.",
        metric: "",
        metricLabel: "",
        image: "/images/work/zooprintablesai-screenshot.png",
        href: "/case-studies/zoo-printables-ai-seo-aeo-geo",
        color: "volt",
    },
];

const colorClasses = {
    volt: {
        border: "group-hover:border-volt-500/50",
        glow: "group-hover:shadow-volt-500/25",
        overlay: "from-[#111214]/80 via-slate-950/90 to-black",
        accent: "bg-volt-500",
        ctaText: "text-volt-500",
        titleHover: "group-hover:text-volt-400",
        bottomLine: "group-hover:via-volt-500",
    },
    blue: {
        border: "group-hover:border-volt-500/50",
        glow: "group-hover:shadow-volt-500/25",
        overlay: "from-[#111214]/80 via-slate-950/90 to-black",
        accent: "bg-volt-500",
        ctaText: "text-volt-400",
        titleHover: "group-hover:text-volt-300",
        bottomLine: "group-hover:via-volt-500",
    },
};

export default function CaseStudies() {
    return (
        <section className="w-full bg-linear-to-b from-[#111214] via-slate-950 to-[#0b0b0c] text-white py-24 relative overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-volt-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-volt-500/8 rounded-full blur-3xl" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                            Case Studies
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                            Results, Not{" "}
                            <span className="text-volt-500">
                                Brochures
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Every engagement is measured against real pipeline outcomes — qualified leads, conversion rates, and revenue attributed to the website.
                        </p>
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudies.map((project) => {
                        const colors = colorClasses[project.color];
                        return (
                            <Link
                                key={project.title}
                                href={project.href || "/work"}
                                className={`group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${colors.border} ${colors.glow}`}
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
                                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 to-transparent" />

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
                        href="/case-studies"
                        className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 bg-volt-500/8 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-volt-400 transition-all duration-300 hover:border-volt-400 hover:bg-volt-500/15 hover:text-white hover:shadow-lg hover:shadow-volt-500/20"
                    >
                        View All Case Studies
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
