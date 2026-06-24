"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HEADER_HEIGHT = 72; // px
const MEGAMENU_DELAY = 150; // ms — open/close grace period

type ServiceCard = {
    title: string;
    href: string;
    description: string;
};

const SERVICE_CARDS: ServiceCard[] = [
    {
        title: "Custom Web Development",
        href: "/services/custom-web-development",
        description: "Next.js, headless & WordPress builds engineered for speed.",
    },
    {
        title: "B2B Website Design",
        href: "/services/b2b-website-design",
        description: "Conversion-focused sites that win complex sales cycles.",
    },
    {
        title: "Performance Optimization",
        href: "/services/website-performance-optimization",
        description: "Core Web Vitals, sub-second loads & technical SEO.",
    },
    {
        title: "Conversion Optimization",
        href: "/services/conversion-optimization",
        description: "Turn more of your existing traffic into qualified leads.",
    },
    {
        title: "Manufacturing Website Design",
        href: "/services/manufacturing-website-design",
        description: "Industrial sites that generate RFQs and distributor leads.",
    },
    {
        title: "WordPress Development",
        href: "/wordpress-development",
        description: "Custom themes, no page builders — clean and maintainable.",
    },
];

// Quick-link list (right column of the megamenu)
const SERVICE_LINKS: { label: string; href: string }[] = [
    { label: "All Services", href: "/services" },
    { label: "Custom Web Development", href: "/services/custom-web-development" },
    { label: "B2B Website Design", href: "/services/b2b-website-design" },
    { label: "Conversion Optimization", href: "/services/conversion-optimization" },
    { label: "Manufacturing Website Design", href: "/services/manufacturing-website-design" },
    { label: "Performance Optimization", href: "/services/website-performance-optimization" },
    { label: "WordPress Development", href: "/wordpress-development" },
];

