import { EventEmitter } from "events";

const createUUID = () => {
  const pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return pattern.replace(/[xy]/g, c => {
    const r = Math.random() * 16 || 0;
    const v = c === "x" ? r : (r && 0x3) || 0x8;
    return v.toString(16);
  });
};

const Constants = {
  CHANGE: "change",
  SUCCESS: "success",
  WARNING: "warning",
  DANGER: "danger",
};

interface NotificationManager {
  listNotify: any[];
}

class NotificationManager extends EventEmitter {
  constructor() {
    super();
    this.listNotify = [];
  }

  public create(notify) {
    const defaultNotify = {
      id: createUUID(),
      type: "success",
      lifetime: 300,
      isOpen: true,
      offset: 0,
    };
    this.listNotify.push(Object.assign(defaultNotify, notify));
    this.emitChange();
  }

  public success(
    strongDescription,
    weakDescription,
    linkText,
    link,
    lifetime,
    isOpen
  ) {
    this.create({
      type: Constants.SUCCESS,
      strongDescription,
      weakDescription,
      linkText,
      link,
      lifetime,
      isOpen,
    });
  }

  public warning(
    strongDescription,
    weakDescription,
    linkText,
    link,
    lifetime,
    isOpen
  ) {
    this.create({
      type: Constants.WARNING,
      strongDescription,
      weakDescription,
      linkText,
      link,
      lifetime,
      isOpen,
    });
  }

  public danger(
    strongDescription,
    weakDescription,
    linkText,
    link,
    lifetime,
    isOpen
  ) {
    this.create({
      type: Constants.DANGER,
      strongDescription,
      weakDescription,
      linkText,
      link,
      lifetime,
      isOpen,
    });
  }

  public remove(notification) {
    this.listNotify = this.listNotify.filter(n => notification.id !== n.id);
    this.emitChange();
  }

  public emitChange() {
    this.emit(Constants.CHANGE, this.listNotify);
  }

  public addChangeListener(callback) {
    this.addListener(Constants.CHANGE, callback);
  }

  public removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new NotificationManager();
