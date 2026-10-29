import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import HeroGlobe from "../components/pages/home/HeroGlobe";
import HeroQuestions from "../components/pages/home/HeroQuestions";
import LampGlow from "../components/pages/home/LampGlow";
import SettleObserver from "../components/SettleObserver";
import heroLogo from "../public/images/lantern-hero-logo.png";
import "./home.css";

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

const GROWTH_CHIPS = ["People", "Processes", "Technology", "Data", "Business strategy", "Marketing", "Operating model"];

export default function Home() {
  return (
    <div className="v4">
      <section className="hero intro on-navy" id="hero" aria-label="Welcome to Lantern">
        <HeroGlobe />
        <div className="wrap hero-in">
          <Image className="hero-logo" src={heroLogo} alt="Lantern, The Way" priority />
          <h1>Clarity that drives outcomes.</h1>
          <p className="hero-kick">Humans · AI · Automation</p>
          <HeroQuestions />
          <div className="hero-btns">
            <Link className="btn btn-gold" href="/services">→ Explore Services</Link>
            <Link className="btn btn-line on-navy" href="/about">→ About Lantern</Link>
          </div>
          <p className="hero-part">
            In partnership with{" "}
            <a className="mm-link" href="https://www.manomay.biz/" target="_blank" rel="noopener noreferrer">
              <b>Manomay Innsurtech</b>
            </a>
          </p>
        </div>
      </section>

      <section className="open on-navy" id="open">
        <LampGlow />
        <div className="wrap">
          <span className="eyebrow">Lantern</span>
          <h1>From confusion to <span className="gl">clarity</span></h1>
          <p className="lede">
            As businesses grow, the challenges evolve. What worked at one stage can become a constraint at the next. We help
            companies that are ambitious about growth in identifying and overcoming the operational, strategic and
            organisational challenges that stand between where they are and where they want to go.
          </p>
          <div className="cta-btns open-cta">
            <Link className="btn btn-gold" href="/services">Explore our services</Link>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="wrap mission-grid">
          <div className="mission-side settle">
            <span className="eyebrow">What we believe</span>
            <h2 className="h2">Every business is built differently.</h2>
          </div>
          <div className="mission-body settle">
            <p>
              Its people and culture, processes, technology and data, operating model, business model and strategy come
              together to create what the organisation is today. What helped a business get here, however, can sometimes
              become what holds it back from going further.
            </p>
            <div className="chips" aria-label="Where growth gets stuck">
              <span className="chips-cap">Where growth gets stuck</span>
              {GROWTH_CHIPS.map((c) => (
                <span className="chip" key={c}>{c}</span>
              ))}
            </div>
            <p>
              When leaders recognise this, they are often offered predefined solutions that address problems in silos,
              while the implementation is left to someone else. The result is a solution that demands significant time,
              money, and effort, yet fails to deliver meaningful business outcomes.
            </p>
            <h3 className="mission-better">We believe there is a better way.</h3>
            <p>
              We take the time to understand your business, where you are in your growth journey, and what&rsquo;s really
              driving the challenges you face. We work with you to solve the real problem, find the right approach for your
              organisation, and see it through to execution&mdash;until you start seeing tangible business results.
            </p>
            <p>
              Our goal is simple: to help build organisations where the very elements that once limited growth become a
              source of strength.
            </p>
            <p className="mission-peak">The way your business runs should be a leader&rsquo;s superpower, not their limitation.</p>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-in">
          <div className="settle">
            <h2 className="h2">Tell us where growth feels harder than it should.</h2>
            <p>Share the challenge that sounds most like your business and we will take it from there.</p>
          </div>
          <div className="cta-btns">
            <Link className="btn btn-gold" href="/cocreate">Start a conversation</Link>
            <Link className="btn btn-line" href="/services">Explore services</Link>
          </div>
        </div>
      </section>

      <SettleObserver />
    </div>
  );
}
