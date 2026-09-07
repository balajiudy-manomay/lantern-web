"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const metadata = {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      device: navigator.userAgent,
      sourcePage: window.location.href,
    };

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
      ...metadata,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form className="ct-form" onSubmit={handleSubmit}>
      <div className="ct-field">
        <label htmlFor="ct-name">Full name</label>
        <input id="ct-name" type="text" name="name" placeholder="Your name" required disabled={status === "loading"} />
      </div>
      <div className="ct-field">
        <label htmlFor="ct-email">Email address</label>
        <input id="ct-email" type="email" name="email" placeholder="you@company.com" required disabled={status === "loading"} />
      </div>
      <div className="ct-field">
        <label htmlFor="ct-company">Company <span>(optional)</span></label>
        <input id="ct-company" type="text" name="company" placeholder="Your company" disabled={status === "loading"} />
      </div>
      <div className="ct-field">
        <label htmlFor="ct-message">Message</label>
        <textarea id="ct-message" name="message" placeholder="Tell us what is on your mind..." required disabled={status === "loading"}></textarea>
      </div>
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      <div role="status" aria-live="polite">
        {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>Thank you. We will be in touch shortly.</p>}
        {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
