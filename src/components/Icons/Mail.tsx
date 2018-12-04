import * as React from "react";

const Mail: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M2.666 3.167A.837.837 0 0 0 1.833 4v8c0 .457.376.833.833.833h10.667a.837.837 0 0 0 .833-.833V4a.837.837 0 0 0-.833-.833H2.666zM.833 4c0-1.01.824-1.833 1.833-1.833h10.667c1.01 0 1.833.824 1.833 1.833v8c0 1.01-.824 1.833-1.833 1.833H2.666A1.837 1.837 0 0 1 .833 12V4z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M.923 3.713a.5.5 0 0 1 .697-.123L8 8.056l6.38-4.466a.5.5 0 1 1 .573.82L8.286 9.076a.5.5 0 0 1-.573 0L1.046 4.41a.5.5 0 0 1-.123-.697z"
      clipRule="evenodd"
    />
  </svg>
);

Mail.displayName = "IconMail";

export default Mail;
