import { Metadata } from "next";
import ContactForm from "../../components/pages/contact-us/ContactForm";

export const metadata: Metadata = {
  title: "Contact Lantern",

  description:
    "Connect with Lantern to discuss AI, automation and transformation initiatives.",

  keywords: [
    "Contact Lantern",
    "AI Consulting Contact",
    "Automation Consulting",
    "Business Transformation",
    "Enterprise AI",
    "Schedule Consultation",
    "Contact Experts",
    "Digital Transformation",
    "AI Strategy",
    "Business Outcomes",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Lantern",
    description:
      "Connect with Lantern to discuss AI, automation and transformation initiatives.",
    url: "/contact",
  },

  twitter: {
    title: "Contact Lantern",
    description:
      "Connect with Lantern to discuss AI, automation and transformation initiatives.",
  },
};

export default function ContactPage() {
  return (
    <section id="contact" className="reveal justify-center">
      <div className="si">
        <h1 className="sl">Get in Touch</h1>
        <p className="st">Let&#8217;s start with a conversation.</p>
        <div className="ct-grid">
          <ContactForm />
          <div className="ct-info">
            <h2>For leaders who want to talk, not fill out a funnel.</h2>
            <p>Whether you have a specific challenge or you are still shaping the question, we are happy to listen. Our conversations are confidential, candid, and free of sales pressure.</p>
            <div className="ct-detail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:cocreate@lanternn.in" className="hover:underline" style={{ color: 'inherit', textDecoration: 'none' }}>
                cocreate@lanternn.in
              </a>
            </div>
            <div className="ct-detail">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span>
                In partnership with{" "}
                <a href="https://manomay.biz" target="_blank" rel="noopener">
                  Manomay Innsurtech
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
