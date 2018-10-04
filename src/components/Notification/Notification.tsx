import * as React from "react";
import posed from "react-pose";

import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

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

const Trans = posed.div({
  dead: { opacity: 0, marginTop: "-58px", transition: { duration: 300 } },
  alive: { opacity: 1, marginTop: "10px", transition: { duration: 300 } },
});

class Notification extends React.Component<Props, any> {
  public static defaultProps = {
    lifetime: 3000,
    offset: 0,
  };
  constructor(props) {
    super(props);

    this.state = {
      alive: false,
      timerId: null,
    };

    this.close = this.close.bind(this);
  }

  public componentDidMount() {
    this.setState({ alive: true }, () => {
      if (this.props.onLive) {
        this.props.onLive(null);
      }
      const timerId = setTimeout(() => {
        this.setState({ alive: false }, () => {
          if (this.props.onDie) {
            setTimeout(() => {
              this.props.onDie(null);
            }, 300);
          }
        });
      }, this.props.lifetime);
      this.setState({ timerId });
    });
  }

  public componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

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
    } = this.props;

    const iconType =
      type === "success"
        ? "Check"
        : type === "warning"
          ? "Incomplete"
          : "NotPassed";

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <React.Fragment>
            <Trans pose={this.state.alive ? "alive" : "dead"}>
              <View
                backgroundColor="background"
                alignItems="center"
                padding={4}
                margin={3}
                borderRadius={2}
                boxShadow="distant"
                justifyContent="space-between"
                css={{
                  maxWidth: "550px",
                  overflow: "hidden",
                  borderLeft: `4px solid ${colors[type]}`,
                  flexDirection: "row",
                  justifyContent: "justify",
                  transition: "all 0.2s linear",
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
            </Trans>
          </React.Fragment>
        )}
      </Theme.Consumer>
    );
  }
}

export default Notification;
