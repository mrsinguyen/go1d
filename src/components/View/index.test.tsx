import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import View from "./index";

it("renders without crashing without any optional props", () => {
  render(<View />);
});

it("renders without crashing with all props passed to it", () => {
  const styles = css`
    font-size: 40px;
  `;

  render(
    <View
      element="div"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      flex="0 0 auto"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      marginTop={4}
      marginBottom={4}
      marginRight={4}
      marginLeft={4}
      paddingTop={4}
      paddingBottom={4}
      paddingRight={4}
      paddingLeft={4}
      color="green"
      backgroundColor="pink"
      backgroundOpacity={0.5}
      borderRadius={5}
      width={100}
      minHeight={50}
      maxWidth={50}
      zIndex={999}
      css={styles}
    />
  );
});
