import DropdownMenuItem from "./index";

const mock = jest.fn();

it("returns item without crashing", () => {
  DropdownMenuItem(
    {
      title: "Add",
      href: "#testing",
      color: "accent",
      iconName: "Plus",
    },
    1,
    mock
  );
});
