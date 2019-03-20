import * as React from "react";

import { colors } from "../../foundations";
import { autobind } from "../../utils/decorators";
import Button from "../Button";
import ButtonFilled from "../ButtonFilled";
import Checkbox from "../Checkbox";
import Icon from "../Icon";
import SelectDropdown, {
  SelectDropdownItem,
  SelectDropdownProps,
} from "../SelectDropdown";
import Text from "../Text";
import View from "../View";

const sizes = {
  sm: {
    fontSize: 1,
  },
  md: {
    fontSize: 2,
  },
  lg: {
    fontSize: 3,
  },
};
export interface MultiSelectProps
  extends Pick<
      SelectDropdownProps,
      Exclude<keyof SelectDropdownProps, "optionRenderer">
    > {
  defaultText?: string;
  onChange?: ({ target: HTMLElement }) => void;
  name?: string;
  defaultValue?: string[];
  label?: string | React.ReactChild;
  clearCSS?: object;
  labelPaddingBottom?: number;
  closeOnSelect?: boolean;
}

interface State {
  selected: string[];
  searchValue: string;
}

class MultiSelect extends React.Component<MultiSelectProps, State> {
  public static defaultProps = {
    closeOnSelect: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: props.defaultValue || props.value || [],
      searchValue: "",
    };
  }

  @autobind
  public handleChange(evt: { target: { name: string; value: string[] } }) {
    this.setState({
      selected: evt.target.value,
    });

    if (this.props.onChange) {
      this.props.onChange(evt);
    }
  }

  @autobind
  public clearSelection() {
    this.setState({
      selected: [],
    });

    if (this.props.onChange) {
      this.props.onChange({
        target: {
          name: this.props.name,
          value: [],
        },
      });
    }
  }

  @autobind
  public renderOption(item: SelectDropdownItem) {
    return (
      <View
        width={"100%"}
        minWidth="188px"
        paddingY={3}
        key={item.label + "_" + item.value}
        flexDirection="row"
      >
        <Checkbox
          value={this.state.selected.includes(item.value.toString())}
          id={`check_${item.label}`}
          label={item.label}
          fontSize={1}
          fontWeight="normal"
          color="default"
        />
      </View>
    );
  }

  @autobind
  public handleSearchChange(searchValue: string, evt: any) {
    this.setState({
      searchValue,
    });
    if (evt.stopPropagation) {
      evt.stopPropagation();
    }
  }

  public render() {
    const {
      options,
      label,
      id = `MultiSelect_${Math.random()}`,
      defaultText = "Please Select",
      clearCSS,
      labelPaddingBottom = 3,
      searchable,
      size = "sm",
      closeOnSelect,
    } = this.props;

    const { selected } = this.state;

    let selectText = defaultText;

    if (this.state.selected.length > 0) {
      selectText = options
        .filter((thing, index, self) => {
          return index === self.findIndex(t => t.value === thing.value);
        })
        .filter(item => selected.includes(item.value.toString()))
        .map((selectedItem: SelectDropdownItem) => selectedItem.label)
        .join(", ");
    }

    return (
      <React.Fragment>
        <View flexDirection="row">
          {label && (
            <View paddingRight={4} paddingBottom={labelPaddingBottom}>
              {typeof label === "string" ? (
                <Text element="label" htmlFor={id}>
                  {label}
                </Text>
              ) : (
                label
              )}
            </View>
          )}
          <View
            flexDirection="row-reverse"
            flexGrow={2}
            flexWrap="wrap"
            css={{
              flexShrink: "initial",
            }}
          >
            {this.state.selected.length > 0 && (
              <View
                display="inline-flex"
                backgroundColor="accent"
                backgroundOpacity="pill"
                borderRadius={2}
                flexDirection="row"
                css={{ overflow: "hidden" }}
                marginLeft={3}
                marginBottom={3}
                {...clearCSS}
              >
                <View
                  backgroundColor="accent"
                  paddingX={3}
                  justifyContent="center"
                >
                  <Text color="background" fontSize={1}>
                    {this.state.selected.length}
                  </Text>
                </View>
                <Button
                  paddingX={2}
                  paddingY={0}
                  color="subtle"
                  justifyContent="center"
                  height="100%"
                  onClick={this.clearSelection}
                  data-testid="clearSelectionButton"
                  borderRadius={3}
                  iconName="Cross"
                  size="sm"
                  css={{
                    backgroundColor: "transparent",
                    "&:hover": {
                      color: colors.default,
                      cursor: "pointer",
                    },
                  }}
                />
              </View>
            )}
          </View>
        </View>
        <SelectDropdown
          options={options}
          onChange={this.handleChange}
          searchPlaceholder="Search for ..."
          closeOnSelection={closeOnSelect}
          optionRenderer={this.renderOption}
          isMulti={true}
          value={this.state.selected}
          name={this.props.name}
          selectedColor="highlight"
          handleSearchChange={searchable && this.handleSearchChange}
          data-testid="multiselect-dropdown"
        >
          {({ ref, getToggleButtonProps }) => (
            <View>
              <ButtonFilled
                {...getToggleButtonProps()}
                data-testid="select-dropdown-trigger"
                size={size}
                innerRef={ref}
                width="100%"
                justifyContent="stretch"
                css={{
                  "> span": {
                    width: "100%",
                  },
                }}
                disabled={this.props.disabled}
                color={selected.length > 0 ? "accent" : undefined}
              >
                <View
                  width="100%"
                  flexDirection="row"
                  flexGrow={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    fontSize={sizes[size].fontSize}
                    color={selected.length > 0 ? "contrast" : "default"}
                    fontWeight="normal"
                    ellipsis={true}
                  >
                    {selectText}
                  </Text>
                  <Icon name="ChevronDown" />
                </View>
              </ButtonFilled>
            </View>
          )}
        </SelectDropdown>
      </React.Fragment>
    );
  }
}

export default MultiSelect;
