import * as React from "react";

const BlockQuote: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.4}
    clipRule="evenodd"
    {...props}
  >
    <path
      fillRule="nonzero"
      d="M10.047 2.58l-.235 4.594h-.945L8.625 2.58h1.422zm-2.68 0l-.226 4.594h-.946L5.953 2.58h1.414z"
    />
  </svg>
);

BlockQuote.displayName = "IconBlockQuote";

export default BlockQuote;
