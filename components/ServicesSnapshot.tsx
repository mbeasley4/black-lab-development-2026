import Link from "next/link";
import {
    Code2,
    TrendingUp,
    Layers,
    Cpu,
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
];

export default function ServicesSnapshot() {
    return (
        <section className="w-full bg-gradient-to-b from-black via-slate-950 to-blue-950/20 text-white py-24">
            <div className="mx-auto max-w-[1500px] px-6">
                {/* Section Header */}
                <div className="max-w-6xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                        What I Do
                    </h2>
                    <p className="text-lg text-blue-100/80 leading-relaxed">
                        I design, build, and optimize digital products that perform. From high-impact websites to custom software and growth-focused platforms, I work directly with teams that need results — not templates.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-blue-950/30 p-8 transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 backdrop-blur-sm"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
                            
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                                    <service.icon className="h-6 w-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-blue-100/70 leading-relaxed mb-6 group-hover:text-blue-50/90 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/100 transition-all duration-300 rounded-b-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}