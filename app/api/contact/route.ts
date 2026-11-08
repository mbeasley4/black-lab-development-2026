import { NextResponse } from "next/server";
import { Resend } from "resend";

// Env vars are read per request (not at module load) so `next build` doesn't
// require email secrets — e.g. Vercel preview deployments without them.
function getEmailConfig() {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!apiKey || !from || !to) return null;
    return { apiKey, from, to };
}

export async function POST(req: Request) {
    const config = getEmailConfig();
    if (!config) {
        console.error("Contact error: missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_TO_EMAIL");
        return NextResponse.json(
            { error: "Contact form is not configured" },
            { status: 500 }
        );
    }

    try {
        const { name, email, message, turnstileToken } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        const verifyRes = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    secret: process.env.TURNSTILE_SECRET_KEY,
                    response: turnstileToken,
                }),
            }
        );
        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return NextResponse.json(
                { error: "Bot check failed" },
                { status: 400 }
            );
        }

        const resend = new Resend(config.apiKey);
        const { error } = await resend.emails.send({
            from: config.from,
            to: [config.to],
            subject: `New Contact — ${name}`,
            headers: {
                "Reply-To": email,
            },
            html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
        });

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Contact error:", err);
        return NextResponse.json(
            { error: "Submission failed" },
            { status: 500 }
        );
    }
}
