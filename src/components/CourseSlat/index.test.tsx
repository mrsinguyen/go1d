import * as React from "react";
import { cleanup, render } from "react-testing-library";
import CourseSlat from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<CourseSlat />);
});

it("renders without crashing with all props", () => {
  const testRenderer = () => <p>Hello</p>;
  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author="Bob Bobberson"
      authorAvatar="#"
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      enrollment="completed"
      type="Course"
      typeIcon="Course"
      passive={false}
    />
  );
});

it("renders passive course slats", () => {
  const testRenderer = () => <p>Hello</p>;
  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author="Bob Bobberson"
      authorAvatar="#"
      enrollment="in_progress"
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      type="Course"
      typeIcon="Course"
      passive={true}
    />
  );
});

it("should render author as passed component", () => {
  const testRenderer = () => <p>Hello</p>;
  const author = () => <div>Foo</div>;
  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author={author}
      authorAvatar="#"
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      type="Course"
      typeIcon="Course"
      passive={true}
    />
  );
});
