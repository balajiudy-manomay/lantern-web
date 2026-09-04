import type { Metadata } from "next";
import AnimatedStat from "../../components/pages/pulse-route/AnimatedStat";

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

// First three, shown as a plain borderless banner strip.
const bannerStats = [
  {
    code: "P-01",
    figure: "5%",
    desc: "Only 5% of companies achieve significant AI value, as success depends on transforming data, processes and people — not just deploying AI.",
    source: "McKinsey & BCG",
  },
  {
    code: "P-02",
    figure: "40%",
    desc: "Of agentic AI projects are predicted to be cancelled by end of 2027, due to unclear business value or inadequate risk controls.",
    source: "Source TBC",
  },
  {
    code: "P-03",
    figure: "60%",
    desc: "Of AI projects fail due to poor data quality and readiness.",
    source: "IDC, 2025",
  },
];

// Remaining four, shown as a divided 2x2 grid next to the callout below.
const gridStats = [
  {
    code: "P-04",
    figure: "5.3×",
    desc: "Organisations redesigning workflows are 5.3× more likely to realise AI value.",
    source: "McKinsey",
  },
  {
    code: "P-05",
    figure: "8%",
    desc: "Organisations use AI, but only 8% have a comprehensive AI governance framework.",
    source: "McKinsey",
  },
  {
    code: "P-06",
    figure: "36%",
    desc: "Organisations cite fragmented processes as the biggest barrier to intelligent automation.",
    source: "Deloitte / HBR",
  },
  {
    code: "P-07",
    figure: "+6%",
    desc: "More revenue by combining AI with automation instead of using either alone.",
    source: "HBR",
  },
];

// Last item, shown as a standalone callout to the left of the grid above.
const calloutStat = {
  code: "P-08",
  figure: "Strategy > Tools",
  desc: "Long-term AI success depends more on strategy than on technology alone.",
  source: "BCG",
};

export default function PulsePage() {
  return (
    <section id="pulse" className="reveal">
      <div className="si pt-20!">
        <h1 className="sl"></h1>
        <p className="st">Market Pulse</p>

        <div className="mp-banner ">
          {bannerStats.map((s) => (
            <div key={s.code} className="mp-banner-item">
              <AnimatedStat figure={s.figure} className="mp-banner-num" />
              <p className="mp-banner-desc">{s.desc}</p>
              <div className="mp-banner-source">{s.source}</div>
            </div>
          ))}
        </div>

        <div className="mp-split">
          <div className="mp-split-callout">
            <AnimatedStat figure={calloutStat.figure} className="mp-split-callout-num" />
            <p className="mp-split-callout-desc">{calloutStat.desc}</p>
            <div className="mp-banner-source">{calloutStat.source}</div>
          </div>
          <div className="mp-split-grid">
            {gridStats.map((s) => (
              <div key={s.code} className="mp-split-item">
                <AnimatedStat figure={s.figure} className="mp-split-num" />
                <p className="mp-split-desc">{s.desc}</p>
                <div className="mp-banner-source">{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
