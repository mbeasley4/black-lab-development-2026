import {
    Code2,
    Layers,
    Database,
    Workflow,
    Cloud,
    ShieldCheck,
    Award,
} from "lucide-react";

type ThemeColor = "volt" | "blue";
type Icon = typeof Code2 | typeof Layers | typeof Database | typeof Workflow | typeof Cloud | typeof ShieldCheck | typeof Award

type experienceArea = {
  title: string;
  icon: Icon;
  items: string[];
  color: ThemeColor;
}

const experienceAreas: experienceArea[] = [
    {
        title: "Full-Stack Web Engineering",
        icon: Code2,
        items: [
            "Laravel, PHP, JavaScript, React, Node.js",
            "High-traffic platforms supporting 6,000+ daily users",
            "Performance optimization for large-scale applications",
            "Custom CMS and content-driven architectures",
        ],
        color: "volt",
    },
    {
        title: "Enterprise CMS & Platforms",
        icon: Layers,
        items: [
            "WordPress (custom themes & plugins)",
            "Drupal (7 & 9)",
            "Shopify & WooCommerce",
            "Sanity.io CMS",
            "Squarespace and custom PHP/HTML builds",
        ],
        color: "blue",
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
        color: "volt",
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
        color: "blue",
    },
    {
        title: "Data, Infrastructure & CI/CD",
        icon: Database,
        items: [
            "MySQL, PostgreSQL, SQL Server, Oracle",
            "CI/CD pipelines with GitHub Actions",
            "Playwright E2E testing and automated QA",
            "Deployment automation reducing release time by 50%",
            "Cloud hosting, scaling, and reliability",
        ],
        color: "volt",
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
        color: "blue",
    },
];

const colorClasses = {
    volt: {
        iconBg: "bg-volt-500/10",
        iconText: "text-volt-500",
        iconHoverBg: "group-hover:bg-volt-500",
        border: "group-hover:border-volt-500/50",
        glow: "group-hover:shadow-volt-500/20",
        gradient: "group-hover:from-volt-500/8 group-hover:to-transparent",
        accent: "group-hover:via-volt-500",
        titleHover: "group-hover:text-volt-400",
        bullet: "bg-volt-500/40",
    },
    blue: {
        iconBg: "bg-volt-500/10",
        iconText: "text-volt-400",
        iconHoverBg: "group-hover:bg-volt-500",
        border: "group-hover:border-volt-500/50",
        glow: "group-hover:shadow-volt-500/20",
        gradient: "group-hover:from-volt-500/8 group-hover:to-transparent",
        accent: "group-hover:via-volt-500",
        titleHover: "group-hover:text-volt-300",
        bullet: "bg-volt-500/40",
    },
};

export default function TechnologiesExperience() {
    return (
        <section className="w-full bg-linear-to-b from-slate-950 via-slate-950 to-black text-white py-24 relative overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-volt-500/6 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-volt-500/6 rounded-full blur-3xl" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="max-w-6xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white pb-1">
                        Technologies & Experience
                    </h2>
                    <p className="text-lg text-[#e5e7eb]/70 leading-relaxed">
                        15+ years of senior-level engineering — building scalable, high-traffic
                        platforms for agencies, enterprise brands, and organizations that
                        can&apos;t afford to wing it. Architecture, development, integration,
                        and long-term optimization with a hard emphasis on performance,
                        reliability, and security.
                    </p>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experienceAreas.map((area) => {
                        const colors = colorClasses[area.color];
                        return (
                            <div
                                key={area.title}
                                className={`group rounded-2xl border-2 border-slate-800/50 bg-slate-900/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${colors.border} ${colors.glow} backdrop-blur-sm overflow-hidden relative`}
                            >
                                {/* Animated gradient overlay */}
                                <div className={`absolute inset-0 bg-linear-to-br from-transparent to-transparent ${colors.gradient} transition-all duration-500 opacity-0 group-hover:opacity-100`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${colors.iconBg} ${colors.iconText} transition-all duration-500 ${colors.iconHoverBg} group-hover:text-white group-hover:scale-110 group-hover:shadow-lg ${colors.glow}`}>
                                        <area.icon className="h-7 w-7" strokeWidth={2.5} />
                                    </div>

                                    <h3 className={`text-xl font-semibold mb-4 text-white ${colors.titleHover} transition-colors duration-300`}>
                                        {area.title}
                                    </h3>

                                    <ul className="space-y-2.5 text-sm text-slate-400">
                                        {area.items.map((item) => (
                                            <li key={item} className="leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex items-start">
                                                <span className={`mr-2 mt-1.5 h-1.5 w-1.5 rounded-full ${colors.bullet} shrink-0`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent ${colors.accent} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-2xl`} />
                            </div>
                        );
                    })}
                </div>

                {/* Certifications & Credibility */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="group rounded-2xl border-2 border-slate-800/50 bg-linear-to-br from-slate-900/50 to-[#111214]/80 p-10 transition-all duration-500 hover:border-volt-500/40 hover:shadow-xl hover:shadow-volt-500/10 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-volt-500/0 to-volt-500/0 group-hover:from-volt-500/4 group-hover:to-transparent transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-volt-500/10 text-volt-500 transition-all duration-500 group-hover:bg-volt-500 group-hover:text-black group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-volt-500/30">
                                    <Award className="h-7 w-7" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white group-hover:text-volt-400 transition-colors duration-300">
                                    Security-Focused Engineering
                                </h3>
                            </div>
                            <p className="text-[#e5e7eb]/70 leading-relaxed group-hover:text-[#e5e7eb]/90 transition-colors duration-300">
                                Our approach to development is grounded in modern security
                                principles, risk awareness, and long-term maintainability —
                                especially important for healthcare, enterprise, and
                                high-traffic platforms.
                            </p>
                        </div>
                    </div>

                    <div className="group rounded-2xl border-2 border-slate-800/50 bg-slate-900/50 p-10 flex items-center gap-6 transition-all duration-500 hover:border-volt-500/40 hover:shadow-xl hover:shadow-volt-500/10 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-volt-500/0 to-volt-500/0 group-hover:from-volt-500/4 group-hover:to-transparent transition-all duration-500" />

                        <div className="relative z-10 flex items-center gap-6">
                            <img
                                src="/images/certifications/google-cybersecurity-professional-certificate-v2.png"
                                alt="Google Cybersecurity Certificate"
                                className="h-20 w-auto shrink-0 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div>
                                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-volt-300 transition-colors duration-300">
                                    Google Cybersecurity Certificate
                                </h4>
                                <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                    Professional certification issued by Google via Coursera,
                                    covering security fundamentals, threat detection, risk
                                    management, and best practices for securing modern systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
