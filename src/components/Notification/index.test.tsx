import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import {
  NotificationContainer,
  NotificationManager,
  Notifications,
} from "./index";

afterEach(cleanup);

const notificationsMock = [
  {
    isOpen: true,
    link: "https://foo.com",
    linkText: "81 imports",
    strongDescription: "1 course sent for import.",
    type: "success",
    weakDescription: "You now have",
  },
  {
    id: "8.470bf1a2c763d",
    isOpen: true,
    link: "https://foo.com",
    linkText: "here.",
    strongDescription: "Careful,",
    type: "warning",
    weakDescription: "read more",
  },
  {
    id: "3.f8287d3dc6f20",
    isOpen: true,
    link: "https://foo.com",
    linkText: "here.",
    strongDescription: "There was an error.",
    type: "danger",
    weakDescription: "Read more",
  },
];

it("renders without crashing without any optional props", () => {
  render(<NotificationContainer />);
});

it("renders and accepts notification push - success", () => {
  render(<NotificationContainer />);

  NotificationManager.success(
    "1 course sent for import.",
    "You now have",
    "81 imports",
    "https://foo.com",
    3000,
    true
  );
});

it("renders and accepts notification push - warning", () => {
  render(<NotificationContainer />);

  NotificationManager.warning(
    "Careful,",
    "read more",
    "here.",
    "https://foo.com",
    3000,
    true
  );
});

it("renders and accepts notification push - danger", () => {
  render(<NotificationContainer />);

  NotificationManager.danger(
    "There was an error.",
    "Read more",
    "here.",
    "https://foo.com",
    3000,
    true
  );
});

it("renders and removes from queue", () => {
  const close = () => {
    NotificationManager.remove(notificationsMock[0]);
  };

  render(
    <NotificationContainer>
      <Notifications
        notifications={notificationsMock}
        removeFromQueue={close}
      />
    </NotificationContainer>
  );
});

it("can close and remove from queue", () => {
  const CloseMock = jest.fn();

  const { getByTestId } = render(
    <Notifications
      notifications={notificationsMock}
      removeFromQueue={CloseMock}
    />
  );

  fireEvent.click(getByTestId("closeNotification"));

  expect(CloseMock.mock.calls.length).toBe(1);
});
