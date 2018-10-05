import * as React from "react";

import { colors } from "../../foundations";
import Icon from "../Icon";
import Select from "../Select";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  options?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  defaultText?: string;
  onChange?: ({ target: HTMLElement }) => void;
  name?: string;
}

const Pill = ({ LabelMap, SelectedElement, toggleEntry }) => (
  // Pill Shown Above Multi Select
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
        {LabelMap[SelectedElement]}
      </Text>
    </View>
    <View
      paddingX={2}
      color="subtle"
      justifyContent="center"
      height="100%"
      onClick={toggleEntry(SelectedElement)}
      css={{
        "&:hover": {
          color: colors.default,
          cursor: "pointer",
        },
      }}
    >
      <Icon name="Cross" size={1} />
    </View>
  </View>
);

class MultiSelect extends React.Component<Props, any> {
  public Selected = new Set();

  public handleChange = event => {
    const { onChange } = this.props;

    this.toggleEntry(event.target.value)();

    if (onChange) {
      onChange({
        target: {
          value: [...this.Selected],
        },
      });
    }
  };

  public render() {
    const { onChange, options, label, ...props } = this.props;

    const LabelMap = options.reduce(
      // Map of Values -> Labels
      (Sum, Entry) => ({
        ...Sum,
        [Entry.value]: Entry.label,
      }),
      {}
    );

    const SelectActiveProps =
      this.Selected.size > 0
        ? {
            backgroundColor: "accent",
            color: "background",
          }
        : {};

    const getTextOverride = () => {
      if (this.Selected.size > 0) {
        return [...this.Selected]
          .map(ValueKey => LabelMap[ValueKey])
          .join(", ");
      }

      return "Please Select";
    };

    return (
      <React.Fragment>
        <View flexDirection="row">
          {label && (
            <View paddingBottom={3} paddingRight={4}>
              <Text>{label}</Text>
            </View>
          )}
          <View
            flexDirection="row-reverse"
            flexGrow={2}
            flexShrink="initial"
            flexWrap="wrap"
          >
            {[...this.Selected].map(SelectedElement => (
              <Pill
                toggleEntry={this.toggleEntry}
                LabelMap={LabelMap}
                SelectedElement={SelectedElement}
              />
            ))}
          </View>
        </View>
        <Select
          {...SelectActiveProps}
          activeOptions={[...this.Selected]}
          textOverride={getTextOverride()}
          onChange={this.handleChange}
          options={options}
          {...props}
        />
      </React.Fragment>
    );
  }

  protected toggleEntry = Entry => () => {
    if (this.Selected.has(Entry)) {
      this.Selected.delete(Entry);
    } else {
      this.Selected.add(Entry);
    }

    this.forceUpdate();
  };
}

export default MultiSelect;
