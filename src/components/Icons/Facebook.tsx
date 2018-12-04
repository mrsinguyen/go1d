import * as React from "react";

const Facebook: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M6.772 1.672A4 4 0 0 1 9.6.5h2.1a.5.5 0 0 1 .5.5v2.8a.5.5 0 0 1-.5.5H9.6a.2.2 0 0 0-.2.2v1.6h2.3a.5.5 0 0 1 .485.621l-.7 2.8A.5.5 0 0 1 11 9.9H9.4V15a.5.5 0 0 1-.5.5H6.1a.5.5 0 0 1-.5-.5V9.9H4a.5.5 0 0 1-.5-.5V6.6a.5.5 0 0 1 .5-.5h1.6V4.5a4 4 0 0 1 1.172-2.828zM9.6 1.5a3 3 0 0 0-3 3v2.1a.5.5 0 0 1-.5.5H4.5v1.8h1.6a.5.5 0 0 1 .5.5v5.1h1.8V9.4a.5.5 0 0 1 .5-.5h1.71l.45-1.8H8.9a.5.5 0 0 1-.5-.5V4.5a1.2 1.2 0 0 1 1.2-1.2h1.6V1.5H9.6z"
      clipRule="evenodd"
    />
  </svg>
);

Facebook.displayName = "IconFacebook";

export default Facebook;
