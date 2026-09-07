import React from "react";

export interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size}
      height={height ?? size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
};

export default ChevronDown;
