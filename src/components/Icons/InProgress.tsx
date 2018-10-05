import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const InProgress: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 2A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      clipRule="evenodd"
      opacity={0.3}
    />
    <path d="M14 8a6 6 0 0 1-6 6v2A8 8 0 1 0 8 0v2a6 6 0 0 1 6 6z" />
  </svg>
);

InProgress.displayName = "IconInProgress";

export default InProgress;
