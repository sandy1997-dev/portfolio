import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ────────────────────────────────────────────────────
        // Add RESEND_API_KEY to your Vercel environment variables
        // Vercel Dashboard → Your Project → Settings → Environment Variables
        // Name:  RESEND_API_KEY
        // Value: re_xxxxxxxxxxxxxxxx  (from resend.com/api-keys)
        // ────────────────────────────────────────────────────
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        // ────────────────────────────────────────────────────
        // "from" must be a verified domain on Resend.
        // If you don't have a custom domain yet, use:
        //   onboarding@resend.dev   (Resend's default — works instantly)
        // Once you verify your domain, change to:
        //   portfolio@yourdomain.com
        // ────────────────────────────────────────────────────
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["sandeepkumar.pati1997@gmail.com"],
        reply_to: email,
        subject: `New message from ${name} — Portfolio`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 8px;">
            <h2 style="color: #080808; margin-bottom: 4px;">New Portfolio Message</h2>
            <p style="color: #888; font-size: 13px; margin-bottom: 32px;">Someone reached out via your portfolio contact form.</p>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #080808; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                  <a href="mailto:${email}" style="color: #c8ff00; text-decoration: none; font-size: 15px;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 16px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
                <td style="padding: 16px 0; color: #080808; font-size: 15px; line-height: 1.7;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>

            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
              <a href="mailto:${email}" style="display: inline-block; background: #c8ff00; color: #080808; padding: 12px 28px; font-size: 13px; font-weight: 600; text-decoration: none; letter-spacing: 0.05em;">
                Reply to ${name} ↗
              </a>
            </div>

            <p style="margin-top: 32px; color: #aaa; font-size: 11px;">
              Sent from your portfolio contact form at sandeepkumar.dev
            </p>
          </div>
        `,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
