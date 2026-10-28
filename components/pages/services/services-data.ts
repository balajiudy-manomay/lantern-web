// Services content, taken verbatim from Lantern_Website_V4_Final.html.
import type { IconId } from "../../icons/v4-icons";

export interface Service {
  n: number;
  icon: IconId;
  name: string;
  /** The question on the card, as shown (with curly quotes) */
  q: string;
  d: string;
  go: string;
  prob: string;
  how: string;
  outs: string[];
}

export interface Layer {
  icon: IconId;
  name: string;
  human: string;
  ai: string;
  auto: string;
  value: string;
}

export const SERVICES: Service[] = [
  {
    "n": 1,
    "icon": "i-db",
    "name": "Data & Intelligence",
    "q": "“Still running your business on spreadsheets and email threads?”",
    "d": "From scattered data to a single source of truth. Data engineering, analytics, dashboards, and AI readiness.",
    "go": "See how we fix this",
    "prob": "Most organisations are data rich and insight poor. Reports pile up but don’t drive action.",
    "how": "We bring together the data your business needs, turn it into meaningful insights and place them where your teams need them to act.",
    "outs": [
      "Real time insights for better decision making",
      "Analytics aligned to strategic priorities",
      "One view across all your functions, no fragmented reports",
      "Trusted data with a strong governance foundation"
    ]
  },
  {
    "n": 2,
    "icon": "i-compass",
    "name": "AI Strategy & Roadmap",
    "q": "“AI is everywhere. But which AI investments will truly drive revenue, reduce costs, and improve your bottom line?”",
    "d": "From confusion to clarity. We map where AI can deliver real value, sequence the steps, and build the business case.",
    "go": "Start here",
    "prob": "You’ve seen AI demos, but nothing has actually changed in your operations.",
    "how": "From confusion to clarity. We help you identify where AI can create value, where it makes sense to invest and help you turn those opportunities into business",
    "outs": [
      "AI strategy based on your current and future goals",
      "Clear prioritisation of use cases",
      "Responsible AI governance from day one",
      "AI investments realised through improved business outcomes"
    ]
  },
  {
    "n": 3,
    "icon": "i-gear",
    "name": "Automation & Operations",
    "q": "“Too many people doing the same thing manually, every single day?”",
    "d": "Remove manual touchpoints. Automate the repeat. Scale without adding headcount.",
    "go": "Automate the repeat",
    "prob": "Your best people are stuck in repetitive tasks. Processes break every time someone goes on leave.",
    "how": "We analyse existing processes, identify inefficiencies, design and implement solutions using intelligent automation, low-code platforms, system integrations and workflow orchestration where they add the most value",
    "outs": [
      "Reduced manual processing time",
      "Processes that run with minimal manual intervention",
      "Teams freed up for higher value work",
      "Automation roadmap prioritized by ROI"
    ]
  },
  {
    "n": 4,
    "icon": "i-check",
    "name": "QA & Assurance",
    "q": "“Quality depends on who is doing the work, not how the work is designed?”",
    "d": "Real time quality monitoring, automated compliance checks and AI assisted exception detection before the client sees it.",
    "go": "Quality by design",
    "prob": "As volumes grow, maintaining consistent quality becomes harder. Issues are often discovered only after they have reached the client.",
    "how": "We build quality into the process with automated checks that detect issues to ensure only quality products and services reach your customers.",
    "outs": [
      "100% Quality Assurance",
      "Consistent quality throughout",
      "Errors caught before the client sees them",
      "Real time quality dashboards"
    ]
  },
  {
    "n": 5,
    "icon": "i-shield",
    "name": "AI Governance & Trust",
    "q": "“You are using AI but do not fully trust the output?”",
    "d": "Make AI decisions clear, controlled, and accountable.",
    "go": "AI you can trust",
    "prob": "AI may give you an answer, but you need to know why, whether it can be trusted, and whether you can defend it.",
    "how": "We build the controls around AI so every important decision can be explained, tracked, and reviewed.",
    "outs": [
      "Know why AI made a recommendation",
      "Trace decisions when something goes wrong",
      "Reduce compliance and regulatory risk",
      "Scale AI without losing control"
    ]
  },
  {
    "n": 6,
    "icon": "i-trend",
    "name": "Transformation Consulting",
    "q": "“You have been transforming for years but operations still feel the same?”",
    "d": "From where your organisation is today to where it needs to be next—redesigning how the business operates, enabling change and building the capabilities needed to sustain growth",
    "go": "Real transformation",
    "prob": "New systems were implemented. Old habits stayed. Millions spent, years lost, and the original problems still intact.",
    "how": "We start with outcomes, work backwards to the changes required, and design transformation sequenced for early value.",
    "outs": [
      "Targeted business outcomes achieved",
      "Productivity and efficiency gains",
      "Revenue or growth opportunities converted into results",
      "Improvements sustained beyond implementation"
    ]
  },
  {
    "n": 7,
    "icon": "i-cycle",
    "name": "Managed Operations",
    "q": "“You want to focus on growth but operations keep pulling you back?”",
    "d": "We take ownership of day-to-day operations, combining human expertise, AI and automation to deliver consistent performance and continuous improvement.",
    "go": "Hand over the running",
    "prob": "Hiring is hard. Retaining is harder. Operations cannot wait.",
    "how": "Lantern’s managed operations model gives you experienced, integrated teams that run your processes with automation, continuous improvement, and operational discipline built in.",
    "outs": [
      "Capacity gain without additional headcount",
      "Lower cost and effort of day-to-day operations",
      "Consistent service quality with improvement built in",
      "Leadership bandwidth freed for strategy"
    ]
  },
  {
    "n": 8,
    "icon": "i-plug",
    "name": "Third Party Solutions",
    "q": "“The vendor delivered the system. Who is delivering the outcomes?”",
    "d": "Implementation partner for third party platforms. We deliver outcomes, not just go lives.",
    "go": "Own the outcome",
    "prob": "Your third party platform is live but no one really knows how to use it.",
    "how": "We are the implementation partner who stays until outcomes arrive. We connect the platform to your business—not just to your technology environment.",
    "outs": [
      "A connected operating environment across systems and functions",
      "Faster realisation of the platform's intended value",
      "Smoother processes with fewer integration gaps",
      "Greater control over the platform's ongoing business value"
    ]
  },
  {
    "n": 9,
    "icon": "i-people",
    "name": "People & Change",
    "q": "“The best system in the market creates real value ONLY when your people adopt it and embrace new ways of working”",
    "d": "Technology can enable change, but people make it real. We help teams understand, adopt and embed new ways of working so the organisation can realise the value of the change.",
    "go": "Make it stick",
    "prob": "New systems are implemented, but adoption remains low and teams gradually return to familiar ways of working—leaving the expected value of the investment unrealised.",
    "how": "We embed change from the start, designing adoption journeys that respect how people actually work.",
    "outs": [
      "Higher adoption and utilisation of new systems",
      "Faster realisation of the intended business benefits",
      "Smoother transition with less operational disruption",
      "New ways of working that sustain over time"
    ]
  }
];

