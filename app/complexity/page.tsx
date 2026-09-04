import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Complexity To Clarity | Lantern",

  description:
    "Eight challenges that stand between growing companies and where they want to go, and how Lantern helps overcome them.",

  keywords: [
    "Business Complexity",
    "Operating Model",
    "Business Transformation",
    "Growth Challenges",
    "Operational Clarity",
    "Enterprise AI",
    "Automation Consulting",
    "AI Strategy",
  ],

  alternates: {
    canonical: "/complexity",
  },

  openGraph: {
    title: "From Complexity To Clarity | Lantern",
    description:
      "Eight challenges that stand between growing companies and where they want to go, and how Lantern helps overcome them.",
    url: "/complexity",
  },

  twitter: {
    title: "From Complexity To Clarity | Lantern",
    description:
      "Eight challenges that stand between growing companies and where they want to go, and how Lantern helps overcome them.",
  },
};

const challenges = [
  {
    n: "01",
    tag: "Growth is limited by the existing operating model, making it difficult to scale smoothly",
    h: "Scale with ease",
    desc: "Bring disconnected operations into sync so the business can scale without adding complexity.",
  },
  {
    n: "02",
    tag: "Growth is strong, but rising costs are limiting profitability.",
    h: "Make growth more profitable",
    desc: "Build a more efficient business that delivers stronger returns as you grow.",
  },
  {
    n: "03",
    tag: "A strong product or service is being let down by delivery, affecting customer experience and retention.",
    h: "Turn great offerings into great experiences",
    desc: "Strengthen the processes and touchpoints that shape how customers experience your business.",
  },
  {
    n: "04",
    tag: "Internal functions operate in silos, fragmenting data and limiting productivity and efficiency.",
    h: "Build a business that works as one",
    desc: "Create a connected operating environment where every part of the business scales together.",
  },
  {
    n: "05",
    tag: "Rapid growth is increasing governance, compliance and oversight complexity.",
    h: "Grow with increased control",
    desc: "Build the oversight, controls and ways of working needed to support growth responsibly.",
  },
  {
    n: "06",
    tag: "Transformation initiatives are consuming investment without delivering the expected business value.",
    h: "Turn transformation into measurable business impact.",
    desc: "Align transformation initiatives with business priorities, establish clear outcomes and translate investment into measurable results.",
  },
  {
    n: "07",
    tag: "The business is unable to adapt quickly enough to changing market conditions and customer needs.",
    h: "Don’t just keep pace. Lead the change.",
    desc: "Build the ability to anticipate change, act ahead of customer needs and turn emerging opportunities into competitive advantage.",
  },
  {
    n: "08",
    tag: "A strong offering is struggling to gain the market traction needed to support growth.",
    h: "Make the market see your value",
    desc: "Strengthen your positioning and reach so a strong offering translates into greater market opportunity.",
  },
];

export default function ComplexityPage() {
  return (
    <section id="complexity" className="reveal">
      <div className="si">
        <h1 className="st" style={{ marginTop: 0, maxWidth: '780px' }}>From Complexity To Clarity</h1>
        <p className="ab-intro" style={{ maxWidth: '780px' }}>
          As businesses grow, the challenges evolve. What worked at one stage
          can become a constraint at the next. We help companies that are
          ambitious about growth in identifying and overcoming the
          operational, strategic and organisational challenges that stand
          between where they are and where they want to go.
        </p>

        <p className="sl">Eight Challenges</p>
        <div className="cx-stack">
          {challenges.map((c, i) => (
            <div
              key={c.n}
              className="cx-stack-item"
              style={{ top: `calc(6rem + ${i * 10}px)`, zIndex: i + 1 }}
            >
              <article className="cx-card">
                <div className="cx-num">{c.n}</div>
                <div>
                  <p className="cx-tag">{c.tag}</p>
                  <h2 className="cx-h">{c.h}</h2>
                  <p className="cx-desc">{c.desc}</p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="ab-grid mt-20!">
          <div className="ab-card">
            <h3>Built to Scale</h3>
            <p>
              Designed to help you find the right way to scale as your
              business grows.
            </p>
          </div>
          <div className="ab-card">
            <h3>Outcome Driven</h3>
            <p>
              Work is complete only when it creates the outcomes that move
              your business forward. We measure our work by the impact it
              creates.
            </p>
          </div>
          <div className="ab-card">
            <h3>Industry &amp; Functional Depth</h3>
            <p>
              From IT and AI to accounting, legal, logistics and beyond, we
              understand how businesses are built, how they operate, and
              what it takes to move them forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
