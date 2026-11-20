"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// The announcement bar and header are fixed together. <main> in app/layout.tsx
// is padded by the height they add beyond the original 72px header (44px), so
// pages keep the same relationship to the header. Keep the two in sync.
const ANNOUNCEMENT_HEIGHT = 36; // px
const HEADER_HEIGHT = 80; // px — room above and below the logo
const MEGAMENU_TOP = ANNOUNCEMENT_HEIGHT + HEADER_HEIGHT;

// Announcement bar copy: edit here.
const ANNOUNCEMENT = {
    badge: "Now booking",
    message: "New website projects & agency partnerships",
    linkLabel: "Schedule a call",
    href: "/contact",
};
const MEGAMENU_DELAY = 150; // ms — open/close grace period

type ServiceCard = {
    title: string;
    href: string;
    description: string;
};

const DEV_SERVICES: ServiceCard[] = [
    {
        title: "Custom web development",
        href: "/services/custom-web-development",
        description: "Next.js & full-stack builds",
    },
    {
        title: "Small business websites",
        href: "/services/small-business-website-design",
        description: "Custom sites, no templates",
    },
];

const PLATFORM_SERVICES: ServiceCard[] = [
    {
        title: "WordPress development",
        href: "/wordpress-development",
        description: "Custom themes, no page builders",
    },
    {
        title: "Drupal development",
        href: "/drupal-development",
        description: "Content models & custom modules",
    },
    {
        title: "Laravel development",
        href: "/laravel-development",
        description: "APIs, integrations & platforms",
    },
    {
        title: "Shopify development",
        href: "/shopify-development",
        description: "Custom Liquid themes & apps",
    },
];

const OPT_SERVICES: ServiceCard[] = [
    {
        title: "Conversion optimization",
        href: "/services/conversion-optimization",
        description: "More leads from current traffic",
    },
    {
        title: "Performance optimization",
        href: "/services/website-performance-optimization",
        description: "Core Web Vitals & technical SEO",
    },
];

// Flat list for mobile drawer
const SERVICE_LINKS: { label: string; href: string }[] = [
    { label: "All services", href: "/services" },
    { label: "Custom web development", href: "/services/custom-web-development" },
    { label: "Small business websites", href: "/services/small-business-website-design" },
    { label: "Conversion optimization", href: "/services/conversion-optimization" },
    { label: "Performance optimization", href: "/services/website-performance-optimization" },
    { label: "WordPress development", href: "/wordpress-development" },
    { label: "Drupal development", href: "/drupal-development" },
    { label: "Laravel development", href: "/laravel-development" },
    { label: "Shopify development", href: "/shopify-development" },
];

// Industries megamenu links (verticals only — "All industries" appears in the footer)
// The two audiences from the homepage "Who It's For" section, shown above the industries.
const AUDIENCE_LINKS: { label: string; href: string; description: string }[] = [
    { label: "Small businesses", href: "/services/small-business-website-design", description: "Custom sites that bring in customers" },
    { label: "Agency partners", href: "/partners", description: "White-label development under your brand" },
];

const INDUSTRY_LINKS: { label: string; href: string; description: string }[] = [
    { label: "Manufacturing", href: "/industries/manufacturing", description: "RFQs, catalogs & distributor portals" },
    { label: "B2B & professional services", href: "/industries/professional-services", description: "Long sales cycles, many buyers" },
    { label: "Healthcare", href: "/industries/healthcare", description: "Patient booking & WCAG compliance" },
    { label: "SaaS & technology", href: "/industries/technology", description: "Product-led growth & developer docs" },
    { label: "Ecommerce & DTC", href: "/industries/ecommerce", description: "Shopify, headless & higher AOV" },
    { label: "Education & training", href: "/industries/education", description: "Enrollment, LMS & accessible design" },
];

