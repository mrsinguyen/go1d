import * as React from "react";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";

import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  title?: string;
  children?: React.ReactChild;
}

const AbsoluteStyling = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
};

const Unique = () =>
  Math.random()
    .toString(36)
    .substring(2) + new Date().getTime().toString(36);

class Modal extends React.Component<Props, any> {
  private portalNode: HTMLElement;

  constructor(props) {
    super(props);
    this.portalNode = document.createElement("div");
    this.portalNode.setAttribute("data-portal-id", Unique());
    document.body.appendChild(this.portalNode);
  }

  public componentDidMount() {
    if (this.props.onRequestClose && this.props.disableKeyBindings !== true) {
      document.addEventListener("keydown", this.detectEscape);
    }
  }

  public componentWillUnmount() {
    document.body.removeChild(this.portalNode);
    document.removeEventListener("keydown", this.detectEscape);
  }

  public detectEscape = event => {
    if (this.props.isOpen) {
      if (event.keyCode === 27) {
        this.props.onRequestClose();
      }
    }
  };

  public handleBackgroundClick = () => {
    if (
      this.props.onRequestClose &&
      this.props.disableBackgroundClose !== true
    ) {
      this.props.onRequestClose();
    }
  };

  public render() {
    const RenderModal = () => {
      if (this.props.isOpen) {
        return (
          <Theme.Consumer>
            {({ colors }) => (
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
                  data-testid="backgroundOverlay"
                  onClick={this.handleBackgroundClick}
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
                    {this.props.onRequestClose && (
                      <Button
                        css={{
                          ...AbsoluteStyling,
                          right: "initial",
                          left: 15,
                          margin: "auto 0",
                          bottom: 0,
                          cursor: "pointer",
                        }}
                        onClick={this.props.onRequestClose}
                      >
                        <Icon name="Cross" size={3} />
                      </Button>
                    )}
                    <Text element="h1" textAlign="center" fontSize={3}>
                      {this.props.title}
                    </Text>
                  </View>
                  <View padding={5}>{this.props.children}</View>
                </View>
              </React.Fragment>
            )}
          </Theme.Consumer>
        );
      }
      return null;
    };

    return createPortal(RenderModal(), this.portalNode);
  }
}

export default Modal;
