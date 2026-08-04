import { NextResponse } from "next/server";
import { ContactFormData } from "@/types/contact";
import { 
  generateContactEmailHtml, 
  generateContactEmailSubject,
  generateAutoReplyEmailHtml,
  generateAutoReplyEmailSubject
} from "@/lib/email/contact-template";
import { sendMail } from "@/lib/graph/send-mail";

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    });

    const ipAddress =
      request.headers.get("x-forwarded-for") ??
      request.headers.get("x-real-ip");

    const city = request.headers.get("x-vercel-ip-city");
    const region = request.headers.get("x-vercel-ip-country-region");
    const country = request.headers.get("x-vercel-ip-country");

    let location: string | undefined = undefined;
    if (city || region || country) {
      location = [city, region, country].filter(Boolean).join(", ");
    }

    data.submittedAt = submittedAt;
    data.ipAddress = ipAddress || undefined;
    if (location) {
      data.location = location;
    }

    const subject = generateContactEmailSubject(data);
    const htmlContent = generateContactEmailHtml(data);

    // Send notification to admin (GRAPH_MAILBOX)
    await sendMail(subject, htmlContent);

    // Send auto-reply to the sender
    const autoReplySubject = generateAutoReplyEmailSubject();
    const autoReplyHtml = generateAutoReplyEmailHtml(data);
    await sendMail(autoReplySubject, autoReplyHtml, data.email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
