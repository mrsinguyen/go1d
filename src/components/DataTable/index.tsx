import * as React from "react";
import {
  AutoSizer,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import { autobind } from "../../utils/decorators";
// import Portal from "../Portal";
import TR from "../Table/TR";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  /** If this is supplied, it will automatically render these rows. */
  rows?: React.ReactNodeArray;
  rowHeight?: number;
  /** The total number of rows that can be loaded. Used for autoloading. */
  rowCount: number;
  /** Function to render a row */
  rowRenderer?: ListRowRenderer;
  header?: React.ReactNodeArray;
  /** A string to display the total number of results */
  total?: string;
  autoRowHeight?: boolean;
}

interface State {
  rowHeight: number;
}

class DataTable extends React.Component<Props, State> {
  public ref: boolean = false;

  constructor(props) {
    super(props);

    this.state = {
      rowHeight: 0,
    };
  }

  @autobind
  public defaultRenderer(obj) {
    return this.props.rows[obj.index];
  }

  @autobind
  public setHeight(elem: HTMLElement | null) {
    if (elem && this.state.rowHeight !== elem.offsetHeight) {
      this.setState({ rowHeight: elem.offsetHeight }, () => (this.ref = false));
    }
  }

  public render() {
    const {
      rows,
      rowHeight,
      rowRenderer,
      rowCount,
      header,
      total,
      css,
      autoRowHeight,
      ...viewProps
    } = this.props;

    let renderFunction = rows ? this.defaultRenderer : rowRenderer;

    if (this.props.autoRowHeight) {
      const oldRenderFunction = renderFunction;
      renderFunction = args => {
        if (!this.ref) {
          this.ref = true;
          return <div ref={this.setHeight}>{oldRenderFunction(args)}</div>;
        }
        return oldRenderFunction(args);
      };
    }

    return (
      <Theme.Consumer>
        {({ zIndex }) => (
          <React.Fragment>
            {total && (
              <View marginBottom={4}>
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
                        autoHeight={true}
                        rowRenderer={renderFunction}
                        height={height}
                        overscanRowCount={2}
                        rowHeight={
                          autoRowHeight ? this.state.rowHeight || 0 : rowHeight
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
