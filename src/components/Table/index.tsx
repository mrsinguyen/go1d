import * as React from "react";

import View, { Props as ViewProps } from "../View";
import TR from "./TR";

interface Props extends ViewProps {
  header?: React.ReactNodeArray;
  rows: React.ReactNodeArray;
}

const Table = ({ header, rows, css, ...props }: Props) => (
  <View
    element="table"
    display="table"
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
    {header && (
      <View element="thead" display="table-header-group">
        <TR>{header}</TR>
      </View>
    )}
    <View element="tbody" display="table-row-group">
      {rows}
    </View>
  </View>
);

export default Table;
