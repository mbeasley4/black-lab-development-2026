import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0b0b0b] text-neutral-400">
            <div className="mx-auto max-w-[1500px] px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-y-16">

                {/* Brand / Description */}
                <div className="md:col-span-3">
                    <h3 className="text-neutral-200 text-[15px] font-medium uppercase tracking-wide mb-6">
                        Black Lab Development
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed">
                        A digital development studio focused on performance, clarity,
                        and long-term maintainability.
                    </p>
                </div>

                {/* Navigation */}
                <div className="md:col-span-3">
                    <h4 className="text-neutral-300 text-xs uppercase tracking-widest mb-5">
                        Explore
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services" className="hover:text-neutral-200">Services</Link></li>
                        <li><Link href="/industries" className="hover:text-neutral-200">Industries</Link></li>
                        <li><Link href="/work" className="hover:text-neutral-200">Work</Link></li>
                        <li><Link href="/articles" className="hover:text-neutral-200">Articles</Link></li>
                        <li><Link href="/contact" className="hover:text-neutral-200">Contact</Link></li>
                    </ul>
                </div>

                {/* Navigation */}
                <div className="md:col-span-3">
                    <h4 className="text-neutral-300 text-xs uppercase tracking-widest mb-5">
                        Utilities
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/monitor" className="hover:text-neutral-200">Monitor</Link></li>
                        <li><Link href="https://fit30.blacklabdev.com" target="_blank" className="hover:text-neutral-200">Demo Community App</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-3">
                    <h4 className="text-neutral-300 text-xs uppercase tracking-widest mb-5">
                        Contact
                    </h4>

                    <p className="text-sm mb-4">
                        Interested in working together?
                    </p>

                    {/* Mobile: Click-to-call */}
                    <a
                        href="tel:+15135204362"
                        className="block md:hidden text-sm text-neutral-200 hover:text-white transition"
                        aria-label="Call Black Lab Development"
                    >
                        513.520.4362
                    </a>

                    {/* Desktop: Text only (no rogue clicks) */}
                    <span className="hidden md:block text-sm text-neutral-300 select-text">
                        513.520.4362
                    </span>

                    <Link
                        href="/contact"
                        className="inline-block mt-6 text-sm text-neutral-200 border-b border-neutral-600 hover:border-neutral-300 transition"
                    >
                        Start a conversation
                    </Link>
                </div>
            </div>

            {/* Bottom */}
            <div className="pb-10 text-center text-[11px] tracking-widest uppercase text-neutral-500">
                © {new Date().getFullYear()} Black Lab Development
            </div>
        </footer>
    );
}
