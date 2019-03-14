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

export interface MultiSelectProps extends SelectDropdownProps {
  defaultText?: string;
  onChange?: ({ target: HTMLElement }) => void;
  name?: string;
  defaultValue?: string[];
  label?: string | React.ReactChild;
  clearCSS?: object;
  labelPaddingBottom?: number;
}

interface State {
  selected: string[];
  closeOnSelect?: boolean;
}

class MultiSelect extends React.Component<MultiSelectProps, State> {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.defaultValue || props.value || [],
      closeOnSelect: true,
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
        paddingY={3}
        key={item.label + "_" + item.value}
        flexDirection="row"
      >
        <Checkbox
          value={this.state.selected.includes(`${item.value}`)}
          id={`check_${item.label}`}
          label={item.label}
          fontSize={1}
          fontWeight="normal"
          color="default"
        />
      </View>
    );
  }

  public render() {
    const {
      options,
      label,
      id = `MultiSelect_${Math.random()}`,
      defaultText = "Please Select",
      clearCSS,
      labelPaddingBottom = 3,
    } = this.props;

    const { selected } = this.state;

    let selectText = defaultText;

    if (this.state.selected.length > 0) {
      selectText = options
        .filter((option: SelectDropdownItem) =>
          selected.includes(`${option.value}`)
        )
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
          closeOnSelection={false}
          optionRenderer={this.renderOption}
          isMulti={true}
          value={this.state.selected}
          name={this.props.name}
          selectedColor="highlight"
        >
          {({ ref, getToggleButtonProps }) => (
            <View>
              <ButtonFilled
                {...getToggleButtonProps()}
                innerRef={ref}
                width="100%"
                justifyContent="stretch"
                css={{
                  "> span": {
                    width: "100%",
                    color: selected.length > 0 ? undefined : "default",
                  },
                }}
                color={selected.length > 0 ? "accent" : undefined}
              >
                <View
                  width="100%"
                  flexDirection="row"
                  flexGrow={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text fontSize={1} color="default" fontWeight="normal">
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
