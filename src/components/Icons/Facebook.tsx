import * as React from "react";

const Facebook: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M11.7 1H9.6a3.5 3.5 0 0 0-3.5 3.5v2.1H4v2.8h2.1V15h2.8V9.4H11l.7-2.8H8.9V4.5a.7.7 0 0 1 .7-.7h2.1V1z" />
  </svg>
);

Facebook.displayName = "IconFacebook";

export default Facebook;
