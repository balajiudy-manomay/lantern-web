import type { Metadata } from "next";
import Link from "next/link";
import LanternAnatomy from "../../components/pages/about/LanternAnatomy";
import SettleObserver from "../../components/SettleObserver";
import krishna from "../../public/images/founder-krishna.jpg";
import narasimham from "../../public/images/founder-narasimham.jpg";
import "./about.css";

export const metadata: Metadata = {
  title: "About Lantern | Growth Depends On More Than Ambition",

  description:
    "Learn about Lantern's mission, founders, and the five pillars behind our approach to business transformation.",

  keywords: [
    "About Lantern",
    "Enterprise AI",
    "AI Consulting",
    "Automation Consulting",
    "Digital Transformation",
    "Business Outcomes",
    "Enterprise Automation",
    "AI Strategy",
    "Insurance Technology",
    "Business Transformation",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Lantern | Growth Depends On More Than Ambition",
    description:
      "Learn about Lantern's mission, founders, and the five pillars behind our approach to business transformation.",
    url: "/about",
  },

  twitter: {
    title: "About Lantern | Growth Depends On More Than Ambition",
    description:
      "Learn about Lantern's mission, founders, and the five pillars behind our approach to business transformation.",
  },
};

// Founder quotes from the About view of Lantern_Website_V4_Final.html
const FOUNDERS = [
  {
    role: "Founder & CEO",
    name: "Krishna Kumari Datla",
    photo: krishna,
    quote: "“Technology is at its best when it helps people see further, think deeper, and create more than they could alone. Lantern explores the space where human ingenuity meets artificial intelligence, where automation removes friction and people rediscover purpose. Like a lantern carried through unfamiliar terrain, our work is guided by a simple conviction: that the future should not merely be more intelligent, it should be more human.”",
  },
  {
    role: "Co-Founder",
    name: "KSVL Narasimham",
    photo: narasimham,
    quote: "“Great technology is built quietly, through clarity of thought, discipline of design, and depth of understanding. At Lantern, we shape the architecture that turns ambition into outcome, ensuring every system we build stands the test of scale, scrutiny, and time. My conviction is simple: lasting transformation is engineered with the same care as a finely crafted instrument, every part purposeful, every connection considered, every detail deliberate.”",
  },
];

export default function AboutPage() {
  return (
    <div className="v4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Lantern",
            url: "https://yourdomain.com",
            founders: [
              {
                "@type": "Person",
                name: "Krishna Kumari Datla",
              },
              {
                "@type": "Person",
                name: "KSVL Narasimham",
              },
            ],
          }),
        }}
      />
      <section className="about-open">
        <div className="wrap">
          <span className="eyebrow">About Lantern</span>
          <h1>The right mix of human judgement, AI and automation.</h1>
          <p className="lede">Lantern began with a pattern we kept seeing in growing businesses: ambitious leaders, good teams, and yet the way work actually gets done kept holding them back. We started Lantern to help close that gap. We take the time to understand a business before suggesting anything, bring together the right mix of people, process, technology and AI, and stay until the results show.</p>
        </div>
      </section>

      <section className="section anatomy about-an on-navy" id="anatomy">
        <div className="wrap">
          <span className="eyebrow">Anatomy of Lantern</span>
          <h2 className="h2" style={{ marginTop: 22 }}>Five pillars. One unified light.</h2>
          <LanternAnatomy />
          <p className="an-quote">“One Light. Five Pillars. Endless Possibilities.”</p>
        </div>
      </section>

      <section className="section fnd-sec" id="founders">
        <div className="wrap">
          <span className="eyebrow">The people behind Lantern</span>
          <h2 className="h2" style={{ marginTop: 22 }}>Founders</h2>
          <div className="fnd-grid">
            {FOUNDERS.map((f) => (
              <article key={f.name} className="fnd settle">
                <div className="fnd-ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.photo.src} alt={f.name} width={f.photo.width} height={f.photo.height} loading="lazy" />
                </div>
                <div>
                  <p className="fnd-role">{f.role}</p>
                  <h3>{f.name}</h3>
                  <blockquote><p>{f.quote}</p></blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-in">
          <div className="settle">
            <h2 className="h2">Let’s talk about where you want to go.</h2>
            <p>Tell us the challenge in front of you and we will take it from there.</p>
          </div>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/contact">Start a conversation</Link>
            <Link className="btn btn-line" href="/services">Explore services</Link>
          </div>
        </div>
      </section>
      <SettleObserver />
    </div>
  );
}
