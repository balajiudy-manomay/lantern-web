import Link from "next/link";
import type { Metadata } from "next";
import ServiceCards from "../../components/pages/services/ServiceCards";
import { LAYERS } from "../../components/pages/services/services-data";
import { Icon } from "../../components/icons/v4-icons";
import SettleObserver from "../../components/SettleObserver";
import "./services.css";

export const metadata: Metadata = {
  title: "Technology Consulting Services | Lantern",

  description:
    "Explore Lantern's technology consulting services span across industries leveraged by AI, for  strategy, governance, automation, and transformation.",

  keywords: [
    "AI Consulting",
    "Automation Services",
    "Business Transformation",
    "AI Strategy",
    "Data Intelligence",
    "Enterprise AI",
    "Digital Transformation",
    "AI Governance",
    "Technology Consulting",
    "Process Automation",
    "Decision Intelligence",
    "Transformation Services",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Technology Consulting Services | Lantern",
    description:
      "Explore Lantern's technology consulting services span across industries leveraged by AI, for  strategy, governance, automation, and transformation.",
    url: "/services",
  },

  twitter: {
    title: "Technology Consulting Services | Lantern",
    description:
      "Explore Lantern's technology consulting services span across industries leveraged by AI, for  strategy, governance, automation, and transformation.",
  },
};

export default function ServicesPage() {
  return (
    <div className="v4">
      <section className="svc2-open">
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h1>Start with what isn&rsquo;t working.</h1>
          <p className="lede">
            Most companies don&rsquo;t come to us asking for a service. They come with something that isn&rsquo;t working.
            Our services are the answers to the questions below. Find the one that sounds like you.
          </p>
        </div>
      </section>

      <section className="section svc-list-sec" id="listing">
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h2 className="h2" style={{ marginTop: 22, maxWidth: "none" }}>The Questions That Shape What&rsquo;s Next</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="section lyr-sec" id="table">
        <div className="wrap">
          <span className="eyebrow">How the layers combine</span>
          <h2 className="h2">Human + AI + Automation = <span className="gl">Value</span></h2>
          <div className="lyr-card settle">
            <table className="lyr">
              <caption className="sr">How human, AI and automation layers combine in each Lantern service, and the value delivered</caption>
              <thead>
                <tr>
                  <th scope="col" className="c-svc">Service</th>
                  <th scope="col" className="c-h"><span className="hd"><Icon id="i-people" />Human</span></th>
                  <th scope="col" className="c-a"><span className="hd"><Icon id="i-chip" />AI</span></th>
                  <th scope="col" className="c-au"><span className="hd"><Icon id="i-gear" />Automation</span></th>
                  <th scope="col" className="c-val">Value delivered</th>
                </tr>
              </thead>
              <tbody>
                {LAYERS.map((l) => (
                  <tr key={l.name}>
                    <th scope="row"><span className="nm"><i aria-hidden="true"><Icon id={l.icon} /></i>{l.name}</span></th>
                    <td className="h" data-label="Human">{l.human}</td>
                    <td className="a" data-label="AI">{l.ai}</td>
                    <td className="au" data-label="Automation">{l.auto}</td>
                    <td className="v" data-label="Value delivered">{l.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-in">
          <div className="settle">
            <h2 className="h2">Not sure which one is yours?</h2>
            <p>Start with the situation you are in. We will help you work out what is really behind it.</p>
          </div>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">Start a conversation</Link>
            <Link className="btn btn-line" href="/why-lantern">Why Lantern</Link>
          </div>
        </div>
      </section>

      <SettleObserver />
    </div>
  );
}
