import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import WhereTheyMeet from "../../components/pages/industries/WhereTheyMeet";
import SettleObserver from "../../components/SettleObserver";
import SpotObserver from "../../components/SpotObserver";
import "./industries.css";

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

// Card text and icons from the Industries view of Lantern_Website_V4_Final.html
const SECTORS: { name: string; d: string; often: string; icon: ReactNode }[] = [
  { name: "Technology & AI", d: "IT services, software, AI and technology-led businesses.", often: "Teams that ship fast, and processes that struggle to keep up.", icon: <><rect x="10" y="10" width="20" height="20" rx="2" /><rect x="16" y="16" width="8" height="8" /><path d="M15 4v6M25 4v6M15 30v6M25 30v6M4 15h6M4 25h6M30 15h6M30 25h6" /></> },
  { name: "Financial & Business Services", d: "Financial services, insurance and other businesses operating in highly regulated or complex environments.", often: "Rules to follow to the letter, and reporting that takes too long to produce.", icon: <><path d="M6 16 20 6l14 10Z" /><path d="M11 19v10M17 19v10M23 19v10M29 19v10M6 33h28" /></> },
  { name: "Healthcare & Life Sciences", d: "Healthcare providers, services and businesses navigating complex operational and regulatory environments.", often: "Care and compliance pulling together, on systems that don’t talk to each other.", icon: <><circle cx="20" cy="20" r="14" /><path d="M20 12v16M12 20h16" /></> },
  { name: "Professional Services", d: "Accounting, legal, advisory and other expertise-led businesses.", often: "Expertise held by a few people, and capacity that depends on them.", icon: <><rect x="6" y="13" width="28" height="19" rx="2" /><path d="M15 13V9h10v4M6 22h28" /></> },
  { name: "Logistics & Operations", d: "Logistics, supply chain and businesses where operational efficiency is central to growth.", often: "Every handoff has a cost, and small delays add up along the chain.", icon: <><circle cx="8" cy="30" r="3.5" /><circle cx="32" cy="10" r="3.5" /><path d="M11.5 30H22c7 0-4-20 6.5-20" /></> },
  { name: "Government Organisations", d: "Government entities managing operational complexity, regulatory requirements and evolving citizen expectations.", often: "Citizens expecting digital service, delivered on legacy processes and strict controls.", icon: <><path d="M8 25a12 12 0 0 1 24 0" /><path d="M6 25h28v6H6zM20 13V5" /><path d="M20 5h6" /></> },
];

const FUNCTIONS: { name: string; d: string; icon: ReactNode }[] = [
  { name: "Strategy", d: "Business strategy, business model and operating model, shaped around where the company is headed.", icon: <><circle cx="20" cy="20" r="14" /><circle cx="20" cy="20" r="7" /><circle cx="20" cy="20" r="1.8" fill="currentColor" /></> },
  { name: "Operations & Service Delivery", d: "Day-to-day operations and service delivery that run smoothly and scale, without the founder in every decision.", icon: <><circle cx="20" cy="20" r="5" /><circle cx="20" cy="20" r="11" strokeDasharray="4.2 3.1" strokeWidth="4" /><circle cx="20" cy="20" r="2" fill="currentColor" /></> },
  { name: "Technology", d: "Systems, integrations and implementations chosen for the business need, never forced on it.", icon: <><path d="M14 12 6 20l8 8M26 12l8 8-8 8M22 8l-4 24" /></> },
  { name: "Data, Analytics & AI", d: "Fragmented data turned into a trusted view, with analytics and AI that support real decisions.", icon: <><ellipse cx="20" cy="10" rx="12" ry="4" /><path d="M8 10v20a12 4 0 0 0 24 0V10" /><path d="M8 20a12 4 0 0 0 24 0" /></> },
  { name: "Finance & Accounting", d: "Clear sight of where the money goes and where it leaks, with accounting and compliance reporting that runs itself.", icon: <><path d="M9 33V24M17 33V17M25 33V22M33 33V9" /><path d="M6 33h30" /></> },
  { name: "Human Resources", d: "People, capacity and culture, and whether the gap is hiring, training or something else.", icon: <><circle cx="14" cy="14" r="5" /><path d="M5 32a9 9 0 0 1 18 0" /><circle cx="28" cy="16" r="4" /><path d="M26 25a8 8 0 0 1 10 7" /></> },
  { name: "Customer Experience", d: "Every touchpoint and support channel examined for the root causes of churn, then redesigned to keep customers.", icon: <><path d="M20 33C6 23 6 11 14 11c3 0 5 2 6 4 1-2 3-4 6-4 8 0 8 12-6 22z" /></> },
  { name: "Sales & Marketing", d: "Positioning, channels and segments, so a strong offering is seen by the right customers.", icon: <><path d="M8 16h6l16-8v24l-16-8H8z" /><path d="M14 24l2 8" /></> },
];

function CardIcon({ children }: { children: ReactNode }) {
  return (
    <div className="ico">
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <div className="v4">
      <section className="ind-open on-navy">
        <div className="wrap ind-grid">
          <div>
            <span className="eyebrow">Industries and functions</span>
            <h1>Built for ambitious businesses across sectors.</h1>
            <p className="lede">Our focus isn’t limited to a specific industry. We work with businesses that have built something from the ground up and are ambitious about what comes next.</p>
          </div>
          <WhereTheyMeet />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Sectors</span>
          <h2 className="h2" style={{ marginTop: 22 }}>Different industries. The same kind of growing pains.</h2>
          <div className="sectors">
            {SECTORS.map((s) => (
              <article key={s.name} className="sector spot">
                <CardIcon>{s.icon}</CardIcon>
                <h3>{s.name}</h3>
                <p>{s.d}</p>
                <p className="often"><span className="lab">What we often see</span>{s.often}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section funcs">
        <div className="wrap">
          <span className="eyebrow">Functions</span>
          <h2 className="h2" style={{ marginTop: 22 }}>Across every function that makes the business work</h2>
          <p className="lede" style={{ marginTop: 22 }}>Our work isn’t limited to an industry’s core function. We work across the interconnected functions that shape how a business operates, grows and delivers value: the core functions that face the customer, and the business-support functions behind them. All of them, in any industry.</p>
          <div className="fn-cards">
            {FUNCTIONS.map((f) => (
              <article key={f.name} className="fn spot">
                <CardIcon>{f.icon}</CardIcon>
                <h4>{f.name}</h4>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta ind-cta">
        <div className="wrap cta-in">
          <div className="settle">
            <p className="meet-line">We understand the industry you operate in and the functions that keep it running, because what holds growth back is rarely confined to one corner of the business.</p>
          </div>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/cocreate">Start a conversation</Link>
            <Link className="btn btn-line" href="/">Back to Lantern</Link>
          </div>
        </div>
      </section>
      <SettleObserver />
      <SpotObserver />
    </div>
  );
}
