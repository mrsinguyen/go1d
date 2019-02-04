import * as React from "react";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Text from "../Text";
import TextInput from "../TextInput";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

interface Options {
  label: string;
  value: any;
}

interface AutocompleteProps extends ViewProps {
  lookupMethod: (evt: any) => void;
  options: Options[];
  onSelectOption: (evt: any) => void;
}

class Autocomplete extends React.Component<AutocompleteProps, any> {
  public state = {
    text: "",
    value: null,
    options: [],
    showDropdown: true,
    selected: false,
  };

  public handleOnChange = event =>
    this.setState(
      {
        text: (event.target as any).value,
        showDropdown: true,
      },
      () => {
        this.props.lookupMethod(this.state.text);
      }
    );

  public handleOnClick = event =>
    this.setState({
      selected: false,
    });

  public selectOption = selection => () => {
    this.setState(
      {
        text: selection.label,
        value: selection.value,
        showDropdown: false,
        selected: true,
      },
      () => {
        this.props.onSelectOption(selection);
      }
    );
  };

  public clear = event => {
    this.setState(
      {
        text: "",
        value: null,
        selected: false,
        showDropdown: true,
      },
      () => {
        this.props.onSelectOption(null);
      }
    );
  };

  public render() {
    const {
      id,
      options,
      inputProps,
      dropdownProps,
      labelProps,
      ...props
    } = this.props;

    const { text, showDropdown, selected } = this.state;

    return (
      <Theme.Consumer>
        {({ colors, spacing, shadows }) => (
          <View {...props}>
            <TextInput
              id={id}
              onChange={this.handleOnChange}
              onClick={this.handleOnClick}
              value={text}
              color={selected ? colors.background : colors.default}
              data-testid="inputElement"
              viewCss={{
                backgroundColor: selected ? colors.accent : colors.background,
                borderColor: selected ? colors.accent : colors.soft,
                boxShadow: selected ? "none" : shadows.inner,
                ...(inputProps && inputProps.css),
              }}
              suffixNode={
                selected ? (
                  <ButtonMinimal
                    borderRadius={10}
                    boxShadow="none"
                    size="sm"
                    height="1.05rem"
                    onClick={this.clear}
                    data-testid="close"
                    paddingX={1}
                    paddingY={1}
                    marginRight={4}
                    iconColor={colors.background}
                    css={{
                      "&:hover": {
                        backgroundColor: colors.background,
                        color: colors.accent,
                      },
                    }}
                    backgroundColor={colors.accent}
                    color={colors.background}
                  >
                    <Icon name="Cross" />
                  </ButtonMinimal>
                ) : null
              }
              {...inputProps}
            />
            {options &&
              text &&
              showDropdown && (
                <View position="relative">
                  <View
                    backgroundColor="background"
                    borderRadius={1}
                    boxShadow="strong"
                    top="40px"
                    position="absolute"
                    zIndex={1001}
                    maxWidth={["none", "none", "320px"]}
                    {...dropdownProps}
                  >
                    {options.map(o => (
                      <Text
                        ellipsis={true}
                        onClick={this.selectOption(o)}
                        paddingY={3}
                        paddingX={4}
                        data-testid="locationElement"
                        key={`${o.label}_option`}
                        {...labelProps}
                        css={{
                          "&:hover, &:active": {
                            backgroundColor: colors.soft,
                          },
                          cursor: "pointer",
                        }}
                      >
                        {o.label}
                      </Text>
                    ))}
                  </View>
                </View>
              )}
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default Autocomplete;
