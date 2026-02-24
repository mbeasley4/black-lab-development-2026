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
                <nav className="absolute top-0 right-0 h-full w-90 bg-black border-l border-cyan-500/40
                    shadow-[-4px_0_30px_rgba(34,211,238,0.15)]
                    flex flex-col px-8 pt-6 pb-10">

                    {/* Drawer header: logo + close */}
                    <div className="flex items-center justify-between mb-10">
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
                                <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <span className="text-[13px] font-medium tracking-wide uppercase whitespace-nowrap text-[#e6e6e6]">
                                Black Lab <span className="text-cyan-400">Dev</span>
                            </span>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            style={{ touchAction: "manipulation" }}
                            className="py-4 px-2 text-cyan-400 border border-cyan-400/60 rounded-sm
                                hover:border-cyan-300 hover:text-cyan-300 transition-all duration-200 cursor-pointer"
                        >
                            <span className="block w-5 h-0.5 bg-current rotate-45 translate-y-0.75" />
                            <span className="block w-5 h-0.5 bg-current -rotate-45" />
                        </button>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-col gap-7 flex-1">
                        {navItems.map(([label, href]) => {
                            const active = isActive(href);
                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-[20px] uppercase tracking-widest font-medium transition-all duration-300
                                        ${active
                                            ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                            : "text-[#e6e6e6] hover:text-cyan-300 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                                        }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-auto block text-center py-3 px-6 uppercase tracking-widest text-[13px] font-semibold
                            text-cyan-400 border border-cyan-400 rounded-sm
                            shadow-[0_0_14px_rgba(34,211,238,0.4),inset_0_0_10px_rgba(34,211,238,0.06)]
                            hover:shadow-[0_0_24px_rgba(34,211,238,0.7),inset_0_0_14px_rgba(34,211,238,0.12)]
                            hover:text-cyan-300 hover:border-cyan-300
                            transition-all duration-300"
                    >
                        Let&apos;s Work Together
                    </Link>
                </nav>
            </div>
        )}

        <header className="fixed top-0 z-50 w-full bg-black text-[#e6e6e6] border-b border-cyan-500/20">
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
                        <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* 🔥 Cyberpunk Neon Boot-Up */}
                    <span className="text-[14px] sm:text-[18px] font-medium tracking-wide inline-flex items-baseline gap-2 uppercase whitespace-nowrap">
                        <span
                            className={`transition-all duration-500 ${
                                boot
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-1"
                            }`}
                        >
                            Black Lab
                        </span>

                        <span
                            className={`
                                relative text-cyan-400
                                transition-all duration-700
                                ${boot ? "opacity-100" : "opacity-0"}
                                animate-[neonBoot_1.6s_ease-out_1]
                            `}
                        >
                            Development
                            <span
                                className={`
                                    pointer-events-none absolute inset-0 text-cyan-400
                                    blur-sm opacity-70
                                    animate-[neonFlicker_2.2s_linear_1]
                                `}
                            >
                                Development
                            </span>
                        </span>
                    </span>
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
                                            ? "text-cyan-300 border-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7),inset_0_0_10px_rgba(34,211,238,0.12)]"
                                            : "text-cyan-400 border-cyan-400/70 shadow-[0_0_10px_rgba(34,211,238,0.35),inset_0_0_6px_rgba(34,211,238,0.06)] hover:text-cyan-300 hover:border-cyan-300 hover:shadow-[0_0_22px_rgba(34,211,238,0.75),inset_0_0_12px_rgba(34,211,238,0.12)]"
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
                                            ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                            : "group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                                    }`}
                                >
                                    {label}
                                </span>
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-all duration-300
                                        ${active
                                            ? "scale-x-100 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                            : "scale-x-0 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:scale-x-100"
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
                    className="md:hidden p-3 text-cyan-400 border border-cyan-400 rounded-sm
                        shadow-[0_0_12px_rgba(34,211,238,0.5),inset_0_0_8px_rgba(34,211,238,0.08)]
                        hover:shadow-[0_0_20px_rgba(34,211,238,0.8),inset_0_0_12px_rgba(34,211,238,0.15)]
                        hover:border-cyan-300 hover:text-cyan-300
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
