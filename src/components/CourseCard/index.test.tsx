import * as React from "react";
import { cleanup, render } from "react-testing-library";
import CourseCard from "./index";

it("renders without crashing without any optional props", () => {
  render(<CourseCard />);

  cleanup();
});

it("renders without crashing with all props", () => {
  render(
    <CourseCard
      typeIcon="Course"
      type="Course"
      duration={74}
      author="Cian O'Leary"
      title="Test Title"
      courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      itemList={[
        {
          title: "Test",
        },
      ]}
      passive={false}
    >
      Hello World!
    </CourseCard>
  );

  cleanup();
});