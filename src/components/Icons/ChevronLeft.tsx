import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const ChevronLeft: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M10.254 13.74a.85.85 0 0 0 .246-.603.85.85 0 0 0-.246-.602L5.594 8l4.66-4.535a.85.85 0 0 0 .246-.602.85.85 0 0 0-.246-.602.855.855 0 0 0-1.232 0L3.767 7.398a.826.826 0 0 0-.205.311A.884.884 0 0 0 3.5 8c0 .08.02.177.062.291.04.114.11.217.205.311l5.255 5.137a.855.855 0 0 0 1.232 0z" />
  </svg>
);

ChevronLeft.displayName = "IconChevronLeft";

export default ChevronLeft;
