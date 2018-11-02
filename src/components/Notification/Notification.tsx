import * as React from "react";
import posed from "react-pose";

// import ButtonMinimal from "../ButtonMinimal";
// import Icon from "../Icon";
import Banner from "../Banner";
import Theme from "../Theme";
import { Props as ViewProps } from "../View";

export interface Props extends ViewProps {
  id: string;
  type: "success" | "warning" | "danger";
  message?: React.ReactChild;
  lifetime: number;
  isOpen: boolean;
  onClose?: ((evt: React.SyntheticEvent) => void);
  onDie?: (() => void);
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
      const timerId = setTimeout(() => {
        this.setState({ alive: false }, () => {
          if (this.props.onDie) {
            setTimeout(() => {
              this.props.onDie();
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

  public close = e => {
    this.setState({ alive: false }, () => {
      clearTimeout(this.state.timerId);
      if (this.props.onClose) {
        this.props.onClose(e);
      }
    });
  };

  public render() {
    const { message, type } = this.props;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <React.Fragment>
            <Trans pose={this.state.alive ? "alive" : "dead"}>
              <Banner type={type} close={this.close} floating={true}>
                {message}
              </Banner>
            </Trans>
          </React.Fragment>
        )}
      </Theme.Consumer>
    );
  }
}

export default Notification;
