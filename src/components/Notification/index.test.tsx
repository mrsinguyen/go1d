import * as React from "react";
import { cleanup, fireEvent, render, wait } from "react-testing-library";
import {
  NotificationContainer,
  NotificationManager,
  Notifications,
} from "./index";

afterEach(cleanup);

const CloseMock = jest.fn();

const notificationsMock = [
  {
    isOpen: true,
    message: "This is the child.",
    type: "success",
  },
  {
    id: "8.470bf1a2c763d",
    isOpen: true,
    message: "This is the child.",
    type: "warning",
  },
  {
    id: "3.f8287d3dc6f20",
    isOpen: true,
    message: "This is the child.",
    type: "danger",
  },
];

it("renders without crashing without any optional props", () => {
  render(<NotificationContainer />);
});

it("renders and accepts notification push - success", () => {
  render(<NotificationContainer />);

  NotificationManager.success({
    message: "Child",
    options: {
      lifetime: 3000,
      isOpen: true,
    },
  });
});

it("renders and accepts notification push - warning", () => {
  render(<NotificationContainer />);

  NotificationManager.warning({
    message: "Child",
    options: {
      lifetime: 3000,
      isOpen: true,
    },
  });
});

it("renders and accepts notification push - danger", () => {
  render(<NotificationContainer />);

  NotificationManager.danger({
    message: "Child",
    options: {
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
    message: "Child",
    options: {
      lifetime: 3000,
      isOpen: true,
    },
  });

  await wait(() => expect(getByTestId("notification")).toBeFalsy);
});

// component no longer handles click events.
// it("can fire onclick events", () => {
//   const { getByTestId } = render(
//     <Notifications
//       notifications={notificationsMock}
//       removeFromQueue={CloseMock}
//     />
//   );

//   fireEvent.click(getByTestId("link"));

//   expect(ClickMock.mock.calls.length).toBe(1);
// });
