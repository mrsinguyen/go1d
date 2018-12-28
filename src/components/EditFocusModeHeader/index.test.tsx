import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { Icon, Pill, Text, View } from "../../index";
import EditFocusModeHeader from "./index";

afterEach(cleanup);

it("renders without crashing with all props", () => {
  render(<EditFocusModeHeader returnHref="#test" title="How to Sell" />);
});

it("renders without crashing with all props", () => {
  render(
    <EditFocusModeHeader
      returnHref="#test"
      title="How to Sell"
      subtitle={
        <View flexDirection="row" alignItems="center">
          <View marginRight={4}>
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize={1}
              color="subtle"
            >
              Interactive
            </Text>
          </View>
          <View marginRight={4}>
            <Pill
              color="accent"
              fontSize={1}
              fontWeight="semibold"
              paddingX={3}
              paddingY={1}
            >
              Published
            </Pill>
          </View>
          <View marginRight={4} flexDirection="row" alignItems="center">
            <Icon size={1} name="Check" color="accent" marginRight={2} />
            <Text fontSize={1}>Saved</Text>
          </View>
        </View>
      }
      headerSuffixItems={[
        {
          title: "Done",
          href: "#testing",
          iconName: "Check",
        },
        {
          title: "Visibility and Access",
          href: "#testing",
          iconName: "Eye",
          iconColor: "muted",
        },
        {
          title: "MenuItem1",
          href: "#testing",
          iconName: "Edit",
        },
        {
          title: "DeleteMenuItem",
          href: "#testing",
          iconName: "Trash",
          color: "danger",
        },
      ]}
    />
  );
});
