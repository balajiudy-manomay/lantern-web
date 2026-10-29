import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import CountUp from "../../components/pages/pulse/CountUp";
import Library, { BrowseButton } from "../../components/pages/pulse/Library";
import SettleObserver from "../../components/SettleObserver";
import SpotObserver from "../../components/SpotObserver";
import "./pulse.css";

export const metadata: Metadata = {
  title: "Market Pulse | Signals Behind AI, Automation and Growth",

  description:
    "Eight signals on AI adoption, governance, workflow redesign and automation from McKinsey, BCG, Deloitte, HBR, IDC and Gartner.",

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
      "Eight signals on AI adoption, governance, workflow redesign and automation from McKinsey, BCG, Deloitte, HBR, IDC and Gartner.",
    url: "/pulse",
  },

  twitter: {
    title: "Market Pulse | Signals Behind AI, Automation and Growth",
    description:
      "Eight signals on AI adoption, governance, workflow redesign and automation from McKinsey, BCG, Deloitte, HBR, IDC and Gartner.",
  },
};

// Research figures from the Market Pulse view of Lantern_Website_V4_Final.html
const STATS: { n: ReactNode; p: string; cite: string }[] = [
  { n: <><CountUp to={32} />% vs <CountUp to={6} />%</>, p: "Organisations redesigning workflows are 5.3× more likely to realise AI value.", cite: "McKinsey" },
  { n: "Strategy > Tools", p: "Long-term AI success depends more on strategy than on technology alone.", cite: "BCG" },
  { n: <><CountUp to={36} />%</>, p: "of organisations cite fragmented processes as the biggest barrier to intelligent automation.", cite: "Deloitte / HBR" },
  { n: <><CountUp to={60} />%</>, p: "of AI projects fail due to poor data quality and readiness.", cite: "IDC, 2025" },
  { n: <><CountUp to={88} />% vs <CountUp to={8} />%</>, p: "of organisations use AI, but only 8% have a comprehensive AI governance framework.", cite: "McKinsey" },
  { n: <><CountUp to={5} />%</>, p: "of companies achieve significant AI value. Success depends on transforming data, processes and people, not just deploying AI.", cite: "McKinsey & BCG" },
  { n: <><small>Over</small><CountUp to={40} />%</>, p: "of agentic AI projects are predicted to be cancelled by the end of 2027, over unclear business value or inadequate risk controls.", cite: "Gartner" },
  { n: <>+<CountUp to={6} />%</>, p: "more revenue by combining AI with automation instead of using either alone.", cite: "HBR" },
];

export default function PulsePage() {
  return (
    <div className="v4">
      <section className="evidence on-navy pulse-open">
        <div className="wrap">
          <span className="eyebrow">Market Pulse</span>
          <h1 className="p-h1">What the research says about AI, automation and transformation</h1>
          <p className="lede">Where businesses are succeeding with AI and automation, and where they are getting stuck, drawn from McKinsey, BCG, Deloitte, HBR, IDC and Gartner. Our own insights, case studies and articles will appear below as they are published.</p>
          <div className="pulse-jump">
            <BrowseButton />
          </div>
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.p} className="stat spot">
                <div className="stat-n">{s.n}</div>
                <p>{s.p}</p>
                <cite>{s.cite}</cite>
              </div>
            ))}
          </div>
          <p className="ev-note">Figures are as reported by the sources named.</p>
        </div>
      </section>

      <section className="section lib" id="library">
        <div className="wrap">
          <span className="eyebrow">The library</span>
          <h2 className="h2" style={{ marginTop: 22 }}>Insights, case studies and articles</h2>
          <Library />
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-in">
          <div className="settle">
            <h2 className="h2">See your own numbers in these patterns?</h2>
            <p>Tell us where your business is getting stuck. We will help you find what is behind it.</p>
          </div>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/cocreate">Start a conversation</Link>
            <Link className="btn btn-line" href="/why-lantern">Why Lantern</Link>
          </div>
        </div>
      </section>
      <SettleObserver />
      <SpotObserver />
    </div>
  );
}
