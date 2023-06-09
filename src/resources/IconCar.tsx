import React from "react";

const IconCar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <circle id="29ulmuz7na" cx="12" cy="12" r="12" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="61vz0riezb" fill="#fff">
        <use xlinkHref="#29ulmuz7na" />
      </mask>
      <use fill="#000" xlinkHref="#29ulmuz7na" />
      <g mask="url(#61vz0riezb)">
        <path d="M15.124 8.218c-.234-.457-.475-1.011-1.011-1.011H8.045c-.506 0-.799.622-1.011 1.011l-1.011 2.023h10.112l-1.011-2.023z" />
        <path
          d="M6.011 16.308s0 1.011 1.012 1.011c1.01 0 1.01-1.01 1.01-1.01v-1.012H6.012v1.011zM16.124 16.308s0 1.011 1.011 1.011 1.011-1.01 1.011-1.01v-1.012h-2.022v1.011zM18 10.196l-1.5-3c-.296-.452-.5-1-1.468-1H9c-1 0-1.25.516-1.5 1l-1.5 3s-1 0-1 1v2c0 1 1 1 1 1h12s1 0 1-1v-2c0-1-1-1-1-1zm-10-2c.21-.385.5-1 1-1h6c.531 0 .77.548 1 1l1 2H7l1-2zm-1 5a1 1 0 1 1 0-2.001 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2.001 1 1 0 0 1 0 2z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </g>
  </svg>
);

export default IconCar;
