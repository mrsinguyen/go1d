import * as React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import { autobind } from "../../utils/decorators";
import TR from "../Table/TR";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  rowHeight?: number;
  /** The total number of rows that can be loaded. Used for autoloading. */
  rowCount: number;
  /** Function to render a row */
  rowRenderer: ListRowRenderer;
  header?: React.ReactNodeArray;
  /** A string to display the total number of results */
  total?: string;
  autoRowHeight?: boolean;
}

interface State {
  rowHeight: number;
}

class DataTable extends React.Component<Props, State> {
  public cache = new CellMeasurerCache({
    defaultHeight: 0,
    fixedWidth: true,
  });

  constructor(props) {
    super(props);

    this.state = {
      rowHeight: 0,
    };
  }

  public render() {
    const {
      rowHeight,
      rowRenderer,
      rowCount,
      header,
      total,
      css,
      autoRowHeight,
      ...viewProps
    } = this.props;

    let renderFunction = rowRenderer;

    if (this.props.autoRowHeight) {
      const oldRenderFunction = renderFunction;
      renderFunction = ({ ...args }) => (
        <CellMeasurer
          cache={this.cache}
          parent={args.parent}
          rowIndex={args.index}
          columnIndex={0}
          key={args.key}
        >
          {oldRenderFunction({ ...args })}
        </CellMeasurer>
      );
    }

    return (
      <Theme.Consumer>
        {({ zIndex }) => (
          <React.Fragment>
            {total && (
              <View marginBottom={4}>
                <Text fontSize={3}>{total}</Text>
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
              {header && (
                <TR
                  position="sticky"
                  backgroundColor={viewProps.backgroundColor || "background"}
                  css={{ top: 0 }}
                  zIndex={zIndex.sticky}
                >
                  {header}
                </TR>
              )}
              <WindowScroller>
                {({ height, isScrolling, onChildScroll, scrollTop }) => (
                  <AutoSizer disableHeight={true}>
                    {({ width }) => (
                      <List
                        deferredMeasurementCache={
                          autoRowHeight ? this.cache : null
                        }
                        autoHeight={true}
                        onScroll={onChildScroll}
                        rowRenderer={renderFunction}
                        height={height}
                        overscanRowCount={2}
                        rowHeight={
                          autoRowHeight ? this.cache.rowHeight : rowHeight
                        }
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
        )}
      </Theme.Consumer>
    );
  }
}

export default DataTable;
