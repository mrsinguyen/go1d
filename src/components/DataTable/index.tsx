import { throttle } from "lodash-decorators";
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
import scrollTo from "scroll-to";
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

  @throttle(100)
  @autobind
  public scroll({ startIndex }) {
    if (startIndex) {
      safeInvoke(this.props.scrollCallback, {
        row: startIndex,
      });
    }
  }

  @autobind
  public setHeader(ref: HTMLElement) {
    this.header = ref;
  }

  @autobind
  public rowsReturn(onRowsRendered) {
    return args => {
      this.scroll(args);
      safeInvoke(onRowsRendered(args));
    };
  }

  @autobind
  public scrollToTop() {
    scrollTo(0, 0, {
      duration: 250,
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
              {...viewProps}
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
              <InfiniteLoader
                isRowLoaded={infiniteLoad ? isRowLoaded : () => true}
                loadMoreRows={infiniteLoad ? loadMoreRows : () => null}
                rowCount={rowCount}
                threshold={10}
              >
                {({ onRowsRendered, registerChild }) => (
                  <WindowScroller>
                    {({ height, isScrolling, onChildScroll, scrollTop }) => (
                      <AutoSizer disableHeight={true}>
                        {({ width }) => (
                          <div ref={registerChild}>
                            <List
                              autoHeight={true}
                              height={height}
                              onRowsRendered={this.rowsReturn(onRowsRendered)}
                              ref={el => {
                                this.listEl = el;
                              }}
                              rowCount={rowCount}
                              rowHeight={
                                autoRowHeight ? this.cache.rowHeight : rowHeight
                              }
                              rowRenderer={renderFunction}
                              deferredMeasurementCache={
                                autoRowHeight ? this.cache : null
                              }
                              scrollTop={scrollTop}
                              onScroll={onChildScroll}
                              overscanRowCount={20}
                              scrollToAlignment="start"
                              isScrolling={isScrolling}
                              width={width}
                              scrollToIndex={scrollToIndex}
                            />
                          </div>
                        )}
                      </AutoSizer>
                    )}
                  </WindowScroller>
                )}
              </InfiniteLoader>
            </View>
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
          </React.Fragment>
        )}
      </Theme.Consumer>
    );
  }
}

export default DataTable;
