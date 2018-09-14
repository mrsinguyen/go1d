import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Drag: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M 4 2 H 12 V 4 H 4 z M 4 2 H 12 V 4 H 4 z M 4 7 H 12 V 9 H 4 z M 4 7 H 12 V 9 H 4 z M 4 12 H 12 V 14 H 4 z M 4 12 H 12 V 14 H 4 z" />
  </svg>
);

Drag.displayName = "Drag";

export default Drag;
