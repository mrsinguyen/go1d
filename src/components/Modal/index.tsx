import * as React from "react";

import foundations from "../../foundations";
import ButtonMinimal from "../ButtonMinimal";
import Portal from "../Portal";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  title?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onRequestClose?: () => void;
  disableKeyBindings?: boolean;
  disableBackgroundClose?: boolean;
}

class Modal extends React.Component<Props, any> {
  public componentDidMount() {
    if (this.props.onRequestClose && this.props.disableKeyBindings !== true) {
      document.addEventListener("keydown", this.detectEscape);
    }
  }

  public componentWillUnmount() {
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
    if (!this.props.isOpen) {
      return null;
    }

    const {
      title,
      isOpen,
      onRequestClose,
      disableBackgroundClose,
      disableKeyBindings,
      children,
      ...viewProps
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors, zIndex }) => (
          <Portal>
            <View
              position="fixed"
              backgroundColor="default"
              backgroundOpacity="modal"
              css={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              data-testid="backgroundOverlay"
              zIndex={zIndex.modalBackdrop}
              onClick={this.handleBackgroundClick}
            />
            <View
              position="absolute"
              maxWidth={600}
              width="100%"
              minHeight={300}
              borderRadius={2}
              backgroundColor="background"
              boxShadow="distant"
              marginX="auto"
              zIndex={zIndex.modal}
              css={{
                top: "5rem",
                left: 0,
                right: 0,
              }}
              {...viewProps}
            >
              <View
                paddingY={4}
                flexDirection="row"
                alignItems="center"
                css={{
                  // Header
                  borderBottom: `1px solid ${colors.divide}`,
                }}
              >
                {onRequestClose && (
                  <ButtonMinimal
                    onClick={onRequestClose}
                    iconName="Cross"
                    size="lg"
                    css={{
                      // Issue with overrides
                      paddingRight: foundations.spacing[5],
                      paddingLeft: foundations.spacing[5],
                    }}
                  />
                )}
                <View flexGrow={1} flexShrink={1}>
                  <Text
                    element="h1"
                    textAlign="center"
                    fontSize={3}
                    css={{
                      wordWrap: "break-word",
                      maxWidth: onRequestClose
                        ? `calc(100% - ${foundations.spacing[5] * 2 + 18}px)`
                        : "100%",
                    }}
                  >
                    {title}
                  </Text>
                </View>
              </View>
              <View padding={5} flexGrow={1}>
                {children}
              </View>
            </View>
          </Portal>
        )}
      </Theme.Consumer>
    );
  }
}

export default Modal;
