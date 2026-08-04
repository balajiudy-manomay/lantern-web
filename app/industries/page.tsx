import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Lantern",

  description:
    "Discover how Lantern helps organizations across industries to achieve measurable outcomes.",

  keywords: [
    "Industries Served",
    "Industry Solutions",
    "Enterprise AI",
    "Automation Solutions",
    "Digital Transformation",
    "Insurance Technology",
    "AI Consulting",
    "Business Transformation",
    "Enterprise Automation",
    "Industry Expertise",
  ],

  alternates: {
    canonical: "/industries",
  },

  openGraph: {
    title: "Industries We Serve | Lantern",
    description:
      "Discover how Lantern helps organizations across industries to achieve measurable outcomes.",
    url: "/industries",
  },

  twitter: {
    title: "Industries We Serve | Lantern",
    description:
      "Discover how Lantern helps organizations across industries to achieve measurable outcomes.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section id="industries" className="reveal justify-center">
        <div className="si">
          <h1 className="sl">Industries</h1>
          <p className="st">Deep experience where it matters most.</p>
          <div className="in-grid">
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="10" width="18" height="11" rx="2" /><path d="M7 10V7a5 5 0 0110 0v3" /></svg></span><h2 className="in-nm">Financial Services</h2></div>
              <div className="in-sub">Beyond banking. Advisory, wealth, capital markets.</div>
              <p className="in-val">We help financial institutions streamline middle and back office operations, build AI ready data foundations, and automate compliance reporting. From wealth management workflows to capital markets reconciliation, Lantern brings operational clarity where complexity is highest.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg></span><h2 className="in-nm">Government and Public Sector</h2></div>
              <div className="in-sub">Digital services, compliance, citizen experience.</div>
              <p className="in-val">We support public sector bodies in modernising service delivery, improving citizen experience, and meeting regulatory mandates. Our approach combines process automation with responsible AI to reduce backlogs, increase transparency, and deliver measurable outcomes.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span><h2 className="in-nm">Healthcare</h2></div>
              <div className="in-sub">Payer, provider, and clinical operations.</div>
              <p className="in-val">We work across the healthcare value chain, from payer operations and claims processing to provider workflows and clinical data management. Lantern brings automation and AI governance to environments where accuracy, compliance, and patient trust are non negotiable.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /></svg></span><h2 className="in-nm">Technology &amp; Telecommunications</h2></div>
              <div className="in-sub">Digital platforms, infrastructure, and service operations.</div>
              <p className="in-val">We work with technology and telecommunications organizations to optimize complex, high-volume operations. From service provisioning and network operations to customer support and enterprise platforms, Lantern helps streamline workflows, improve service quality, and embed AI into decision-making. Our approach focuses on reducing operational friction while enabling scalability, visibility, and faster time to value.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
