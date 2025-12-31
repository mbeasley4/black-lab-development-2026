"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

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
            }),
        });

        setLoading(false);
        setSuccess(res.ok);

        if (res.ok) {
            e.currentTarget.reset();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <input
                name="name"
                required
                placeholder="Name"
                className="w-full bg-black border border-white/20 px-4 py-3"
            />

            <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full bg-black border border-white/20 px-4 py-3"
            />

            <textarea
                name="message"
                required
                rows={5}
                placeholder="Message"
                className="w-full bg-black border border-white/20 px-4 py-3"
            />

            <button
                type="submit"
                disabled={loading}
                className="border border-white px-6 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition disabled:opacity-60"
            >
                {loading ? "Sending…" : "Send Message"}
            </button>

            {success === true && (
                <p className="text-green-400 text-sm">
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
