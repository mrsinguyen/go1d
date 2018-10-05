import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Go1Logo: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M14.96 2.04h.984v4.745h-1.298V3.948h-.89V3.23s.895-.47 1.203-1.192zm.715 4.47V2.309h-.548c-.297.537-.84.912-1.103 1.074v.291h.896v2.838h.755z"
      clipRule="evenodd"
    />
    <path d="M13.873 2.554c-.201.252-.537.386-.537.386l.011.963h-1.136c-1.388 0-2.518 1.164-2.518 2.596 0 1.433 1.13 2.597 2.518 2.597 1.13 0 2.093-.772 2.407-1.841h1.332c-.347 1.813-1.892 3.179-3.75 3.179-2.115 0-3.822-1.763-3.822-3.94s1.712-3.94 3.822-3.94h1.673zm-6.189.397v7.477c0 2.132-1.231 3.403-3.302 3.408H1.914L3.106 12.5h1.276c1.371 0 2.003-.66 2.003-2.065V9.45a3.73 3.73 0 0 1-2.518.985C1.757 10.434.05 8.67.05 6.494s1.707-3.94 3.817-3.934h3.47L6.145 3.897H3.867c-1.388 0-2.518 1.164-2.518 2.597S2.479 9.09 3.867 9.09s2.518-1.164 2.518-2.597L6.38 4.412l1.304-1.46z" />
  </svg>
);

Go1Logo.displayName = "IconGo1Logo";

export default Go1Logo;
