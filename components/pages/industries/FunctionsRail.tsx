"use client";

import { useState } from "react";

export default function FunctionsRail({ functions }: { functions: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="fx-wrap" role="tablist" aria-label="Business functions">
      {functions.map((f, i) => (
        <button
          key={f}
          type="button"
          role="tab"
          aria-selected={i === active}
          className={`fx-pill${i === active ? " active" : ""}`}
          onClick={() => setActive(i)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
