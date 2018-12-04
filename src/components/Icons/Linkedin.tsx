import * as React from "react";

const Linkedin: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M10.8 6.2a3.7 3.7 0 0 0-3.7 3.7v4.4h1.8V9.9a1.9 1.9 0 0 1 3.8 0v4.4h1.8V9.9a3.7 3.7 0 0 0-3.7-3.7zm0-1a4.7 4.7 0 0 0-4.7 4.7v4.9a.5.5 0 0 0 .5.5h2.8a.5.5 0 0 0 .5-.5V9.9a.9.9 0 0 1 1.8 0v4.9a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 .5-.5V9.9a4.7 4.7 0 0 0-4.7-4.7zM.5 6.4a.5.5 0 0 1 .5-.5h2.8a.5.5 0 0 1 .5.5v8.4a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V6.4zm1 .5v7.4h1.8V6.9H1.5zM2.4 2a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8zm-1.9.9a1.9 1.9 0 1 1 3.8 0 1.9 1.9 0 0 1-3.8 0z"
      clipRule="evenodd"
    />
  </svg>
);

Linkedin.displayName = "IconLinkedin";

export default Linkedin;
