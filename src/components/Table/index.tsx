import * as React from "react";

import View, { Props as ViewProps } from "../View";
import TR from "./TR";

export interface Props extends ViewProps {
  header?: React.ReactNodeArray;
  rows: React.ReactNodeArray;
}

const Table = ({ header, rows, css, ...props }: Props) => (
  <View
    element="div"
    display="block"
    paddingY={4}
    boxShadow="crisp"
    borderRadius={3}
    width="100%"
    css={[
      {
        borderCollapse: "collapse",
      },
      css,
    ]}
    {...props}
  >
    {header && <TR>{header}</TR>}
    <View element="div">{rows}</View>
  </View>
);

export default Table;
