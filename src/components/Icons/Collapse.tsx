import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Collapse: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M14.6.135A.484.484 0 0 0 14.264 0a.484.484 0 0 0-.339.135l-4.949 4.96V1.918c0-.143-.045-.258-.135-.344s-.207-.13-.35-.13-.259.043-.349.13-.135.2-.135.344v4.329c0 .03.002.063.005.101s.021.068.051.09a.53.53 0 0 0 .237.248.15.15 0 0 0 .096.04c.041.003.073.005.096.005h4.329a.482.482 0 0 0 .349-.13.469.469 0 0 0 .135-.354.454.454 0 0 0-.135-.344.484.484 0 0 0-.35-.13H9.64L14.6.812a.465.465 0 0 0 0-.677z" />
  </svg>
);

Collapse.displayName = "IconCollapse";

export default Collapse;
