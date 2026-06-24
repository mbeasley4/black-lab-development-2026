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

type ThemeColor = "volt" | "blue";
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
        color: "volt",
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
        color: "volt",
    },
    {
        title: "Manufacturing & Industrial",
        description:
            "Robust digital solutions for complex operations, distributors, and industrial product companies.",
        icon: Factory,
        href: "/industries/manufacturing",
        color: "volt",
    },
    {
        title: "Healthcare & Life Sciences",
        description:
            "Secure, compliant, and accessible digital experiences for healthcare organizations and vendors.",
        icon: Stethoscope,
        href: "/industries/healthcare",
        color: "blue",
    },
    {
        title: "Professional Services",
        description:
            "High-trust websites and systems for consultancies, financial firms, and service-driven businesses.",
        icon: Building2,
        href: "/industries/professional-services",
        color: "volt",
    },
];

const colorClasses = {
    volt: {
        iconBg: "bg-volt-500/15",
        iconText: "text-volt-500",
        iconHoverBg: "group-hover:bg-volt-500",
        border: "group-hover:border-volt-500",
        glow: "group-hover:shadow-volt-500/30",
        gradient: "group-hover:from-volt-500/15 group-hover:to-transparent",
        accent: "group-hover:via-volt-500",
        ctaText: "text-volt-500 group-hover:text-volt-400",
        ctaArrow: "stroke-volt-500 group-hover:stroke-volt-400",
    },
    blue: {
        iconBg: "bg-blue-500/15",
        iconText: "text-blue-400",
        iconHoverBg: "group-hover:bg-blue-500",
        border: "group-hover:border-blue-400",
        glow: "group-hover:shadow-blue-500/30",
        gradient: "group-hover:from-blue-500/15 group-hover:to-transparent",
        accent: "group-hover:via-blue-500",
        ctaText: "text-blue-400 group-hover:text-blue-300",
        ctaArrow: "stroke-blue-400 group-hover:stroke-blue-300",
    },
};

export default function IndustriesWeServe() {
    return (
        <section className="w-full bg-linear-to-b from-[#1f2328] via-[#111214] to-[#0b0b0c] text-white py-24 relative overflow-hidden">
            {/* Ambient glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-volt-500/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
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
                                className={`group relative rounded-2xl border-2 border-slate-700/50 bg-slate-800/30 p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${colors.border} ${colors.glow} backdrop-blur-sm overflow-hidden`}
                            >
                                {/* Animated gradient overlay */}
                                <div className={`absolute inset-0 bg-linear-to-br from-transparent to-transparent ${colors.gradient} transition-all duration-500 opacity-0 group-hover:opacity-100`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
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

                                    {/* CTA */}
                                    <div className={`flex items-center ${colors.ctaText} transform translate-x-0 group-hover:translate-x-2 transition-all duration-300`}>
                                        <span className="text-sm font-semibold">Learn more</span>
                                        <svg className={`w-4 h-4 ml-2 ${colors.ctaArrow}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom accent bar */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent ${colors.accent} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-2xl`} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
