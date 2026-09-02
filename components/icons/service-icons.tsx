import React from "react";

export interface ServiceIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

type IconFC = React.FC<ServiceIconProps>;

const base = (
  size: number | string,
  color: string,
  width: number | string | undefined,
  height: number | string | undefined
) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: width ?? size,
  height: height ?? size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

// 01 — Data & Intelligence: stacked database cylinders
export const DataIntelligenceIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <ellipse cx="12" cy="5" rx="7" ry="2.6" />
    <path d="M5 5v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V5" />
    <path d="M5 11v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" />
  </svg>
);

// 02 — AI Strategy & Roadmap: target with an arrow on course
export const AiStrategyIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <path d="M20.5 3.5 14 10" />
    <path d="M20.5 3.5v4.5" />
    <path d="M20.5 3.5H16" />
  </svg>
);

// 03 — Automation & Operations: gear outline
export const AutomationOpsIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.7 6.3l-1.7 1.7M8 16l-1.7 1.7M17.7 17.7 16 16M8 8 6.3 6.3" />
  </svg>
);

// 04 — QA & Assurance: shield with a check
export const QaAssuranceIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <path d="M12 3.5 5.5 6v5.5c0 4.2 2.8 7.4 6.5 9 3.7-1.6 6.5-4.8 6.5-9V6L12 3.5Z" />
    <path d="M9 12.2l2.1 2.1L15.3 10" />
  </svg>
);

// 05 — AI Governance & Trust: shield with a lock
export const AiGovernanceIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <path d="M12 3.5 5.5 6v5.5c0 4.2 2.8 7.4 6.5 9 3.7-1.6 6.5-4.8 6.5-9V6L12 3.5Z" />
    <rect x="9.6" y="11" width="4.8" height="3.6" rx="0.6" />
    <path d="M10.3 11V9.6a1.7 1.7 0 0 1 3.4 0V11" />
  </svg>
);

// 06 — Transformation Consulting: cycle / refresh loop
export const TransformationIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5" />
    <path d="M17.1 3.5v3.6h-3.6" />
    <path d="M19.5 12a7.5 7.5 0 0 1-12.6 5.5" />
    <path d="M6.9 20.5v-3.6h3.6" />
  </svg>
);

// 07 — Managed Operations: control panel sliders
export const ManagedOperationsIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    <circle cx="9" cy="6.5" r="1.8" fill={color} stroke="none" />
    <circle cx="16" cy="12" r="1.8" fill={color} stroke="none" />
    <circle cx="10.5" cy="17.5" r="1.8" fill={color} stroke="none" />
  </svg>
);

// 08 — Third Party Solutions: puzzle / integration piece
export const ThirdPartyIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <path d="M9 4.5h3.2a1.4 1.4 0 0 1 1.4 1.6 1.4 1.4 0 0 0 2.8 0V5.5h1.6A1.5 1.5 0 0 1 19.5 7v2.6h-1.2a1.9 1.9 0 0 0 0 3.8h1.2V16a1.5 1.5 0 0 1-1.5 1.5h-2.6v-1.2a1.9 1.9 0 0 0-3.8 0v1.2H8a1.5 1.5 0 0 1-1.5-1.5v-2.6h1.2a1.9 1.9 0 0 0 0-3.8H6.5V6A1.5 1.5 0 0 1 8 4.5H9Z" />
  </svg>
);

// 09 — People & Change: two people with a change arrow
export const PeopleChangeIcon: IconFC = ({ size = 24, color = "currentColor", width, height, ...props }) => (
  <svg {...base(size, color, width, height)} {...props}>
    <circle cx="8.5" cy="7.5" r="2.3" />
    <path d="M4 18.5v-1.2A3.8 3.8 0 0 1 7.8 13.5h1.4a3.8 3.8 0 0 1 3.4 2.1" />
    <circle cx="16.5" cy="7.5" r="2.3" />
    <path d="M13.6 15.6a3.8 3.8 0 0 1 2.9-1.3 3.8 3.8 0 0 1 3.8 3.8v.4" />
    <path d="M11 20h6M17 20l-2-2m2 2-2 2" />
  </svg>
);

export const serviceIcons: Record<string, IconFC> = {
  "01": DataIntelligenceIcon,
  "02": AiStrategyIcon,
  "03": AutomationOpsIcon,
  "04": QaAssuranceIcon,
  "05": AiGovernanceIcon,
  "06": TransformationIcon,
  "07": ManagedOperationsIcon,
  "08": ThirdPartyIcon,
  "09": PeopleChangeIcon,
};
