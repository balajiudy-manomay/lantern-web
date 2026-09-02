import type { Metadata } from "next";
import FaqAccordion from "../../components/pages/faqs/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs | Lantern",

  description:
    "Answers to common questions about how Lantern works, who we work with, and how to start a conversation.",

  alternates: {
    canonical: "/faqs",
  },

  openGraph: {
    title: "FAQs | Lantern",
    description:
      "Answers to common questions about how Lantern works, who we work with, and how to start a conversation.",
    url: "/faqs",
  },

  twitter: {
    title: "FAQs | Lantern",
    description:
      "Answers to common questions about how Lantern works, who we work with, and how to start a conversation.",
  },
};

const faqItems = [
  {
    q: "What does Lantern actually do?",
    a: "We help companies that are ambitious about growth identify and overcome the operational, strategic and organisational challenges that stand in their way — combining human judgement, AI and intelligent automation to solve the problem, not just recommend a solution.",
  },
  {
    q: "How is this different from hiring a traditional consultancy?",
    a: "We don’t stop at the recommendation. We work alongside your team to design, implement and measure the solution, so strategy turns into execution and execution into measurable business value.",
  },
  {
    q: "Do we need an AI strategy before we talk to you?",
    a: "No. Many of the companies we work with start with a business constraint, not an AI mandate. We help you work out where AI, automation or simply a different operating model actually creates value — starting with the business need, not the technology.",
  },
  {
    q: "What size of company do you typically work with?",
    a: "We work with founder-built, ambitious companies that have outgrown the ways of working that got them here — from mid-sized businesses to larger organisations navigating a new stage of growth.",
  },
  {
    q: "Which industries do you work in?",
    a: "Technology & AI, Financial & Business Services, Healthcare & Life Sciences, Professional Services, Logistics & Operations and Government organisations — see the Industries page for more detail.",
  },
  {
    q: "How do we start a conversation with Lantern?",
    a: "Reach out through the Contact page. We’ll come back with a point of view on what we’re hearing, not a sales pitch.",
  },
];

export default function FaqsPage() {
  return (
    <section id="faqs" className="reveal justify-center">
      <div className="si" style={{ maxWidth: '780px' }}>
        <h1 className="sl">FAQs</h1>
        <p className="st">Questions we hear most often.</p>
        <p className="fx-note" style={{ marginTop: '-.5rem' }}>Placeholder content &middot; pending the full FAQs sheet</p>
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
