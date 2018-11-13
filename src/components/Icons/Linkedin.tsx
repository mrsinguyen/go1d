import * as React from "react";

const Linkedin: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M10.8 5.7A4.2 4.2 0 0 1 15 9.9v4.9h-2.8V9.9a1.4 1.4 0 1 0-2.8 0v4.9H6.6V9.9a4.2 4.2 0 0 1 4.2-4.2zM1 6.4h2.8v8.4H1V6.4zm1.4-2.1a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8z" />
  </svg>
);

Linkedin.displayName = "IconLinkedin";

export default Linkedin;
