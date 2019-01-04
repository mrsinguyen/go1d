import * as React from "react";

import { colors } from "../../foundations";
import Button from "../Button";
import Select, { SelectProps } from "../Select";
import Text from "../Text";
import View from "../View";

export interface MultiSelectProps extends SelectProps {
  defaultText?: string;
  onChange?: ({ target: HTMLElement }) => void;
  name?: string;
  defaultValue?: string[];
  label?: string | React.ReactChild;
  clearCSS?: object;
  labelPaddingBottom?: number;
}

class MultiSelect extends React.Component<MultiSelectProps, any> {
  constructor(props) {
    super(props);

    this.state = {
      Selected: props.defaultValue || [],
      closeOnSelect: true,
    };
  }

  public handleChange = event => {
    const { onChange } = this.props;

    const NewArray = this.toggleEntry(event.target.value)();

    if (onChange) {
      onChange({
        target: {
          value: NewArray,
        },
      });
    }
  };

  public clearSelection = () => {
    const { onChange } = this.props;

    this.setState({
      Selected: [],
    });

    if (onChange) {
      onChange({
        target: {
          value: [],
        },
      });
    }
  };

  public handleKeyDown = event => {
    const Key = event.key;

    switch (Key) {
      case "Shift":
        this.setState({
          closeOnSelect: false,
        });
        break;
      default:
        return;
    }
  };

  public handleKeyUp = event => {
    const Key = event.key;

    switch (Key) {
      case "Shift":
        this.setState({
          closeOnSelect: true,
        });
        break;
      default:
        return;
    }
  };

  public render() {
    const {
      onChange,
      options,
      label,
      id = `MultiSelect_${Math.random()}`,
      defaultText = "Please Select",
      clearCSS,
      labelPaddingBottom = 3,
      ...props
    } = this.props;
    const { closeOnSelect } = this.state;

    const LabelMap = options.reduce(
      // Map of Values -> Labels
      (Sum, Entry) => ({
        ...Sum,
        [Entry.value]: Entry.label,
      }),
      {}
    );

    const SelectActiveProps =
      this.state.Selected.length > 0
        ? {
            backgroundColor: "accent",
            color: "background",
          }
        : {};

    const getTextOverride = () => {
      if (this.state.Selected.length > 0) {
        return this.state.Selected.map(ValueKey => LabelMap[ValueKey]).join(
          ", "
        );
      }

      return defaultText;
    };

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
            {this.state.Selected.length > 0 && (
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
                    {this.state.Selected.length}
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
        <Select
          {...SelectActiveProps}
          activeOptions={this.state.Selected}
          textOverride={getTextOverride()}
          onChange={this.handleChange}
          options={options}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          closeOnSelect={closeOnSelect}
          showCheckboxes={true}
          id={id}
          {...props}
        />
      </React.Fragment>
    );
  }

  protected toggleEntry = Entry => () => {
    let NewSelection = [];
    if (this.state.Selected.indexOf(Entry) >= 0) {
      NewSelection = this.state.Selected.filter(Key => Key !== Entry);
    } else {
      NewSelection = [...this.state.Selected, Entry];
    }

    this.setState({
      Selected: NewSelection,
    });

    return NewSelection;
  };
}

export default MultiSelect;
