import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Passed: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M4.87847 0.630458C5.84507 0.210151 6.88557 0 8 0C9.11443 0 10.1549 0.210151 11.1215 0.630458C12.0995 1.03941 12.9495 1.60738 13.6716 2.3344C14.3937 3.06142 14.9652 3.9077 15.3859 4.87327C15.7953 5.8502 16 6.88959 16 7.99148C16 9.10473 15.7953 10.1441 15.3859 11.1097C14.9652 12.0866 14.3937 12.9357 13.6716 13.6571C12.9495 14.3784 12.0995 14.9492 11.1215 15.3695C10.1549 15.7898 9.11443 16 8 16C6.88557 16 5.84507 15.7898 4.87847 15.3695C3.90049 14.9492 3.05047 14.3784 2.32836 13.6571C1.60625 12.9357 1.03483 12.0866 0.614073 11.1097C0.204689 10.1441 0 9.10473 0 7.99148C0 6.88959 0.204689 5.8502 0.614073 4.87327C1.03483 3.9077 1.60625 3.06142 2.32836 2.3344C3.05047 1.60738 3.90049 1.03941 4.87847 0.630458Z M11.1031 5.37251C11.278 5.21099 11.4889 5.125 11.7257 5.125C11.9624 5.125 12.1733 5.21099 12.3483 5.37251L12.3556 5.3793C12.5292 5.55284 12.625 5.76606 12.625 6.00925C12.625 6.2523 12.5291 6.46529 12.3557 6.63879L7.38919 11.6204L7.38176 11.6268C7.29853 11.6982 7.21134 11.7577 7.11996 11.7999C7.01135 11.85 6.88945 11.8682 6.76603 11.8682C6.64261 11.8682 6.52071 11.85 6.41209 11.7999C6.32072 11.7577 6.23352 11.6982 6.1503 11.6268L6.14272 11.6203L3.64454 9.107C3.47118 8.93351 3.375 8.72024 3.375 8.47719C3.375 8.23401 3.47099 8.02093 3.64454 7.84739L3.65161 7.84031C3.82659 7.67879 4.03759 7.59295 4.27435 7.59295C4.5111 7.59295 4.72196 7.67894 4.89695 7.84046L4.90498 7.84787L6.76638 9.7234L11.1031 5.37251Z" />
  </svg>
);

Passed.displayName = "Passed";

export default Passed;