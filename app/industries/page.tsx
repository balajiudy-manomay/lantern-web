import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Lantern",

  description:
    "Built for ambitious businesses across sectors — Technology & AI, Financial & Business Services, Healthcare & Life Sciences, Professional Services, Logistics & Operations and Government.",

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
      "Built for ambitious businesses across sectors — Technology & AI, Financial & Business Services, Healthcare & Life Sciences, Professional Services, Logistics & Operations and Government.",
    url: "/industries",
  },

  twitter: {
    title: "Industries We Serve | Lantern",
    description:
      "Built for ambitious businesses across sectors — Technology & AI, Financial & Business Services, Healthcare & Life Sciences, Professional Services, Logistics & Operations and Government.",
  },
};

const functions = ["Strategy", "Operations", "Finance", "HR", "Technology", "Data", "Sales & Marketing", "Customer Experience"];

export default function IndustriesPage() {
  return (
    <>
      <section id="industries" className="reveal justify-center">
        <div className="si">
          <h1 className="sl">Industries</h1>
          <p className="st">Built for ambitious businesses across sectors.</p>
          <p className="ab-intro" style={{ marginBottom: '2.5rem' }}>
            Our focus isn&#8217;t limited to a specific industry. We work with
            businesses that have built something from the ground up and are
            ambitious about what comes next.
          </p>
          <div className="in-grid">
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M9 3v2M13 3v2M9 19v2M13 19v2M3 9h2M3 13h2M19 9h2M19 13h2" /></svg></span><h2 className="in-nm">Technology &amp; AI</h2></div>
              <p className="in-val">IT services, software, AI and technology-led businesses.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="10" width="18" height="11" rx="2" /><path d="M7 10V7a5 5 0 0110 0v3" /></svg></span><h2 className="in-nm">Financial &amp; Business Services</h2></div>
              <p className="in-val">Financial services, insurance and other businesses operating in highly regulated or complex environments.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></span><h2 className="in-nm">Healthcare &amp; Life Sciences</h2></div>
              <p className="in-val">Healthcare providers, services and businesses navigating complex operational and regulatory environments.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" /></svg></span><h2 className="in-nm">Professional Services</h2></div>
              <p className="in-val">Accounting, legal, advisory and other expertise-led businesses.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="1" y="7" width="13" height="10" rx="1" /><path d="M14 10h4l3 3v4h-7z" /><circle cx="5.5" cy="19" r="1.5" /><circle cx="17.5" cy="19" r="1.5" /></svg></span><h2 className="in-nm">Logistics &amp; Operations</h2></div>
              <p className="in-val">Logistics, supply chain and businesses where operational efficiency is central to growth.</p>
            </article>
            <article className="in-card">
              <div className="in-head"><span className="in-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg></span><h2 className="in-nm">Government Organisations</h2></div>
              <p className="in-val">Government entities managing operational complexity, regulatory requirements and evolving citizen expectations.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="reveal" style={{ background: 'var(--bg)' }}>
        <div className="si">
          <h2 className="st" style={{ maxWidth: '700px' }}>Across the functions that make the business work</h2>
          <p className="ab-intro" style={{ marginBottom: '1.6rem' }}>
            Our work isn&#8217;t limited to an industry&#8217;s core function. We
            work across the interconnected functions that shape how a
            business operates, grows and delivers value.
          </p>
          <div className="fx-wrap">
            {functions.map((f, i) => (
              <span key={f} className={`fx-pill${i === 0 ? " active" : ""}`}>{f}</span>
            ))}
          </div>
          <div className="fx-rule"></div>
          <p className="fx-note">Horizontal Rail &middot; Pills Scroll and Select</p>
          <p className="ab-intro" style={{ marginBottom: 0 }}>
            Our perspective spans both the industry and the functions within
            it&mdash;because the challenges that limit growth rarely sit
            neatly in one place.
          </p>
        </div>
      </section>
    </>
  );
}
