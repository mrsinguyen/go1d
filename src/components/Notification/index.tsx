import * as React from "react";
import { Transition } from "react-transition-group";

import Button from "../Button";
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";
import Theme from "../Theme";
import View, { Props as ViewProps } from "../View";

const duration = 600;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0, marginTop: '-100px' },
  entered:  { opacity: 1, marginTop: '87px' },
  exiting:  { opacity: 1, marginTop: '87px' },
  exited:   { opacity: 0, marginTop: '-100px' },
};

const AbsoluteStyling = {
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
};

interface Props extends ViewProps {
  type: "success" | "warning" | "danger";
  description?: string;
  linkText?: string;
  link?: string;
  lifetime: number;
  isOpen: boolean;
  onRequestClose?: ((evt: React.SyntheticEvent) => void);
}

class Notification extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {
      alive: this.props.isOpen,
    };
  }

  static defaultProps = {
    lifetime: 3000
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

  public onClose() {
    this.setState({alive: false}, () => {
      console.log('announce close');
    });
  }

  public trigger() {
    this.setState({alive: true}, () => {
      setTimeout(() => {
        this.setState({alive: false})
      }, this.props.lifetime);
    });
  }

  public render() {
    const { isOpen, link, linkText, description, onRequestClose, type } = this.props;
    return (
      <Theme.Consumer>
        {({ colors, animation }) => (
          <React.Fragment>
            <Transition
              in={this.state.alive}
              timeout={animation.small}
            >
              {(state) => (
                <View
                  backgroundColor="background"
                  alignItems="center"
                  padding={1} 
                  margin={2}
                  borderRadius={2}
                  boxShadow="distant"
                  css={{
                    ...AbsoluteStyling,
                    ...transitionStyles[state],
                    maxWidth: '550px',
                    maxHeight: '100px',
                    overflow: 'hidden',
                    width: '90%',
                    borderLeft: `4px solid ${colors[type]}`,
                    display: 'inline-flex',
                  }}
                >
                  <Icon name="Check" color={type} />
                  <Text fontWeight="600">{description}</Text>
                  {linkText && link && <Link href={link}>{linkText}</Link>}

                  {onRequestClose &&
                    <Icon name="Close" onClick={onRequestClose} color={type} />
                  }
                </View>
              )}
            </Transition>
          </React.Fragment>
        )}
      </Theme.Consumer>
    )
  };

}

export default Notification;
