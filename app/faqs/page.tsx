import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/pages/faqs/FaqAccordion";
import "./faqs.css";

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

// #1 from the client's FAQ sheet is intentionally left out of FAQS —
// noted there as "Let it be a placeholder for now. And hide." Keeping it
// here, unrendered, so it's easy to bring in once it's ready to publish.
// const hiddenFaqItem = {
//   q: "What additional value does Lantern provide beyond what I could get from tools like ChatGPT or Claude?",
//   a: "AI tools can provide answers. Lantern works to understand the problem behind the question. We look across the business to identify root causes, interdependencies and the highest-impact solution — not just the immediate requirement. We then bring the right combination of human expertise, AI and automation and stay involved through execution and value realisation.",
// };

// Questions from the FAQs view of Lantern_Website_V4_Final.html
const FAQS: Faq[] = [
  {
    cat: "about",
    q: "What does Lantern do?",
    a: "Lantern is a business and technology consulting firm. We provide consulting, technical solutions such as AI and automation, and enterprise transformation services across sectors. We work at the intersection of human judgement, AI and intelligent automation.",
  },
  {
    cat: "about",
    q: "Who does Lantern work with?",
    a: "Businesses that have built something from the ground up and are ambitious about what comes next. Many are founder-led and growing quickly while their ways of working are still evolving.",
  },
  {
    cat: "about",
    q: "Do you work only in certain industries?",
    a: "No. Our focus isn’t limited to a specific industry. We are industry, technology and function agnostic, so we start with the business need rather than a predefined answer. The Industries page shows some of the sectors we work with.",
  },
  {
    cat: "about",
    q: "Which functions do you work on?",
    a: "All of them, from core functions such as operations, sales and marketing and customer experience, to business-support functions such as strategy, finance, HR, technology and data. The challenges that limit growth rarely sit neatly in one function, so our work often crosses several.",
  },
  {
    cat: "working",
    q: "Do you only advise, or do you also implement?",
    a: "Both. We don’t stop at the recommendation. We work alongside you to design, implement and measure the solution, so strategy turns into execution and execution into measurable business value. Where it makes sense, we can also run operations for you through our managed operations service.",
  },
  {
    cat: "working",
    q: "We already know what we want built. Can you just build it?",
    a: "We can build it. We usually begin by understanding the challenge behind the request, because the right solution isn’t always the one you came looking for. Sometimes that conversation confirms the original plan. Sometimes it points to a bigger opportunity.",
  },
  {
    cat: "working",
    q: "How does an engagement work?",
    a: "Every engagement follows the same path: understand the business, diagnose the root cause, design the right combination of human judgement, AI and automation, implement it, and realise measurable value. The details change with the challenge. The way of working does not.",
  },
  {
    cat: "working",
    q: "How do you make sure the investment pays off?",
    a: "Work is complete only when it creates the outcomes that move your business forward. We align initiatives with business priorities, set clear outcomes, measure results, and support adoption through change management so the changes last.",
  },
  {
    cat: "working",
    q: "How do we get started?",
    a: "Visit the Cocreate page and tell us about the challenge you are facing. We will talk it through with you and help you understand what is really behind it.", link: { href: "/contact", label: "Go to the Cocreate page" },
  },
  {
    cat: "approach",
    q: "Is AI the answer to every problem?",
    a: "No. We help you decide what should be automated, where AI can create the greatest value and where human judgement matters most. The right answer is usually a combination, in the right proportions.",
  },
  {
    cat: "approach",
    q: "How is Lantern different from a typical consulting firm?",
    a: "Many firms are known for the services they sell. We want to be known for how we solve problems: starting with the business challenge, finding the root cause, designing for your context and stage of growth, and staying through implementation until the result is real.", link: { href: "/why-lantern", label: "Read about our approach" },
  },
];

export default function FaqsPage() {
  return (
    <div className="v4">
      <FaqAccordion items={FAQS}>
        <aside className="faq-aside">
          <span className="lab" style={{ color: "var(--gold-light)" }}>Still curious?</span>
          <h2>Ask us directly.</h2>
          <p>Tell us what you are working through and we will take it from there.</p>
          <div><Link className="btn btn-gold" href="/contact">Connect with us</Link></div>
        </aside>
      </FaqAccordion>
    </div>
  );
}
