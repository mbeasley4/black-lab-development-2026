"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const turnstileRef = useRef<TurnstileInstance>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!token) return;

        setLoading(true);
        setSuccess(null);

        const formData = new FormData(e.currentTarget);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
                turnstileToken: token,
            }),
        });

        setLoading(false);
        setSuccess(res.ok);

        turnstileRef.current?.reset();
        setToken(null);

        if (res.ok) {
            e.currentTarget.reset();
        }
    }

    const inputClass =
        "w-full bg-black border border-volt-400/40 px-4 py-3 text-white placeholder-neutral-500 " +
        "focus:outline-none focus:border-volt-400 focus:shadow-[0_0_16px_rgba(34,211,238,0.4)] " +
        "transition-all duration-200";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input
                name="name"
                required
                placeholder="Name"
                className={inputClass}
            />

            <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className={inputClass}
            />

            <textarea
                name="message"
                required
                rows={5}
                placeholder="Message"
                className={inputClass}
            />

            <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={setToken}
                onExpire={() => setToken(null)}
                onError={() => setToken(null)}
                options={{ theme: "dark" }}
            />

            <button
                type="submit"
                disabled={loading || !token}
                className="border border-volt-400 text-volt-400 px-6 py-3 uppercase tracking-widest
                    shadow-[0_0_10px_rgba(34,211,238,0.3)]
                    hover:bg-volt-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
                    transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Sending…" : "Send Message"}
            </button>

            {success === true && (
                <p className="text-volt-400 text-sm">
                    Message sent successfully.
                </p>
            )}
            {success === false && (
                <p className="text-red-400 text-sm">
                    Submission failed. Please try again.
                </p>
            )}
        </form>
    );
}
