import * as React from "react";
import {
  AutoSizer,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import TR from "../Table/TR";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  /** If this is supplied, it will automatically render these rows. */
  rows?: React.ReactNodeArray;
  rowHeight: number;
  /** The total number of rows that can be loaded. Used for autoloading. */
  rowCount: number;
  /** Function to render a row */
  rowRenderer?: ListRowRenderer;
  header?: React.ReactNodeArray;
  /** A string to display the total number of results */
  total?: string;
}

const DataTable: React.SFC<Props> = ({
  rows,
  rowHeight,
  rowRenderer,
  rowCount,
  header,
  total,
  css,
  ...viewProps
}: Props) => {
  function defaultRenderer(obj) {
    return rows[obj.index];
  }

  return (
    <React.Fragment>
      {total && (
        <View marginBottom={3}>
          <Text fontSize={3} fontWeight="bold">
            {total}
          </Text>
        </View>
      )}
      <View
        css={[
          {
            ".ReactVirtualized__Grid": {
              outline: "none",
            },
          },
          css,
        ]}
        {...viewProps}
      >
        {header && <TR>{header}</TR>}
        <WindowScroller>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
            <AutoSizer disableHeight={true}>
              {({ width }) => (
                <List
                  autoHeight={true}
                  rowRenderer={rows ? defaultRenderer : rowRenderer}
                  height={height}
                  overscanRowCount={2}
                  rowHeight={rowHeight}
                  isScrolling={isScrolling}
                  scrollTop={scrollTop}
                  width={width}
                  rowCount={rowCount}
                />
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      </View>
    </React.Fragment>
  );
};

export default DataTable;
