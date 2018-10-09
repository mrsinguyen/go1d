import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Select from "./index";

afterEach(cleanup);

const Options = [
  {
    label: "test",
    value: "test",
  },
  {
    label: "test 1",
    value: "test 1",
  },
  {
    label: "test 2",
    value: "test 2",
  },
];

it("renders without crashing without any optional props", () => {
  render(<Select options={Options} />);
});

it("renders without crashing some optional props", () => {
  render(<Select options={Options} activeOptions={["test 2"]} />);
});

it("Can select an item in the dropdown with keyboard - Enter", () => {
  const ChangeMock = jest.fn();
  const { getByTestId } = render(
    <Select options={Options} onChange={ChangeMock} />
  );

  fireEvent.click(getByTestId("primarySection"));
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "ArrowDown",
  });
  fireEvent.keyDown(getByTestId("primarySection"), {
    key: "Enter",
  });

  expect(ChangeMock.mock.calls.length).toBe(1);
  expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 1");
});

// it("Can select an item in the dropdown with keyboard - Space", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowUp",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: " ",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test");
// });

// it("Can select an item in the dropdown with keyboard - Tab", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Tab",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 2");
// });

// it("Home selects the first entry - Space", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Home",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test");
// });

// it("End selects the first entry - Space", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "End",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 2");
// });

// it("Can blur with escape key", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Escape",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(0);
// });

// it("Can open dropdown on focused input - ArrowDown", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "End",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Derp",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(2);
//   expect(ChangeMock.mock.calls[1][0].target.value).toBe("test 2");
// });

// it("Can open dropdown on focused input - ArrowUp", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Home",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowUp",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(2);
//   expect(ChangeMock.mock.calls[1][0].target.value).toBe("test");
// });

// it("if you go all the way down it should overflow to the top", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "End",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test");
// });

// it("if you go all the way up it should overflow to the botton", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Home",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowUp",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 2");
// });

// it("can't interact with disabled", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select disabled={true} options={Options} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Home",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(0);
// });

// it("can't select without options", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(<Select options={[]} onChange={ChangeMock} />);

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Home",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(0);
// });

// it("Can select a filtered option", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} searchable={true} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "2",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 2");
// });

// it("Clear search filter", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} searchable={true} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "i",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "i",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Clear",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "1",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 1");
// });

// it("Backspace in search filter", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} searchable={true} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "i",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Backspace",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "1",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 1");
// });

// it("Delete in search filter", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} searchable={true} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "i",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Delete",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "1",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 1");
// });

// it("Non Character keys dont show up", () => {
//   const ChangeMock = jest.fn();
//   const { getByTestId } = render(
//     <Select options={Options} searchable={true} onChange={ChangeMock} />
//   );

//   fireEvent.click(getByTestId("primarySection"));
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Control",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "1",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "ArrowDown",
//   });
//   fireEvent.keyDown(getByTestId("primarySection"), {
//     key: "Enter",
//   });

//   expect(ChangeMock.mock.calls.length).toBe(1);
//   expect(ChangeMock.mock.calls[0][0].target.value).toBe("test 1");
// });
