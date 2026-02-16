"use client";

import Link from "next/link";
import Image from "next/image";

type ThemeColor = "purple" | "violet" | "fuchsia";

type CaseStudy = {
  title: string;
  summary: string;
  image: string;
  href?: string;
  color: ThemeColor;
}

const caseStudies: CaseStudy[] = [
    {
        title: "Enterprise Digital Platform",
        summary:
            "Architected and scaled a high-traffic content and commerce ecosystem supporting thousands of daily users.",
        image: "/images/case-studies/enterprise.png",
        href: "/work/",
        color: "purple",
    },
    {
        title: "Healthcare Manufacturer Website",
        summary:
            "Modernized UX and backend workflows, improving lead quality and operational efficiency.",
        image: "/images/case-studies/healthcare.png",
        color: "violet",
    },
    {
        title: "E-Commerce Product Platform",
        summary:
            "Designed and built a conversion-focused storefront with custom integrations and performance tuning.",
        image: "/images/case-studies/ecommerce.png",
        color: "fuchsia",
    },
    {
        title: "Email Marketing Systems",
        summary:
            "Implemented advanced segmentation, routing, and automation to drive customer engagement and conversions.",
        image: "/images/case-studies/email.png",
        color: "purple",
    },
];

const colorClasses = {
    purple: {
        border: "group-hover:border-purple-500/60",
        glow: "group-hover:shadow-purple-500/50",
        overlay: "from-purple-950/80 via-slate-950/90 to-black",
        accent: "bg-purple-500",
        ctaText: "text-purple-400",
    },
    violet: {
        border: "group-hover:border-violet-500/60",
        glow: "group-hover:shadow-violet-500/50",
        overlay: "from-violet-950/80 via-slate-950/90 to-black",
        accent: "bg-violet-500",
        ctaText: "text-violet-400",
    },
    fuchsia: {
        border: "group-hover:border-fuchsia-500/60",
        glow: "group-hover:shadow-fuchsia-500/50",
        overlay: "from-fuchsia-950/80 via-slate-950/90 to-black",
        accent: "bg-fuchsia-500",
        ctaText: "text-fuchsia-400",
    },
};

export default function CaseStudies() {
    return (
        <section className="w-full bg-gradient-to-b from-amber-950/20 via-slate-950 to-purple-950/30 text-white py-24 relative overflow-hidden">
            {/* Ambient background effects - COOL PURPLES */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />

            <div className="mx-auto max-w-[1500px] px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
                    <div className="max-w-6xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Industries at Work
                        </h2>
                        <p className="text-lg text-purple-100/80 leading-relaxed">
                            Across multiple industries, I build digital products that improve operations, engagement, and growth. Here's a look at recent projects.
                        </p>
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6">
                    {caseStudies.map((project) => {
                        const colors = colorClasses[project.color]; 
                        return (
                            <Link
                                key={project.title}
                                href={project.href || "/work"}
                                className={`group relative rounded-2xl overflow-hidden border-2 border-slate-800/50 bg-slate-900/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${colors.border} ${colors.glow} backdrop-blur-sm`}
                            >
                                {/* Image */}
                                <div className="relative h-[220px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay with color tint */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${colors.overlay} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                                    
                                    {/* Color accent bar at top */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 ${colors.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                </div>

                                {/* Content */}
                                <div className="p-8 relative">
                                    {/* Subtle gradient background on content area */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                    
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-fuchsia-400 group-hover:bg-clip-text transition-all duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-purple-100/70 leading-relaxed mb-4 group-hover:text-purple-50/90 transition-colors duration-300">
                                            {project.summary}
                                        </p>

                                        {/* View Project CTA */}
                                        <div className={`flex items-center ${colors.ctaText} opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300`}>
                                            <span className="text-sm font-semibold">View project</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/100 transition-all duration-500`} />
                            </Link>
                        );
                    })}
                </div>

                {/* View All */}
                <div className="mt-16 text-center">
                    <Link
                        href="/work"
                        className="inline-flex items-center justify-center rounded-md border-2 border-purple-500/50 bg-purple-500/10 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-lg hover:shadow-purple-500/30"
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