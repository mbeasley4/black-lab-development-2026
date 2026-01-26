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
        <section className="w-full bg-black text-white py-24">
            <div className="mx-auto max-w-[1500px] px-6">
                {/* Section Header */}
                <div className="max-w-6xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        What I Do
                    </h2>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        I design, build, and optimize digital products that perform. From high-impact websites to custom software and growth-focused platforms, I work directly with teams that need results — not templates.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white transition group-hover:bg-white group-hover:text-black">
                                <service.icon className="h-6 w-6" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-medium mb-4 group-hover:text-white">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
