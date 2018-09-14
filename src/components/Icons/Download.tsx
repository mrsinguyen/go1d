import { Interpolation } from "emotion";
import * as React from "react";
import Theme from "../Theme";

interface Props {
  size: number;
  color: string;
  css: Interpolation;
}

const Download: React.SFC<Props> = ({
  size,
  color = "currentcolor",
  ...props
}: Props) => (
  <svg {...props} viewBox="0 0 16 16" fill={color}>
    <path d="M7.43662 12.1775C7.47418 12.2138 7.51487 12.2472 7.55869 12.2775C7.6025 12.3077 7.64319 12.3229 7.68075 12.3229C7.71831 12.3714 7.77152 12.3986 7.84038 12.4047C7.90923 12.4107 7.96244 12.4138 8 12.4138C8.03756 12.4138 8.09077 12.4107 8.15962 12.4047C8.22848 12.3986 8.28169 12.3714 8.31925 12.3229C8.35681 12.2865 8.3975 12.2623 8.44131 12.2502C8.48513 12.2381 8.52582 12.2138 8.56338 12.1775L11.7746 9.06951C11.9249 8.91199 12 8.73023 12 8.52425C12 8.31826 11.9249 8.13651 11.7746 7.97898C11.6119 7.83358 11.4241 7.76088 11.2113 7.76088C10.9984 7.76088 10.8106 7.83358 10.6479 7.97898L8.80751 9.77835L8.80751 0.781541C8.80751 0.539201 8.7324 0.348362 8.58216 0.209017C8.43192 0.0696715 8.23787 0 8 0C7.76213 0 7.56808 0.0696715 7.41784 0.209017C7.2676 0.348362 7.19249 0.539201 7.19249 0.781541L7.19249 9.77835L5.35211 7.97898C5.18936 7.83358 5.00157 7.76088 4.78873 7.76088C4.5759 7.76088 4.38811 7.83358 4.22535 7.97898C4.07512 8.13651 4 8.31826 4 8.52425C4 8.73023 4.07512 8.91199 4.22535 9.06951L7.43662 12.1775Z M7.43662 12.1775C7.47418 12.2138 7.51487 12.2472 7.55869 12.2775C7.6025 12.3077 7.64319 12.3229 7.68075 12.3229C7.71831 12.3714 7.77152 12.3986 7.84038 12.4047C7.90923 12.4107 7.96244 12.4138 8 12.4138C8.03756 12.4138 8.09077 12.4107 8.15962 12.4047C8.22848 12.3986 8.28169 12.3714 8.31925 12.3229C8.35681 12.2865 8.3975 12.2623 8.44131 12.2502C8.48513 12.2381 8.52582 12.2138 8.56338 12.1775L11.7746 9.06951C11.9249 8.91199 12 8.73023 12 8.52425C12 8.31826 11.9249 8.13651 11.7746 7.97898C11.6119 7.83358 11.4241 7.76088 11.2113 7.76088C10.9984 7.76088 10.8106 7.83358 10.6479 7.97898L8.80751 9.77835L8.80751 0.781541C8.80751 0.539201 8.7324 0.348362 8.58216 0.209017C8.43192 0.0696715 8.23787 0 8 0C7.76213 0 7.56808 0.0696715 7.41784 0.209017C7.2676 0.348362 7.19249 0.539201 7.19249 0.781541L7.19249 9.77835L5.35211 7.97898C5.18936 7.83358 5.00157 7.76088 4.78873 7.76088C4.5759 7.76088 4.38811 7.83358 4.22535 7.97898C4.07512 8.13651 4 8.31826 4 8.52425C4 8.73023 4.07512 8.91199 4.22535 9.06951L7.43662 12.1775Z M16 15.2C16 15.6418 15.6418 16 15.2 16L0.799999 16C0.358171 16 0 15.6418 0 15.2C0 14.7582 0.358171 14.4 0.799999 14.4L15.2 14.4C15.6418 14.4 16 14.7582 16 15.2Z M16 15.2C16 15.6418 15.6418 16 15.2 16L0.799999 16C0.358171 16 0 15.6418 0 15.2C0 14.7582 0.358171 14.4 0.799999 14.4L15.2 14.4C15.6418 14.4 16 14.7582 16 15.2Z" />
  </svg>
);

Download.displayName = "Download";

export default Download;
