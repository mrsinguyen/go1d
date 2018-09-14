import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const InProgress: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M 8 1 A 7 7 0 0 1 8 15 A 7 7 0 0 1 8 1 M 8 1 A 7 7 0 0 1 8 15 A 7 7 0 0 1 8 1 M8 0H16V16H8V0Z" />
  </svg>
);

InProgress.displayName = "InProgress";

export default InProgress;
