import React, { SVGProps } from "react";

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      version="1.1"
      aria-hidden="false"
    >
      <path d="M3 16h18v2H3v-2ZM3 6v2h18V6H3Zm0 7h18v-2H3v2Z" />
    </svg>
  );
};

export default HamburgerIcon;
