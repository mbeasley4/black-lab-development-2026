import {
    Code2,
    Layers,
    Database,
    Workflow,
    Cloud,
    ShieldCheck,
    Award,
} from "lucide-react";

type ThemeColor = "sky" | "blue" | "cyan";
type Icon = typeof Code2 | typeof Layers | typeof Database | typeof Workflow | typeof Cloud | typeof ShieldCheck | typeof Award

type experienceArea = {
  title: string;
  icon: Icon;
  items: string[];
  color: ThemeColor;
}

const experienceAreas:experienceArea[] = [
    {
        title: "Full-Stack Web Engineering",
        icon: Code2,
        items: [
            "Laravel, PHP, JavaScript, React, Node.js",
            "High-traffic platforms supporting 6,000+ daily users",
            "Performance optimization for large-scale applications",
            "Custom CMS and content-driven architectures",
        ],
        color: "cyan",
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
        color: "sky",
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
        color: "cyan",
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
        color: "blue",
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
        color: "sky",
    },
];

const colorClasses = {
    cyan: {
        iconBg: "bg-cyan-500/10",
        iconText: "text-cyan-400",
        iconHoverBg: "group-hover:bg-cyan-500",
        border: "group-hover:border-cyan-500/50",
        glow: "group-hover:shadow-cyan-500/30",
        gradient: "group-hover:from-cyan-500/10 group-hover:to-blue-500/5",
        accent: "group-hover:via-cyan-400",
    },
    blue: {
        iconBg: "bg-blue-500/10",
        iconText: "text-blue-400",
        iconHoverBg: "group-hover:bg-blue-500",
        border: "group-hover:border-blue-500/50",
        glow: "group-hover:shadow-blue-500/30",
        gradient: "group-hover:from-blue-500/10 group-hover:to-cyan-500/5",
        accent: "group-hover:via-blue-400",
    },
    sky: {
        iconBg: "bg-sky-500/10",
        iconText: "text-sky-400",
        iconHoverBg: "group-hover:bg-sky-500",
        border: "group-hover:border-sky-500/50",
        glow: "group-hover:shadow-sky-500/30",
        gradient: "group-hover:from-sky-500/10 group-hover:to-blue-500/5",
        accent: "group-hover:via-sky-400",
    },
};

export default function TechnologiesExperience() {
    return (
        <section className="w-full bg-linear-to-b from-purple-950/30 via-slate-950 to-black text-white py-24 relative overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="mx-auto max-w-375 px-6 relative z-10">
                {/* Header */}
                <div className="max-w-6xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-linear-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                        Technologies & Experience
                    </h2>
                    <p className="text-lg text-blue-100/80 leading-relaxed">
                        Over 15 years of senior-level engineering experience building scalable,
                        high-traffic digital platforms for agencies, enterprise brands, and
                        growth-focused organizations. My work spans architecture, development,
                        integration, and long-term optimization — with a strong emphasis on
                        performance, reliability, and security.
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

                                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                                        {area.title}
                                    </h3>

                                    <ul className="space-y-2.5 text-sm text-slate-400">
                                        {area.items.map((item) => (
                                            <li key={item} className="leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex items-start">
                                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500/50 shrink-0" />
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
                    <div className="group rounded-2xl border-2 border-slate-800/50 bg-linear-to-br from-slate-900/50 to-blue-950/30 p-10 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 backdrop-blur-sm relative overflow-hidden">
                        {/* Hover gradient */}
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-all duration-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                                    <Award className="h-7 w-7" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                    Security-Focused Engineering
                                </h3>
                            </div>
                            <p className="text-blue-100/80 leading-relaxed group-hover:text-blue-50/90 transition-colors duration-300">
                                My approach to development is grounded in modern security
                                principles, risk awareness, and long-term maintainability —
                                especially important for healthcare, enterprise, and
                                high-traffic platforms.
                            </p>
                        </div>
                    </div>

                    <div className="group rounded-2xl border-2 border-slate-800/50 bg-slate-900/50 p-10 flex items-center gap-6 transition-all duration-500 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm relative overflow-hidden">
                        {/* Hover gradient */}
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

                        <div className="relative z-10 flex items-center gap-6">
                            <img
                                src="/images/certifications/google-cybersecurity-professional-certificate-v2.png"
                                alt="Google Cybersecurity Certificate"
                                className="h-20 w-auto shrink-0 transition-transform duration-500 group-hover:scale-110"
                            />
                            <div>
                                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
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