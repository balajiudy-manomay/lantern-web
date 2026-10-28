"use client";

import { useRef, useState, type FormEvent } from "react";

const CHALLENGES = ["Scalability", "Profitability", "Customer experience", "Productivity", "Governance", "Transformation", "Agility", "Market presence", "Something else"];

type Field = "name" | "email" | "company";
type Status = "idle" | "sending" | "sent" | "error";

/** "Start the conversation" form; checks the required fields as in the HTML, then sends through /api/contact. */
export default function ContactForm() {
  const [picks, setPicks] = useState<string[]>([]);
  const [errs, setErrs] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const noteRef = useRef<HTMLParagraphElement | null>(null);

  function togglePick(c: string) {
    setPicks((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const val = (k: string) => String(fd.get(k) ?? "").trim();
    const name = val("name"), email = val("email"), company = val("company"), role = val("role"), text = val("message");

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const next = {
      name: name ? "" : "Please enter your name.",
      email: emailOk ? "" : "Please enter a valid work email.",
      company: company ? "" : "Please enter your company.",
    };
    setErrs(next);
    if (next.name || next.email || next.company) {
      setStatus("idle");
      const first = (["name", "email", "company"] as Field[]).find((k) => next[k]);
      if (first) (form.elements.namedItem(first) as HTMLInputElement | null)?.focus();
      return;
    }

    // The email template takes one message field, so the role and chosen challenges ride along at the end of it
    const extra = [role && `Role: ${role}`, picks.length > 0 && `Closest challenge: ${picks.join(", ")}`].filter(Boolean).join("\n");
    const message = [text, extra].filter(Boolean).join("\n\n") || "(No message provided)";

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, company, message,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          device: navigator.userAgent,
          sourcePage: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setPicks([]);
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    setTimeout(() => noteRef.current?.focus(), 0);
  }

  const fld = (k: Field) => `fld${errs[k] ? " err" : ""}`;
  const sending = status === "sending";

  return (
    <form className="c-form" noValidate onSubmit={onSubmit}>
      <div className="fld-row">
        <div className={fld("name")}><label htmlFor="cName">Your name</label><input id="cName" name="name" type="text" autoComplete="name" aria-required="true" aria-invalid={!!errs.name} /><span className="msg" aria-live="polite">{errs.name}</span></div>
        <div className={fld("email")}><label htmlFor="cEmail">Work email</label><input id="cEmail" name="email" type="email" autoComplete="email" aria-required="true" aria-invalid={!!errs.email} /><span className="msg" aria-live="polite">{errs.email}</span></div>
      </div>
      <div className="fld-row">
        <div className={fld("company")}><label htmlFor="cCo">Company</label><input id="cCo" name="company" type="text" autoComplete="organization" aria-required="true" aria-invalid={!!errs.company} /><span className="msg" aria-live="polite">{errs.company}</span></div>
        <div className="fld"><label htmlFor="cRole">Your role</label><input id="cRole" name="role" type="text" autoComplete="organization-title" /><span className="msg"></span></div>
      </div>
      <div className="fld">
        <span className="lab-l" id="picksLab">Which challenge sounds closest?</span>
        <div className="picks" role="group" aria-labelledby="picksLab">
          {CHALLENGES.map((c) => (
            <button key={c} className="pick" type="button" aria-pressed={picks.includes(c)} onClick={() => togglePick(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="fld"><label htmlFor="cMsg">What are you facing?</label><textarea id="cMsg" name="message" placeholder="A few lines is plenty."></textarea></div>
      <div><button className="btn btn-gold" type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"}</button></div>
      <p className={`c-note${status === "error" ? " bad" : ""}`} role="status" tabIndex={-1} ref={noteRef} hidden={status !== "sent" && status !== "error"}>
        {status === "sent" && <><b>Thank you.</b> Your message is on its way, and we will be in touch shortly.</>}
        {status === "error" && <><b>Something went wrong.</b> Your message was not sent. Please try again, or email us at <a href="mailto:cocreate@lanternn.in">cocreate@lanternn.in</a>.</>}
      </p>
    </form>
  );
}
