"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HEADER_HEIGHT = 72; // px

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [boot, setBoot] = useState(false);

    useEffect(() => {
        const t1 = setTimeout(() => setBoot(true), 120);
        return () => clearTimeout(t1);
    }, []);

    const navItems = [
        ["About", "/about"],
        ["Services", "/services"],
        ["Industries", "/industries"],
        ["Work", "/work"],
        ["Articles", "/articles"],
        ["Contact", "/contact"],
    ] as const;

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <>
        {/* Mobile Drawer Overlay */}
        {mobileOpen && (
            <div className="fixed inset-0 z-[60] md:hidden">
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />

                {/* Drawer panel */}
                <nav className="absolute top-0 right-0 h-full w-72 bg-[#111214] border-l border-amber-500/40
                    shadow-[-6px_0_40px_rgba(245,158,11,0.2)]
                    flex flex-col px-6 pt-4 pb-6 overflow-hidden">

                    {/* Internal ambient glows */}
                    <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 bg-amber-500/8 rounded-full blur-3xl" />
                    <div className="pointer-events-none absolute bottom-16 left-0 w-32 h-32 bg-blue-500/8 rounded-full blur-2xl" />
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />

                    {/* Drawer header: logo + close */}
                    <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-amber-500/15">
                        <Link
                            href="/"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 group"
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
                                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="flex flex-col gap-1 uppercase leading-none whitespace-nowrap">
                                <span className="text-[14px] font-bold tracking-tight text-[#e5e7eb]">Black Lab</span>
                                <span className="text-[8px] font-semibold tracking-[0.3em] text-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]">Development</span>
                            </div>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            style={{ touchAction: "manipulation" }}
                            className="py-2 px-2 text-amber-500 border border-amber-500/60 rounded-sm
                                shadow-[0_0_8px_rgba(245,158,11,0.15)]
                                hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_12px_rgba(245,158,11,0.4)]
                                transition-all duration-200 cursor-pointer"
                        >
                            <span className="block w-5 h-0.5 bg-current rotate-45 translate-y-0.75" />
                            <span className="block w-5 h-0.5 bg-current -rotate-45" />
                        </button>
                    </div>

                    {/* Nav links */}
                    <div className="relative z-10 flex flex-col flex-1">
                        {navItems.map(([label, href], i) => {
                            const active = isActive(href);
                            const isContact = label === "Contact";

                            if (isContact) {
                                return (
                                    <Link
                                        key={label}
                                        href={href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`mt-4 block text-center py-2.5 px-6 uppercase tracking-widest text-[12px] font-semibold rounded-sm border transition-all duration-300
                                            ${active
                                                ? "text-amber-400 border-amber-500 shadow-[0_0_18px_rgba(245,158,11,0.5),inset_0_0_10px_rgba(245,158,11,0.08)]"
                                                : "text-amber-500 border-amber-500/60 shadow-[0_0_10px_rgba(245,158,11,0.2),inset_0_0_6px_rgba(245,158,11,0.04)] hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.45),inset_0_0_10px_rgba(245,158,11,0.08)]"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            }

                            return (
                                <div key={label}>
                                    {i > 0 && <div className="h-px bg-linear-to-r from-amber-500/12 via-amber-500/6 to-transparent" />}
                                    <Link
                                        href={href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`flex items-center gap-3 py-3.5 text-[16px] uppercase tracking-widest font-medium transition-all duration-300
                                            ${active
                                                ? "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                                                : "text-[#c8c8c8] hover:text-amber-400 hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]"
                                            }`}
                                    >
                                        <span className={`shrink-0 w-0.5 h-4 rounded-full transition-all duration-300
                                            ${active
                                                ? "bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]"
                                                : "bg-amber-500/20 group-hover:bg-amber-500/60"
                                            }`}
                                        />
                                        {label}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="relative z-10 mt-4 block text-center py-2.5 px-6 uppercase tracking-widest text-[12px] font-semibold
                            text-black bg-amber-500 rounded-sm
                            shadow-[0_0_20px_rgba(245,158,11,0.35)]
                            hover:shadow-[0_0_32px_rgba(245,158,11,0.55)]
                            hover:bg-amber-400
                            transition-all duration-300"
                    >
                        Let&apos;s Work Together
                    </Link>
                </nav>
            </div>
        )}

        <header className="fixed top-0 z-50 w-full bg-[#0b0b0c] text-[#e5e7eb] border-b border-amber-500/15">
            <div
                className="mx-auto max-w-[1500px] px-6 py-4 flex items-center justify-between"
                style={{ height: HEADER_HEIGHT }}
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 uppercase group"
                    onClick={() => setMobileOpen(false)}
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
                        <div className="absolute inset-0 bg-amber-500/25 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="flex flex-col gap-1 uppercase leading-none whitespace-nowrap">
                        <span
                            className={`text-[17px] sm:text-[21px] font-bold tracking-tight transition-all duration-500 ${
                                boot
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-1"
                            }`}
                        >
                            Black Lab
                        </span>
                        <span
                            className={`
                                relative text-amber-500 text-[9px] sm:text-[11px] font-semibold tracking-[0.3em]
                                transition-all duration-700
                                ${boot ? "opacity-100" : "opacity-0"}
                                animate-[neonBoot_1.6s_ease-out_1]
                            `}
                        >
                            Development
                            <span
                                className="pointer-events-none absolute inset-0 text-amber-500 blur-sm opacity-70 animate-[neonFlicker_2.2s_linear_1]"
                            >
                                Development
                            </span>
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-[16px] uppercase tracking-widest">
                    {navItems.map(([label, href]) => {
                        const active = isActive(href);
                        const isContact = label === "Contact";

                        if (isContact) {
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={`px-4 py-1.5 uppercase tracking-widest text-[14px] font-semibold rounded-sm border transition-all duration-300
                                        ${active
                                            ? "text-amber-400 border-amber-500 shadow-[0_0_18px_rgba(245,158,11,0.5),inset_0_0_10px_rgba(245,158,11,0.08)]"
                                            : "text-amber-500 border-amber-500/60 shadow-[0_0_10px_rgba(245,158,11,0.25),inset_0_0_6px_rgba(245,158,11,0.04)] hover:text-amber-400 hover:border-amber-400 hover:shadow-[0_0_22px_rgba(245,158,11,0.55),inset_0_0_12px_rgba(245,158,11,0.08)]"
                                        }`}
                                >
                                    {label}
                                </Link>
                            );
                        }

                        return (
                            <Link key={label} href={href} className="relative group">
                                <span
                                    className={`transition-all duration-300 ${
                                        active
                                            ? "text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                                            : "group-hover:text-amber-400 group-hover:drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]"
                                    }`}
                                >
                                    {label}
                                </span>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-all duration-300
                                        ${active
                                            ? "scale-x-100 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.7)]"
                                            : "scale-x-0 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)] group-hover:scale-x-100"
                                        }
                                    `}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    style={{ touchAction: "manipulation" }}
                    className="md:hidden p-3 text-amber-500 border border-amber-500 rounded-sm
                        shadow-[0_0_12px_rgba(245,158,11,0.4),inset_0_0_8px_rgba(245,158,11,0.06)]
                        hover:shadow-[0_0_20px_rgba(245,158,11,0.65),inset_0_0_12px_rgba(245,158,11,0.1)]
                        hover:border-amber-400 hover:text-amber-400
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
