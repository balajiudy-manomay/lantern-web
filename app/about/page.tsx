import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lantern | Our Story",

  description:
    "Learn about Lantern's mission and approach to business transformation.",

  keywords: [
    "About Lantern",
    "Enterprise AI",
    "AI Consulting",
    "Automation Consulting",
    "Digital Transformation",
    "Business Outcomes",
    "Enterprise Automation",
    "AI Strategy",
    "Insurance Technology",
    "Business Transformation",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Lantern | Our Story",
    description:
      "Learn about Lantern's mission and approach to business transformation.",
    url: "/about",
  },

  twitter: {
    title: "About Lantern | Our Story",
    description:
      "Learn about Lantern's mission and approach to business transformation.",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lantern",
            url: "https://yourdomain.com",
            founders: [
              {
                "@type": "Person",
                name: "Krishna Kumari Datla",
              },
              {
                "@type": "Person",
                name: "KSVL Narasimham",
              },
            ],
          }),
        }}
      />
      <section id="about" className="reveal">
        <div className="si">
          <h1 className="sl">About Lantern</h1>
          <p className="st">Built for outcomes. Designed for execution.</p>
          <p className="ab-intro">
            We help mid-to-large enterprises turn AI and automation into
            measurable business outcomes. Less theory, more execution.
          </p>
          <p className="ab-partner">
            In partnership with{" "}
            <a href="https://manomay.biz" target="_blank" rel="noopener">
              Manomay Innsurtech
            </a>
          </p>

          <h2 className="sr-only">Core Principles</h2>
          <div className="ab-grid">
            <div className="ab-card">
              <div className="ab-ico">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M3 3v18h18M7 14l4-4 4 4 6-6" />
                </svg>
              </div>
              <h3>Built to Scale</h3>
              <p>
                Designed from day one for enterprise scale. Modular
                architectures that grow without re engineering.
              </p>
            </div>
            <div className="ab-card">
              <div className="ab-ico">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Outcome Driven</h3>
              <p>
                We commit to measurable business outcomes from the first
                conversation. No deliverables without impact.
              </p>
            </div>
            <div className="ab-card">
              <div className="ab-ico">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Domain Deep</h3>
              <p>
                Insurance, banking, healthcare, public sector. Industry context
                shapes every solution we design.
              </p>
            </div>
          </div>

          <h2 className="fn-section-label">Founders</h2>
          <div className="fn-grid">
            <div className="fn-block">
              <div className="fn-avatar">
                <img
                  src="/leadership/krishna.webp"
                  alt="Krishna Kumari Datla"
                  width="120" height="120" loading="lazy" decoding="async"
                />
              </div>
              <div className="fn-info">
                <p className="fn-label">Founder &amp; CEO</p>
                <h3 className="fn-name">Krishna Kumari Datla</h3>
                <p className="fn-title">Founder &amp; CEO</p>
                <p className="fn-quote">
                  &#8220;The future should not merely be more intelligent
                  &mdash; it should be more human.&#8221;
                </p>
                <p className="fn-bio">
                  Krishna believes that technology is at its best when it helps
                  people see further, think deeper, and create more than they
                  could alone. Through Lantern, she explores the space where
                  human ingenuity meets artificial intelligence, where
                  automation removes friction and people rediscover purpose.
                  Like a lantern carried through unfamiliar terrain, her work is
                  guided by a simple conviction: that the future should not
                  merely be more intelligent &mdash; it should be more human.
                </p>
              </div>
            </div>

            <div className="fn-block">
              <div className="fn-avatar">
                <img
                  src="/leadership/narasimham.webp"
                  alt="KSVL Narasimham"
                  width="120" height="120" loading="lazy" decoding="async"
                />
              </div>
              <div className="fn-info">
                <p className="fn-label">Co-founder</p>
                <h3 className="fn-name">KSVL Narasimham</h3>
                <p className="fn-title">Co-founder</p>
                <p className="fn-quote">
                  &#8220;Lasting transformation is engineered with the same care
                  as a finely crafted instrument &mdash; every part purposeful,
                  every connection considered.&#8221;
                </p>
                <p className="fn-bio">
                  Narasimham believes that great technology is built quietly,
                  through clarity of thought, discipline of design, and depth of
                  understanding. At Lantern, he shapes the architecture that
                  turns ambition into outcome, ensuring every system we build
                  stands the test of scale, scrutiny, and time. His conviction
                  is simple: that lasting transformation is engineered with the
                  same care as a finely crafted instrument &mdash; every part
                  purposeful, every connection considered, every detail
                  deliberate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
