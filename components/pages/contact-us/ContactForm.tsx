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
      <input type="text" name="name" placeholder="Your name *" required disabled={status === "loading"} />
      <input type="email" name="email" placeholder="Email address *" required disabled={status === "loading"} />
      <input type="text" name="company" placeholder="Company (optional)" disabled={status === "loading"} />
      <textarea name="message" placeholder="Tell us what is on your mind... *" required disabled={status === "loading"}></textarea>
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>Thank you. We will be in touch shortly.</p>}
      {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>Something went wrong. Please try again.</p>}
    </form>
  );
}
