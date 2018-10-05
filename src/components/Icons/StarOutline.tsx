import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const StarOutline: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      d="M14.605 6.13l-4.512-.627L7.998 1.33l-2.09 4.096-4.573.714L4.66 9.38l-.803 4.662L8 11.86l4.155 2.189-.815-4.736 3.265-3.182zm.781-.9c.148.045.272.107.374.187a.57.57 0 0 1 .204.322.514.514 0 0 1 .008.357.615.615 0 0 1-.212.306l-3.345 3.26.798 4.635a.651.651 0 0 1-.289.714 1.08 1.08 0 0 1-.212.11.59.59 0 0 1-.212.042h-.374L8 12.99l-4.126 2.173a.738.738 0 0 1-.433.068.91.91 0 0 1-.365-.136.73.73 0 0 1-.255-.314.65.65 0 0 1-.034-.416l.798-4.635L.24 6.47a.53.53 0 0 1-.212-.306.725.725 0 0 1 .008-.425 1.29 1.29 0 0 1 .263-.356.537.537 0 0 1 .382-.153l4.568-.713L7.355.39C7.457.13 7.672 0 8 0s.543.13.645.39l2.106 4.195 4.635.645zM3.514 14.48l-.01.005zm.037-.016l-.037.016z"
      opacity={0.5}
    />
  </svg>
);

StarOutline.displayName = "IconStarOutline";

export default StarOutline;
