import {
    Code2,
    Layers,
    Database,
    Workflow,
    Cloud,
    ShieldCheck,
    Award,
} from "lucide-react";

const experienceAreas = [
    {
        title: "Full-Stack Web Engineering",
        icon: Code2,
        items: [
            "Laravel, PHP, JavaScript, React, Node.js",
            "High-traffic platforms supporting 6,000+ daily users",
            "Performance optimization for large-scale applications",
            "Custom CMS and content-driven architectures",
        ],
    },
    {
        title: "Enterprise CMS & Platforms",
        icon: Layers,
        items: [
            "WordPress (custom themes & plugins)",
            "Drupal (7 & 9)",
            "Shopify & WooCommerce",
            "Squarespace and custom PHP/HTML builds",
        ],
    },
    {
        title: "E-Commerce & Customer Journeys",
        icon: Workflow,
        items: [
            "Custom Shopify purchase flows",
            "Subscription and membership systems",
            "Checkout optimization and conversion strategy",
            "Transactional messaging with 99% SMS delivery efficiency",
        ],
    },
    {
        title: "Integrations & Marketing Automation",
        icon: Cloud,
        items: [
            "Salesforce, Marketo, Eloqua, ActiveCampaign",
            "Custom API and workflow automation",
            "CRM-driven lead routing and segmentation",
            "Cross-platform data synchronization",
        ],
    },
    {
        title: "Data, Infrastructure & CI/CD",
        icon: Database,
        items: [
            "MySQL, PostgreSQL, SQL Server, Oracle",
            "CI/CD pipelines with GitHub Actions",
            "Deployment automation reducing release time by 50%",
            "Cloud hosting, scaling, and reliability",
        ],
    },
    {
        title: "Security & Compliance",
        icon: ShieldCheck,
        items: [
            "Secure application architecture and access control",
            "Threat awareness and risk mitigation practices",
            "Performance, uptime, and stability monitoring",
            "Security-first mindset for enterprise and regulated environments",
        ],
    },
];

export default function TechnologiesExperience() {
    return (
        <section className="w-full bg-neutral-800 text-white py-24">
            <div className="mx-auto max-w-[1500px] px-6">
                {/* Header */}
                <div className="max-w-6xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                        Technologies & Experience
                    </h2>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        Black Lab Development brings over 15 years of senior-level engineering
                        experience delivering scalable, high-traffic digital platforms for
                        agencies, enterprise brands, and growth-focused organizations.
                        Our work spans architecture, development, integration, and long-term
                        optimization — with a strong emphasis on performance, reliability,
                        and security.
                    </p>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experienceAreas.map((area) => (
                        <div
                            key={area.title}
                            className="rounded-2xl border border-neutral-800 bg-black p-8"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white">
                                <area.icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-medium mb-4">
                                {area.title}
                            </h3>

                            <ul className="space-y-2 text-sm text-neutral-400">
                                {area.items.map((item) => (
                                    <li key={item} className="leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Certifications & Credibility */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900">
                                <Award className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-medium">
                                Security-Focused Engineering
                            </h3>
                        </div>
                        <p className="text-neutral-300 leading-relaxed">
                            Our approach to development is grounded in modern security
                            principles, risk awareness, and long-term maintainability —
                            especially important for healthcare, enterprise, and
                            high-traffic platforms.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-neutral-800 bg-black p-10 flex items-center gap-6">
                        <img
                            src="/images/certifications/google-cybersecurity-professional-certificate-v2.png"
                            alt="Google Cybersecurity Certificate"
                            className="h-20 w-auto"
                        />
                        <div>
                            <h4 className="text-xl font-medium mb-2">
                                Google Cybersecurity Certificate
                            </h4>
                            <p className="text-sm text-neutral-400 leading-relaxed">
                                Professional certification issued by Google via Coursera,
                                covering security fundamentals, threat detection, risk
                                management, and best practices for securing modern systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
