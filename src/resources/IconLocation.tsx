import React from "react";

const IconLocation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M20 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
        fill="#231F20"
      />
      <path
        d="M20 18H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1"
        fill="#F0CB17"
      />
      <path
        d="M6 12c0 2 1 2 2 2s2 0 2-2-1-2-2-2-2 0-2 2m-1 0c0-2 .998-3 3-3 1.998 0 3 1 3 3s-1 3-3 3-3-1-3-3M12 11h1v.5s.847-.931 2-.25l-.5.757c-.4-.325-1.5-.387-1.5.993v2h-1v-4zM17 9h1v2h1v1h-.993L18 13c.007.964.007.964 1 1v1h-1s-1 0-1-1v-2h-1v-1l1.014.008L17 9z"
        fill="#000"
      />
    </g>
  </svg>
);

export default IconLocation;