export const LAYERS: Layer[] = [
  {
    "icon": "i-db",
    "name": "Data & Intelligence",
    "human": "Direction, storytelling",
    "ai": "Pattern detection",
    "auto": "Pipeline automation",
    "value": "Decisions powered by truth, not gut feel"
  },
  {
    "icon": "i-compass",
    "name": "AI Strategy & Roadmap",
    "human": "Vision, sequencing",
    "ai": "Benchmarking, analysis",
    "auto": "Report automation",
    "value": "A strategy the board can fund and the team can execute"
  },
  {
    "icon": "i-gear",
    "name": "Automated Operations",
    "human": "Exception handling",
    "ai": "Decision support",
    "auto": "Process execution",
    "value": "Capacity unlocked. Cost reduced. People freed."
  },
  {
    "icon": "i-check",
    "name": "Quality & Assurance",
    "human": "Final review, context",
    "ai": "Error detection",
    "auto": "Continuous monitoring",
    "value": "Zero surprises. Every time."
  },
  {
    "icon": "i-shield",
    "name": "AI Governance & Trust",
    "human": "Policy, accountability",
    "ai": "Explainability engine",
    "auto": "Audit log automation",
    "value": "AI your regulators and your board can stand behind"
  },
  {
    "icon": "i-trend",
    "name": "Transformation Consulting",
    "human": "Strategy, change mgmt",
    "ai": "Scenario modelling",
    "auto": "Process redesign tools",
    "value": "Change that outlasts the programme"
  },
  {
    "icon": "i-plug",
    "name": "Third Party Solutions",
    "human": "Stakeholder management",
    "ai": "Configuration AI",
    "auto": "Integration automation",
    "value": "Outcomes delivered. Not just systems installed."
  },
  {
    "icon": "i-people",
    "name": "People & Change",
    "human": "Cultural alignment",
    "ai": "Adoption analytics",
    "auto": "Training automation",
    "value": "Increase adoption. Investments realized in business outcomes"
  },
  {
    "icon": "i-cycle",
    "name": "Managed Operations",
    "human": "Judgment, escalation handling",
    "ai": "Quality analytics, decision support",
    "auto": "Workflow execution, document processing",
    "value": "Higher margins, scalable delivery, and consistent service quality"
  }
];
