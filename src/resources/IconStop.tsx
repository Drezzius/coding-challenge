import React from "react";

const IconStop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M12 2c5.522 0 10 4.477 10 10 0 5.522-4.478 10-10 10-5.523 0-10-4.478-10-10C2 6.477 6.477 2 12 2"
        fill="#289560"
      />
      <path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16" fill="#EFD522" />
      <path fill="#289560" d="M8 17V7h2v4h4V7h2v10h-2v-4h-4v4z" />
    </g>
  </svg>
);

export default IconStop;
