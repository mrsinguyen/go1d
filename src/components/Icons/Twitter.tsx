import * as React from "react";

const Twitter: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15 2.506a6.94 6.94 0 0 1-1.998.974A2.85 2.85 0 0 0 8 5.39v.635a6.784 6.784 0 0 1-5.727-2.882S-.273 8.87 5.455 11.415A7.407 7.407 0 0 1 1 12.688c5.727 3.182 12.727 0 12.727-7.318 0-.177-.017-.354-.05-.528A4.913 4.913 0 0 0 15 2.506z" />
  </svg>
);

Twitter.displayName = "IconTwitter";

export default Twitter;
