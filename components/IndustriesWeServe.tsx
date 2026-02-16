import Link from "next/link";
import {
    ShoppingCart,
    GraduationCap,
    Factory,
    Stethoscope,
    Building2,
    Cpu,
} from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

type ThemeColor = "purple" | "blue" | "cyan" | "emerald" | "amber" | "rose";
type Icon = typeof ShoppingCart | typeof GraduationCap | typeof Factory | typeof Stethoscope | typeof Building2 | typeof Cpu;

type Industry = {
  title: string;
  description: string;
  icon: Icon;
  href: string;
  color: ThemeColor;
}

const industries: Industry[] = [
    {
        title: "Technology & SaaS",
        description:
            "Scalable platforms, marketing sites, and custom tools built for fast-moving product teams and startups.",
        icon: Cpu,
        href: "/industries/technology",
        color: "cyan",
    },
    {
        title: "E-Commerce & Retail",
        description:
            "High-conversion storefronts, custom integrations, and performance optimization for growing brands.",
        icon: ShoppingCart,
        href: "/industries/ecommerce",
        color: "blue",
    },
    {
        title: "Education & Training",
        description:
            "User-friendly platforms, content-driven experiences, and systems designed for learning at scale.",
        icon: GraduationCap,
        href: "/industries/education",
        color: "purple",
    },
    {
        title: "Manufacturing & Industrial",
        description:
            "Robust digital solutions for complex operations, distributors, and industrial product companies.",
        icon: Factory,
        href: "/industries/manufacturing",
        color: "emerald",
    },
    {
        title: "Healthcare & Life Sciences",
        description:
            "Secure, compliant, and accessible digital experiences for healthcare organizations and vendors.",
        icon: Stethoscope,
        href: "/industries/healthcare",
        color: "rose",
    },
    {
        title: "Professional Services",
        description:
            "High-trust websites and systems for consultancies, financial firms, and service-driven businesses.",
        icon: Building2,
        href: "/industries/professional-services",
        color: "amber",
    },
];

const colorClasses = {
    cyan: {
        iconBg: "bg-cyan-500/20",
        iconText: "text-cyan-400",
        iconHoverBg: "group-hover:bg-cyan-500",
        border: "group-hover:border-cyan-400",
        glow: "group-hover:shadow-cyan-500/50",
        gradient: "group-hover:from-cyan-500/20 group-hover:to-blue-500/10",
        accent: "group-hover:via-cyan-400",
        ctaText: "text-cyan-400 group-hover:text-cyan-300",
        ctaArrow: "stroke-cyan-400 group-hover:stroke-cyan-300",
    },
    blue: {
        iconBg: "bg-blue-500/20",
        iconText: "text-blue-400",
        iconHoverBg: "group-hover:bg-blue-500",
        border: "group-hover:border-blue-400",
        glow: "group-hover:shadow-blue-500/50",
        gradient: "group-hover:from-blue-500/20 group-hover:to-cyan-500/10",
        accent: "group-hover:via-blue-400",
        ctaText: "text-blue-400 group-hover:text-blue-300",
        ctaArrow: "stroke-blue-400 group-hover:stroke-blue-300",
    },
    purple: {
        iconBg: "bg-purple-500/20",
        iconText: "text-purple-400",
        iconHoverBg: "group-hover:bg-purple-500",
        border: "group-hover:border-purple-400",
        glow: "group-hover:shadow-purple-500/50",
        gradient: "group-hover:from-purple-500/20 group-hover:to-blue-500/10",
        accent: "group-hover:via-purple-400",
        ctaText: "text-purple-400 group-hover:text-purple-300",
        ctaArrow: "stroke-purple-400 group-hover:stroke-purple-300",
    },
    emerald: {
        iconBg: "bg-emerald-500/20",
        iconText: "text-emerald-400",
        iconHoverBg: "group-hover:bg-emerald-500",
        border: "group-hover:border-emerald-400",
        glow: "group-hover:shadow-emerald-500/50",
        gradient: "group-hover:from-emerald-500/20 group-hover:to-green-500/10",
        accent: "group-hover:via-emerald-400",
        ctaText: "text-emerald-400 group-hover:text-emerald-300",
        ctaArrow: "stroke-emerald-400 group-hover:stroke-emerald-300",
    },
    rose: {
        iconBg: "bg-rose-500/20",
        iconText: "text-rose-400",
        iconHoverBg: "group-hover:bg-rose-500",
        border: "group-hover:border-rose-400",
        glow: "group-hover:shadow-rose-500/50",
        gradient: "group-hover:from-rose-500/20 group-hover:to-pink-500/10",
        accent: "group-hover:via-rose-400",
        ctaText: "text-rose-400 group-hover:text-rose-300",
        ctaArrow: "stroke-rose-400 group-hover:stroke-rose-300",
    },
    amber: {
        iconBg: "bg-amber-500/20",
        iconText: "text-amber-400",
        iconHoverBg: "group-hover:bg-amber-500",
        border: "group-hover:border-amber-400",
        glow: "group-hover:shadow-amber-500/50",
        gradient: "group-hover:from-amber-500/20 group-hover:to-yellow-500/10",
        accent: "group-hover:via-amber-400",
        ctaText: "text-amber-400 group-hover:text-amber-300",
        ctaArrow: "stroke-amber-400 group-hover:stroke-amber-300",
    },
};

export default function IndustriesWeServe() {
    return (
        <section className="w-full bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900 text-white py-24 relative overflow-hidden">
            {/* Ambient glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            
            <div className="mx-auto max-w-[1500px] px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Industries I Serve
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        I work with organizations across a range of industries — bringing senior-level engineering experience and practical strategy to every engagement.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => {
                        const colors = colorClasses[industry.color];
                        return (
                            <Link
                                key={industry.title}
                                href={industry.href}
                                className={`group relative rounded-2xl border-2 border-slate-700/50 bg-slate-800/50 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${colors.border} ${colors.glow} backdrop-blur-sm overflow-hidden`}
                            >
                                {/* Animated gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${colors.gradient} transition-all duration-500 opacity-0 group-hover:opacity-100`} />
                                
                                {/* Animated border glow */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent ${colors.accent} to-transparent blur-sm`} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon with pulsing effect */}
                                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText} transition-all duration-500 ${colors.iconHoverBg} group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl ${colors.glow}`}>
                                        <industry.icon className="h-7 w-7" strokeWidth={2.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold mb-3 text-white transition-all duration-300">
                                        {industry.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                                        {industry.description}
                                    </p>

                                    {/* CTA - Visible by default with unique color */}
                                    <div className={`flex items-center ${colors.ctaText} transform translate-x-0 group-hover:translate-x-2 transition-all duration-300`}>
                                        <span className="text-sm font-semibold">Learn more</span>
                                        <svg className={`w-4 h-4 ml-2 ${colors.ctaArrow}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom accent bar with animation */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${colors.accent} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-2xl`} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}