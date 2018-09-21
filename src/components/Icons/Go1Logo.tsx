import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Go1Logo: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 285.9 212.1" fill={color}>
    <path d="M238.3 16.8s6-2.4 9.6-6.9H218c-37.7 0-68.3 31.5-68.3 70.4s30.5 70.4 68.3 70.4c33.2 0 60.8-24.4 67-56.8h-23.8c-5.6 19.1-22.8 32.9-43 32.9-24.8 0-45-20.8-45-46.4s20.2-46.4 45-46.4h20.3l-.2-17.2zm-101 133.8V17L114 43.1l.1 37.2c0 25.6-20.2 46.4-45 46.4s-45-20.8-45-46.4 20.2-46.4 45-46.4h40.7L131.1 10h-62C31.4 9.9.9 41.4.9 80.3s30.5 70.4 68.2 70.4c17.3 0 33-6.7 45-17.6v17.6c0 25.1-11.3 36.9-35.8 36.9H55.5l-21.3 23.9h44.1c37-.1 59-22.8 59-60.9 M280.1 5.5v75.1h-13.5V29.9h-16v-5.2c4.7-2.9 14.4-9.6 19.7-19.2h9.8m4.8-4.8h-17.6C261.8 13.6 245.8 22 245.8 22v12.8h15.9v50.7h23.2V.7z" />
  </svg>
);

Go1Logo.displayName = "Go1Logo";

export default Go1Logo;