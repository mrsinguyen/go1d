import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Avatar from "../Avatar";
import BaseMultiselect from "../BaseMultiselect";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface AuthorSelectorProps extends ViewProps {
  optionRenderer?: (
    option: string,
    downshiftProps: { [key: string]: any },
    creating?: boolean
  ) => React.ReactNode;

  /**
   * The selected elements of the component. These will be the email addresses of the users.
   */
  value?: string[];

  /**
   * The options of the component. These will be the email addresses of the users.
   */
  options: string[];

  /**
   * Function to map an email address to it's corresponding user.
   */
  mapEmailToAuthor: (
    email: string
  ) => {
    firstName: string;
    lastName: string;
    avatar?: string;
    mail: string;
    [key: string]: any;
  };

  onInputChange?: (evt: React.SyntheticEvent<HTMLInputElement>) => void;

  onChange?: (evt: any) => void;

  /**
   * Optional function to call when a new option is created. Returns a promise to allow for asynchronous actions to finish before continuing
   */
  onCreate?: (option: string) => Promise<any> | void;

  /**
   * Whether new options may be created. Defaults to true
   */
  createable?: boolean;

  placeholder?: string;
}

interface State {
  value: string[];
  isFocused: boolean;
  search: string;
}

class AuthorSelector extends React.Component<AuthorSelectorProps, State> {
  public state: State = {
    value: [],
    isFocused: false,
    search: "",
  };
  private target: React.RefObject<BaseMultiselect> = React.createRef();

  @autobind
  public onChange(evt) {
    this.setState({
      value: evt.target.value,
    });

    safeInvoke(this.props.onChange, evt);
  }

  @autobind
  public onInputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
    });
    safeInvoke(this.props.onInputChange, evt);
  }

  @autobind
  public getBorderColor() {
    const { isFocused } = this.state;
    const { error, borderColor } = this.props;

    if (error) {
      return "danger";
    }
    if (isFocused) {
      return "accent";
    }

    return borderColor ? borderColor : "soft";
  }

  @autobind
  public renderSelect(Select: React.ReactNode, labelProps: any) {
    const { borderRadius = 2, id, disabled } = this.props;

    return (
      <View
        element="label"
        position="relative"
        flexDirection="row"
        flexWrap="wrap"
        borderRadius={borderRadius}
        backgroundColor="background"
        paddingX={4}
        minHeight={45}
        paddingY={2}
        border={1}
        borderColor={this.getBorderColor()}
        boxShadow="inner"
        alignItems="center"
        htmlFor={id}
        opacity={disabled ? "disabled" : null}
        {...labelProps}
      >
        {Select}
      </View>
    );
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: true });
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: false });
  }

  @autobind
  public renderOption(option: string, downshiftProps, creating = false) {
    const author = creating ? null : this.props.mapEmailToAuthor(option);
    return (
      <View flexDirection="row">
        {creating ? (
          <View flexDirection="row" width={31}>
            <Icon name="PlusCircle" marginX="auto" size={3} />
          </View>
        ) : (
          <Avatar
            marginY="auto"
            fullName={
              author ? `${author.firstName} ${author.lastName}` : option
            }
            avatarType="circle"
            src={author && author.avatar}
            size={3}
            color="background"
            backgroundColor="muted"
          />
        )}
        <View marginLeft={4}>
          <Text>
            {creating
              ? `Create "${option}"`
              : author && `${author.firstName} ${author.lastName}`}
          </Text>
          <Text fontSize={1}>{author && author.mail}</Text>
        </View>
      </View>
    );
  }

  public render() {
    const {
      value = this.state.value || [],
      optionRenderer = this.renderOption,
      options = [],
      onInputChange,
      borderRadius,
      id,
      disabled,
      onChange,
      mapEmailToAuthor,
      ...props
    } = this.props;

    return (
      <React.Fragment>
        <View marginY={2}>
          {value.map(v => {
            const author = mapEmailToAuthor(v);
            return (
              <View flexDirection="row" key={v} marginBottom={4}>
                <Avatar
                  fullName={`${author.firstName} ${author.lastName}`}
                  avatarType="circle"
                  src={author && author.avatar}
                  color="background"
                  backgroundColor="muted"
                  marginRight={4}
                  size={4}
                />
                <View>
                  <Text fontSize={2}>{`${author.firstName} ${
                    author.lastName
                  }`}</Text>
                  <Text fontSize={1}>{author.mail}</Text>
                </View>
                <ButtonMinimal
                  marginLeft="auto"
                  marginY="auto"
                  iconName="Cross"
                  size="sm"
                  width={16}
                  height={16}
                  paddingY={0}
                  round={true}
                  data-value={v}
                  onClick={
                    this.target.current
                      ? this.target.current.handleDelete
                      : null
                  }
                />
              </View>
            );
          })}
        </View>
        <BaseMultiselect
          {...props}
          onInputChange={this.onInputChange}
          ref={this.target}
          customRenderer={this.renderSelect}
          value={value}
          placeholder="Type to select an Author"
          options={options}
          onChange={this.onChange}
          optionRenderer={optionRenderer}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          closeOnSelection={true}
          selectedColor="highlight"
        />
      </React.Fragment>
    );
  }
}

export default AuthorSelector;
