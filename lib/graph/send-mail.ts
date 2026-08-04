import { graphClient } from "./client";

export async function sendMail(subject: string, htmlContent: string, toAddress?: string) {
  const mailbox = process.env.GRAPH_MAILBOX || "";
  
  if (!mailbox) {
    throw new Error("GRAPH_MAILBOX environment variable is not set.");
  }

  const recipientAddress = toAddress || mailbox;

  const sendMailMsg = {
    message: {
      subject: subject,
      body: {
        contentType: "HTML",
        content: htmlContent,
      },
      toRecipients: [
        {
          emailAddress: {
            address: recipientAddress,
          },
        },
      ],
    },
    saveToSentItems: "false",
  };

  try {
    // Send email via Microsoft Graph API
    await graphClient.api(`/users/${mailbox}/sendMail`).post(sendMailMsg);
    console.log("Email sent successfully via Microsoft Graph API");
    return { success: true };
  } catch (error) {
    console.error("Error sending email via Microsoft Graph API:", error);
    throw error;
  }
}
