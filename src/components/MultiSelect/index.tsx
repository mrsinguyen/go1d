import * as React from "react";

import { colors } from "../../foundations";
import Button from "../Button";
import Select from "../Select";
import Text from "../Text";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  options?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  defaultText?: string;
  onChange?: ({ target: HTMLElement }) => void;
  name?: string;
  label?: string | React.ReactChild;
}

class MultiSelect extends React.Component<Props, any> {
  public state = {
    Selected: [],
    closeOnSelect: true,
  };

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
    const { onChange, options, label, id=`MultiSelect_${Math.random()}`, ...props } = this.props;
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

      return "Please Select";
    };

    return (
      <React.Fragment>
        <View flexDirection="row">
          {label && (
            <View paddingBottom={3} paddingRight={4}>
              {typeof label === "string" ? <Text element="label" htmlFor={id}>{label}</Text> : label}
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
              >
                <View backgroundColor="accent" paddingX={3} paddingY={2}>
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
