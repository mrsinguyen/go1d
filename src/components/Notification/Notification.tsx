import * as React from "react";
import { Transition } from "react-transition-group";

import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

const AbsoluteStyling = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
};

interface Props extends ViewProps {
  id: string;
  type: "success" | "warning" | "danger";
  strongDescription: string;
  weakDescription?: string;
  linkText?: string;
  link?: string;
  lifetime: number;
  isOpen: boolean;
  onClose?: ((evt: React.SyntheticEvent) => void);
  onDie?: ((evt: React.SyntheticEvent) => void);
  onLive?: ((evt: React.SyntheticEvent) => void);
  offset: number;
}

class Notification extends React.Component<Props, any> {
  public static defaultProps = {
    lifetime: 3000,
    offset: 0,
  };
  constructor(props) {
    super(props);

    this.state = {
      alive: this.props.isOpen,
      timerId: null,
    };

    this.close = this.close.bind(this);
  }

  public componentDidMount() {
    // if (Object.prototype.hasOwnProperty.call(this.props, "onRef")) {
    //   this.props.onRef(this);
    // }
    this.setState({ alive: true }, () => {
      // if (this.props.onLive) {
      //   this.props.onLive(null);
      // }
      // const timerId = setTimeout(() => {
      //   this.setState({ alive: false });
      //   if (this.props.onDie) {
      //     this.props.onDie(null);
      //   }
      // }, this.props.lifetime);
      // this.setState({ timerId });
    });
  }

  public componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  // public trigger() {
  //   this.setState({ alive: true }, () => {
  //     if (this.props.onLive) {
  //       this.props.onLive(null);
  //     }

  //     const timerId = setTimeout(() => {
  //       this.setState({ alive: false });
  //       if (this.props.onDie) {
  //         this.props.onDie(null);
  //       }
  //     }, this.props.lifetime);
  //     this.setState({ timerId });
  //   });
  // }

  public close() {
    this.setState({ alive: false }, () => {
      clearTimeout(this.state.timerId);
      if (this.props.onClose) {
        this.props.onClose(null);
      }
    });
  }

  public render() {
    const {
      link,
      linkText,
      strongDescription,
      weakDescription,
      type,
      offset,
    } = this.props;

    const transitionStyles = {
      entering: { opacity: 0, marginTop: "-100px" },
      entered: { opacity: 1, marginTop: `${67 + (20 + 54) * offset}px` },
      exiting: { opacity: 1, marginTop: `${67 + (20 + 54) * offset}px` },
      exited: { opacity: 0, marginTop: "-100px" },
    };

    const iconType =
      type === "success"
        ? "Check"
        : type === "warning"
          ? "Incomplete"
          : "NotPassed";

    return (
      <Theme.Consumer>
        {({ colors, animation }) => (
          <React.Fragment>
            <Transition in={this.state.alive} timeout={animation.small}>
              {state => (
                <View
                  backgroundColor="background"
                  alignItems="center"
                  padding={4}
                  margin={2}
                  borderRadius={2}
                  boxShadow="distant"
                  width="90%"
                  justifyContent="space-between"
                  css={{
                    ...AbsoluteStyling,
                    ...transitionStyles[state],
                    maxWidth: "550px",
                    overflow: "hidden",
                    borderLeft: `4px solid ${colors[type]}`,
                    flexDirection: "row",
                    justifyContent: "justify",
                  }}
                >
                  <Icon name={iconType} color={type} marginRight={4} />
                  <View
                    flexDirection="row"
                    flexWrap="wrap"
                    css={{
                      maxWidth: "80%",
                    }}
                  >
                    <Text fontWeight="bold">
                      {strongDescription}
                      &nbsp;
                    </Text>
                    <Text>
                      {weakDescription}
                      &nbsp;
                    </Text>
                    {linkText &&
                      link && (
                        <Text>
                          <Link
                            href={link}
                            css={{
                              textDecoration: "underline",
                              fontWeight: 600,
                            }}
                          >
                            {linkText}
                          </Link>
                        </Text>
                      )}
                  </View>
                  <ButtonMinimal
                    borderRadius={10}
                    boxShadow="crisp"
                    size="sm"
                    onClick={this.close}
                  >
                    <Icon name="Cross" color={type} />
                  </ButtonMinimal>
                </View>
              )}
            </Transition>
          </React.Fragment>
        )}
      </Theme.Consumer>
    );
  }
}

export default Notification;
