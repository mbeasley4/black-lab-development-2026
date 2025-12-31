import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactFrom = process.env.CONTACT_FROM_EMAIL;
const contactTo = process.env.CONTACT_TO_EMAIL;

if (!resendApiKey) throw new Error("Missing RESEND_API_KEY");
if (!contactFrom) throw new Error("Missing CONTACT_FROM_EMAIL");
if (!contactTo) throw new Error("Missing CONTACT_TO_EMAIL");

/* ✅ Re-assign AFTER checks so TS knows these are strings */
const RESEND_API_KEY: string = resendApiKey;
const CONTACT_FROM: string = contactFrom;
const CONTACT_TO: string = contactTo;

const resend = new Resend(RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: CONTACT_FROM,
            to: [CONTACT_TO], // ✅ now string[]
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
