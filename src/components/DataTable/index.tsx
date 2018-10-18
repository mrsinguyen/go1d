import * as _ from "lodash";
import * as React from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader,
  List,
  ListRowRenderer,
  WindowScroller,
} from "react-virtualized";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonFilled from "../ButtonFilled";
import Icon from "../Icon";
import TR from "../Table/TR";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  /** The hieght of a row. When using autoRowHeight, you can supply this for a more accurate initial estimate */
  rowHeight?: number;
  /** The total number of rows that can be loaded. Used for autoloading. */
  rowCount: number;
  /** Function to render a row */
  rowRenderer: ListRowRenderer;
  /*
   * A header row. Rendered inside a TR component
  */
  header?: React.ReactNodeArray;
  /** A string to display the total number of results */
  total?: string;
  /** Used to scroll directly to a row. When using autoRowHeight, the height wont be populated yet, so it is important to also specify a rowHeight */
  scrollToIndex?: number;
  /** *Experimental* Automatically measures the row height. Due to the measurement method, this is not suggested for data sets of over 250 items */
  autoRowHeight?: boolean;
  /**
   * If set, will use an infinite loader. The following props will be required for correct functionality:
   * isRowLoaded, loadMoreRows, rowCount
   */
  infiniteLoad?: boolean;

  /**
   * Function to check if a row has been loaded. Used in conjunction with infiniteLoad
   */
  isRowLoaded?: ({ index }) => boolean;

  /**
   * Function to load the required rows. Used in conjunction with infiniteLoad
   */
  loadMoreRows?: ({ startIndex, stopIndex }) => Promise<any>;

  /**
   * A callback that returns the top row rendered. Triggers when the top rendered row changes.
   */
  scrollCallback?: ({ row }) => void;

  /**
   * Hide the scroll to top of page button
   */
  hideScrollButton?: boolean;
}

class DataTable extends React.Component<Props, {}> {
  public listEl: List;
  public header: HTMLElement;

  public cache: CellMeasurerCache;

  constructor(props) {
    super(props);
    this.cache = new CellMeasurerCache({
      defaultHeight: this.props.rowHeight || 50,
      fixedWidth: true,
    });
  }

  @autobind
  public setHeader(ref: HTMLElement) {
    this.header = ref;
  }

  @autobind
  public rowsReturn(onRowsRendered) {
    return args => {
      safeInvoke(this.props.scrollCallback, {
        row: args.startIndex,
      });
      safeInvoke(onRowsRendered, args);
    };
  }

  @autobind
  public scrollToTop() {
    safeInvoke(this.props.scrollCallback, { row: 0 });
    scrollTo({
      top: 0,
    });
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
      infiniteLoad,
      isRowLoaded,
      loadMoreRows,
      scrollToIndex,
      scrollCallback,
      hideScrollButton,
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
        {({ zIndex, spacing }) => (
          <React.Fragment>
            {total && (
              <View marginBottom={4}>
                <Text fontSize={3}>{total}</Text>
              </View>
            )}
            <View
              display="block"
              css={[
                {
                  ".ReactVirtualized__Grid": {
                    outline: "none",
                  },
                },
                css,
              ]}
            >
              {header && (
                <TR
                  position="sticky"
                  backgroundColor={viewProps.backgroundColor || "background"}
                  css={{ top: 0 }}
                  zIndex={zIndex.sticky}
                  innerRef={this.setHeader}
                >
                  {header}
                </TR>
              )}
              <Loader {...this.props}>
                {({ registerChild, onRowsRendered }) => (
                  <WindowScroller>
                    {({ height, isScrolling, onChildScroll, scrollTop }) => (
                      <React.Fragment>
                        <View display="block" {...viewProps}>
                          <AutoSizer disableHeight={true}>
                            {({ width }) => (
                              <div ref={registerChild}>
                                <List
                                  autoHeight={true}
                                  height={height}
                                  onRowsRendered={this.rowsReturn(
                                    onRowsRendered
                                  )}
                                  ref={el => {
                                    this.listEl = el;
                                  }}
                                  rowCount={rowCount}
                                  rowHeight={
                                    autoRowHeight
                                      ? this.cache.rowHeight
                                      : rowHeight
                                  }
                                  rowRenderer={renderFunction}
                                  deferredMeasurementCache={
                                    autoRowHeight ? this.cache : null
                                  }
                                  scrollTop={scrollTop}
                                  onScroll={onChildScroll}
                                  overscanRowCount={5}
                                  scrollToAlignment="start"
                                  isScrolling={isScrolling}
                                  width={width}
                                  scrollToIndex={scrollToIndex}
                                />
                              </div>
                            )}
                          </AutoSizer>
                        </View>
                        {!hideScrollButton &&
                          scrollTop > 0 && (
                            <ButtonFilled
                              color="contrast"
                              onClick={this.scrollToTop}
                              position="sticky"
                              marginTop={4}
                              marginLeft="auto"
                              css={{ bottom: spacing[4] }}
                            >
                              <Icon name="ChevronUp" color="background" />
                            </ButtonFilled>
                          )}
                      </React.Fragment>
                    )}
                  </WindowScroller>
                )}
              </Loader>
            </View>
          </React.Fragment>
        )}
      </Theme.Consumer>
    );
  }
}

export default DataTable;

const Loader: React.SFC<{
  infiniteLoad?: boolean;
  isRowLoaded?: (obj: any) => boolean;
  loadMoreRows?: (obj: any) => Promise<any>;
  rowCount: number;
  children: any;
}> = ({ infiniteLoad, isRowLoaded, loadMoreRows, rowCount, children }) => {
  if (infiniteLoad) {
    return (
      <InfiniteLoader
        isRowLoaded={infiniteLoad && isRowLoaded}
        loadMoreRows={infiniteLoad && loadMoreRows}
        rowCount={rowCount}
        threshold={2}
      >
        {children}
      </InfiniteLoader>
    );
  }

  return children({});
};
