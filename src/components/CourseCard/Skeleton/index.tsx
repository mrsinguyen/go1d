import * as React from "react";
import View from "../../View";
import Theme from "../../Theme";

export default () => (
  <Theme.Consumer>
    {({ spacing }) => (
      <View
        borderRadius={2}
        boxShadow="crisp"
        color="default"
        height="100%"
        css={[
          {
            textDecoration: "none",
            width: 221,
          },
        ]}
      >
        <View
          padding={3}
          alignItems="start"
          css={{
            borderRadius: `${spacing[2]}px ${spacing[2]}px 0 0`,
            backgroundColor: "#A6C8D0",
            height: 128,
            width: 221,
          }}
        />
        <View padding={4}>
          <View
            flexDirection="column"
            justifyContent="space-between"
            paddingBottom={2}
          >
            <View css={{
              backgroundColor: "#A6C8D0",
              height: 20,
              maxWidth: 450,
              width: "85%",
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
      </View>
    )}
  </Theme.Consumer>
)