import * as React from "react";
import { ListRowProps } from "react-virtualized";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonFilled from "../ButtonFilled";
import ButtonMinimal from "../ButtonMinimal";
import Checkbox from "../Checkbox";
import DataTable, { DataTableProps } from "../DataTable";
import TD from "../Table/TD";
import TH from "../Table/TH";
import Text from "../Text";
import Theme from "../Theme";
import View from "../View";

interface RowRendererProps extends ListRowProps {
  checkBox: React.ReactNode;
}

export interface DataTableSelectableProps extends DataTableProps {
  /** Action to take when the button is clicked */
  mainAction?: (
    evt: {
      allSelected: boolean;
      invertSelection: boolean;
      selectedItems: number[];
      unselectedItems: number[];
    }
  ) => void;

  /** Text to go on the main action button */
  mainActionText?: string;

  /** A mapping of row numbers to id. Usually this takes the form of the function row => data[row].id */
  mapRowToId?: (row: number) => number;
  rowRenderer: (props: RowRendererProps) => React.ReactNode;
  disabled?: boolean;
  mainIconName?: string;
}

interface State {
  allSelected: boolean;
  invertSelection: boolean;
  selectedItems: Set<number>;
  unselectedItems: Set<number>;
}

class DataTableSelectable extends React.Component<
  DataTableSelectableProps,
  State
> {
  public static defaultProps = {
    mapRowToId: (row: number) => row,
  };

  public ref: React.RefObject<DataTable>;

  public get header() {
    return this.ref.current.header;
  }

  constructor(props) {
    super(props);

    this.state = {
      allSelected: false,
      invertSelection: false,
      selectedItems: new Set<number>(),
      unselectedItems: new Set<number>(),
    };

    this.ref = React.createRef();
  }

  @autobind
  public rowRenderer(highlight: string) {
    return (props: ListRowProps) => {
      const selected = this.state.invertSelection
        ? !this.state.unselectedItems.has(props.index)
        : this.state.selectedItems.has(props.index);

      const checkboxTD = (
        <TD
          key={-1}
          width="30px"
          flexGrow={0}
          css={{ "box-sizing": "content-box" }}
        >
          <Checkbox
            name={String(props.index)}
            checked={selected}
            onChange={this.updateRows}
          />
        </TD>
      );

      const style = { ...props.style };
      if (selected) {
        style.backgroundColor = highlight;
      }

      return this.props.rowRenderer({
        checkBox: checkboxTD,
        ...props,
        style,
      });
    };
  }

  @autobind
  public resetChecked() {
    this.setState({
      allSelected: false,
      invertSelection: false,
      selectedItems: new Set<number>(),
      unselectedItems: new Set<number>(),
    });
  }

  @autobind
  public triggerAction() {
    const selected = this.state.invertSelection
      ? this.props.rowCount - this.state.unselectedItems.size
      : this.state.selectedItems.size;
    safeInvoke(this.props.mainAction, {
      allSelected: this.state.allSelected,
      invertSelection: selected === 0 || this.state.invertSelection,
      selectedItems: Array.from(this.state.selectedItems).map(row =>
        this.props.mapRowToId(row)
      ),
      unselectedItems: Array.from(this.state.unselectedItems).map(row =>
        this.props.mapRowToId(row)
      ),
    });
  }

  @autobind
  public updateRows(evt: { target: { name: string; checked: boolean } }) {
    const updateObject = this.state[
      this.state.invertSelection ? "unselectedItems" : "selectedItems"
    ];

    if (evt.target.checked) {
      updateObject[this.state.invertSelection ? "delete" : "add"](
        parseInt(evt.target.name, 10)
      );
    } else {
      updateObject[this.state.invertSelection ? "add" : "delete"](
        parseInt(evt.target.name, 10)
      );
    }

    if (this.state.invertSelection) {
      this.setState({
        allSelected: false,
        unselectedItems: new Set<number>(updateObject),
      });
    } else {
      this.setState({
        allSelected: false,
        selectedItems: new Set<number>(updateObject),
      });
    }
  }

  @autobind
  public clearSelection() {
    this.setState({
      allSelected: false,
      invertSelection: false,
      selectedItems: new Set(),
      unselectedItems: new Set(),
    });
  }

  @autobind
  public onAllSelectChange() {
    this.setState({
      allSelected: !this.state.allSelected,
      invertSelection: !this.state.allSelected,
      selectedItems: new Set(),
      unselectedItems: new Set(),
    });
  }

  public render() {
    const {
      mainAction,
      mapRowToId,
      children,
      rowRenderer,
      total,
      disabled,
      header,
      mainActionText,
      mainIconName,
      ...props
    } = this.props;

    const selected = this.state.invertSelection
      ? props.rowCount - this.state.unselectedItems.size
      : this.state.selectedItems.size;

    const headerWithSelectAll = [
      <TH
        key={-1}
        width="30px"
        flexGrow={0}
        css={{ "box-sizing": "content-box" }}
        text={
          !!selected ? (
            <Checkbox
              name="SelectAll"
              checked={this.state.allSelected}
              onChange={this.onAllSelectChange}
              disabled={disabled}
            />
          ) : (
            ""
          )
        }
      />,
      ...(header || []),
    ];

    const text = !!selected ? (
      <React.Fragment>
        <Text fontSize={3}>{`${selected} selected `}</Text>
        <Text fontSize={3} color="subtle">{`of ${props.rowCount}`}</Text>
      </React.Fragment>
    ) : (
      <Text fontSize={3}>{total}</Text>
    );

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <DataTable
            {...props}
            ref={this.ref}
            rowRenderer={this.rowRenderer(colors.highlight)}
            header={headerWithSelectAll}
            total={
              <View marginBottom={4} flexDirection="row" alignItems="center">
                <View marginRight={4} flexDirection="row">
                  {text}
                </View>
                {mainAction && (
                  <ButtonFilled
                    onClick={this.triggerAction}
                    marginRight={3}
                    size="sm"
                    iconName={mainIconName}
                    iconColor="success"
                  >
                    {`${mainActionText} ${selected === 0 ? "all" : ""}`}
                  </ButtonFilled>
                )}
                {!!selected && (
                  <ButtonMinimal
                    onClick={this.clearSelection}
                    size="sm"
                    backgroundColor="transparent"
                    iconName="Close"
                  >
                    Clear Selection
                  </ButtonMinimal>
                )}
              </View>
            }
          />
        )}
      </Theme.Consumer>
    );
  }
}

export default DataTableSelectable;
