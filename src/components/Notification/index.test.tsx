import * as React from "react";
import { cleanup, fireEvent, render, wait } from "react-testing-library";
import {
  NotificationContainer,
  NotificationManager,
  Notifications,
} from "./index";

afterEach(cleanup);

const ClickMock = jest.fn();
const CloseMock = jest.fn();
const DieMock = jest.fn();

const notificationsMock = [
  {
    isOpen: true,
    onClick: ClickMock,
    linkText: "81 imports",
    strongDescription: "1 course sent for import.",
    type: "success",
    weakDescription: "You now have",
  },
  {
    id: "8.470bf1a2c763d",
    isOpen: true,
    onClick: ClickMock,
    linkText: "here.",
    strongDescription: "Careful,",
    type: "warning",
    weakDescription: "read more",
  },
  {
    id: "3.f8287d3dc6f20",
    isOpen: true,
    onClick: ClickMock,
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

  NotificationManager.success({
    strong: "1 course sent for import.",
    weak: "You now have",
    options: {
      linkText: "81 imports",
      onClick: ClickMock,
      lifetime: 3000,
      isOpen: true,
    },
  });
});

it("renders and accepts notification push - warning", () => {
  render(<NotificationContainer />);

  NotificationManager.warning({
    strong: "Careful,",
    weak: "read more",
    options: {
      linkText: "here.",
      onClick: ClickMock,
      lifetime: 3000,
      isOpen: true,
    },
  });
});

it("renders and accepts notification push - danger", () => {
  render(<NotificationContainer />);

  NotificationManager.danger({
    strong: "There was an error.",
    weak: "Read more",
    options: {
      linkText: "here.",
      onClick: ClickMock,
      lifetime: 3000,
      isOpen: true,
    },
  });
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
  const { getByTestId } = render(
    <Notifications
      notifications={notificationsMock}
      removeFromQueue={CloseMock}
    />
  );

  fireEvent.click(getByTestId("closeNotification"));

  expect(CloseMock.mock.calls.length).toBe(1);
});

it("can die and remove from queue", async () => {
  const { getByTestId } = render(<NotificationContainer />);

  NotificationManager.warning({
    strong: "Careful,",
    weak: "read more",
    options: {
      linkText: "here.",
      onClick: ClickMock,
      lifetime: 10,
      isOpen: true,
    },
  });

  await wait(() => expect(getByTestId("notification")).toBeFalsy);
});

it("can fire onclick events", () => {
  const { getByTestId } = render(
    <Notifications
      notifications={notificationsMock}
      removeFromQueue={CloseMock}
    />
  );

  fireEvent.click(getByTestId("link"));

  expect(ClickMock.mock.calls.length).toBe(1);
});
