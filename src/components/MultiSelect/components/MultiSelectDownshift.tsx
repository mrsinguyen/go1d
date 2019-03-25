import Downshift, { ControllerStateAndHelpers } from "downshift";
import * as React from "react";
import Options from "../../SelectDropdown/Options";

interface Option {
  value?: string;
  label: string;
  optgroup?: boolean;
  values?: Array<{ value: string; label: string }>;
}

interface MultiSelectDownshiftState {
  selectedItems: Option[];
}

interface ChildProps extends ControllerStateAndHelpers<Option> {
  selectedItems: Option[];
}

interface MultiSelectDownshiftProps {
  selectedItems?: Option[];
  initialSelectedItems?: Options[];
  onSelect?: (Selected: Option[], Props: ChildProps) => void;
  onChange?: (Selected: Option[], Props: ChildProps) => void;
  itemCount?: number;
  itemToString?: (item: Option) => string;
  closeOnSelect?: boolean;
  children: (Settings: ChildProps) => React.ReactNode;
}

class MultiSelectDownshift extends React.PureComponent<
  MultiSelectDownshiftProps,
  MultiSelectDownshiftState
> {
  public static defaultProps = {
    closeOnSelect: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedItems: props.selectedItems || props.initialSelectedItems || [],
    };
  }

  public stateReducer = (state, changes) => {
    const { closeOnSelect } = this.props;

    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: !closeOnSelect,
          inputValue: "",
        };
      default:
        return changes;
    }
  };

  public handleSelection = (selectedItem, downshift) => {
    const callOnChange = () => {
      const { onSelect, onChange } = this.props;
      const { selectedItems } = this.state;
      if (onSelect) {
        onSelect(selectedItems, this.getStateAndHelpers(downshift));
      }
      if (onChange) {
        onChange(selectedItems, this.getStateAndHelpers(downshift));
      }
    };

    if (this.state.selectedItems.includes(selectedItem)) {
      this.removeItem(selectedItem, callOnChange);
    } else {
      this.addSelectedItem(selectedItem, callOnChange);
    }
  };

  public removeItem = (item, cb = undefined) => {
    const { selectedItems: propsSelectedItems } = this.props;

    this.setState(
      ({ selectedItems }) => ({
        selectedItems: (propsSelectedItems || selectedItems).filter(
          i => i !== item
        ),
      }),
      cb
    );
  };

  public clearSelection = () =>
    this.setState({
      selectedItems: [],
    });

  public addSelectedItem(item, cb) {
    const { selectedItems: propsSelectedItems } = this.props;

    this.setState(
      ({ selectedItems }) => ({
        selectedItems: [...(propsSelectedItems || selectedItems), item],
      }),
      cb
    );
  }

  public getStateAndHelpers(downshift): ChildProps {
    const { selectedItems } = this.state;
    const { selectedItems: propsSelectedItems } = this.props;
    const { clearSelection } = this;

    return {
      ...downshift,
      selectedItems: propsSelectedItems || selectedItems,
      clearSelection,
    };
  }

  public render() {
    const { children, ...props } = this.props;

    return (
      <Downshift
        {...props}
        stateReducer={this.stateReducer}
        onChange={this.handleSelection}
        selectedItem={null}
      >
        {downshift => children(this.getStateAndHelpers(downshift))}
      </Downshift>
    );
  }
}

export default MultiSelectDownshift;
