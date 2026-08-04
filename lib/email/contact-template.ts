import { ContactFormData } from "@/types/contact";

export function generateContactEmailHtml(data: ContactFormData): string {
  return `
  <div style="color-scheme: light; supported-color-schemes: light;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    style="width:100%;font-family:Arial,Helvetica,sans-serif;">
    <!-- ── Header / Brand ── -->
    <tr>
      <td style="padding:36px 48px 28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <span class="em-pill"
                style="display:inline-block;background-color:#e8f5f0;color:#0F6E56;
                       padding:4px 12px;font-size:11px;font-weight:700;
                       letter-spacing:0.12em;text-transform:uppercase;">
                Lantern
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding-top:16px;">
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;
                         font-size:28px;font-weight:700;line-height:1.3;">
                New Inquiry Received
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding-top:14px;">
              <div style="height:2px;width:52px;"></div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── Full-width divider ── -->
    <tr>
      <td style="padding:0;background-color:#0F6E56;height:1px;font-size:0;line-height:0;">&nbsp;</td>
    </tr>

    <!-- ── Contact Details label ── -->
    <tr>
      <td style="padding:28px 48px 12px;">
        <p style="margin:0;font-size:11px;font-weight:700;color:#0F6E56;
                  letter-spacing:0.12em;text-transform:uppercase;">
          Contact Details
        </p>
      </td>
    </tr>

    <!-- ── Details rows ── -->
    <tr>
      <td style="padding:0 48px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          style="border-collapse:collapse;font-size:14px;">

          <!-- Name row — white -->
          <tr >
            <td style="width:140px;padding:13px 16px 13px 0;font-weight:600;
                       border-bottom:1px solid #979797;vertical-align:top;">Name</td>
            <td style="padding:13px 0;border-bottom:1px solid #979797;vertical-align:top;">
              ${data.name}
            </td>
          </tr>

          <!-- Email row — tinted -->
          <tr >
            <td style="width:140px;padding:13px 16px 13px 0;font-weight:600;
                       border-bottom:1px solid #979797;vertical-align:top;">Email</td>
            <td style="padding:13px 0;border-bottom:1px solid #979797;vertical-align:top;">
              <a href="mailto:${data.email}"
                style="color:#0F6E56;text-decoration:none;font-weight:600;">${data.email}</a>
            </td>
          </tr>

          <!-- Company row — white -->
          <tr >
            <td style="width:140px;padding:13px 16px 13px 0;font-weight:600;
                       vertical-align:top;">Company</td>
            <td style="padding:13px 0;vertical-align:top;">
              ${data.company || "Not provided"}
            </td>
          </tr>

        </table>
      </td>
    </tr>

    <!-- ── Message label ── -->
    <tr>
      <td style="padding:28px 48px 12px;">
        <p style="margin:0;font-size:11px;font-weight:700;color:#0F6E56;
                  letter-spacing:0.12em;text-transform:uppercase;">
          Message
        </p>
      </td>
    </tr>

    <!-- ── Message content ── -->
    <tr>
      <td style="border-left:4px solid #c9a84c;
                 padding:22px 48px;font-size:14px;line-height:1.85;">
        ${data.message.replace(/\n/g, "<br>")}
      </td>
    </tr>

    <!-- ── Metadata label ── -->
    <tr>
      <td style="padding:28px 48px 12px;">
        <p style="margin:0;font-size:11px;font-weight:700;color:#0F6E56;
                  letter-spacing:0.12em;text-transform:uppercase;">
          Submission Metadata
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:0 48px 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          style="font-size:12px;color:#6a6e7a;line-height:2;">
          <tr>
            <td ><strong style="color:#3a3a4a;">Submitted At:</strong>&nbsp;${data.submittedAt || "Unknown"}</td>
          </tr>
          <tr>
            <td ><strong style="color:#3a3a4a;">Time Zone:</strong>&nbsp;${data.timezone || "Unknown"}</td>
          </tr>
          <tr>
            <td ><strong style="color:#3a3a4a;">Device:</strong>&nbsp;${data.device || "Unknown"}</td>
          </tr>
          <tr>
            <td ><strong style="color:#3a3a4a;">Source Page:</strong>&nbsp;${data.sourcePage || "/"}</td>
          </tr>
          <tr>
            <td ><strong style="color:#3a3a4a;">IP Address:</strong>&nbsp;${data.ipAddress || "Unknown"}</td>
          </tr>
          <tr>
            <td ><strong style="color:#3a3a4a;">Location:</strong>&nbsp;${data.location || "Unknown (only available in production)"}</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── Footer band ── -->
    <tr>
      <td style="border-top:1px solid #979797;padding:24px 48px;">
        <p style="margin:0;font-size:12px;letter-spacing:0.06em;line-height:1.7;">
          Lantern &bull; Humans &bull; AI &bull; Automation
        </p>
      </td>
    </tr>

  </table>
  </div>
  `;
}

