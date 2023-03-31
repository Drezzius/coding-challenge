import React from "react";

const IconSwitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      stroke="#666"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 10v10M8 4v10M4 8l4-4 4 4M12 16l4 4 4-4" />
    </g>
  </svg>
);

export default IconSwitch;
