"use client";

import { useState } from "react";

type Circle = "human" | "ai" | "auto";

const CHOICES: { c: Circle; label: string }[] = [
  { c: "auto", label: "What should be automated" },
  { c: "ai", label: "Where AI can create the greatest value" },
  { c: "human", label: "Where human judgement matters most" },
];

/** Opening of Why Lantern: hovering a choice lights up its circle in the Venn diagram, and vice versa. */
export default function BalanceVenn() {
  const [on, setOn] = useState<Circle | null>(null);
  const cc = (c: Circle) => `c${on === c ? " on" : ""}`;
  const tc = (c: Circle, base: string) => `${base}${on === c ? " on" : ""}`;

  return (
    <div className="wrap svc-grid">
      <div>
        <span className="eyebrow">Why Lantern</span>
        <h1>The right <span className="hl">balance</span> of people, AI and automation.</h1>
        <p className="lede">
          Lantern works at the intersection of Human Judgement, AI and Intelligent Automation, helping organisations
          determine what should be automated, where AI can create the greatest value and where human judgement matters
          most. We bring the right combination together to solve the business problem, deliver measurable outcomes and
          build the capabilities needed for what comes next.
        </p>
        <div className="decide">
          {CHOICES.map(({ c, label }) => (
            <button
              key={c}
              type="button"
              className={on === c ? "on" : undefined}
              onMouseEnter={() => setOn(c)}
              onFocus={() => setOn(c)}
              onClick={() => setOn(c)}
            >
              <i></i>{label}
            </button>
          ))}
        </div>
      </div>
      <figure className="venn-fig">
        <svg
          className={`venn${on ? " has-on" : ""}`}
          viewBox="0 0 400 350"
          role="img"
          aria-label="Three overlapping circles labelled Human, AI and Intelligent Automation, with Lantern at the centre where they meet"
        >
          <defs>
            <linearGradient id="vg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E7AA51" /><stop offset=".5" stopColor="#FFE499" /><stop offset="1" stopColor="#E5C971" /></linearGradient>
            <clipPath id="vClipH"><circle cx="145" cy="125" r="100" /></clipPath>
            <clipPath id="vClipA"><circle cx="255" cy="125" r="100" /></clipPath>
          </defs>
          <circle className={cc("human")} cx="145" cy="125" r="100" onMouseEnter={() => setOn("human")} />
          <circle className={cc("ai")} cx="255" cy="125" r="100" onMouseEnter={() => setOn("ai")} />
          <circle className={cc("auto")} cx="200" cy="220" r="100" onMouseEnter={() => setOn("auto")} />
          <text className={tc("human", "v-title")} x="100" y="104" textAnchor="middle">Human</text>
          <text className={tc("human", "v-sub")} x="100" y="122" textAnchor="middle">Judgement</text>
          <text className={tc("human", "v-sub")} x="100" y="136" textAnchor="middle">and empathy</text>
          <text className={tc("ai", "v-title")} x="300" y="104" textAnchor="middle">AI</text>
          <text className={tc("ai", "v-sub")} x="300" y="122" textAnchor="middle">Insight</text>
          <text className={tc("ai", "v-sub")} x="300" y="136" textAnchor="middle">and scale</text>
          <text className={tc("auto", "v-title")} x="200" y="252" textAnchor="middle">Intelligent</text>
          <text className={tc("auto", "v-title")} x="200" y="270" textAnchor="middle">Automation</text>
          <text className={tc("auto", "v-sub")} x="200" y="288" textAnchor="middle">Speed and control</text>
          <g clipPath="url(#vClipH)"><g clipPath="url(#vClipA)"><circle className="v-mid" cx="200" cy="220" r="100" /></g></g>
          <text className="v-core" x="200" y="170" textAnchor="middle">Lantern</text>
        </svg>
        <figcaption className="venn-cap">The right proportions, not the most technology.</figcaption>
      </figure>
    </div>
  );
}
