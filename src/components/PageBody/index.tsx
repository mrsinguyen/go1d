import { css } from "emotion";
import * as React from "react";

import Container from "../Container";
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
  <Container
    contain="full"
    backgroundColor={backgroundColor}
    paddingX={8}
    paddingY={6}
    {...props}
  >
    {children}
  </Container>
);

export default PageBody;
