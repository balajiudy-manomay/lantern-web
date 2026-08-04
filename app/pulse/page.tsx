import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse | Insights & Perspectives",

  description:
    "ERead expert perspectives on AI, automation, governance, and business transformation.",

  keywords: [
    "Pulse",
    "AI Insights",
    "Industry Trends",
    "Thought Leadership",
    "Business Transformation",
    "Automation Insights",
    "Enterprise AI",
    "AI Governance",
    "Data Intelligence",
    "Digital Transformation",
    "Innovation",
  ],

  alternates: {
    canonical: "/pulse",
  },

  openGraph: {
    title: "Pulse | Insights & Perspectives",
    description:
      "Read expert perspectives on AI, automation, governance, and business transformation.",
    url: "/pulse",
  },

  twitter: {
    title: "Pulse | Insights & Perspectives",
    description:
      "Read expert perspectives on AI, automation, governance, and business transformation.",
  },
};

export default function PulsePage() {
  return (
    <>
      <section id="pulse" className="reveal">
        <div className="si max-w-[1100px] w-full">
          <h1 className="sl">Pulse</h1>
          <p className="st">Notes from the field.</p>
        </div>
        <div className="pulse-board w-full">
          <article className="pn p1 fl1"><div className="tape tape-teal"></div>
            <h2 className="pn-stat highlight">40%</h2>
            <p className="pn-quote">of agentic AI projects predicted to be cancelled by end of 2027.</p>
            <span className="pn-src">Gartner, 2025</span>
          </article>
          <article className="pn postit p2 fl2"><div className="tape left tape-pink"></div>
            <h2 className="pn-stat" style={{ color: '#a07000' }}>88% / 8%</h2>
            <p className="pn-quote">use AI, but only 8% have a comprehensive governance framework.</p>
            <span className="pn-src">McKinsey, 2026</span>
          </article>
          <article className="pn p3 fl3">
            <svg className="clip" viewBox="0 0 30 42">
              <path d="M15 4 C 8 4, 5 9, 5 16 L 5 32 C 5 36, 8 38, 12 38 C 16 38, 19 36, 19 32 L 19 14 C 19 12, 17 11, 15 11 C 13 11, 11 12, 11 14 L 11 28" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h2 className="pn-stat gold highlight">2,000+</h2>
            <p className="pn-quote">&#8216;death by AI&#8217; legal claims expected by end of 2026.</p>
            <span className="pn-src">Gartner, 2025</span>
          </article>
          <article className="pn torn p4 fl4">
            <h2 className="pn-stat">2/3</h2>
            <p className="pn-quote">of organisations have not begun scaling AI across the enterprise.</p>
            <span className="pn-src">McKinsey AI Survey</span>
          </article>
          <article className="pn postit postit-orange p5 fl5"><div className="tape right tape-teal"></div>
            <h2 className="pn-stat" style={{ color: '#b04500' }}>60%</h2>
            <p className="pn-quote">of AI projects fail due to poor data quality and readiness.</p>
            <span className="pn-src">IDC, 2025</span>
          </article>
          <article className="pn p6 fl6"><div className="tape"></div>
            <h2 className="pn-stat gold">35%</h2>
            <p className="pn-quote">productivity gains in companies using AI agents at scale.</p>
            <span className="pn-src">Deloitte, 2026</span>
          </article>

          <div className="scrap-badge" style={{ top: '-15px', left: '280px', transform: 'rotate(-12deg)' }}>NEW<br />2027</div>
          <div className="scrap-badge teal" style={{ top: '310px', left: '280px', transform: 'rotate(15deg)' }}>WATCH<br />OUT</div>
          <div className="scrap-badge gold" style={{ top: '300px', right: '18px', transform: 'rotate(-15deg)' }}>+35%</div>

          <span className="scrap-hand" style={{ top: '220px', left: '340px', transform: 'rotate(-6deg)' }}>trends to watch &#8594;</span>
          <span className="scrap-hand gold" style={{ top: '300px', right: '240px', transform: 'rotate(6deg)' }}>important !</span>
          <span className="scrap-hand red" style={{ top: '530px', left: '230px', transform: 'rotate(-4deg)' }}>don&#8217;t miss this</span>
          <span className="scrap-marker" style={{ top: '55px', left: '580px', color: '#0F6E56', transform: 'rotate(-3deg)' }}>&gt;&gt; the big picture</span>
          <span className="scrap-marker" style={{ bottom: '60px', left: '480px', color: '#c44', transform: 'rotate(2deg)' }}>read twice</span>

          <svg className="scrap-doodle" style={{ top: '250px', left: '280px', width: '60px', height: '50px' }} viewBox="0 0 60 50">
            <path d="M5 45 Q 20 10, 50 25 L 45 18 M 50 25 L 52 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <svg className="scrap-doodle" style={{ top: '310px', right: '280px', width: '55px', height: '50px', color: 'var(--teal)' }} viewBox="0 0 55 50">
            <path d="M50 45 Q 30 10, 5 25 L 12 18 M 5 25 L 6 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <svg className="scrap-doodle" style={{ top: '510px', left: '170px', width: '60px', height: '40px', color: '#c44' }} viewBox="0 0 60 40">
            <path d="M5 5 Q 30 35, 55 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
            <path d="M55 10 L 48 6 M 55 10 L 52 17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg className="scrap-doodle" style={{ top: '80px', left: '-15px', width: '80px', height: '60px', color: 'var(--gold)' }} viewBox="0 0 80 60">
            <path d="M 8 30 Q 5 8, 40 5 Q 75 8, 72 30 Q 75 52, 40 55 Q 5 52, 8 30 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" />
          </svg>

          <svg style={{ position: 'absolute', top: '50px', left: '520px', width: '18px', height: '18px', color: 'var(--gold)', opacity: '.6' }} viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="currentColor" />
          </svg>
          <svg style={{ position: 'absolute', top: '380px', left: '740px', width: '14px', height: '14px', color: 'var(--teal)', opacity: '.6' }} viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="currentColor" />
          </svg>
          <svg style={{ position: 'absolute', bottom: '140px', right: '120px', width: '16px', height: '16px', color: 'var(--gold)', opacity: '.6' }} viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="currentColor" />
          </svg>
          <svg style={{ position: 'absolute', bottom: '40px', left: '120px', width: '160px', height: '14px', color: 'var(--gold)', opacity: '.6' }} viewBox="0 0 160 14">
            <path d="M 5 7 Q 40 14, 80 6 T 155 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      </section>
    </>
  );
}
