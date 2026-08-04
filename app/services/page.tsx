import UserFilledIcon from "@/components/icons/user-filled";
import ServiceGrid from "../../components/pages/services/ServiceGrid";
import AiIcon from "@/components/icons/ai-icon";
import SettingsIcon from "@/components/icons/settings-icon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting Services | Lantern",

  description:
    "Explore Lantern's technology consulting services span across industries leveraged by AI, for  strategy, governance, automation, and transformation.",

  keywords: [
    "AI Consulting",
    "Automation Services",
    "Business Transformation",
    "AI Strategy",
    "Data Intelligence",
    "Enterprise AI",
    "Digital Transformation",
    "AI Governance",
    "Technology Consulting",
    "Process Automation",
    "Decision Intelligence",
    "Transformation Services",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Technology Consulting Services | Lantern",
    description:
      "Explore Lantern's technology consulting services span across industries leveraged by AI, for  strategy, governance, automation, and transformation.",
    url: "/services",
  },

  twitter: {
    title: "Technology Consulting Services | Lantern",
    description:
      "Explore Lantern's technology consulting services span across industries leveraged by AI, for  strategy, governance, automation, and transformation.",
  },
};

export default function ServicesPage() {
  return (
    <section id="services" className="reveal">
      <div className="si">
        <h1 className="sl">What We Do</h1>
        <p className="st">The questions our clients bring us.</p>

        <h2 className="sr-only">Our Services</h2>
        <ServiceGrid />

        <h2 className="sl" style={{ marginTop: '1.5rem' }}>How the layers combine</h2>
        <p className="st">Human + AI + Automation = Value</p>
        <div className="tw">
          <table className="vt">
            <thead>
              <tr>
                <th>Service</th>
                <th><span className="flex flex-row gap-2"><UserFilledIcon size={14} /> <span>Human</span></span></th>
                <th className="ca"><span className="flex flex-row gap-2"><AiIcon size={16} /> <span>AI</span></span></th>
                <th><span className="flex flex-row gap-2"><SettingsIcon size={16} /> <span>Automation</span></span></th>
                <th>Value Delivered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data &amp; Intelligence</td>
                <td>Direction, storytelling</td>
                <td>Pattern detection</td>
                <td>Pipeline automation</td>
                <td>Decisions powered by truth, not gut feel</td>
              </tr>
              <tr>
                <td>AI Strategy &amp; Roadmap</td>
                <td>Vision, sequencing</td>
                <td>Benchmarking, analysis</td>
                <td>Report automation</td>
                <td>A strategy the board can fund and the team can execute</td>
              </tr>
              <tr>
                <td>Automation &amp; Ops</td>
                <td>Exception handling</td>
                <td>Decision support</td>
                <td>Process execution</td>
                <td>Capacity unlocked. Cost reduced. People freed.</td>
              </tr>
              <tr>
                <td>QA &amp; Assurance</td>
                <td>Final review, context</td>
                <td>Error detection</td>
                <td>Continuous monitoring</td>
                <td>Zero surprises. Every time.</td>
              </tr>
              <tr>
                <td>AI Governance &amp; Trust</td>
                <td>Policy, accountability</td>
                <td>Explainability engine</td>
                <td>Audit log automation</td>
                <td>AI your regulators and your board can stand behind</td>
              </tr>
              <tr>
                <td>Transformation Consulting</td>
                <td>Strategy, change mgmt</td>
                <td>Scenario modelling</td>
                <td>Process redesign tools</td>
                <td>Change that outlasts the programme</td>
              </tr>
              <tr>
                <td>Managed Operations</td>
                <td>Oversight, judgement</td>
                <td>Anomaly detection</td>
                <td>Workflow execution</td>
                <td>Your operations. Our obsession.</td>
              </tr>
              <tr>
                <td>Third Party Solutions</td>
                <td>Stakeholder management</td>
                <td>Configuration AI</td>
                <td>Integration automation</td>
                <td>Outcomes delivered. Not just systems installed.</td>
              </tr>
              <tr>
                <td>People &amp; Change</td>
                <td>Cultural alignment</td>
                <td>Adoption analytics</td>
                <td>Training automation</td>
                <td>Technology only works when people actually use it</td>
              </tr>
              <tr>
                <td>BPO / KPO Transformation</td>
                <td>Judgment, escalation handling</td>
                <td>Quality analytics, decision support</td>
                <td>Workflow execution, document processing</td>
                <td>Higher margins, scalable delivery, and consistent service quality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
