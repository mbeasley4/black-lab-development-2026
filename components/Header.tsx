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
        ["Contact", "/contact"],
    ] as const;

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-black text-[#e6e6e6]">
            {/* HEADER BAR */}
            <div
                className="mx-auto max-w-[1500px] px-6 py-4 flex items-center justify-between"
                style={{ height: HEADER_HEIGHT }}
            >
                {/* Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-[15px] font-medium tracking-wide uppercase"
                    onClick={() => setMobileOpen(false)}
                >
                    <Image
                        src="/images/blacklabdevelopment.png"
                        alt="Black Lab Development"
                        width={45}
                        height={45}
                        priority
                    />
                    <span className="text-[18px] font-medium tracking-wide uppercase">
                        Black Lab <span className="text-neutral-500">Development</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10 text-[16px] uppercase tracking-widest">
                    {navItems.map(([label, href]) => {
                        const active = isActive(href);

                        return (
                            <Link key={label} href={href} className="relative group">
                                <span
                                    className={`transition-opacity ${active ? "opacity-100" : "group-hover:opacity-80"
                                        }`}
                                >
                                    {label}
                                </span>

                                <span
                                    className={`absolute left-0 -bottom-1 h-px w-full bg-neutral-500 origin-left transition-transform duration-300
                    ${active
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                        }
                  `}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className="md:hidden inline-flex items-center justify-center p-2 text-neutral-300 hover:text-white transition"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                >
                    <div className="space-y-1">
                        <span className="block h-0.5 w-6 bg-current" />
                        <span className="block h-0.5 w-6 bg-current" />
                        <span className="block h-0.5 w-6 bg-current" />
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
                className={`fixed right-0 z-50 w-[85%] max-w-sm bg-black transition-transform duration-300 ease-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
                style={{
                    top: HEADER_HEIGHT,
                    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
                }}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-900">
                    <span className="uppercase tracking-widest text-sm text-neutral-400">
                        Menu
                    </span>
                    <button
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        className="text-neutral-400 hover:text-white transition"
                    >
                        ✕
                    </button>
                </div>

                {/* Drawer Nav */}
                <nav className="px-6 py-8">
                    <ul className="flex flex-col gap-6 text-[16px] uppercase tracking-widest">
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
                                        className={`block ${active
                                            ? "text-white"
                                            : "text-neutral-400 hover:text-white"
                                            } transition`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </header>
    );
}
