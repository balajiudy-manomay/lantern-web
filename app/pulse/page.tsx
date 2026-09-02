import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Pulse | Signals Behind AI, Automation and Growth",

  description:
    "Eight signals on AI adoption, governance, workflow redesign and automation from McKinsey, BCG, Deloitte/HBR, HBR and IDC.",

  keywords: [
    "Market Pulse",
    "AI Insights",
    "Industry Trends",
    "Thought Leadership",
    "Business Transformation",
    "Automation Insights",
    "Enterprise AI",
    "AI Governance",
    "Data Intelligence",
    "Digital Transformation",
  ],

  alternates: {
    canonical: "/pulse",
  },

  openGraph: {
    title: "Market Pulse | Signals Behind AI, Automation and Growth",
    description:
      "Eight signals on AI adoption, governance, workflow redesign and automation from McKinsey, BCG, Deloitte/HBR, HBR and IDC.",
    url: "/pulse",
  },

  twitter: {
    title: "Market Pulse | Signals Behind AI, Automation and Growth",
    description:
      "Eight signals on AI adoption, governance, workflow redesign and automation from McKinsey, BCG, Deloitte/HBR, HBR and IDC.",
  },
};

const sources = ["MCKINSEY", "BCG", "DELOITTE / HBR", "HBR", "IDC 2025", "MCKINSEY & BCG"];

function Gauge({ pct }: { pct: number }) {
  const c = 327;
  const offset = c - (c * pct) / 100;
  return (
    <svg className="mp-gauge" width="104" height="104" viewBox="0 0 124 124">
      <circle cx="62" cy="62" r="52" fill="none" stroke="var(--bg2)" strokeWidth="7" />
      <circle
        cx="62" cy="62" r="52" fill="none" stroke="var(--teal)" strokeWidth="7"
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
      />
    </svg>
  );
}

