import type { Metadata } from "next";
import LanternFramework from "../../components/pages/lantern/LanternFramework";

export const metadata: Metadata = {
  title: "The Lantern Advantage | Human Judgement, AI and Automation",

  description:
    "AI isn't the answer to every business problem. See how Lantern combines human judgement, AI and intelligent automation to solve the right problem the right way.",

  keywords: [
    "The Lantern Advantage",
    "AI Intelligence",
    "Human Judgement",
    "Intelligent Automation",
    "AI Governance",
    "Business Transformation",
    "Enterprise AI",
    "Digital Transformation",
  ],

  alternates: {
    canonical: "/lantern",
  },

  openGraph: {
    title: "The Lantern Advantage | Human Judgement, AI and Automation",
    description:
      "AI isn't the answer to every business problem. See how Lantern combines human judgement, AI and intelligent automation to solve the right problem the right way.",
    url: "/lantern",
  },

  twitter: {
    title: "The Lantern Advantage | Human Judgement, AI and Automation",
    description:
      "AI isn't the answer to every business problem. See how Lantern combines human judgement, AI and intelligent automation to solve the right problem the right way.",
  },
};

const framework = [
  { step: "UNDERSTAND", tag: "Business First" },
  { step: "DIAGNOSE", tag: "Root cause" },
  { step: "DESIGN", tag: "Human + AI + Automation" },
  { step: "IMPLEMENT", tag: "Agnostic By Design" },
  { step: "REALISE", tag: "Strategy + Execution + Value" },
];

const principles = [
  {
    h: "Business First",
    tag: "Keep the business moving, without keeping the founder in everything.",
    desc: "We make day-to-day operations more agile, integrated and scalable, giving founders the freedom to focus on growth rather than running every detail of the business.",
  },
  {
    h: "Root Cause, Not Surface Fixes",
    tag: "Solve what is actually holding the business back.",
    desc: "We look beyond the immediate problem to understand its root cause, cross-functional impact and wider business implications—so solutions address today’s challenge without creating tomorrow’s.",
  },
  {
    h: "Human + AI + Automation",
    tag: "Use the right combination for the right problem.",
    desc: "We bring together human judgement, AI and intelligent automation in the proportions that create the greatest value—automating what should be automated, applying AI where it adds value and keeping humans where judgement, creativity and empathy matter.",
  },
  {
    h: "Agnostic by Design",
    tag: "No predefined answer. No forced technology.",
    desc: "We are industry, technology and function agnostic—starting with the business need, then designing the solution around the company’s context, capabilities and stage of growth.",
  },
  {
    h: "Strategy to Value",
    tag: "We don’t stop at the recommendation.",
    desc: "We work alongside organisations to design, implement and measure solutions—turning strategy into execution and execution into measurable business value.",
  },
];

export default function LanternPage() {
  return (
    <section id="lantern-advantage" className="reveal">
      <div className="si">
        <h1 className="sl">Lantern</h1>
        <p className="st" style={{ maxWidth: '760px' }}>The Lantern Advantage</p>
        <p className="la-intro">
          AI isn’t the answer to every business problem. Lantern works at the
          intersection of Human Judgement, AI and Intelligent Automation,
          helping organisations determine what should be automated, where AI
          can create the greatest value and where human judgement matters
          most. We bring the right combination together to solve the business
          problem, deliver measurable outcomes and build the capabilities
          needed for what comes next.
        </p>

        <LanternFramework framework={framework} principles={principles} />

        <div className="la-close">
          <h2>The right solution isn’t always the one you came looking for.</h2>
          <p>
            We work with companies to understand the challenge behind the
            requirement, uncover opportunities for greater impact and build
            solutions that work for the business today while creating a
            stronger foundation for tomorrow. Over time, we aim to become the
            partner companies turn to—not for a predefined answer, but for the
            right answer.
          </p>
        </div>
      </div>
    </section>
  );
}
