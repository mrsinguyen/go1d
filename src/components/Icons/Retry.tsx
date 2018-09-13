import * as React from "react";

interface Props {
  size: number;
  color: string;
}

const Retry: React.SFC<Props> = ({
  size = 24,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" width={size} height={size} fill={color}>
    <path d="M 8 0 A 8 8 0 0 1 8 16 A 8 8 0 0 1 8 0 M12.3843 8.36624L11.4773 7.8917C11.576 7.84254 11.6673 7.77664 11.7469 7.69517C11.8297 7.61033 11.8953 7.51308 11.9426 7.40851C12.096 7.5427 12.2901 7.62984 12.502 7.65092C12.59 7.65967 12.6774 7.65663 12.762 7.64282L12.3843 8.36624ZM12.2917 8.54361C12.2918 8.54346 12.2919 8.54332 12.292 8.54317L12.2918 8.54348L12.2917 8.54361Z" />
  </svg>
);

Retry.displayName = "Retry";

export default Retry;
