import React from "react";

const IconHamburgerMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="auto"
    height="34px"
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default IconHamburgerMenu;
