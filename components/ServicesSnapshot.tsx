import Link from "next/link";
import {
    Code2,
    TrendingUp,
    Layers,
    Cpu,
    ShieldCheck,
} from "lucide-react";

const services = [
    {
        title: "Web Development",
        description:
            "High-performance websites built for speed, usability, and long-term scalability using modern frameworks and CMS platforms.",
        icon: Code2,
    },
    {
        title: "SEO & Growth Marketing",
        description:
            "Data-driven SEO and growth strategies that increase visibility, authority, and conversions — backed by measurable results.",
        icon: TrendingUp,
    },
    {
        title: "Integrated Digital Solutions",
        description:
            "Seamless integrations connecting CRMs, APIs, and marketing platforms into a single, efficient digital ecosystem.",
        icon: Layers,
    },
    {
        title: "Custom Software Engineering",
        description:
            "Purpose-built software and applications designed to solve complex business challenges at scale.",
        icon: Cpu,
    },
    {
        title: "Security & Infrastructure",
        description:
            "Cloudflare configuration, CDN setup, WAF rules, and uptime/performance monitoring to keep production sites fast and locked down.",
        icon: ShieldCheck,
    },
];

export default function ServicesSnapshot() {
    return (
        <section className="w-full bg-linear-to-b from-black via-slate-950 to-[#111214] text-white py-24">
            <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
                {/* Section Header */}
                <div className="max-w-6xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                        What I Do
                    </h2>
                    <p className="text-lg text-[#e5e7eb]/70 leading-relaxed">
                        I design, build, and optimize digital products that perform. From high-impact websites to custom software and growth-focused platforms, I work directly with teams that need results — not templates.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative rounded-2xl border border-slate-800/50 bg-linear-to-br from-slate-900/50 to-[#111214]/80 p-8 transition-all duration-300 hover:border-volt-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-volt-500/10 backdrop-blur-sm"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-volt-500/0 to-volt-500/0 group-hover:from-volt-500/4 group-hover:to-transparent transition-all duration-300" />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 text-volt-500 transition-all duration-300 group-hover:bg-volt-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-volt-500/30">
                                    <service.icon className="h-6 w-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-volt-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[#e5e7eb]/60 leading-relaxed mb-6 group-hover:text-[#e5e7eb]/80 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-volt-500/0 to-transparent group-hover:via-volt-500/80 transition-all duration-300 rounded-b-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
