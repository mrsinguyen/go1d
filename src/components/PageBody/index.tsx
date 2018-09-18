import { css } from "emotion";
import * as React from "react";

import View, { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  children: React.ReactNode;
  padding?: number;
  paddingX?: number;
  paddingY?: number;
  backgroundColor?: string;
}

const PageBody: React.SFC<Props> = ({
  children,
  backgroundColor = "soft",
  ...props
}: Props) => (
  <View
    paddingX={8}
    paddingY={6}
    backgroundColor={backgroundColor}
    maxWidth={900}
    width="100%"
    {...props}
  >
    {children}
  </View>
);

export default PageBody;
