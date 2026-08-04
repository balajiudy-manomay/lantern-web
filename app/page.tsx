import Link from "next/link";
import HeroCarousel from "../components/pages/home/HeroCarousel";
import { heroQs, servicesData } from "./data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lantern | Humans, AI & Automation",

  description:
    "Lantern combines human experience, AI intelligence and automation to drive business outcomes.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Lantern | Humans, AI & Automation",
    description:
      "Lantern combines human experience, AI intelligence and automation to drive business outcomes.",
    url: "/",
  },

  twitter: {
    title: "Lantern | Humans, AI & Automation",
    description:
      "Lantern combines human experience, AI intelligence and automation to drive business outcomes.",
  },
};

export default function Home() {
  const heroQuotes = heroQs.map(q => ({
    text: q.q,
    ctaText: q.ct,
    serviceData: servicesData[q.si],
  }));

  return (
    <main>
      <section className="hero" id="hero" aria-labelledby="hero-heading">
        <div className="const-wash cw1"></div>
        <div className="const-wash cw2"></div>
        <div className="const-wash cw3"></div>
        <div className="constellation-bg" aria-hidden="true">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle cx="260" cy="280" r="26" className="const-node-glow pulse" />
              <circle cx="260" cy="280" r="4.5" className="const-node" />
              <path d="M 260 280 Q 180 200, 100 160" className="const-line const-draw const-draw-d1" />
              <path d="M 260 280 Q 350 220, 430 180" className="const-line const-draw const-draw-d2" />
              <path d="M 260 280 Q 200 360, 130 420" className="const-line const-draw const-draw-d3" />
              <path d="M 260 280 Q 340 360, 420 410" className="const-line const-draw const-draw-d4" />
              <path d="M 260 280 Q 280 200, 290 120" className="const-line const-draw const-draw-d5" />
              <circle cx="100" cy="160" r="2.5" className="const-dot" />
              <circle cx="430" cy="180" r="2.5" className="const-dot" />
              <circle cx="130" cy="420" r="2.5" className="const-dot" />
              <circle cx="420" cy="410" r="2.5" className="const-dot" />
              <circle cx="290" cy="120" r="2.5" className="const-dot" />
            </g>
            <g>
              <circle cx="1180" cy="350" r="22" className="const-node-glow pulse" style={{ animationDelay: '-1s' }} />
              <circle cx="1180" cy="350" r="4" className="const-node" />
              <path d="M 1180 350 Q 1100 280, 1020 230" className="const-line const-draw const-draw-d2" />
              <path d="M 1180 350 Q 1280 290, 1380 250" className="const-line const-draw const-draw-d3" />
              <path d="M 1180 350 Q 1100 430, 1010 490" className="const-line const-draw const-draw-d4" />
              <path d="M 1180 350 Q 1280 420, 1360 470" className="const-line const-draw const-draw-d5" />
              <path d="M 1180 350 Q 1190 250, 1200 150" className="const-line const-draw const-draw-d1" />
              <circle cx="1020" cy="230" r="2.5" className="const-dot" />
              <circle cx="1380" cy="250" r="2.5" className="const-dot" />
              <circle cx="1010" cy="490" r="2.5" className="const-dot" />
              <circle cx="1360" cy="470" r="2.5" className="const-dot" />
              <circle cx="1200" cy="150" r="2.5" className="const-dot" />
            </g>
            <g>
              <circle cx="720" cy="720" r="20" className="const-node-glow pulse" style={{ animationDelay: '-2s' }} />
              <circle cx="720" cy="720" r="3.5" className="const-node" />
              <path d="M 720 720 Q 620 650, 530 600" className="const-line const-draw const-draw-d3" />
              <path d="M 720 720 Q 820 660, 900 620" className="const-line const-draw const-draw-d4" />
              <path d="M 720 720 Q 650 800, 580 840" className="const-line const-draw const-draw-d5" />
              <path d="M 720 720 Q 790 800, 860 850" className="const-line const-draw const-draw-d1" />
              <circle cx="530" cy="600" r="2.5" className="const-dot" />
              <circle cx="900" cy="620" r="2.5" className="const-dot" />
              <circle cx="580" cy="840" r="2.5" className="const-dot" />
              <circle cx="860" cy="850" r="2.5" className="const-dot" />
            </g>
            <path d="M 290 120 Q 600 80, 1200 150" className="const-line" strokeDasharray="4 5" opacity=".2" />
            <path d="M 420 410 Q 600 600, 720 720" className="const-line" strokeDasharray="4 5" opacity=".2" />
            <path d="M 1010 490 Q 880 600, 720 720" className="const-line" strokeDasharray="4 5" opacity=".2" />
            <circle cx="180" cy="640" r="1.5" className="const-dot" opacity=".4" />
            <circle cx="950" cy="120" r="1.5" className="const-dot" opacity=".4" />
            <circle cx="600" cy="300" r="1.5" className="const-dot" opacity=".4" />
            <circle cx="1080" cy="780" r="1.5" className="const-dot" opacity=".4" />
            <circle cx="400" cy="780" r="1.5" className="const-dot" opacity=".4" />
            <circle cx="800" cy="430" r="1.5" className="const-dot" opacity=".4" />
          </svg>
        </div>
        <div className="hero-content">
          <div className="hero-logo">
            <img className="hero-logo-img logo-blend" src="/images/image_1.png" alt="Lantern" />
          </div>
          <h1 id="hero-heading" className="hero-stmt">Clarity that drives outcomes.</h1>
          <p className="hero-sub">Humans · AI · Automation</p>

          <HeroCarousel quotes={heroQuotes} />

          <p className="swh" aria-hidden="true">← Swipe to explore →</p>
          <nav className="hero-ctas" aria-label="Hero calls to action">
            <Link href="/services" className="cta-primary">→ Explore Services</Link>
            <Link href="/about" className="cta-secondary">→ About Lantern</Link>
          </nav>
        </div>
      </section>

      <section className="ill-band" aria-labelledby="illuminating-heading">
        <h2 id="illuminating-heading" className="sr-only">The Illuminating Difference</h2>
        <blockquote className="ill-txt">
          <p>&#8220;We don&#8217;t show you the light at the end of the tunnel. We help you navigate through it.&#8221;</p>
        </blockquote>
        <p className="ill-sub">That is the illuminating difference.</p>
      </section>
    </main>
  );
}