export default function PulsePage() {
  return (
    <section id="pulse" className="reveal">
      <div className="mp-hero">
        <div className="mp-hero-inner">
          <div className="mp-eyebrow">
            <span className="mp-dot"></span>
            <span>Signal Set &middot; 08 Indicators</span>
          </div>
          <h1>Market Pulse</h1>
        </div>
        <div className="mp-ticker-row">
          <span className="mp-ticker-lbl">SOURCES</span>
          <div className="mp-ticker-wrap">
            <div className="mp-ticker">
              {[...sources, ...sources].map((s, i) => (
                <span key={i}>{s}{i < sources.length * 2 - 1 ? " ·" : ""}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mp-body">
        <div className="mp-grid-3">
          <article className="mp-card">
            <div className="mp-card-top">
              <span className="mp-code">P-01</span>
              <span className="mp-live"><span className="mp-dot" style={{ background: 'var(--teal)' }}></span>LIVE</span>
            </div>
            <div className="mp-figure-row">
              <Gauge pct={5} />
              <div>
                <div className="mp-figure">5%</div>
                <div className="mp-figure-lbl">AI VALUE REALISED</div>
              </div>
            </div>
            <p className="mp-quote">Only 5% of companies achieve significant AI value, as success depends on transforming data, processes and people &mdash; not just deploying AI.</p>
            <div className="mp-source">MCKINSEY &amp; BCG</div>
          </article>

          <article className="mp-card">
            <div className="mp-card-top">
              <span className="mp-code">P-02</span>
              <span className="mp-live"><span className="mp-dot" style={{ background: 'var(--teal)' }}></span>LIVE</span>
            </div>
            <div className="mp-figure-row">
              <Gauge pct={40} />
              <div>
                <div className="mp-figure">40%</div>
                <div className="mp-figure-lbl">CANCELLED BY 2027</div>
              </div>
            </div>
            <p className="mp-quote">Of agentic AI projects are predicted to be cancelled by end of 2027, due to unclear business value or inadequate risk controls.</p>
            <div className="mp-source">SOURCE TBC</div>
          </article>

          <article className="mp-card">
            <div className="mp-card-top">
              <span className="mp-code">P-03</span>
              <span className="mp-live"><span className="mp-dot" style={{ background: 'var(--teal)' }}></span>LIVE</span>
            </div>
            <div className="mp-figure-row">
              <Gauge pct={60} />
              <div>
                <div className="mp-figure">60%</div>
                <div className="mp-figure-lbl">PROJECTS FAILING</div>
              </div>
            </div>
            <p className="mp-quote">Of AI projects fail due to poor data quality and readiness.</p>
            <div className="mp-source">IDC, 2025</div>
          </article>
        </div>

        <div className="mp-grid-2">
          <article className="mp-card">
            <div className="mp-headline">
              <span className="mp-code">P-04 &middot; WORKFLOW REDESIGN</span>
              <span className="mp-headline-fig">5.3&times;</span>
            </div>
            <div className="mp-bars">
              <div>
                <div className="mp-bar-top"><span>REDESIGNED WORKFLOWS</span><span>32%</span></div>
                <div className="mp-bar-track"><div className="mp-bar-fill" style={{ width: '32%' }}></div></div>
              </div>
              <div>
                <div className="mp-bar-top"><span>NO REDESIGN</span><span style={{ color: 'var(--mu)' }}>6%</span></div>
                <div className="mp-bar-track"><div className="mp-bar-fill mu" style={{ width: '6%' }}></div></div>
              </div>
            </div>
            <p className="mp-quote">Organisations redesigning workflows are 5.3&times; more likely to realise AI value.</p>
            <div className="mp-source">MCKINSEY</div>
          </article>

          <article className="mp-card">
            <div className="mp-headline">
              <span className="mp-code">P-05 &middot; THE GOVERNANCE GAP</span>
              <span className="mp-headline-fig" style={{ color: 'var(--hd)' }}>88% <span style={{ color: 'var(--mu)', fontSize: '.8rem' }}>/</span> 8%</span>
            </div>
            <div className="mp-bars">
              <div>
                <div className="mp-bar-top"><span>USING AI</span><span style={{ color: 'var(--hd)' }}>88%</span></div>
                <div className="mp-bar-track"><div className="mp-bar-fill mu" style={{ width: '88%', background: 'var(--hd)' }}></div></div>
              </div>
              <div>
                <div className="mp-bar-top"><span>COMPREHENSIVE GOVERNANCE FRAMEWORK</span><span>8%</span></div>
                <div className="mp-bar-track"><div className="mp-bar-fill" style={{ width: '8%' }}></div></div>
              </div>
            </div>
            <p className="mp-quote">Organisations use AI, but only 8% have a comprehensive AI governance framework.</p>
            <div className="mp-source">MCKINSEY</div>
          </article>
        </div>

        <div className="mp-grid-3">
          <article className="mp-card">
            <div className="mp-card-top">
              <span className="mp-code">P-06 &middot; BIGGEST BARRIER</span>
            </div>
            <div className="mp-figure" style={{ fontSize: '2.4rem', marginBottom: '.9rem' }}>36%</div>
            <div className="mp-bar-track" style={{ marginBottom: '1rem' }}><div className="mp-bar-fill" style={{ width: '36%' }}></div></div>
            <p className="mp-quote">Organisations cite fragmented processes as the biggest barrier to intelligent automation.</p>
            <div className="mp-source">DELOITTE / HBR</div>
          </article>

          <article className="mp-card">
            <div className="mp-card-top">
              <span className="mp-code">P-07 &middot; AI + AUTOMATION</span>
            </div>
            <div className="mp-figure" style={{ fontSize: '2.4rem', marginBottom: '.7rem' }}>+6%</div>
            <svg width="100%" height="46" viewBox="0 0 260 52" preserveAspectRatio="none" style={{ display: 'block', marginBottom: '.9rem' }}>
              <path d="M0 46 L52 40 L104 34 L156 24 L208 16 L260 4" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="mp-quote">More revenue by combining AI with automation instead of using either alone.</p>
            <div className="mp-source">HBR</div>
          </article>

          <article className="mp-card dark">
            <div className="mp-card-top">
              <span className="mp-code">P-08 &middot; WHAT DECIDES IT</span>
            </div>
            <div className="mp-strategy">
              <strong>Strategy</strong>
              <span className="mp-gt">&gt;</span>
              <em>Tools</em>
            </div>
            <div className="mp-bar-track" style={{ background: 'rgba(255,255,255,.14)', marginBottom: '1rem' }}>
              <div className="mp-bar-fill" style={{ width: '72%', background: 'linear-gradient(90deg,#4ade9b,rgba(74,222,155,.25))' }}></div>
            </div>
            <p className="mp-quote">Long-term AI success depends more on strategy than on technology alone.</p>
            <div className="mp-source">BCG</div>
          </article>
        </div>
      </div>
    </section>
  );
}
