"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const HEADER_HEIGHT = 72; // px

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        ["Services", "/services"],
        ["Industries", "/industries"],
        ["Work", "/work"],
        ["Articles", "/articles"],
    ] as const;

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-black text-[#e6e6e6] border-b border-cyan-500/20">
            {/* HEADER BAR */}
            <div
                className="mx-auto max-w-[1500px] px-6 py-4 flex items-center justify-between"
                style={{ height: HEADER_HEIGHT }}
            >
                {/* Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-[15px] font-medium tracking-wide uppercase group"
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
                        {/* Neon glow behind logo */}
                        <div className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <span className="text-[18px] font-medium tracking-wide uppercase">
                        Black Lab <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">Development</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-[16px] uppercase tracking-widest">
                    {navItems.map(([label, href]) => {
                        const active = isActive(href);

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

                                {/* Animated underline */}
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
                    
                    {/* Desktop Contact Link */}
                    <Link 
                        href="/contact" 
                        className="relative group"
                    >
                        <span
                            className={`transition-all duration-300 ${
                                isActive("/contact")
                                    ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                                    : "group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                            }`}
                        >
                            Contact
                        </span>

                        <span
                            className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-all duration-300
                                ${isActive("/contact")
                                    ? "scale-x-100 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                    : "scale-x-0 bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)] group-hover:scale-x-100"
                                }
                            `}
                        />
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className="md:hidden inline-flex items-center justify-center p-2 text-neutral-300 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                >
                    <div className="space-y-1">
                        <span className="block h-0.5 w-6 bg-current transition-colors" />
                        <span className="block h-0.5 w-6 bg-current transition-colors" />
                        <span className="block h-0.5 w-6 bg-current transition-colors" />
                    </div>
                </button>
            </div>

            {/* OVERLAY (below header only) */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed left-0 right-0 bottom-0 z-40 bg-black/70 transition-opacity duration-300
                    ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                style={{ top: HEADER_HEIGHT }}
            />

            {/* MOBILE SLIDE-OUT PANEL */}
            <aside
                className={`fixed right-0 z-50 w-[85%] max-w-sm bg-black border-l border-cyan-500/30 transition-transform duration-300 ease-out
                    ${mobileOpen ? "translate-x-0" : "translate-x-full"}
                `}
                style={{
                    top: HEADER_HEIGHT,
                    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                    boxShadow: mobileOpen ? "-4px 0 24px rgba(34, 211, 238, 0.15)" : "none",
                }}
            >
                {/* Drawer Header with Logo */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                        onClick={() => setMobileOpen(false)}
                    >
                        <Image
                            src="/images/blacklabdevelopment.png"
                            alt="Black Lab Development"
                            width={35}
                            height={35}
                        />
                        <span className="text-[14px] font-medium tracking-wide uppercase">
                            Black Lab <span className="text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]">Dev</span>
                        </span>
                    </Link>
                    <button
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        className="text-neutral-400 hover:text-cyan-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Drawer Nav */}
                <nav className="px-6 py-8 flex flex-col h-full">
                    <ul className="flex flex-col gap-6 text-[16px] uppercase tracking-widest flex-grow">
                        {navItems.map(([label, href], index) => {
                            const active = isActive(href);

                            return (
                                <li
                                    key={label}
                                    style={{
                                        transitionDelay: mobileOpen ? `${index * 75}ms` : "0ms",
                                    }}
                                    className={`transform transition-all duration-300 ease-out
                                        ${mobileOpen
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 translate-x-6"
                                        }
                                    `}
                                >
                                    <Link
                                        href={href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block transition-all duration-300 ${
                                            active
                                                ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                                : "text-neutral-400 hover:text-cyan-300 hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]"
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Contact Button */}
                    <div
                        style={{
                            transitionDelay: mobileOpen ? `${navItems.length * 75}ms` : "0ms",
                        }}
                        className={`transform transition-all duration-300 ease-out mt-8
                            ${mobileOpen
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-6"
                            }
                        `}
                    >
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full text-center px-6 py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 uppercase tracking-widest text-[14px] font-medium rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_16px_rgba(34,211,238,0.3)] hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </aside>
        </header>
    );
}