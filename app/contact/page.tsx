import type { Metadata } from "next";
import ContactForm from "../../components/pages/contact/ContactForm";
import { WORLD_DOTS } from "../../components/pages/contact/world-dots";
import "./contact.css";

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
    <div className="v4">
      <section className="cn">
        <div className="wrap">
          <div className="cn-grid">
            <div className="cn-side cn-map-side">
              <h1>For leaders who want to talk, not fill out a funnel.</h1>
              <p className="lede">Whether you have a specific challenge or you are still shaping the question, we are happy to listen. Our conversations are confidential, candid, and free of sales pressure.</p>
              <p className="cn-meta">
                <a href="mailto:cocreate@lanternn.in">cocreate@lanternn.in</a>
                <span>In partnership with <a className="mm-link" href="https://www.manomay.biz/" target="_blank" rel="noopener noreferrer">Manomay Innsurtech</a></span>
              </p>
              <figure className="cn-map">
                <svg viewBox="80 326 576 292" role="img" aria-label="World map with a marker in India: we are here">
                  <path className="cn-dots" d={WORLD_DOTS} />
                  <g className="cn-here">
                    <line x1="500" y1="402" x2="500" y2="446" className="cn-stem" />
                    <circle className="cn-pulse" cx="500" cy="457" r="7" />
                    <circle className="cn-pulse p2" cx="500" cy="457" r="7" />
                    <circle className="cn-halo" cx="500" cy="457" r="8.5" />
                    <circle className="cn-dot" cx="500" cy="457" r="6" />
                    <rect className="cn-pill" x="432" y="366" width="136" height="36" rx="18" />
                    <text className="cn-pill-t" x="500" y="389.5" textAnchor="middle">We are here</text>
                  </g>
                </svg>
              </figure>
            </div>

            <div className="cn-form-wrap">
              <h2>Start the conversation</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
