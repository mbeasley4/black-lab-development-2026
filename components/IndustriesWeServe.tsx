import Link from "next/link";
import {
    ShoppingCart,
    GraduationCap,
    Factory,
    Stethoscope,
    Building2,
    Cpu,
} from "lucide-react";

const industries = [
    {
        title: "Technology & SaaS",
        description:
            "Scalable platforms, marketing sites, and custom tools built for fast-moving product teams and startups.",
        icon: Cpu,
        href: "/industries/technology",
    },
    {
        title: "E-Commerce & Retail",
        description:
            "High-conversion storefronts, custom integrations, and performance optimization for growing brands.",
        icon: ShoppingCart,
        href: "/industries/ecommerce",
    },
    {
        title: "Education & Training",
        description:
            "User-friendly platforms, content-driven experiences, and systems designed for learning at scale.",
        icon: GraduationCap,
        href: "/industries/education",
    },
    {
        title: "Manufacturing & Industrial",
        description:
            "Robust digital solutions for complex operations, distributors, and industrial product companies.",
        icon: Factory,
        href: "/industries/manufacturing",
    },
    {
        title: "Healthcare & Life Sciences",
        description:
            "Secure, compliant, and accessible digital experiences for healthcare organizations and vendors.",
        icon: Stethoscope,
        href: "/industries/healthcare",
    },
    {
        title: "Professional Services",
        description:
            "High-trust websites and systems for consultancies, financial firms, and service-driven businesses.",
        icon: Building2,
        href: "/industries/professional-services",
    },
];

export default function IndustriesWeServe() {
    return (
        <section className="w-full bg-neutral-700 text-white py-24">
            <div className="mx-auto max-w-[1500px] px-6">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Industries I Serve
                    </h2>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        I work with organizations across a range of industries — bringing senior-level engineering experience and practical strategy to every engagement.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => (
                        <div
                            key={industry.title}
                            className="group relative rounded-2xl border border-neutral-800 bg-black p-8 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white transition group-hover:bg-white group-hover:text-black">
                                <industry.icon className="h-6 w-6" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-medium mb-3">
                                {industry.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
