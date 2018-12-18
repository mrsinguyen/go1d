import * as moment from "moment";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import DatePicker from "./";

afterEach(cleanup);

it("renders with minimal props", () => {
  render(<DatePicker id="dp" />);
});

it("renders and handles changes", () => {
  const date = new Date("2018-12-17T20:10:00");
  const ref: React.RefObject<DatePicker> = React.createRef();
  render(<DatePicker ref={ref} id="dp" defaultValue={date} />);

  const m = moment(date);

  if (ref.current) {
    ref.current.handleFocus({} as any);
    expect(ref.current.state.timeFocused).toBe(true);
    ref.current.onFocusChange({ focused: true });
    expect(ref.current.state.focused).toBe(true);
    ref.current.changeMerridian();
    expect(ref.current.state.date.format("a")).not.toEqual(m.format("a"));
    ref.current.changeHour({ currentTarget: { value: "1" } } as any);
    expect(ref.current.state.date.get("hour")).toBe(1);
    ref.current.changeMinute({ currentTarget: { value: "5" } } as any);
    expect(ref.current.state.date.get("minute")).toBe(5);

    ref.current.handleBlur({} as any);
    expect(ref.current.state.hour).toBe("01");
    expect(ref.current.state.minute).toBe("05");
  }
});

it("renders and handles edge changes", () => {
  const date = new Date("2018-12-17T20:10:00");
  const ref: React.RefObject<DatePicker> = React.createRef();
  render(<DatePicker ref={ref} id="dp" defaultValue={date} />);

  if (ref.current) {
    ref.current.changeHour({ currentTarget: { value: "5" } } as any);
    expect(ref.current.state.date.get("hour")).toBe(17);

    ref.current.handleBlur({} as any);
    expect(ref.current.state.hour).toBe("05");
    ref.current.changeHour({ currentTarget: { value: "20" } } as any);
    expect(ref.current.state.date.get("hour")).toBe(12);
    ref.current.changeMerridian();
    ref.current.changeHour({ currentTarget: { value: "12" } } as any);
    expect(ref.current.state.date.get("hour")).toBe(0);

    ref.current.handleBlur({} as any);
    expect(ref.current.state.hour).toBe("12");
  }
});

it("should display value is blank when value props is empty and allow blank", () => {
  const date = new Date("2018-12-17T20:10:00");
  const ref: React.RefObject<DatePicker> = React.createRef();
  const { container } = render(
    <DatePicker ref={ref} id="dp" defaultValue={date} allowBlank={true} />
  );

  expect(container.querySelector("#dp").getAttribute("value")).toBe("");
});
