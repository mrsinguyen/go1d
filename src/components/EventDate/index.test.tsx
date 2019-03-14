import * as React from "react";
import { cleanup, render } from "react-testing-library";
import EventDate from "./index";

afterEach(cleanup);

const props = {
  start: "2019-06-28T00:25:00+00:00",
  location: {
    title: "Some place",
  }
}

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<EventDate {...props} />);
});

it("renders without crashing with full options", () => {
  render(
    <EventDate
      title="course 1"
      start="2019-06-28T00:25:00+00:00"
      end="2019-06-28T01:25:00+00:00"
      location={{
        thoroughfare: "High St Kensington",
        title: "UNSW Sydney Campus",
        locality: "Sydney",
        administrative_area: "NSW",
        country: "AU",
      }}
      active={true}
      onClick={mock}
    />
  );
});
