import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#111214] border-t border-amber-500/10 text-neutral-400">
            <div className="mx-auto max-w-375 px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-y-16">

                {/* Brand / Description */}
                <div className="md:col-span-3 md:pr-12">
                    <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                        <div className="relative shrink-0">
                            <Image
                                src="/images/blacklabdevelopment.png"
                                alt="Black Lab Development"
                                width={36}
                                height={36}
                                className="relative z-10"
                            />
                            <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="flex flex-col gap-1 uppercase leading-none">
                            <span className="text-[15px] font-bold tracking-tight text-neutral-200">Black Lab</span>
                            <span className="text-[9px] font-semibold tracking-[0.3em] text-amber-500">Development</span>
                        </div>
                    </Link>
                    <p className="max-w-md text-sm leading-relaxed">
                        A digital development studio focused on performance, clarity,
                        and long-term maintainability.
                    </p>
                </div>

                {/* Navigation */}
                <div className="md:col-span-3">
                    <h4 className="text-neutral-300 text-xs uppercase tracking-widest mb-2">
                        Explore
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/services" className="hover:text-neutral-200">Web Development</Link></li>
                        <li><Link href="/industries" className="hover:text-neutral-200">Industries</Link></li>
                        <li><Link href="/case-studies" className="hover:text-neutral-200">Case Studies</Link></li>
                        <li><Link href="/articles" className="hover:text-neutral-200">SEO & Insights</Link></li>
                        <li><Link href="/about" className="hover:text-neutral-200">About</Link></li>
                        <li><Link href="/contact" className="hover:text-neutral-200">Schedule a Call</Link></li>
                    </ul>
                </div>

                {/* Navigation */}
                <div className="md:col-span-3">
                    <h4 className="text-neutral-300 text-sm uppercase tracking-widest mb-2">
                        Demos
                    </h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="https://dog.blacklabdev.com" target="_blank" className="hover:text-neutral-200">Diamond Dogs (WordPress + Vue.js)</Link></li>
                        <li><Link href="https://fit30.blacklabdev.com" target="_blank" className="hover:text-neutral-200">Fit30 App (Laravel + React)</Link></li>
                        <li><Link href="https://vault.blacklabdev.com" target="_blank" className="hover:text-neutral-200">Vault Cyber (Drupal)</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-3">
                    <h4 className="text-neutral-300 text-sm uppercase tracking-widest mb-2">
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

                    <p className="text-sm text-neutral-500 mt-1">Cincinnati, OH</p>

                    <Link
                        href="/contact"
                        className="inline-block mt-6 text-sm text-amber-500 border-b border-amber-500/40 hover:text-amber-400 hover:border-amber-400 transition"
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
