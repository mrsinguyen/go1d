import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Assignment: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M13.39 5.83a.353.353 0 0 1-.066-.089.71.71 0 0 0-.067-.104L8.814 1.194a.972.972 0 0 1-.105-.09c-.03-.03-.06-.044-.09-.044a.198.198 0 0 0-.126-.053A1.5 1.5 0 0 0 8.366 1H3.908c-.536 0-.989.184-1.356.552-.368.367-.552.82-.552 1.356v10.184c0 .536.184.989.552 1.356.367.368.82.552 1.356.552h7.634c.537 0 .99-.184 1.357-.552.368-.367.552-.82.552-1.356V6.084c0-.03-.003-.072-.008-.127a.197.197 0 0 0-.052-.126zM8.994 3.163l2.296 2.296H8.993V3.162zm2.55 10.556H3.907a.64.64 0 0 1-.462-.172.6.6 0 0 1-.179-.454V2.908c0-.188.06-.342.18-.462a.625.625 0 0 1 .461-.179h3.817v3.817c0 .199.057.355.172.47.114.114.27.171.47.171h3.816v6.367a.6.6 0 0 1-.179.454.64.64 0 0 1-.462.172z" />
    <path d="M9.944 8c.199 0 .375.067.527.2a.674.674 0 0 1 .23.503c0 .19-.077.357-.23.502l-2.99 2.863a1.07 1.07 0 0 1-.273.16.722.722 0 0 1-.256.058.754.754 0 0 1-.272-.059.776.776 0 0 1-.255-.159L4.91 10.645a.7.7 0 0 1 0-1.004.743.743 0 0 1 .528-.218c.2 0 .376.073.528.218l.985.92 2.464-2.36A.776.776 0 0 1 9.944 8z" />
  </svg>
);

Assignment.displayName = "IconAssignment";

export default Assignment;
