import Link from "next/link";
import type { Metadata } from "next";
import BalanceVenn from "../../components/pages/why-lantern/BalanceVenn";
import ApproachBeam from "../../components/pages/why-lantern/ApproachBeam";
import HeldInBalance from "../../components/pages/why-lantern/HeldInBalance";
import SettleObserver from "../../components/SettleObserver";
import "./why.css";

export const metadata: Metadata = {
  title: "Why Lantern | The Right Balance of People, AI and Automation",

  description:
    "Lantern works at the intersection of human judgement, AI and intelligent automation, from understanding your business to measurable value.",

  alternates: {
    canonical: "/why-lantern",
  },

  openGraph: {
    title: "Why Lantern | The Right Balance of People, AI and Automation",
    description:
      "Lantern works at the intersection of human judgement, AI and intelligent automation, from understanding your business to measurable value.",
    url: "/why-lantern",
  },

  twitter: {
    title: "Why Lantern | The Right Balance of People, AI and Automation",
    description:
      "Lantern works at the intersection of human judgement, AI and intelligent automation, from understanding your business to measurable value.",
  },
};

export default function WhyLantern() {
  return (
    <div className="v4">
      <section className="svc-open">
        <BalanceVenn />
      </section>

      <section className="section flow-sec">
        <div className="wrap">
          <span className="eyebrow">Our approach</span>
          <h2 className="h2" style={{ marginTop: 22 }}>From understanding to measurable value</h2>
          <p className="lede beam-lede">
            Every engagement moves through the same five stages, and we stay with you through all of them: from the first
            conversation to results you can measure.
          </p>
          <ApproachBeam />
        </div>
      </section>

      <section className="section approach">
        <div className="wrap">
          <div className="caps-head settle">
            <span className="eyebrow">One holistic way of working</span>
            <h2 className="h2" style={{ marginTop: 22 }}>Real challenges rarely sit in one place, so our work doesn&rsquo;t either.</h2>
            <p className="lede" style={{ marginTop: 20 }}>
              A solution designed from one angle will always pull away from what the business actually needs. We consider
              all six areas together, so what we design stays aligned with your priorities and holds up in practice.
            </p>
          </div>
          <HeldInBalance />
        </div>
      </section>

      <section className="section right-sol">
        <div className="wrap rs-grid">
          <div className="settle">
            <span className="eyebrow">A different starting point</span>
            <h2 className="h2" style={{ marginTop: 22 }}>The right solution isn&rsquo;t always the one you came looking for.</h2>
          </div>
          <div className="settle">
            <div className="cta-btns">
              <Link className="btn btn-gold" href="/contact">Start a conversation</Link>
              <Link className="btn btn-line" href="/services">Explore services</Link>
            </div>
          </div>
        </div>
      </section>

      <SettleObserver />
    </div>
  );
}
