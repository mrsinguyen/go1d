import * as React from "react";

const Lock: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M2.95455 6.00812H7.68182V4.2311C7.68182 3.57705 7.451 3.01865 6.98935 2.55588C6.5277 2.09312 5.97065 1.86174 5.31818 1.86174C4.66572 1.86174 4.10867 2.09312 3.64702 2.55588C3.18537 3.01865 2.95455 3.57705 2.95455 4.2311V6.00812ZM10.6364 6.89663V12.2277C10.6364 12.4745 10.5502 12.6843 10.3778 12.857C10.2055 13.0298 9.99621 13.1162 9.75 13.1162H0.886364C0.64015 13.1162 0.430872 13.0298 0.258523 12.857C0.0861733 12.6843 0 12.4745 0 12.2277V6.89663C0 6.64982 0.0861733 6.44003 0.258523 6.26726C0.430872 6.0945 0.64015 6.00812 0.886364 6.00812H1.18182V4.2311C1.18182 3.09577 1.58806 2.12089 2.40057 1.30642C3.21307 0.491946 4.1856 0.0847168 5.31818 0.0847168C6.45076 0.0847168 7.42329 0.491946 8.2358 1.30642C9.0483 2.12089 9.45455 3.09577 9.45455 4.2311V6.00812H9.75C9.99621 6.00812 10.2055 6.0945 10.3778 6.26726C10.5502 6.44003 10.6364 6.64982 10.6364 6.89663Z" />
  </svg>
);

Lock.displayName = "IconLock";

export default Lock;
