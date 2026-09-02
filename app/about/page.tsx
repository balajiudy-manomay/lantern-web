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
          <h1 className="sl">About Lantern</h1>
          <p className="st">Growth Depends On More Than Ambition</p>
          <p className="ab-intro">
            As organisations grow, evolve or take on new opportunities, the
            ways of working that once enabled progress can start creating
            friction. What is manageable today can become a constraint at the
            next stage of growth. Addressing it early keeps the organisation
            ready for what comes next.
          </p>

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

      <section id="anatomy" className="reveal justify-center">
        <div className="si">
          <p className="sl">Anatomy of Lantern</p>
          <p className="st">Five pillars. One unified light.</p>
          <div className="an-wrap">
            <div className="an-svg-wrap">
              <svg viewBox="0 0 340 460" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="fg3" cx="50%" cy="35%" r="38%"><stop offset="0%" stopColor="#d4af37" stopOpacity=".12" /><stop offset="100%" stopColor="#d4af37" stopOpacity="0" /></radialGradient>
                  <filter id="gf3"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>
                <ellipse cx="170" cy="210" rx="100" ry="120" fill="url(#fg3)" />
                <path d="M132 68 Q170 28 208 68" fill="none" stroke="#2a9d8f" strokeWidth="4" strokeLinecap="round" />
                <line x1="132" y1="68" x2="132" y2="92" stroke="#2a9d8f" strokeWidth="3.5" />
                <line x1="208" y1="68" x2="208" y2="92" stroke="#2a9d8f" strokeWidth="3.5" />
                <text x="244" y="54" fontFamily="'Inter',sans-serif" fontSize="13" fill="#2a9d8f" fontWeight="700" letterSpacing="1">HANDLE</text>
                <text x="244" y="70" fontFamily="'Inter',sans-serif" fontSize="10" fill="#6a6e7a">Human Wisdom</text>
                <path d="M116 94 Q114 88 132 88 L208 88 Q226 88 224 94 L230 298 Q231 310 214 310 L126 310 Q109 310 110 298 Z" fill="none" stroke="#8a8f9a" strokeWidth="2" opacity=".6" />
                <text x="20" y="198" fontFamily="'Inter',sans-serif" fontSize="13" fill="#6a6e7a" fontWeight="700" letterSpacing="1">GLASS</text>
                <text x="20" y="214" fontFamily="'Inter',sans-serif" fontSize="10" fill="#999fa8">Governance</text>
                <path d="M170 120 C153 162 150 214 170 244 C190 214 187 162 170 120Z" fill="none" stroke="#d4af37" strokeWidth="3.5">
                  <animate attributeName="d" values="M170 120 C153 162 150 214 170 244 C190 214 187 162 170 120Z;M170 116 C151 160 148 212 170 246 C192 212 189 160 170 116Z;M170 120 C153 162 150 214 170 244 C190 214 187 162 170 120Z" dur="3s" repeatCount="indefinite" />
                </path>
                <circle cx="170" cy="114" r="6" fill="#d4af37" filter="url(#gf3)"><animate attributeName="opacity" values=".5;1;.5" dur="2s" repeatCount="indefinite" /></circle>
                <text x="244" y="170" fontFamily="'Inter',sans-serif" fontSize="13" fill="#d4af37" fontWeight="700" letterSpacing="1">FLAME</text>
                <text x="244" y="186" fontFamily="'Inter',sans-serif" fontSize="10" fill="#6a6e7a">AI Intelligence</text>
                <ellipse cx="170" cy="274" rx="36" ry="13" fill="none" stroke="#c9a84c" strokeWidth="1.8" opacity=".5" />
                <text x="20" y="274" fontFamily="'Inter',sans-serif" fontSize="13" fill="#b8972e" fontWeight="700" letterSpacing="1">FUEL</text>
                <text x="20" y="290" fontFamily="'Inter',sans-serif" fontSize="10" fill="#999fa8">Data Intelligence</text>
                <rect x="106" y="310" width="128" height="22" rx="3" fill="none" stroke="#0F6E56" strokeWidth="3" />
                <rect x="116" y="332" width="108" height="16" rx="2" fill="none" stroke="#0F6E56" strokeWidth="2" />
                <line x1="120" y1="348" x2="112" y2="368" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="220" y1="348" x2="228" y2="368" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" />
                <text x="244" y="326" fontFamily="'Inter',sans-serif" fontSize="13" fill="#0F6E56" fontWeight="700" letterSpacing="1">FRAME</text>
                <text x="244" y="342" fontFamily="'Inter',sans-serif" fontSize="10" fill="#6a6e7a">Automation Engine</text>
              </svg>
            </div>
            <div className="an-pils">
              <div className="pil p-handle"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round"><path d="M18 11V6a2 2 0 00-4 0M14 11V4a2 2 0 00-4 0v7M10 10.5V6a2 2 0 00-4 0v9l-1.76-1.76a2 2 0 00-2.83 2.83L6 20.7A6 6 0 0010.24 23h3.52A6 6 0 0018 20.7V11a2 2 0 00-4 0z" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Handle. Human Wisdom</h2><p className="pil-desc">Intuition, experience and judgement that set the direction and carry the lantern forward.</p></div></div>
              <div className="pil p-flame"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"><path d="M12 2c0 4-4 6-4 10a4 4 0 108 0c0-4-4-6-4-10z" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Flame. AI Intelligence</h2><p className="pil-desc">Transforms data into insight. Learns, reasons and generates the light that guides decisions.</p></div></div>
              <div className="pil p-glass"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7a7e8a" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Glass. Governance</h2><p className="pil-desc">Protects the flame. Ensures trust, security, compliance and ethical use.</p></div></div>
              <div className="pil p-fuel"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8972e" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Fuel. Data Intelligence</h2><p className="pil-desc">Raw signals and information that power insight, relevance and context.</p></div></div>
              <div className="pil p-frame"><div className="pil-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 12h4M14 12h4" /></svg></div><div className="pil-txt"><h2 className="pil-nm">Frame. Automation Engine</h2><p className="pil-desc">The structure that enables scale, integration and seamless execution.</p></div></div>
            </div>
          </div>
          <p className="an-bot">&#8220;One Light. Five Pillars. Endless Possibilities.&#8221;</p>
        </div>
      </section>
    </>
  );
}
