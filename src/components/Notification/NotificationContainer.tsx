import * as React from "react";
import NotificationManager from "./NotificationManager";
import Notifications from "./Notifications";

class NotificationContainer extends React.Component {
  public state = {
    notifications: [],
  };

  public componentWillMount = () => {
    NotificationManager.addChangeListener(this.handleStoreChange);
  };

  public componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  };

  public handleStoreChange = notifications => {
    this.setState({
      notifications,
    });
  };

  public handleRequestHide = notification => {
    NotificationManager.remove(notification);
  };

  public render() {
    const { notifications } = this.state;
    return <Notifications notifications={notifications} />;
  }
}

export default NotificationContainer;
