import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Upload: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M7.43662 0.23628C7.47418 0.199929 7.51487 0.166607 7.55869 0.136314C7.6025 0.106023 7.64319 0.0908766 7.68075 0.0908766C7.71831 0.0424089 7.77152 0.0151463 7.84038 0.00908756C7.90923 0.00302887 7.96244 0 8 0C8.03756 0 8.09077 0.00302887 8.15962 0.00908756C8.22848 0.0151463 8.28169 0.0424089 8.31925 0.0908766C8.35681 0.127228 8.3975 0.151461 8.44131 0.163578C8.48513 0.175695 8.52582 0.199929 8.56338 0.23628L11.7746 3.34427C11.9249 3.50179 12 3.68354 12 3.88953C12 4.09552 11.9249 4.27727 11.7746 4.43479C11.6119 4.58019 11.4241 4.65289 11.2113 4.65289C10.9984 4.65289 10.8106 4.58019 10.6479 4.43479L8.80751 2.63543L8.80751 11.6322C8.80751 11.8746 8.7324 12.0654 8.58216 12.2048C8.43192 12.3441 8.23787 12.4138 8 12.4138C7.76213 12.4138 7.56808 12.3441 7.41784 12.2048C7.2676 12.0654 7.19249 11.8746 7.19249 11.6322L7.19249 2.63543L5.35211 4.43479C5.18936 4.58019 5.00157 4.65289 4.78873 4.65289C4.5759 4.65289 4.38811 4.58019 4.22535 4.43479C4.07512 4.27727 4 4.09552 4 3.88953C4 3.68354 4.07512 3.50179 4.22535 3.34427L7.43662 0.23628Z M7.43662 0.23628C7.47418 0.199929 7.51487 0.166607 7.55869 0.136314C7.6025 0.106023 7.64319 0.0908766 7.68075 0.0908766C7.71831 0.0424089 7.77152 0.0151463 7.84038 0.00908756C7.90923 0.00302887 7.96244 0 8 0C8.03756 0 8.09077 0.00302887 8.15962 0.00908756C8.22848 0.0151463 8.28169 0.0424089 8.31925 0.0908766C8.35681 0.127228 8.3975 0.151461 8.44131 0.163578C8.48513 0.175695 8.52582 0.199929 8.56338 0.23628L11.7746 3.34427C11.9249 3.50179 12 3.68354 12 3.88953C12 4.09552 11.9249 4.27727 11.7746 4.43479C11.6119 4.58019 11.4241 4.65289 11.2113 4.65289C10.9984 4.65289 10.8106 4.58019 10.6479 4.43479L8.80751 2.63543L8.80751 11.6322C8.80751 11.8746 8.7324 12.0654 8.58216 12.2048C8.43192 12.3441 8.23787 12.4138 8 12.4138C7.76213 12.4138 7.56808 12.3441 7.41784 12.2048C7.2676 12.0654 7.19249 11.8746 7.19249 11.6322L7.19249 2.63543L5.35211 4.43479C5.18936 4.58019 5.00157 4.65289 4.78873 4.65289C4.5759 4.65289 4.38811 4.58019 4.22535 4.43479C4.07512 4.27727 4 4.09552 4 3.88953C4 3.68354 4.07512 3.50179 4.22535 3.34427L7.43662 0.23628Z M16 15.2C16 15.6418 15.6418 16 15.2 16L0.799999 16C0.358171 16 0 15.6418 0 15.2C0 14.7582 0.358171 14.4 0.799999 14.4L15.2 14.4C15.6418 14.4 16 14.7582 16 15.2Z M16 15.2C16 15.6418 15.6418 16 15.2 16L0.799999 16C0.358171 16 0 15.6418 0 15.2C0 14.7582 0.358171 14.4 0.799999 14.4L15.2 14.4C15.6418 14.4 16 14.7582 16 15.2Z" />
  </svg>
);

Upload.displayName = "Upload";

export default Upload;