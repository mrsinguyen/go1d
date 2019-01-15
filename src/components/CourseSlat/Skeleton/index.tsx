import * as React from "react";
import View from "../../View";
import Theme from "../../Theme";

export default () => (
  <Theme.Consumer>
    {({ spacing, breakpoints }) => (
      <View
        borderRadius={2}
        boxShadow="crisp"
        flexDirection="row"
        marginBottom={4}
        color="default"
        backgroundColor="background"
        width="100%"
        overflow="hidden"
      >
        <View
          padding={3}
          css={{
            height: 142,
            width: 221,
            backgroundColor: "#A6C8D0",
            [breakpoints.sm]: {
              height: 130,
              width: 130,
            },
          }}
        />
        <View padding={5} flexGrow={1}>
          <View css={{
            backgroundColor: "#A6C8D0",
            height: 20,
            maxWidth: 450,
            width: "70%",
            marginBottom: spacing[4],
          }} />
          <View css={{
            backgroundColor: "#CDE2E7",
            height: 13,
            maxWidth: 250,
            width: "50%",
            marginBottom: spacing[3],
          }} />
          <View css={{
            backgroundColor: "#CDE2E7",
            height: 13,
            maxWidth: 215,
            width: "45%",
          }} />
        </View>
      </View>
    )}
  </Theme.Consumer>
)