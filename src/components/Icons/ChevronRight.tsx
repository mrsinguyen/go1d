import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const ChevronRight: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M5.746 2.26a.85.85 0 0 0-.246.603.85.85 0 0 0 .246.602L10.406 8l-4.66 4.535a.85.85 0 0 0-.246.602.85.85 0 0 0 .246.602.855.855 0 0 0 1.232 0l5.255-5.137a.825.825 0 0 0 .205-.311A.883.883 0 0 0 12.5 8c0-.08-.02-.177-.062-.291a.825.825 0 0 0-.205-.311L6.978 2.261a.855.855 0 0 0-1.232 0z M5.746 2.26a.85.85 0 0 0-.246.603.85.85 0 0 0 .246.602L10.406 8l-4.66 4.535a.85.85 0 0 0-.246.602.85.85 0 0 0 .246.602.855.855 0 0 0 1.232 0l5.255-5.137a.825.825 0 0 0 .205-.311A.883.883 0 0 0 12.5 8c0-.08-.02-.177-.062-.291a.825.825 0 0 0-.205-.311L6.978 2.261a.855.855 0 0 0-1.232 0z" />
  </svg>
);

ChevronRight.displayName = "ChevronRight";

export default ChevronRight;
