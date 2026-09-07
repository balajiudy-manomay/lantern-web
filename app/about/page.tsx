import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lantern | Growth Depends On More Than Ambition",

  description:
    "Learn about Lantern's mission, founders, and the five pillars behind our approach to business transformation.",

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
    title: "About Lantern | Growth Depends On More Than Ambition",
    description:
      "Learn about Lantern's mission, founders, and the five pillars behind our approach to business transformation.",
    url: "/about",
  },

  twitter: {
    title: "About Lantern | Growth Depends On More Than Ambition",
    description:
      "Learn about Lantern's mission, founders, and the five pillars behind our approach to business transformation.",
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
          <h1 className="st">Our Mission</h1>
          <div className="ms-panel">
            <p className="ab-intro">
              Every organisation is shaped by the way its people, processes, technology, business model, operating model, and strategy work together. These elements evolve over time to help the business succeed—but what enables growth at one stage can become a constraint at the next.
            </p>
            <p className="ab-intro">
              When leaders recognise these constraints, they are often presented with solutions shaped by the capabilities and offerings of the provider, rather than by what the organisation truly needs. A strategy can be compelling on paper, yet difficult to execute when it does not fully reflect the organisation’s realities or when the capabilities and resources required to bring it to life are not in place. This gap between strategy and execution can ultimately prevent organisations from realising the value of their investments.
            </p>
            <p className="ms-callout">At Lantern, We believe there is a better way.</p>
            <p className="ab-intro">
              We start by understanding how the business actually works, where it is in its growth journey, and what is truly driving the challenge. From there, we work with leaders to address the root issue, design what fits the organisation, and partner with them through execution—until the investment translates into measurable business outcomes.
            </p>
            <p className="ab-intro" style={{ marginBottom: 0 }}>
              The goal is simple: to help organisations turn the very elements that once constrained growth into sources of competitive advantage.
            </p>
            <p className="ms-close">
              We want to build organisations that become a leader's superpower -  not a limitation.
            </p>
          </div>

          <h2 className="fn-section-label" style={{ marginTop: '2.5rem' }}>Founders</h2>
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
                <h3 className="fn-name">Krishna Kumari Datla</h3>
                <p className="fn-label">Founder &amp; CEO</p>
                <p className="fn-quote">
                  &#8220;The future should not merely be more intelligent
                  &mdash; it should be more human.&#8221;
                </p>
                <p className="fn-bio">
                  Technology is at its best when it helps people see further, think deeper, and create more than they could alone. Lantern explores the space where human ingenuity meets artificial intelligence, where automation removes friction and people rediscover purpose. Like a lantern carried through unfamiliar terrain, our work is guided by a simple conviction: that the future should not merely be more intelligent — it should be more human.
                </p>
              </div>
            </div>
            <p className="fn-note">

            </p>

            <div className="fn-block">
              <div className="fn-avatar">
                <img
                  src="/leadership/narasimham.webp"
                  alt="KSVL Narasimham"
                  width="120" height="120" loading="lazy" decoding="async"
                />
              </div>
              <div className="fn-info">
                <h3 className="fn-name">KSVL Narasimham</h3>
                <p className="fn-label">Co-founder</p>
                <p className="fn-quote">
                  &#8220;Lasting transformation is engineered with the same care
                  as a finely crafted instrument &mdash; every part purposeful,
                  every connection considered.&#8221;
                </p>
                <p className="fn-bio">
                  Great technology is built quietly, through clarity of thought, discipline of design, and depth of understanding. At Lantern, we shape the architecture that turns ambition into outcome, ensuring every system we build stands the test of scale, scrutiny, and time. My conviction is simple: Lasting transformation is engineered with the same care as a finely crafted instrument — every part purposeful, every connection considered, every detail deliberate.
                </p>
              </div>
            </div>
            <p className="fn-note">

            </p>
          </div>
        </div>
      </section>

      <section id="anatomy" className="reveal justify-center">
        <div className="si">
          <p className="sl">Anatomy of Lantern</p>
          <p className="st">Five pillars. One unified light.</p>
          <div className="an-wrap">
            <div className="an-svg-wrap">
              <svg viewBox="0 0 340 460" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="fg3" cx="50%" cy="35%" r="38%"><stop offset="0%" stopColor="#e7aa51" stopOpacity=".14" /><stop offset="100%" stopColor="#e7aa51" stopOpacity="0" /></radialGradient>
                  <filter id="gf3"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>
                <ellipse cx="170" cy="210" rx="100" ry="120" fill="url(#fg3)" />
                <path d="M132 68 Q170 28 208 68" fill="none" stroke="#0e2f58" strokeWidth="4" strokeLinecap="round" />
                <line x1="132" y1="68" x2="132" y2="92" stroke="#0e2f58" strokeWidth="3.5" />
                <line x1="208" y1="68" x2="208" y2="92" stroke="#0e2f58" strokeWidth="3.5" />
                <text x="244" y="54" fontFamily="'Inter',sans-serif" fontSize="13" fill="#0e2f58" fontWeight="700" letterSpacing="1">HANDLE</text>
                <text x="244" y="70" fontFamily="'Inter',sans-serif" fontSize="10" fill="#6a6e7a">Human Wisdom</text>
                <path d="M116 94 Q114 88 132 88 L208 88 Q226 88 224 94 L230 298 Q231 310 214 310 L126 310 Q109 310 110 298 Z" fill="none" stroke="#0e2f58" strokeWidth="2" opacity=".6" />
                <text x="20" y="198" fontFamily="'Inter',sans-serif" fontSize="13" fill="#0e2f58" fontWeight="700" letterSpacing="1">GLASS</text>
                <text x="20" y="214" fontFamily="'Inter',sans-serif" fontSize="10" fill="#999fa8">Governance</text>
                <path d="M170 120 C153 162 150 214 170 244 C190 214 187 162 170 120Z" fill="none" stroke="#e7aa51" strokeWidth="3.5">
                  <animate attributeName="d" values="M170 120 C153 162 150 214 170 244 C190 214 187 162 170 120Z;M170 116 C151 160 148 212 170 246 C192 212 189 160 170 116Z;M170 120 C153 162 150 214 170 244 C190 214 187 162 170 120Z" dur="3s" repeatCount="indefinite" />
                </path>
                <circle cx="170" cy="114" r="6" fill="#e7aa51" filter="url(#gf3)"><animate attributeName="opacity" values=".5;1;.5" dur="2s" repeatCount="indefinite" /></circle>
                <text x="244" y="170" fontFamily="'Inter',sans-serif" fontSize="13" fill="#e7aa51" fontWeight="700" letterSpacing="1">FLAME</text>
                <text x="244" y="186" fontFamily="'Inter',sans-serif" fontSize="10" fill="#6a6e7a">AI Intelligence</text>
                <ellipse cx="170" cy="274" rx="36" ry="13" fill="none" stroke="#e5c971" strokeWidth="1.8" opacity=".5" />
                <text x="20" y="274" fontFamily="'Inter',sans-serif" fontSize="13" fill="#b8863e" fontWeight="700" letterSpacing="1">FUEL</text>
                <text x="20" y="290" fontFamily="'Inter',sans-serif" fontSize="10" fill="#999fa8">Data Intelligence</text>
                <rect x="106" y="310" width="128" height="22" rx="3" fill="none" stroke="#0e2f58" strokeWidth="3" />
                <rect x="116" y="332" width="108" height="16" rx="2" fill="none" stroke="#0e2f58" strokeWidth="2" />
                <line x1="120" y1="348" x2="112" y2="368" stroke="#0e2f58" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="220" y1="348" x2="228" y2="368" stroke="#0e2f58" strokeWidth="2.5" strokeLinecap="round" />
                <text x="244" y="326" fontFamily="'Inter',sans-serif" fontSize="13" fill="#0e2f58" fontWeight="700" letterSpacing="1">FRAME</text>
                <text x="244" y="342" fontFamily="'Inter',sans-serif" fontSize="10" fill="#6a6e7a">Automation Engine</text>
              </svg>
            </div>
            <div className="an-pils">
              <div className="pil p-handle"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e2f58" strokeWidth="2" strokeLinecap="round"><path d="M18 11V6a2 2 0 00-4 0M14 11V4a2 2 0 00-4 0v7M10 10.5V6a2 2 0 00-4 0v9l-1.76-1.76a2 2 0 00-2.83 2.83L6 20.7A6 6 0 0010.24 23h3.52A6 6 0 0018 20.7V11a2 2 0 00-4 0z" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Handle. Human Wisdom</h2><p className="pil-desc">Intuition, experience and judgement that set the direction and carry the lantern forward.</p></div></div>
              <div className="pil p-flame"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e7aa51" strokeWidth="2" strokeLinecap="round"><path d="M12 2c0 4-4 6-4 10a4 4 0 108 0c0-4-4-6-4-10z" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Flame. AI Intelligence</h2><p className="pil-desc">Transforms data into insight. Learns, reasons and generates the light that guides decisions.</p></div></div>
              <div className="pil p-glass"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e2f58" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Glass. Governance</h2><p className="pil-desc">Protects the flame. Ensures trust, security, compliance and ethical use.</p></div></div>
              <div className="pil p-fuel"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8863e" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Fuel. Data Intelligence</h2><p className="pil-desc">Raw signals and information that power insight, relevance and context.</p></div></div>
              <div className="pil p-frame"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0e2f58" strokeWidth="2" strokeLinecap="round"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 12h4M14 12h4" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Frame. Automation Engine</h2><p className="pil-desc">The structure that enables scale, integration and seamless execution.</p></div></div>
            </div>
          </div>
          <p className="an-bot">&#8220;One Light. Five Pillars. Endless Possibilities.&#8221;</p>
        </div>
      </section>
    </>
  );
}
