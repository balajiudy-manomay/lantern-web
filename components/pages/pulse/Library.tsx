"use client";

import { useState } from "react";
import { prefersReducedMotion } from "../why-lantern/svg-anim";

type Kind = "all" | "insights" | "cases" | "articles";

const TABS: { k: Kind; label: string }[] = [
  { k: "all", label: "All" },
  { k: "insights", label: "Insights" },
  { k: "cases", label: "Case studies" },
  { k: "articles", label: "Articles" },
];

// Placeholder line widths, as in the HTML, so the skeletons don't look identical
const INSIGHT_SK = ["62%", "48%", "70%"];
const CASE_SK = [["70%", "55%", "64%"], ["60%", "74%", "50%"], ["66%", "52%", "72%"]];
const ARTICLE_SK = ["80%", "66%", "74%", "58%"];
const CASE_ROWS = ["The challenge", "Our approach", "The outcome"];

/** "Browse the library" button in the opening; scrolls down to the library. */
export function BrowseButton() {
  return (
    <button
      className="btn btn-gold"
      type="button"
      onClick={() => document.getElementById("library")?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" })}
    >
      Browse the library
    </button>
  );
}

/** Library tabs and the insight, case-study and article groups (placeholders until content is published). */
export default function Library() {
  const [k, setK] = useState<Kind>("all");
  const shown = (kind: Kind) => k === "all" || k === kind;

  return (
    <>
      <div className="lib-tabs" role="group" aria-label="Filter the library">
        {TABS.map((t) => (
          <button key={t.k} className={`lib-tab${k === t.k ? " on" : ""}`} type="button" aria-pressed={k === t.k} onClick={() => setK(t.k)}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="lib-group" hidden={!shown("insights")}>
        <div className="lib-head"><h3>Insights</h3><p>Short, sharp perspectives on what is changing and what to do about it.</p></div>
        <div className="lib-cards">
          {INSIGHT_SK.map((w, i) => (
            <article key={i} className="lib-card">
              <div className="lib-img" aria-hidden="true"></div>
              <div className="lib-body">
                <div className="lib-meta"><span className="badge">Insight</span><span className="soon">Coming soon</span></div>
                <h4>Insight headline goes here</h4>
                <div className="sk" aria-hidden="true"><i></i><i></i><i style={{ width: w }}></i></div>
                <span className="lib-link">Read the insight</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="lib-group" hidden={!shown("cases")}>
        <div className="lib-head"><h3>Case studies</h3><p>How a challenge was understood, solved and measured.</p></div>
        <div className="lib-cards">
          {CASE_SK.map((ws, i) => (
            <article key={i} className="lib-card">
              <div className="lib-body">
                <div className="lib-meta"><span className="badge">Case study</span><span className="soon">Sector · Function</span></div>
                <h4>Client or project title goes here</h4>
                <div className="cs-rows" aria-hidden="true">
                  {CASE_ROWS.map((lab, r) => (
                    <div key={lab}><span className="lab">{lab}</span><div className="sk"><i></i><i style={{ width: ws[r] }}></i></div></div>
                  ))}
                </div>
                <span className="lib-link">Coming soon</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="lib-group" hidden={!shown("articles")}>
        <div className="lib-head"><h3>Articles</h3><p>Longer reads from the Lantern team and partners.</p></div>
        <div className="art-list">
          {ARTICLE_SK.map((w, i) => (
            <article key={i} className="art">
              <span className="when">Date to be added</span>
              <span className="badge" style={{ justifySelf: "start" }}>Category</span>
              <div><h4>Article title goes here</h4><div className="sk" aria-hidden="true" style={{ marginTop: 10 }}><i style={{ width: w }}></i></div></div>
              <span className="lib-link">Coming soon</span>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
