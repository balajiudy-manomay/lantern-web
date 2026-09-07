import { Metadata } from "next";
import DottedMap from "dotted-map";
import ContactForm from "../../components/pages/contact-us/ContactForm";

const worldMap = new DottedMap({ height: 60, grid: "diagonal" });
const officePin = worldMap.addPin({
  lat: 22.9734,
  lng: 78.6569,
  svgOptions: { color: "transparent", radius: 0.6 },
});
const worldMapSvg = worldMap
  .getSVG({
    radius: 0.22,
    color: "var(--mu2)",
    shape: "circle",
    backgroundColor: "transparent",
  })
  // dotted-map repeats fill="var(--mu2)" on every one of the ~3,000 dots;
  // hoist it onto a single wrapping <g> so each <circle> only carries cx/cy/r.
  .replace(/ fill="var\(--mu2\)"/g, "")
  .replace(/(<svg[^>]*>)/, `$1<g fill="var(--mu2)">`)
  .replace("</svg>", "</g></svg>");
const pinLeftPct = officePin ? (officePin.x / worldMap.image.width) * 100 : 50;
const pinTopPct = officePin ? (officePin.y / worldMap.image.height) * 100 : 50;

export const metadata: Metadata = {
  title: "Contact Lantern",

  description:
    "Connect with Lantern to discuss AI, automation and transformation initiatives.",

  keywords: [
    "Contact Lantern",
    "AI Consulting Contact",
    "Automation Consulting",
    "Business Transformation",
    "Enterprise AI",
    "Schedule Consultation",
    "Contact Experts",
    "Digital Transformation",
    "AI Strategy",
    "Business Outcomes",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Lantern",
    description:
      "Connect with Lantern to discuss AI, automation and transformation initiatives.",
    url: "/contact",
  },

  twitter: {
    title: "Contact Lantern",
    description:
      "Connect with Lantern to discuss AI, automation and transformation initiatives.",
  },
};

export default function ContactPage() {
  return (
    <section id="contact" className="reveal justify-center">
      <div className="si">
        <h1 className="sl">Get in Touch</h1>
        <p className="st">Let&#8217;s start with a conversation.</p>
        <div className="ct-grid">
          <div className="ct-info">
            <div className="ct-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h2 className="font-bold!">For leaders who want to talk, not fill out a funnel.</h2>
            <p>Whether you have a specific challenge or you are still shaping the question, we are happy to listen. Our conversations are confidential, candid, and free of sales pressure.</p>

            <div className="ct-list">
              <a href="mailto:cocreate@lanternn.in" className="ct-list-item">cocreate@lanternn.in</a>
              <span className="ct-list-dot">&bull;</span>
              <a href="https://manomay.biz" target="_blank" rel="noopener" className="ct-list-item">
                In partnership with Manomay Innsurtech
              </a>
            </div>

            <div className="ct-map">
              <div className="ct-map-svg" dangerouslySetInnerHTML={{ __html: worldMapSvg }} />
              <div className="ct-pin" style={{ left: `${pinLeftPct}%`, top: `${pinTopPct}%` }}>
                <span className="ct-pin-label">We are here</span>
                <span className="ct-pin-line"></span>
                <span className="ct-pin-dot"></span>
              </div>
            </div>
          </div>

          <div className="ct-form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