export default function Header() {
    const pathname = usePathname();

    // Mobile drawer state
    const [mobileOpen, setMobileOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [itemsReady, setItemsReady] = useState(false);
    const [boot, setBoot] = useState(false);

    // Mobile accordion state
    const [servicesExpanded, setServicesExpanded] = useState(false);
    const [industriesExpanded, setIndustriesExpanded] = useState(false);

    // Desktop megamenu / dropdown state ("services" | "industries" | null)
    const [openMega, setOpenMega] = useState<"services" | "industries" | null>(null);

    // Announcement bar collapses once the page is scrolled past the top
    const [barHidden, setBarHidden] = useState(false);
    useEffect(() => {
        let raf = 0;
        const update = () => {
            raf = 0;
            setBarHidden(window.scrollY > 24);
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);
    const megaTop = barHidden ? HEADER_HEIGHT : MEGAMENU_TOP;
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Refs for focus trap / outside click
    const drawerRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const t1 = setTimeout(() => setBoot(true), 120);
        return () => clearTimeout(t1);
    }, []);

    // Cleanup any pending megamenu timer on unmount
    useEffect(() => {
        return () => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
        };
    }, []);

    /* ----------------------------- Mobile drawer ----------------------------- */

    const openDrawer = () => {
        setClosing(false);
        setMobileOpen(true);
        setTimeout(() => setItemsReady(true), 130);
    };

    const closeDrawer = () => {
        setItemsReady(false);
        setClosing(true);
        setTimeout(() => {
            setMobileOpen(false);
            setClosing(false);
            setServicesExpanded(false);
            setIndustriesExpanded(false);
        }, 380);
    };

    // Lock body scroll + focus trap + Escape while drawer is open
    useEffect(() => {
        if (!mobileOpen) return;

        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeDrawer();
                return;
            }
            if (e.key !== "Tab") return;

            const root = drawerRef.current;
            if (!root) return;
            const focusable = root.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = overflow;
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [mobileOpen]);

    /* --------------------------- Desktop megamenu ---------------------------- */

    const handleMegaEnter = (menu: "services" | "industries") => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenMega(menu);
    };

    const handleMegaLeave = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenMega(null), MEGAMENU_DELAY);
    };

    // Escape closes desktop megamenu
    useEffect(() => {
        if (!openMega) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenMega(null);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [openMega]);

    /* ------------------------------- Helpers --------------------------------- */

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    // Services is "active" for any /services/* or platform-specific service routes
    const servicesActive =
        pathname.startsWith("/services") || pathname === "/wordpress-development" || pathname === "/drupal-development" || pathname === "/laravel-development" || pathname === "/shopify-development";
    const industriesActive = pathname.startsWith("/industries") || pathname.startsWith("/partners");

    // Plain top-level links (after the Services + Industries menus)
    const plainNav = [
        { label: "My Work", href: "/work" },
        { label: "Insights", href: "/articles" },
        { label: "About", href: "/about" },
    ];

    return (
        <>
            {/* ===================== MOBILE DRAWER ===================== */}
            {mobileOpen && (
                <div className="fixed inset-0 z-60 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        style={{
                            animation: closing
                                ? "backdropOut 0.35s ease forwards"
                                : "backdropIn 0.25s ease forwards",
                        }}
                        onClick={closeDrawer}
                    />

                    {/* Drawer panel */}
                    <nav
                        ref={drawerRef}
                        aria-label="Mobile navigation"
                        className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-surface-raised border-l border-neutral-800 flex flex-col px-6 pt-4 pb-6 overflow-y-auto overflow-x-hidden"
                        style={{
                            animation: closing
                                ? "drawerSlideOut 0.35s cubic-bezier(0.4,0,1,1) forwards"
                                : "drawerSlideIn 0.48s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
                        }}
                    >
                        {/* Internal ambient glows */}
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

                        {/* Drawer header: logo + close */}
                        <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                            <Link
                                href="/"
                                onClick={closeDrawer}
                                className="flex items-center gap-2 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                <div className="relative">
                                    <Image
                                        src="/images/blacklabdevelopment.png"
                                        alt="Black Lab Development"
                                        width={36}
                                        height={36}
                                        priority
                                        className="relative z-10"
                                    />
                                    <div className="absolute inset-0 bg-white/[0.04] blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="flex flex-col gap-1 uppercase leading-none whitespace-nowrap">
                                    <span className="text-[14px] font-bold tracking-tight text-[#e5e7eb]">Black Lab</span>
                                    <span className="text-[8px] font-semibold tracking-[0.3em] text-white">Development</span>
                                </div>
                            </Link>

                            <button
                                type="button"
                                onClick={closeDrawer}
                                aria-label="Close menu"
                                style={{ touchAction: "manipulation" }}
                                className="py-2 px-2 text-white border border-neutral-800 rounded-sm hover:border-neutral-500 hover:text-neutral-300 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-all duration-200 cursor-pointer"
                            >
                                <span className="block w-5 h-0.5 bg-current rotate-45 translate-y-0.75" />
                                <span className="block w-5 h-0.5 bg-current -rotate-45" />
                            </button>
                        </div>

                        {/* Nav links */}
                        <div className="relative z-10 flex flex-col flex-1">
                            {/* --- Services accordion --- */}
                            <div
                                style={{
                                    opacity: itemsReady ? 1 : 0,
                                    transform: itemsReady ? "translateX(0)" : "translateX(28px)",
                                    transition: "opacity 0.35s ease 0ms, transform 0.38s cubic-bezier(0.2,0.8,0.4,1) 0ms",
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setServicesExpanded((v) => !v)}
                                    aria-expanded={servicesExpanded}
                                    aria-controls="mobile-services-panel"
                                    className={`w-full flex items-center justify-between gap-3 py-3.5 text-[16px] tracking-normal font-medium transition-all duration-300
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm
                                        ${servicesActive
                                            ? "text-white"
                                            : "text-[#c8c8c8] hover:text-white"
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span className={`shrink-0 w-0.5 h-4 rounded-full transition-all duration-300
                                            ${servicesActive ? "bg-white" : "bg-white/20"}`}
                                        />
                                        What I Build
                                    </span>
                                    <Chevron open={servicesExpanded} />
                                </button>
                                <div
                                    id="mobile-services-panel"
                                    className="overflow-hidden transition-all duration-300 ease-out"
                                    style={{ maxHeight: servicesExpanded ? `${SERVICE_LINKS.length * 44 + 8}px` : "0px" }}
                                >
                                    <div className="ml-4 border-l border-neutral-800 pl-4 py-1 flex flex-col">
                                        {SERVICE_LINKS.map((s) => {
                                            const active = isActive(s.href);
                                            return (
                                                <Link
                                                    key={s.label}
                                                    href={s.href}
                                                    onClick={closeDrawer}
                                                    className={`py-2 text-[14px] tracking-normal transition-colors duration-200 rounded-sm
                                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                                        ${active ? "text-white" : "text-[#a8a8a8] hover:text-white"}`}
                                                >
                                                    {s.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-linear-to-r from-white/10 via-white/10 to-transparent" />

                            {/* --- Industries accordion --- */}
                            <div
                                style={{
                                    opacity: itemsReady ? 1 : 0,
                                    transform: itemsReady ? "translateX(0)" : "translateX(28px)",
                                    transition: "opacity 0.35s ease 55ms, transform 0.38s cubic-bezier(0.2,0.8,0.4,1) 55ms",
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setIndustriesExpanded((v) => !v)}
                                    aria-expanded={industriesExpanded}
                                    aria-controls="mobile-industries-panel"
                                    className={`w-full flex items-center justify-between gap-3 py-3.5 text-[16px] tracking-normal font-medium transition-all duration-300
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm
                                        ${industriesActive
                                            ? "text-white"
                                            : "text-[#c8c8c8] hover:text-white"
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span className={`shrink-0 w-0.5 h-4 rounded-full transition-all duration-300
                                            ${industriesActive ? "bg-white" : "bg-white/20"}`}
                                        />
                                        Who It&apos;s For
                                    </span>
                                    <Chevron open={industriesExpanded} />
                                </button>
                                <div
                                    id="mobile-industries-panel"
                                    className="overflow-hidden transition-all duration-300 ease-out"
                                    style={{ maxHeight: industriesExpanded ? `${(AUDIENCE_LINKS.length + INDUSTRY_LINKS.length + 1) * 44 + 8}px` : "0px" }}
                                >
                                    <div className="ml-4 border-l border-neutral-800 pl-4 py-1 flex flex-col">
                                        {[...AUDIENCE_LINKS, ...INDUSTRY_LINKS].map((s) => {
                                            const active = isActive(s.href);
                                            return (
                                                <Link
                                                    key={s.label}
                                                    href={s.href}
                                                    onClick={closeDrawer}
                                                    className={`py-2 text-[14px] tracking-normal transition-colors duration-200 rounded-sm
                                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                                        ${active ? "text-white" : "text-[#a8a8a8] hover:text-white"}`}
                                                >
                                                    {s.label}
                                                </Link>
                                            );
                                        })}
                                        <Link
                                            href="/industries"
                                            onClick={closeDrawer}
                                            className={`py-2 text-[14px] tracking-normal transition-colors duration-200 rounded-sm
                                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                                ${pathname === "/industries" ? "text-white" : "text-[#a8a8a8] hover:text-white"}`}
                                        >
                                            All industries
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* --- Plain links --- */}
                            {plainNav.map((item, i) => {
                                const active = isActive(item.href);
                                const delay = `${(i + 2) * 55}ms`;
                                return (
                                    <div
                                        key={item.label}
                                        style={{
                                            opacity: itemsReady ? 1 : 0,
                                            transform: itemsReady ? "translateX(0)" : "translateX(28px)",
                                            transition: `opacity 0.35s ease ${delay}, transform 0.38s cubic-bezier(0.2,0.8,0.4,1) ${delay}`,
                                        }}
                                    >
                                        <div className="h-px bg-linear-to-r from-white/10 via-white/10 to-transparent" />
                                        <Link
                                            href={item.href}
                                            onClick={closeDrawer}
                                            className={`flex items-center gap-3 py-3.5 text-[16px] tracking-normal font-medium transition-all duration-300
                                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm
                                                ${active
                                                    ? "text-white"
                                                    : "text-[#c8c8c8] hover:text-white hover:"
                                                }`}
                                        >
                                            <span className={`shrink-0 w-0.5 h-4 rounded-full transition-all duration-300
                                                ${active ? "bg-white" : "bg-white/20"}`}
                                            />
                                            {item.label}
                                        </Link>
                                    </div>
                                );
                            })}

                            {/* Cincinnati local SEO link — subtle */}
                            <div
                                style={{
                                    opacity: itemsReady ? 1 : 0,
                                    transform: itemsReady ? "translateX(0)" : "translateX(28px)",
                                    transition: `opacity 0.35s ease ${(plainNav.length + 2) * 55}ms, transform 0.38s cubic-bezier(0.2,0.8,0.4,1) ${(plainNav.length + 2) * 55}ms`,
                                }}
                            >
                                <div className="h-px bg-linear-to-r from-white/10 via-white/10 to-transparent" />
                                <Link
                                    href="/cincinnati-web-developer"
                                    onClick={closeDrawer}
                                    className="flex items-center gap-2 py-3 text-[13px] tracking-normal text-[#8a8a8a] hover:text-neutral-300 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                >
                                    <span aria-hidden className="text-neutral-500">◆</span>
                                    Cincinnati web developer
                                </Link>
                            </div>
                        </div>

                        {/* CTA */}
                        <div
                            style={{
                                opacity: itemsReady ? 1 : 0,
                                transform: itemsReady ? "translateX(0)" : "translateX(28px)",
                                transition: `opacity 0.35s ease ${(plainNav.length + 3) * 55}ms, transform 0.38s cubic-bezier(0.2,0.8,0.4,1) ${(plainNav.length + 3) * 55}ms`,
                            }}
                        >
                            <Link
                                href="/contact"
                                onClick={closeDrawer}
                                className="relative z-10 mt-4 block text-center py-2.5 px-6 tracking-wide text-[13px] font-bold
                                    text-black bg-white rounded-sm
                                    hover:bg-neutral-200
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                    transition-all duration-300"
                            >
                                Let&apos;s work together
                            </Link>
                        </div>
                    </nav>
                </div>
            )}

            {/* ===================== HEADER ===================== */}
            <header className="fixed top-0 z-50 w-full bg-surface text-[#e5e7eb] border-b border-neutral-800">
                {/* Announcement bar */}
                <div
                    className={`w-full overflow-hidden bg-charcoal text-neutral-300 transition-[height,opacity] duration-300 ease-out motion-reduce:transition-none ${
                        barHidden ? "opacity-0" : "border-b border-neutral-800 opacity-100"
                    }`}
                    style={{ height: barHidden ? 0 : ANNOUNCEMENT_HEIGHT }}
                    inert={barHidden}
                    aria-hidden={barHidden}
                >
                    <div className="mx-auto flex h-full max-w-375 items-center justify-center gap-3 px-6 sm:px-10 md:px-14 lg:px-20 text-[13px]">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                            <span className="relative flex h-1.5 w-1.5" aria-hidden>
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            {ANNOUNCEMENT.badge}
                        </span>
                        <span className="hidden sm:inline font-medium text-white">{ANNOUNCEMENT.message}</span>
                        <Link
                            href={ANNOUNCEMENT.href}
                            onClick={closeDrawer}
                            className="group inline-flex items-center gap-1 rounded-full bg-white px-3 py-0.5 text-[12px] font-bold text-black hover:bg-neutral-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        >
                            {ANNOUNCEMENT.linkLabel}
                            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                        </Link>
                    </div>
                </div>

                <div
                    className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 py-4 flex items-center justify-between"
                    style={{ height: HEADER_HEIGHT }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 uppercase group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        onClick={closeDrawer}
                    >
                        <div className="relative">
                            <Image
                                src="/images/blacklabdevelopment.png"
                                alt="Black Lab Development"
                                width={45}
                                height={45}
                                priority
                                className="relative z-10"
                            />
                        </div>

                        <div className="flex flex-col gap-1 uppercase leading-none whitespace-nowrap">
                            <span
                                className={`text-[17px] sm:text-[21px] font-bold tracking-tight transition-all duration-500 ${
                                    boot ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                                }`}
                            >
                                Black Lab
                            </span>
                            <span
                                className={`
                                    relative text-volt-500 text-[9px] sm:text-[11px] font-semibold tracking-[0.3em]
                                    transition-all duration-700
                                    ${boot ? "opacity-100" : "opacity-0"}
                                `}
                            >
                                Development
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        ref={navRef}
                        aria-label="Primary navigation"
                        className="relative hidden lg:flex items-center gap-6 text-[14px] tracking-[0.01em]"
                    >
                        {/* Services (megamenu) */}
                        <div
                            className="static"
                            onMouseEnter={() => handleMegaEnter("services")}
                            onMouseLeave={handleMegaLeave}
                        >
                            <Link
                                href="/services"
                                aria-haspopup="true"
                                aria-expanded={openMega === "services"}
                                onFocus={() => handleMegaEnter("services")}
                                className="relative group inline-flex items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                <span
                                    className={`transition-all duration-300 ${
                                        servicesActive || openMega === "services"
                                            ? "text-white"
                                            : "text-neutral-400 group-hover:text-neutral-200"
                                    }`}
                                >
                                    What I Build
                                </span>
                                <Chevron open={openMega === "services"} small />
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transition-all duration-300
                                        ${servicesActive
                                            ? "scale-x-100 bg-white"
                                            : openMega === "services"
                                                ? "scale-x-100 bg-white/50"
                                                : "scale-x-0 bg-white/50 group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>

                            {/* Megamenu panel */}
                            <div
                                role="region"
                                aria-label="Services menu"
                                onMouseEnter={() => handleMegaEnter("services")}
                                onMouseLeave={handleMegaLeave}
                                style={{ top: megaTop }}
                                className={`fixed left-1/2 -translate-x-1/2 w-full max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 pt-2
                                    transition-all duration-200 ease-out origin-top
                                    ${openMega === "services"
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                            >
                                <MegaPanel
                                    eyebrow="What I Build"
                                    title="Services"
                                    blurb="Custom builds on the right platform, tuned to perform."
                                    allHref="/services"
                                    allLabel="All services"
                                    onNavigate={() => setOpenMega(null)}
                                >
                                    <div className="grid grid-cols-3 gap-x-2">
                                        {[
                                            { label: "Development", items: DEV_SERVICES },
                                            { label: "Platforms", items: PLATFORM_SERVICES },
                                            { label: "Optimization", items: OPT_SERVICES },
                                        ].map((group) => (
                                            <div key={group.label}>
                                                <h3 className="px-2.5 pt-1.5 pb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                                    {group.label}
                                                </h3>
                                                {group.items.map((card) => (
                                                    <MenuLink
                                                        key={card.href}
                                                        href={card.href}
                                                        title={card.title}
                                                        description={card.description}
                                                        active={isActive(card.href)}
                                                        onNavigate={() => setOpenMega(null)}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </MegaPanel>
                            </div>
                        </div>

                        {/* Industries (megamenu) */}
                        <div
                            className="static"
                            onMouseEnter={() => handleMegaEnter("industries")}
                            onMouseLeave={handleMegaLeave}
                        >
                            <Link
                                href="/industries"
                                aria-haspopup="true"
                                aria-expanded={openMega === "industries"}
                                onFocus={() => handleMegaEnter("industries")}
                                className="relative group inline-flex items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                                <span
                                    className={`transition-all duration-300 ${
                                        industriesActive || openMega === "industries"
                                            ? "text-white"
                                            : "text-neutral-400 group-hover:text-neutral-200"
                                    }`}
                                >
                                    Who It&apos;s For
                                </span>
                                <Chevron open={openMega === "industries"} small />
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transition-all duration-300
                                        ${industriesActive
                                            ? "scale-x-100 bg-white"
                                            : openMega === "industries"
                                                ? "scale-x-100 bg-white/50"
                                                : "scale-x-0 bg-white/50 group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>

                            {/* Industries megamenu panel */}
                            <div
                                role="region"
                                aria-label="Industries menu"
                                onMouseEnter={() => handleMegaEnter("industries")}
                                onMouseLeave={handleMegaLeave}
                                style={{ top: megaTop }}
                                className={`fixed left-1/2 -translate-x-1/2 w-full max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 pt-2
                                    transition-all duration-200 ease-out origin-top
                                    ${openMega === "industries"
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                            >
                                <MegaPanel
                                    eyebrow="Who It&apos;s For"
                                    title="Who I Work With"
                                    blurb="Small businesses, agency partners, and the industries I know best."
                                    width="max-w-[720px]"
                                    allHref="/industries"
                                    allLabel="All industries"
                                    onNavigate={() => setOpenMega(null)}
                                >
                                    {[
                                        { label: "Clients", items: AUDIENCE_LINKS },
                                        { label: "Industries", items: INDUSTRY_LINKS },
                                    ].map((group, gi) => (
                                    <div key={group.label} className={gi > 0 ? "mt-2 border-t border-white/[0.06] pt-2" : ""}>
                                    <h3 className="px-2.5 pt-1.5 pb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                                        {group.label}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-x-2">
                                        {group.items.map((s) => (
                                            <MenuLink
                                                key={s.href}
                                                href={s.href}
                                                title={s.label}
                                                description={s.description}
                                                active={isActive(s.href)}
                                                onNavigate={() => setOpenMega(null)}
                                            />
                                        ))}
                                    </div>
                                    </div>
                                    ))}
                                </MegaPanel>
                            </div>
                        </div>

                        {/* Plain links */}
                        {plainNav.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link key={item.label} href={item.href} className="relative group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                                    <span
                                        className={`transition-all duration-300 ${
                                            active
                                                ? "text-white"
                                                : "text-neutral-400 group-hover:text-neutral-200"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                    <span
                                        className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transition-all duration-300
                                            ${active
                                                ? "scale-x-100 bg-white"
                                                : "scale-x-0 bg-white/50 group-hover:scale-x-100"
                                            }`}
                                    />
                                </Link>
                            );
                        })}

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className={`px-3.5 py-1.5 tracking-[0.02em] text-[12px] font-bold rounded-sm transition-all duration-300
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                                ${isActive("/contact")
                                    ? "bg-white text-black"
                                    : "bg-white text-black hover:bg-neutral-200"
                                }`}
                        >
                            Schedule a call
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        onClick={openDrawer}
                        aria-label="Open menu"
                        aria-expanded={mobileOpen}
                        style={{ touchAction: "manipulation" }}
                        className="lg:hidden p-3 text-white border border-neutral-800 rounded-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.15),inset_0_0_12px_rgba(255,255,255,0.05)] hover:border-neutral-500 hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                        <div className="space-y-1.5">
                            <span className="block h-0.5 w-7 bg-current" />
                            <span className="block h-0.5 w-7 bg-current" />
                            <span className="block h-0.5 w-7 bg-current" />
                        </div>
                    </button>
                </div>
            </header>
        </>
    );
}

/* ------------------------------- Chevron icon ------------------------------- */
// ─── Megamenu building blocks ───────────────────────────────────────────────
// Both desktop menus share one layout: an intro column, a grid of links, and
// a single footer row. Hover states are neutral; volt marks only the current
// page and the one call-to-action button.

function MegaPanel({
    eyebrow,
    title,
    blurb,
    allHref,
    allLabel,
    onNavigate,
    children,
    width = "max-w-[980px]",
}: {
    eyebrow: string;
    title: string;
    blurb: string;
    allHref: string;
    allLabel: string;
    onNavigate: () => void;
    children: React.ReactNode;
    /** Panel width class; panels right-align under the nav. */
    width?: string;
}) {
    return (
        <div className={`ml-auto w-full ${width} overflow-hidden rounded-xl border border-neutral-800 bg-surface-raised shadow-2xl shadow-black/50`}>
            <div className="grid grid-cols-[200px_1fr]">
                <div className="flex flex-col border-r border-neutral-800 bg-surface p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">{eyebrow}</p>
                    <p className="mt-1.5 text-base font-semibold text-white">{title}</p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-neutral-400">{blurb}</p>
                    <Link
                        href={allHref}
                        onClick={onNavigate}
                        className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-[12px] font-semibold text-white hover:text-neutral-300 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                        {allLabel} <span aria-hidden>→</span>
                    </Link>
                </div>
                <div className="p-3">{children}</div>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-800 px-5 py-2">
                <Link
                    href="/cincinnati-web-developer"
                    onClick={onNavigate}
                    className="text-[12px] text-neutral-500 hover:text-neutral-200 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                    Based in Cincinnati · Serving clients nationwide
                </Link>
                <Link
                    href="/contact"
                    onClick={onNavigate}
                    className="rounded-md bg-white px-3 py-1 text-[12px] font-bold text-black hover:bg-neutral-200 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                    Schedule a call
                </Link>
            </div>
        </div>
    );
}

function MenuLink({
    href,
    title,
    description,
    active,
    onNavigate,
}: {
    href: string;
    title: string;
    description: string;
    active: boolean;
    onNavigate: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={`group/item relative block rounded-md py-1.5 pl-3.5 pr-2.5 transition-colors duration-150
                before:absolute before:left-1 before:top-2 before:bottom-2 before:w-0.5 before:rounded-full before:bg-white before:transition-all before:duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                active
                    ? "bg-white/[0.08] before:opacity-100"
                    : "before:scale-y-0 before:opacity-0 hover:bg-white/[0.07] hover:before:scale-y-100 hover:before:opacity-70 focus-visible:bg-white/[0.07]"
            }`}
        >
            <span className={`flex items-center gap-2 whitespace-nowrap text-[13px] font-medium ${active ? "text-white" : "text-neutral-200 group-hover/item:text-white"}`}>
                {title}
                {active ? (
                    <span className="ml-auto shrink-0 rounded-sm bg-white/10 px-1 py-px text-[8px] font-semibold uppercase tracking-wider text-neutral-300">
                        Current
                    </span>
                ) : (
                    <span aria-hidden className="ml-auto -translate-x-1 text-neutral-400 opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100">
                        →
                    </span>
                )}
            </span>
            <span className={`mt-0.5 block truncate text-[12px] leading-snug ${active ? "text-neutral-400" : "text-neutral-500 group-hover/item:text-neutral-400"}`}>
                {description}
            </span>
        </Link>
    );
}

function Chevron({ open, small = false }: { open: boolean; small?: boolean }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${small ? "w-3 h-3" : "w-4 h-4"} shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-white" : ""}`}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}
