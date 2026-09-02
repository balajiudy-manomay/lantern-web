"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <div key={item.q} className={`faq-item${open ? " open" : ""}`}>
            <button
              className="faq-q"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{open ? "−" : "+"}</span>
            </button>
            <div className="faq-a">
              <div className="faq-a-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
