"use client";

import Link from "next/link";
import Image from "next/image";



const caseStudies = [
    {
        title: "Enterprise Digital Platform",
        summary:
            "Architected and scaled a high-traffic content and commerce ecosystem supporting thousands of daily users.",
        image: "/images/case-studies/enterprise.png",
        href: "/work/",
    },
    {
        title: "Healthcare Manufacturer Website",
        summary:
            "Modernized UX and backend workflows, improving lead quality and operational efficiency.",
        image: "/images/case-studies/healthcare.png",
    },
    {
        title: "E-Commerce Product Platform",
        summary:
            "Designed and built a conversion-focused storefront with custom integrations and performance tuning.",
        image: "/images/case-studies/ecommerce.png",
    },
     {
        title: "Email Marketing Systems",
        summary:
            "Implemented advanced segmentation, routing, and automation to drive customer engagement and conversions.",
        image: "/images/case-studies/email.png",
    },
];


export default function CaseStudies() {

    return (
        <section className="w-full bg-black text-white py-24">
            <div className="mx-auto max-w-[1500px] px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
                    <div className="max-w-6xl">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                            Industries at Work
                        </h2>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            Across multiple industries, I build digital products that improve operations, engagement, and growth. Here’s a look at recent projects.
                        </p>
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
                    {caseStudies.map((project) => (
                        <div
                            key={project.title}
                            className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 transition hover:border-neutral-600"
                        >
                            {/* Image */}
                            <div className="relative h-[220px] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-medium mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All */}
                <div className="mt-16 text-center">
                    <Link
                        href="/work"
                        className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-8 py-4 text-sm font-medium uppercase tracking-wide text-neutral-300 transition hover:border-white hover:text-white"
                    >
                        View Full Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
