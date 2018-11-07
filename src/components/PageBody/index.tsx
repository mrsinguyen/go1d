import * as React from "react";

import Container from "../Container";
import { ViewProps } from "../View";

export interface PageBodyProps extends ViewProps {
  backgroundColor?: string;
}

const PageBody: React.SFC<PageBodyProps> = ({
  children,
  backgroundColor = "soft",
  ...props
}: PageBodyProps) => (
  <Container
    contain="full"
    backgroundColor={backgroundColor}
    paddingX={8}
    paddingY={6}
    flexGrow={1}
    {...props}
  >
    {children}
  </Container>
);

export default PageBody;
