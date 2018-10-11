import * as React from "react";
import {
  AutoSizer,
  InfiniteLoader,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import TR from "../Table/TR";
import Text from "../Text";
import Theme from "../Theme";
import View from "../View";

interface Props {
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
}: Props) => {
  function defaultRenderer(obj) {
    return rows[obj.index];
  }

  return (
    <Theme.Consumer>
      {({ type }) => (
        <React.Fragment>
          {total && (
            <View marginBottom={2}>
              <Text fontSize={3} fontWeight="bold">
                {total}
              </Text>
            </View>
          )}
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
        </React.Fragment>
      )}
    </Theme.Consumer>
  );
};

export default DataTable;
