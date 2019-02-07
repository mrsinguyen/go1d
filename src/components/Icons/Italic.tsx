import * as React from "react";

const Italic: React.SFC<React.SVGProps<SVGSVGElement>> = (
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
    <g fillRule="nonzero">
      <path d="M12.05 2.909c.504.049.608.939 0 .998a81.428 81.428 0 0 1-5.23 0c-.488-.047-.656-.935 0-.998a81.428 81.428 0 0 1 5.23 0zm-2.87 9.184c.488.047.656.935 0 .998a81.428 81.428 0 0 1-5.23 0c-.502-.048-.589-.941 0-.998a81.428 81.428 0 0 1 5.23 0z" />
      <path d="M9.753 2.909c.311.032.522.33.45.634-1.021 3.121-2.304 6.15-3.457 9.225-.203.479-1.084.261-.949-.311 1.021-3.121 2.304-6.15 3.457-9.225.083-.197.175-.329.499-.323z" />
    </g>
  </svg>
);

Italic.displayName = "IconItalic";

export default Italic;