export function generateContactEmailSubject(data: ContactFormData): string {
  return `New Contact Request from ${data.name}${data.company ? ` (${data.company})` : ''}`;
}

export function generateAutoReplyEmailHtml(data: ContactFormData): string {
  return `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    class="em-outer"
    style="width:100%;background-color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
    <!-- ── Header ── -->
    <tr>
      <td class="em-header" style="background-color:#ffffff;padding:36px 48px 28px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              <span class="em-pill"
                style="display:inline-block;background-color:#e8f5f0;color:#0F6E56;
                       padding:4px 12px;font-size:11px;font-weight:700;
                       letter-spacing:0.12em;text-transform:uppercase;">
                Lantern
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding-top:16px;">
              <h1 class="em-h1"
                style="margin:0;font-family:Georgia,'Times New Roman',serif;
                       font-size:28px;font-weight:700;color:#1a2747;line-height:1.3;">
                Thank You for Reaching Out
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding-top:14px;">
              <div class="em-gold-rule"
                style="height:2px;width:52px;background-color:#c9a84c;"></div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
 
    <!-- ── Divider ── -->
    <tr>
      <td class="em-tbar"
        style="background-color:#0F6E56;height:4px;font-size:0;line-height:0;">&nbsp;</td>
    </tr>
 
    <!-- ── Body copy ── -->
    <tr>
      <td class="em-copy"
        style="background-color:#ffffff;padding:32px 48px 0;
               font-size:15px;color:#3a3a4a;line-height:1.8;">
        <p style="margin:0 0 14px;color:#3a3a4a;">Hi ${data.name},</p>
        <p style="margin:0;color:#3a3a4a;">
          Thank you for contacting Lantern. We have successfully received your message
          and our team is currently reviewing it. We will be in touch with you shortly.
        </p>
      </td>
    </tr>
 
    <!-- ── Message echo label ── -->
    <tr>
      <td class="em-header" style="background-color:#ffffff;padding:28px 48px 12px;">
        <p class="em-label"
          style="margin:0;font-size:11px;font-weight:700;color:#0F6E56;
                 letter-spacing:0.12em;text-transform:uppercase;">
          Your Message
        </p>
      </td>
    </tr>
 
    <!-- ── Message echo band ── -->
    <tr>
      <td class="em-msg-band"
        style="background-color:#faf8f4;border-left:4px solid #c9a84c;padding:22px 48px;">
        <p class="em-msg-text"
          style="margin:0;color:#6a6e7a;font-size:13px;line-height:1.85;">
          ${data.message.replace(/\n/g, "<br>")}
        </p>
      </td>
    </tr>
 
    <!-- ── Stay Connected band ── -->
    <tr>
      <td class="em-sc-band"
        style="padding:28px 48px;">
        <h2 class="em-sc-h2"
          style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;
                 font-size:17px;font-weight:700;color:#1a2747;">
          Stay Connected
        </h2>
        <p
            class="em-sc-p"
            style="margin: 0 0 6px; font-size: 13px; color: #3a3a4a"
          >
            <a
              class="em-link"
              href="https://google.com"
              style="color: #0f6e56; text-decoration: none; font-weight: 600"
            >
              lantern.ai
            </a>
          </p>
          <p class="em-sc-p" style="margin: 0; font-size: 13px; color: #3a3a4a">
            <a
              class="em-link"
              href="https://www.linkedin.com"
              style="color: #0f6e56; text-decoration: none; font-weight: 600"
            >
              Follow Lantern on LinkedIn
            </a>
          </p>
      </td>
    </tr>
 
    <!-- ── Sign-off ── -->
    <tr>
      <td class="em-signoff"
        style="background-color:#ffffff;padding:28px 48px 0;
               font-size:15px;color:#3a3a4a;line-height:1.8;">
        <p style="margin:0;">
          Regards,<br>
          <strong class="em-signoff-name" style="color:#0F6E56;">The Lantern Team</strong>
        </p>
      </td>
    </tr>
 
    <!-- ── Footer band ── -->
    <tr>
      <td class="em-footer"
        style="background-color:#f7f5f0;padding:24px 48px;margin-top:32px;">
        <p class="em-ft-main"
          style="margin:0 0 6px;font-size:12px;color:#6a6e7a;
                 letter-spacing:0.06em;line-height:1.7;">
          Lantern &bull; Humans &bull; AI &bull; Automation
        </p>
        <p class="em-ft-sub"
          style="margin:0;font-size:11px;color:#999fa8;line-height:1.6;">
          This is an automated confirmation acknowledging receipt of your inquiry.
        </p>
      </td>
    </tr>
 
  </table>
  `;
}

export function generateAutoReplyEmailSubject(): string {
  return "Thank you for contacting Lantern";
}
