import * as React from "react";
import Notification from "./Notification";

interface Props {
  notifications: any[];
}

class Notifications extends React.Component<Props, any> {
  public static defaultProps = {
    notifications: [],
  };

  public render() {
    const { notifications } = this.props;
    return (
      <div>
        {notifications.map((notification, i) => {
          const key = notification.id || new Date().getTime();
          const {
            strongDescription,
            weakDescription,
            type,
            onClose,
            onDie,
            onLive,
            link,
            linkText,
            lifetime,
          } = notification;
          return (
            <Notification
              key={key}
              id={key}
              strongDescription={strongDescription}
              weakDescription={weakDescription}
              type={type}
              onClose={onClose}
              onDie={onDie}
              onLive={onLive}
              link={link}
              linkText={linkText}
              lifetime={lifetime}
              isOpen={true}
              offset={i}
            />
          );
        })}
      </div>
    );
  }
}

export default Notifications;
