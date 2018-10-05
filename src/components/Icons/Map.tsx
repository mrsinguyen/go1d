import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Map: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15.672 1.094a.642.642 0 0 0-.672 0l-4.328 2.531-5.078-2.531H5.53a.177.177 0 0 0-.093-.055.673.673 0 0 0-.211 0 .733.733 0 0 0-.165.055h-.124L.266 3.766a1.106 1.106 0 0 0-.18.25.701.701 0 0 0-.086.343v10.672a.64.64 0 0 0 .094.352.8.8 0 0 0 .234.242.575.575 0 0 0 .672 0l4.328-2.531 5 2.531c.073.042.13.065.172.07.042.005.099.008.172.008a.57.57 0 0 0 .094-.008c.03-.005.062-.028.093-.07H11l4.672-2.656c.094-.073.172-.16.234-.258a.643.643 0 0 0 .094-.352V1.703a.644.644 0 0 0-.094-.351 1.002 1.002 0 0 0-.234-.258zM6 2.766l4 2v9.203l-4-2V2.766zm-4.672 2l3.344-1.938v9.14l-3.344 1.923V4.766zm13.344 7.203l-3.344 1.922V4.766l3.344-1.938v9.14z" />
  </svg>
);

Map.displayName = "IconMap";

export default Map;
