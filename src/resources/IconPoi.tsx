import React from "react";

const IconPoi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 2v19H5v1h6v-1H9v-9l10-4.001L9 4V2z"
      fill="#666"
      fillRule="evenodd"
    />
  </svg>
);

export default IconPoi;
