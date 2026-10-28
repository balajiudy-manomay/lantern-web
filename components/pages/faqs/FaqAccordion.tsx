"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

export type FaqCat = "about" | "working" | "approach";
export interface Faq { cat: FaqCat; q: string; a: string; link?: { href: string; label: string } }

const CATS: { k: FaqCat | "all"; label: string }[] = [
  { k: "all", label: "All" },
  { k: "about", label: "About Lantern" },
  { k: "working", label: "Working with us" },
  { k: "approach", label: "Our approach" },
];

/**
 * Search box, category filter and the question list.
 * `children` (the side panel) sits beside the list, as in the HTML.
 */
export default function FaqAccordion({ items, children }: { items: Faq[]; children?: ReactNode }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<FaqCat | "all">("all");
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));

  const q = query.toLowerCase().trim();
  const shown = items.map((f) => {
    const okC = cat === "all" || f.cat === cat;
    const text = [f.q, f.a, f.link?.label].join(" ").toLowerCase();
    return okC && (!q || text.includes(q));
  });
  const none = !shown.some(Boolean);

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  }

  return (
    <>
      <section className="faq-open">
        <div className="wrap">
          <span className="eyebrow">FAQs</span>
          <h1>Questions, answered.</h1>
          <p className="lede">What Lantern does, who we work with and how an engagement runs. Search for a topic, or browse by category.</p>
          <div className="faq-tools">
            <label className="srch">
              <span className="sr">Search the questions</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
              <input type="search" placeholder="Search the questions" autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)} />
            </label>
            <div className="faq-cats" role="group" aria-label="Filter by category">
              {CATS.map((c) => (
                <button key={c.k} className={`lib-tab faq-cat${cat === c.k ? " on" : ""}`} type="button" aria-pressed={cat === c.k} onClick={() => setCat(c.k)}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-sec">
        <div className="wrap faq-grid">
          <div>
            <div className="faq-list">
              {items.map((f, i) => (
                <div key={f.q} className={`faq${open.has(i) ? " open" : ""}`} hidden={!shown[i]}>
                  <button className="faq-q" type="button" aria-expanded={open.has(i)} aria-controls={`fa${i + 1}`} onClick={() => toggle(i)}>
                    <span>{f.q}</span><i aria-hidden="true"></i>
                  </button>
                  <div className="faq-a" id={`fa${i + 1}`}>
                    <div><p>{f.a}{f.link && <> <Link href={f.link.href}>{f.link.label}</Link>.</>}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="faq-empty" hidden={!none} aria-live="polite">No questions match your search. Try a different word, or ask us directly on the Cocreate page.</p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
