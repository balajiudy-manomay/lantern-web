import Link from "next/link";
import HeroCarousel from "../components/pages/home/HeroCarousel";
import { heroQs, servicesData } from "./data";
import { Metadata } from "next";
import LanternLogo from "../components/icons/lantern-logo";
import ParticlesBackground from "../components/pages/home/ParticlesBackground";

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
        <ParticlesBackground />
        <div className="hero-content">
          <div className="hero-logo">
            <LanternLogo className="hero-logo-img" height="40" width="160"/>
          </div>
          <h1 id="hero-heading" className="hero-stmt">Clarity that drives outcomes.</h1>
          <p className="hero-sub">Humans · AI · Automation</p>

          <HeroCarousel quotes={heroQuotes} />

          <p className="swh" aria-hidden="true">← Swipe to explore →</p>
          <nav className="hero-ctas" aria-label="Hero calls to action">
            <Link href="/services" className="cta-primary">→ Explore Services</Link>
            <Link href="/about" className="cta-secondary">→ About Lantern</Link>
          </nav>
          <p className="ab-partner" style={{ marginTop: '1.6rem', marginBottom: 0, justifyContent: 'center' }}>
            In partnership with{" "}
            <a href="https://manomay.biz" target="_blank" rel="noopener">
              Manomay Innsurtech
            </a>
          </p>
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
