import * as React from "react";

const Ellipsis: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M9.806 7.806a1.805 1.805 0 1 1-3.612 0 1.805 1.805 0 1 1 3.612 0zM13.194 6a1.805 1.805 0 1 0 0 3.613 1.805 1.805 0 1 0 0-3.613zM2.806 6a1.805 1.805 0 1 0 0 3.613 1.805 1.805 0 1 0 0-3.613z" />
  </svg>
);

Ellipsis.displayName = "IconEllipsis";

export default Ellipsis;
