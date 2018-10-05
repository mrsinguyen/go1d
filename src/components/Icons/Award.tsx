import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Award: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M13.636 5.333c0-.738-.14-1.43-.422-2.074a5.507 5.507 0 0 0-1.138-1.692A5.345 5.345 0 0 0 10.392.421 5.21 5.21 0 0 0 8.318 0a5.2 5.2 0 0 0-2.074.421 5.346 5.346 0 0 0-1.685 1.146A5.508 5.508 0 0 0 3.421 3.26 5.138 5.138 0 0 0 3 5.333c0 .863.185 1.661.554 2.394a4.85 4.85 0 0 0 1.504 1.786l-.732 5.723a.624.624 0 0 0 .03.39c.053.125.13.218.235.28a.654.654 0 0 0 .343.094.929.929 0 0 0 .39-.094l2.994-1.793 2.994 1.793c.031.032.078.05.14.055.063.005.125.008.187.008a.466.466 0 0 0 .195-.04.8.8 0 0 0 .149-.085c.03-.031.09-.117.179-.257a.532.532 0 0 0 .086-.413l-.733-5.661a4.753 4.753 0 0 0 1.56-1.786 5.2 5.2 0 0 0 .56-2.394zm-9.31 0c0-.55.104-1.07.311-1.56.208-.477.494-.898.858-1.262s.79-.65 1.279-.858a3.83 3.83 0 0 1 1.544-.312 3.83 3.83 0 0 1 1.544.312 4.01 4.01 0 0 1 2.136 2.12c.208.49.312 1.01.312 1.56 0 .54-.104 1.056-.312 1.544a3.92 3.92 0 0 1-.858 1.271c-.364.359-.79.642-1.278.85a3.673 3.673 0 0 1-1.544.328c-.551 0-1.066-.11-1.544-.328a4.074 4.074 0 0 1-1.279-.85 3.918 3.918 0 0 1-.858-1.27 3.902 3.902 0 0 1-.311-1.545zm6.456 8.718l-2.137-1.264a.518.518 0 0 0-.327-.109.519.519 0 0 0-.328.11L5.854 14.05l.468-3.805c.301.135.618.236.95.304.334.067.682.101 1.046.101s.712-.034 1.045-.101c.332-.068.65-.17.95-.304l.469 3.805z" />
  </svg>
);

Award.displayName = "IconAward";

export default Award;
