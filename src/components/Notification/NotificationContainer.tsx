import * as React from "react";
import View from "../View";
import NotificationManager from "./NotificationManager";
import Notifications from "./Notifications";

const AbsoluteStyling = {
  position: "fixed" as "fixed",
  top: "87px",
  left: 0,
  right: 0,
  margin: "0 auto",
  maxWidth: "560px",
  width: "100%",
};

class NotificationContainer extends React.Component {
  public state = {
    notifications: [],
  };

  public componentDidMount() {
    NotificationManager.addChangeListener(this.handleStoreChange);
  }

  public componentWillUnmount() {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  }

  public handleStoreChange = notifications => {
    this.setState({
      notifications,
    });
  };

  public handleRemove = notification => {
    NotificationManager.remove(notification);
  };

  public render() {
    const { notifications } = this.state;
    return (
      <View
        css={{
          ...AbsoluteStyling,
        }}
      >
        <Notifications
          notifications={notifications}
          removeFromQueue={this.handleRemove}
        />
      </View>
    );
  }
}

export default NotificationContainer;
