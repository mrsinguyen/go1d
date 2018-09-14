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
  <svg {...props} viewBox="0 0 425.2 425.2" fill={color}>
    <path d="M307.4 125.8s6-2.4 9.7-6.9H287c-37.9 0-68.7 31.7-68.7 70.8 0 39.1 30.7 70.8 68.7 70.8 33.4 0 61.2-24.6 67.4-57.2h-24c-5.6 19.2-22.9 33.1-43.3 33.1-25 0-45.3-20.9-45.3-46.7 0-25.8 20.3-46.7 45.3-46.7h20.4v-17.2zM205.8 260.5V126l-23.4 26.3.1 37.4c0 25.8-20.3 46.7-45.3 46.7-25 0-45.3-20.9-45.3-46.7 0-25.8 20.3-46.7 45.3-46.7h41l21.4-24.1h-62.5c-37.9 0-68.6 31.7-68.6 70.8 0 39.1 30.7 70.8 68.6 70.8 17.4 0 33.2-6.7 45.3-17.7v17.7c0 25.3-11.4 37.1-36 37.1h-23L102 321.7h44.4c37.2 0 59.4-22.9 59.4-61.2 M349.5 114.5v75.6h-13.6V139h-16.1v-5.2c4.7-2.9 14.5-9.7 19.8-19.3h9.9m4.8-4.9h-17.7c-5.5 13-21.6 21.4-21.6 21.4v12.9h16v51h23.3v-85.3z" />
  </svg>
);

Go1Logo.displayName = "Go1Logo";

export default Go1Logo;
