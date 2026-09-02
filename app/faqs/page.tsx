import type { Metadata } from "next";
import FaqAccordion from "../../components/pages/faqs/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs | Lantern",

  description:
    "Answers to common questions about how Lantern works and who we work with.",

  alternates: {
    canonical: "/faqs",
  },

  openGraph: {
    title: "FAQs | Lantern",
    description:
      "Answers to common questions about how Lantern works and who we work with.",
    url: "/faqs",
  },

  twitter: {
    title: "FAQs | Lantern",
    description:
      "Answers to common questions about how Lantern works and who we work with.",
  },
};

// #1 from the client's FAQ sheet is intentionally left out of faqItems —
// noted there as "Let it be a placeholder for now. And hide." Keeping it
// here, unrendered, so it's easy to bring in once it's ready to publish.
// const hiddenFaqItem = {
//   q: "What additional value does Lantern provide beyond what I could get from tools like ChatGPT or Claude?",
//   a: "AI tools can provide answers. Lantern works to understand the problem behind the question. We look across the business to identify root causes, interdependencies and the highest-impact solution — not just the immediate requirement. We then bring the right combination of human expertise, AI and automation and stay involved through execution and value realisation.",
// };

const faqItems = [
  {
    q: "My company is not a startup or a brand new company. Would Lantern help us resolve the business challenges?",
    a: "Absolutely. Lantern works with founder-led companies at different stages of their journey — not just newly established businesses. If your company is ambitious about growth and looking to move into its next stage, we would be glad to help you get there.",
  },
  {
    q: "Does Lantern only work with founder-led companies?",
    a: "Founder-led companies are our primary focus, but they are not our only focus. We work with growth-oriented businesses that are looking to overcome the constraints in their current ways of working and move towards their next stage of growth.",
  },
  {
    q: "How does Lantern approach a business problem?",
    a: "We start with the business problem, not a predefined service. We look beyond the immediate challenge to understand its root causes, the interdependencies across people, processes, technology and functions, and the broader business impact. We then design, implement and measure the solution that best fits the business and its stage of growth.",
  },
  {
    q: "Do I need to know what solution I need before approaching Lantern?",
    a: "Not at all. Bring us the business challenge — not necessarily the solution. We work with you to understand what is really holding the business back, challenge the assumptions behind the requirement and identify the approach that can create the greatest business value.",
  },
  {
    q: "Can Lantern work with our existing technology and systems, or do we need to replace them?",
    a: "We don't believe in replacing technology for the sake of replacing it. We assess your existing systems, capabilities and constraints first, and work with what already makes sense. Where change is needed, we recommend it based on the business value it can create — not on a preference for a particular technology or platform.",
  },
];

export default function FaqsPage() {
  return (
    <section id="faqs" className="reveal justify-center">
      <div className="si" style={{ maxWidth: '780px' }}>
        <h1 className="sl">FAQs</h1>
        <p className="st">Questions we hear most often.</p>
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
