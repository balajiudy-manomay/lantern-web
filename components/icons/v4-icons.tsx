// Line icons from Lantern_Website_V4_Final.html, drawn on a 40x40 grid. Styled by the `.gi` class in app/v4.css.
import type { ReactNode } from "react";

const PATHS = {
  "i-db": <><ellipse cx="20" cy="10" rx="12" ry="4" /><path d="M8 10v20a12 4 0 0 0 24 0V10" /><path d="M8 20a12 4 0 0 0 24 0" /></>,
  "i-compass": <><circle cx="20" cy="20" r="14" /><path d="M26 14l-4 10-10 2 4-10z" /></>,
  "i-shield": <><path d="M20 5l13 5v10c0 8-6 13-13 16C13 33 7 28 7 20V10z" /><path d="M14 20l4 4 8-9" /></>,
  "i-gear": <><circle cx="20" cy="20" r="5" /><circle cx="20" cy="20" r="11" strokeDasharray="4.2 3.1" strokeWidth="4" /></>,
  "i-check": <><circle cx="20" cy="20" r="14" /><path d="M13 20l5 5 9-10" /></>,
  "i-cycle": <path d="M8 20a12 12 0 0 1 21-8M32 8v6h-6M32 20a12 12 0 0 1-21 8M8 32v-6h6" />,
  "i-trend": <><path d="M6 30l9-9 6 6 13-14" /><path d="M26 13h8v8" /></>,
  "i-plug": <><path d="M14 6v8M26 6v8" /><rect x="9" y="14" width="22" height="10" rx="2" /><path d="M20 24v6a5 5 0 0 0 5 5" /></>,
  "i-people": <><circle cx="14" cy="14" r="5" /><path d="M5 32a9 9 0 0 1 18 0" /><circle cx="28" cy="16" r="4" /><path d="M26 25a8 8 0 0 1 10 7" /></>,
  "i-search": <><circle cx="18" cy="18" r="10" /><path d="M26 26l9 9" /></>,
  "i-flag": <path d="M10 35V6M10 8h20l-4 6 4 6H10" />,
  "i-chip": <><rect x="10" y="10" width="20" height="20" rx="2" /><rect x="16" y="16" width="8" height="8" /><path d="M15 4v6M25 4v6M15 30v6M25 30v6M4 15h6M4 25h6M30 15h6M30 25h6" /></>,
  "i-org": <><rect x="14" y="5" width="12" height="8" rx="1" /><rect x="4" y="27" width="12" height="8" rx="1" /><rect x="24" y="27" width="12" height="8" rx="1" /><path d="M20 13v7M10 27v-7h20v7" /></>,
} satisfies Record<string, ReactNode>;

export type IconId = keyof typeof PATHS;

export function Icon({ id, className = "gi" }: { id: IconId; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      {PATHS[id]}
    </svg>
  );
}
