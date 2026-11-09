"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const turnstileRef = useRef<TurnstileInstance>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!token) return;

        // Capture the form now — React nulls e.currentTarget once the
        // handler yields at the first await.
        const form = e.currentTarget;
        const formData = new FormData(form);

        setLoading(true);
        setSuccess(null);
        setErrorMessage(null);

        try {
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

            if (res.ok) {
                setSuccess(true);
                form.reset();
            } else {
                const data = await res.json().catch(() => null);
                setSuccess(false);
                setErrorMessage(
                    data?.error === "Bot check failed"
                        ? "The verification check failed or expired. Please complete it again and resubmit."
                        : data?.error === "Invalid fields"
                          ? "Please check that your email address is valid and try again."
                          : null
                );
            }
        } catch {
            setSuccess(false);
        } finally {
            setLoading(false);
            turnstileRef.current?.reset();
            setToken(null);
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
                <p className="text-red-400 text-sm" role="alert">
                    {errorMessage ?? (
                        <>
                            Your message couldn&apos;t be sent. Please try again, or call{" "}
                            <a href="tel:+15135204362" className="underline">
                                (513) 520-4362
                            </a>
                            .
                        </>
                    )}
                </p>
            )}
        </form>
    );
}