// Industries dropdown links
const INDUSTRY_LINKS: { label: string; href: string }[] = [
    { label: "All Industries", href: "/industries" },
    { label: "B2B & Professional Services", href: "/industries" },
    { label: "Manufacturing", href: "/services/manufacturing-website-design" },
    { label: "SaaS & Technology", href: "/industries" },
    { label: "Healthcare", href: "/industries" },
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

    // Services is "active" for any /services/* or /wordpress-development route
    const servicesActive =
        pathname.startsWith("/services") || pathname === "/wordpress-development";
    const industriesActive = pathname.startsWith("/industries");

    // Plain top-level links (after the Services + Industries menus)
    const plainNav = [
        { label: "Case Studies", href: "/case-studies" },
        { label: "SEO & Insights", href: "/articles" },
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
                        className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#111214] border-l border-volt-500/40
                            shadow-[-6px_0_40px_rgba(227,245,68,0.25)]
                            flex flex-col px-6 pt-4 pb-6 overflow-y-auto overflow-x-hidden"
                        style={{
                            animation: closing
                                ? "drawerSlideOut 0.35s cubic-bezier(0.4,0,1,1) forwards"
                                : "drawerSlideIn 0.48s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
                        }}
                    >
                        {/* Internal ambient glows */}
                        <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 bg-volt-500/8 rounded-full blur-3xl" />
                        <div className="pointer-events-none absolute bottom-16 left-0 w-32 h-32 bg-blue-500/8 rounded-full blur-2xl" />
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/50 to-transparent" />

                        {/* Drawer header: logo + close */}
                        <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-volt-500/15">
                            <Link
                                href="/"
                                onClick={closeDrawer}
                                className="flex items-center gap-2 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
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
                                    <div className="absolute inset-0 bg-volt-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <div className="flex flex-col gap-1 uppercase leading-none whitespace-nowrap">
                                    <span className="text-[14px] font-bold tracking-tight text-[#e5e7eb]">Black Lab</span>
                                    <span className="text-[8px] font-semibold tracking-[0.3em] text-volt-500 drop-shadow-[0_0_6px_rgba(227,245,68,0.6)]">Development</span>
                                </div>
                            </Link>

                            <button
                                type="button"
                                onClick={closeDrawer}
                                aria-label="Close menu"
                                style={{ touchAction: "manipulation" }}
                                className="py-2 px-2 text-volt-500 border border-volt-500/60 rounded-sm
                                    shadow-[0_0_8px_rgba(227,245,68,0.15)]
                                    hover:border-volt-400 hover:text-volt-400 hover:shadow-[0_0_12px_rgba(227,245,68,0.4)]
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70
                                    transition-all duration-200 cursor-pointer"
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
                                    className={`w-full flex items-center justify-between gap-3 py-3.5 text-[16px] uppercase tracking-widest font-medium transition-all duration-300
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70 rounded-sm
                                        ${servicesActive
                                            ? "text-volt-500 drop-shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                            : "text-[#c8c8c8] hover:text-volt-400"
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span className={`shrink-0 w-0.5 h-4 rounded-full transition-all duration-300
                                            ${servicesActive ? "bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.8)]" : "bg-volt-500/20"}`}
                                        />
                                        Services
                                    </span>
                                    <Chevron open={servicesExpanded} />
                                </button>
                                <div
                                    id="mobile-services-panel"
                                    className="overflow-hidden transition-all duration-300 ease-out"
                                    style={{ maxHeight: servicesExpanded ? `${SERVICE_LINKS.length * 44 + 8}px` : "0px" }}
                                >
                                    <div className="ml-4 border-l border-volt-500/15 pl-4 py-1 flex flex-col">
                                        {SERVICE_LINKS.map((s) => {
                                            const active = isActive(s.href);
                                            return (
                                                <Link
                                                    key={s.label}
                                                    href={s.href}
                                                    onClick={closeDrawer}
                                                    className={`py-2 text-[13px] uppercase tracking-[0.12em] transition-colors duration-200 rounded-sm
                                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70
                                                        ${active ? "text-volt-500" : "text-[#a8a8a8] hover:text-volt-400"}`}
                                                >
                                                    {s.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-linear-to-r from-volt-500/12 via-volt-500/6 to-transparent" />

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
                                    className={`w-full flex items-center justify-between gap-3 py-3.5 text-[16px] uppercase tracking-widest font-medium transition-all duration-300
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70 rounded-sm
                                        ${industriesActive
                                            ? "text-volt-500 drop-shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                            : "text-[#c8c8c8] hover:text-volt-400"
                                        }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span className={`shrink-0 w-0.5 h-4 rounded-full transition-all duration-300
                                            ${industriesActive ? "bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.8)]" : "bg-volt-500/20"}`}
                                        />
                                        Industries
                                    </span>
                                    <Chevron open={industriesExpanded} />
                                </button>
                                <div
                                    id="mobile-industries-panel"
                                    className="overflow-hidden transition-all duration-300 ease-out"
                                    style={{ maxHeight: industriesExpanded ? `${INDUSTRY_LINKS.length * 44 + 8}px` : "0px" }}
                                >
                                    <div className="ml-4 border-l border-volt-500/15 pl-4 py-1 flex flex-col">
                                        {INDUSTRY_LINKS.map((s) => {
                                            const active = pathname === s.href;
                                            return (
                                                <Link
                                                    key={s.label}
                                                    href={s.href}
                                                    onClick={closeDrawer}
                                                    className={`py-2 text-[13px] uppercase tracking-[0.12em] transition-colors duration-200 rounded-sm
                                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70
                                                        ${active ? "text-volt-500" : "text-[#a8a8a8] hover:text-volt-400"}`}
                                                >
                                                    {s.label}
                                                </Link>
                                            );
                                        })}
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
                                        <div className="h-px bg-linear-to-r from-volt-500/12 via-volt-500/6 to-transparent" />
                                        <Link
                                            href={item.href}
                                            onClick={closeDrawer}
                                            className={`flex items-center gap-3 py-3.5 text-[16px] uppercase tracking-widest font-medium transition-all duration-300
                                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70 rounded-sm
                                                ${active
                                                    ? "text-volt-500 drop-shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                                    : "text-[#c8c8c8] hover:text-volt-400 hover:drop-shadow-[0_0_6px_rgba(227,245,68,0.4)]"
                                                }`}
                                        >
                                            <span className={`shrink-0 w-0.5 h-4 rounded-full transition-all duration-300
                                                ${active ? "bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.8)]" : "bg-volt-500/20"}`}
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
                                <div className="h-px bg-linear-to-r from-volt-500/12 via-volt-500/6 to-transparent" />
                                <Link
                                    href="/cincinnati-web-developer"
                                    onClick={closeDrawer}
                                    className="flex items-center gap-2 py-3 text-[12px] uppercase tracking-[0.18em] text-[#8a8a8a] hover:text-volt-400 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
                                >
                                    <span aria-hidden className="text-volt-500/70">◆</span>
                                    Cincinnati Web Developer
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
                                className="relative z-10 mt-4 block text-center py-2.5 px-6 uppercase tracking-widest text-[12px] font-bold
                                    text-black bg-volt rounded-sm
                                    shadow-[0_0_20px_rgba(227,245,68,0.3)]
                                    hover:shadow-[0_0_32px_rgba(227,245,68,0.5)]
                                    hover:brightness-110
                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt/70
                                    transition-all duration-300"
                            >
                                Let&apos;s Work Together
                            </Link>
                        </div>
                    </nav>
                </div>
            )}

            {/* ===================== HEADER ===================== */}
            <header className="fixed top-0 z-50 w-full bg-[#0b0b0c] text-[#e5e7eb] border-b border-volt-500/15">
                <div
                    className="mx-auto max-w-375 px-6 py-4 flex items-center justify-between"
                    style={{ height: HEADER_HEIGHT }}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 uppercase group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
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
                            <div className="absolute inset-0 bg-volt-500/25 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                                    animate-[neonBoot_1.6s_ease-out_1]
                                `}
                            >
                                Development
                                <span className="pointer-events-none absolute inset-0 text-volt-500 blur-sm opacity-70 animate-[neonFlicker_2.2s_linear_1]">
                                    Development
                                </span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav
                        ref={navRef}
                        aria-label="Primary navigation"
                        className="relative hidden lg:flex items-center gap-6 text-[12px] uppercase tracking-[0.12em]"
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
                                className="relative group inline-flex items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
                            >
                                <span
                                    className={`transition-all duration-300 ${
                                        servicesActive
                                            ? "text-volt-500 drop-shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                            : "group-hover:text-volt-400 group-hover:drop-shadow-[0_0_6px_rgba(227,245,68,0.4)]"
                                    }`}
                                >
                                    Services
                                </span>
                                <Chevron open={openMega === "services"} small />
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transition-all duration-300 bg-volt-500
                                        ${servicesActive || openMega === "services"
                                            ? "scale-x-100 shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                            : "scale-x-0 shadow-[0_0_8px_rgba(227,245,68,0.5)] group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>

                            {/* Megamenu panel */}
                            <div
                                role="region"
                                aria-label="Services menu"
                                onMouseEnter={() => handleMegaEnter("services")}
                                onMouseLeave={handleMegaLeave}
                                className={`absolute right-0 top-full pt-4 w-225 max-w-[92vw]
                                    transition-all duration-200 ease-out origin-top-right
                                    ${openMega === "services"
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                            >
                                <div className="relative overflow-hidden rounded-lg bg-[#111214] border border-volt-500/20 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),0_0_40px_rgba(227,245,68,0.12)]">
                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/70 to-transparent" />
                                    {/* Ambient glows */}
                                    <div className="pointer-events-none absolute -top-10 right-10 w-56 h-56 bg-volt-500/10 rounded-full blur-3xl" />
                                    <div className="pointer-events-none absolute bottom-0 left-10 w-40 h-40 bg-volt-500/6 rounded-full blur-3xl" />

                                    {/* 3-column card grid */}
                                    <div className="relative p-5 grid grid-cols-3 gap-3">
                                        {SERVICE_CARDS.map((card) => {
                                            const active = isActive(card.href);
                                            return (
                                                <Link
                                                    key={card.href}
                                                    href={card.href}
                                                    onClick={() => setOpenMega(null)}
                                                    className={`group/card relative flex flex-col gap-3 rounded-lg border p-5 transition-all duration-200
                                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70
                                                        ${active
                                                            ? "border-volt-500/50 bg-volt-500/6"
                                                            : "border-white/5 hover:border-volt-500/40 hover:bg-volt-500/4"
                                                        }`}
                                                >
                                                    <span className="flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wide text-[#e5e7eb] group-hover/card:text-volt-400 transition-colors duration-200 leading-tight">
                                                        {card.title}
                                                        <span
                                                            aria-hidden
                                                            className="opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-200 text-volt-500"
                                                        >
                                                            →
                                                        </span>
                                                    </span>
                                                    <span className="mt-1.5 block text-[12px] normal-case tracking-normal leading-relaxed text-[#9a9a9a]">
                                                        {card.description}
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    {/* Footer */}
                                    <div className="relative border-t border-volt-500/10 px-5 py-3 flex items-center justify-between bg-black/30">
                                        <div className="flex items-center gap-5">
                                            <Link
                                                href="/services"
                                                onClick={() => setOpenMega(null)}
                                                className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#b8b8b8] hover:text-volt-400 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
                                            >
                                                All Services →
                                            </Link>
                                            <span className="w-px h-3 bg-volt-500/15" />
                                            <Link
                                                href="/cincinnati-web-developer"
                                                onClick={() => setOpenMega(null)}
                                                className="group/loc inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a] hover:text-volt-400 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
                                            >
                                                <span aria-hidden className="text-volt-500">◆</span>
                                                Cincinnati Web Developer
                                            </Link>
                                        </div>
                                        <Link
                                            href="/contact"
                                            onClick={() => setOpenMega(null)}
                                            className="text-[11px] uppercase tracking-[0.16em] text-volt-500 hover:text-volt-400 transition-colors duration-200 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
                                        >
                                            Schedule a Call →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Industries (dropdown) */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMegaEnter("industries")}
                            onMouseLeave={handleMegaLeave}
                        >
                            <Link
                                href="/industries"
                                aria-haspopup="true"
                                aria-expanded={openMega === "industries"}
                                onFocus={() => handleMegaEnter("industries")}
                                className="relative group inline-flex items-center gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70"
                            >
                                <span
                                    className={`transition-all duration-300 ${
                                        industriesActive
                                            ? "text-volt-500 drop-shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                            : "group-hover:text-volt-400 group-hover:drop-shadow-[0_0_6px_rgba(227,245,68,0.4)]"
                                    }`}
                                >
                                    Industries
                                </span>
                                <Chevron open={openMega === "industries"} small />
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transition-all duration-300 bg-volt-500
                                        ${industriesActive || openMega === "industries"
                                            ? "scale-x-100 shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                            : "scale-x-0 shadow-[0_0_8px_rgba(227,245,68,0.5)] group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>

                            {/* Industries dropdown panel */}
                            <div
                                role="region"
                                aria-label="Industries menu"
                                className={`absolute left-0 top-full mt-4 w-64
                                    transition-all duration-200 ease-out origin-top
                                    ${openMega === "industries"
                                        ? "opacity-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                            >
                                <div className="relative overflow-hidden rounded-md bg-[#111214] border border-volt-500/20 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),0_0_40px_rgba(227,245,68,0.12)]">
                                    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/70 to-transparent" />
                                    <ul className="relative p-2">
                                        {INDUSTRY_LINKS.map((s) => {
                                            const active = pathname === s.href;
                                            return (
                                                <li key={s.label}>
                                                    <Link
                                                        href={s.href}
                                                        onClick={() => setOpenMega(null)}
                                                        className={`group/ind flex items-center gap-2.5 px-3 py-2 rounded-sm text-[12px] normal-case tracking-normal transition-colors duration-200
                                                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70
                                                            ${active ? "text-volt-500 bg-volt-500/6" : "text-[#b8b8b8] hover:text-volt-400 hover:bg-volt-500/4"}`}
                                                    >
                                                        <span className={`w-1 h-1 rounded-full transition-all duration-200 ${active ? "bg-volt-500" : "bg-volt-500/30 group-hover/ind:bg-volt-500"}`} />
                                                        {s.label}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Plain links */}
                        {plainNav.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link key={item.label} href={item.href} className="relative group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70">
                                    <span
                                        className={`transition-all duration-300 ${
                                            active
                                                ? "text-volt-500 drop-shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                                : "group-hover:text-volt-400 group-hover:drop-shadow-[0_0_6px_rgba(227,245,68,0.4)]"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                    <span
                                        className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left transition-all duration-300 bg-volt-500
                                            ${active
                                                ? "scale-x-100 shadow-[0_0_8px_rgba(227,245,68,0.7)]"
                                                : "scale-x-0 shadow-[0_0_8px_rgba(227,245,68,0.5)] group-hover:scale-x-100"
                                            }`}
                                    />
                                </Link>
                            );
                        })}

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className={`px-3.5 py-1.5 uppercase tracking-[0.12em] text-[11px] font-bold rounded-sm transition-all duration-300
                                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt/70
                                ${isActive("/contact")
                                    ? "bg-volt text-black shadow-[0_0_18px_rgba(227,245,68,0.4)]"
                                    : "bg-volt text-black shadow-[0_0_10px_rgba(227,245,68,0.2)] hover:brightness-110 hover:shadow-[0_0_22px_rgba(227,245,68,0.5)]"
                                }`}
                        >
                            Schedule a Call
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        onClick={openDrawer}
                        aria-label="Open menu"
                        aria-expanded={mobileOpen}
                        style={{ touchAction: "manipulation" }}
                        className="lg:hidden p-3 text-volt-500 border border-volt-500 rounded-sm
                            shadow-[0_0_12px_rgba(227,245,68,0.4),inset_0_0_8px_rgba(227,245,68,0.06)]
                            hover:shadow-[0_0_20px_rgba(227,245,68,0.65),inset_0_0_12px_rgba(227,245,68,0.1)]
                            hover:border-volt-400 hover:text-volt-400
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-500/70
                            active:scale-95 transition-all duration-200 cursor-pointer"
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
            className={`${small ? "w-3 h-3" : "w-4 h-4"} shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-volt-500" : ""}`}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}
