import * as React from "react";

import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  title?: string;
  children?: (ModalInstance) => React.ReactChild;
}

const AbsoluteStyling = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
};

class Modal extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {
      open: props.initOpen || false,
    };

    if (props.disableKeyBindings !== true) {
      document.addEventListener("keydown", this.detectEscape);
    }
  }

  public componentDidMount() {
    if (Object.prototype.hasOwnProperty.call(this.props, "onRef")) {
      this.props.onRef(this);
    }
  }

  public componentWillUnmount() {
    if (Object.prototype.hasOwnProperty.call(this.props, "onRef")) {
      this.props.onRef(undefined);
    }
  }

  public closeModal = () =>
    this.setState({
      open: false,
    });

  public detectEscape = event => {
    if (this.state.open) {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    }
  };

  public openModal = () =>
    this.setState({
      open: true,
    });

  public render() {
    if (this.state.open) {
      return (
        <Theme.Consumer>
          {({ colors }) => {
            return (
              <React.Fragment>
                <View
                  backgroundColor="default"
                  backgroundOpacity="modal"
                  css={{
                    // Background
                    ...AbsoluteStyling,
                    height: "100%",
                    minHeight: "100vh",
                    width: "100%",
                  }}
                />
                <View
                  maxWidth={600}
                  width="100%"
                  zIndex={3}
                  minHeight={300}
                  borderRadius={2}
                  backgroundColor="background"
                  css={{
                    ...AbsoluteStyling,
                    top: "5rem",
                  }}
                >
                  <View
                    paddingY={4}
                    css={{
                      // Header
                      borderBottom: `1px solid ${colors.divide}`,
                      position: "relative",
                    }}
                  >
                    <Icon
                      onClick={this.closeModal}
                      name="Cross"
                      size={3}
                      css={{
                        ...AbsoluteStyling,
                        right: "initial",
                        left: 15,
                        margin: "auto 0",
                        bottom: 0,
                        cursor: "pointer",
                      }}
                    />
                    <Text element="h1" textAlign="center" fontSize={3}>
                      {this.props.title}
                    </Text>
                  </View>
                  <View padding={5}>
                    {this.props.children && this.props.children(this)}
                  </View>
                </View>
              </React.Fragment>
            );
          }}
        </Theme.Consumer>
      );
    }

    return null;
  }
}

export default Modal;
