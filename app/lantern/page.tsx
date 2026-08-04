import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lantern Framework | Human Wisdom Meets AI Intelligence",

  description:
    "Explore the framework combining human expertise, AI intelligence, and automation.",

  keywords: [
    "Lantern Framework",
    "AI Intelligence",
    "Human Expertise",
    "AI Governance",
    "Data Intelligence",
    "Automation Engine",
    "Decision Intelligence",
    "Enterprise AI",
    "Business Transformation",
    "Digital Transformation",
  ],

  alternates: {
    canonical: "/lantern",
  },

  openGraph: {
    title: "The Lantern Framework | Human Wisdom Meets AI Intelligence",
    description:
      "Explore the framework combining human expertise, AI intelligence, and automation.",
    url: "/lantern",
  },

  twitter: {
    title: "The Lantern Framework | Human Wisdom Meets AI Intelligence",
    description:
      "Explore the framework combining human expertise, AI intelligence, and automation.",
  },
};

export default function LanternPage() {
  return (
    <>
      <section id="lantern" className="reveal justify-center">
        <div className="si">
          <h1 className="sl">Anatomy of Lantern</h1>
          <p className="st">Five pillars. One unified light.</p>
          <div className="an-wrap">
            <div className="an-svg-wrap">
              <svg viewBox="0 0 340 460" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="fg2" cx="50%" cy="35%" r="38%"><stop offset="0%" stopColor="#d4af37" stopOpacity=".12" /><stop offset="100%" stopColor="#d4af37" stopOpacity="0" /></radialGradient>
                  <filter id="gf2"><feGaussianBlur stdDeviation="1.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                </defs>
                <ellipse cx="170" cy="210" rx="100" ry="120" fill="url(#fg2)" />
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
                <circle cx="170" cy="114" r="6" fill="#d4af37" filter="url(#gf2)"><animate attributeName="opacity" values=".5;1;.5" dur="2s" repeatCount="indefinite" /></circle>
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
