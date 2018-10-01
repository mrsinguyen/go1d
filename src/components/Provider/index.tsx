import * as React from "react";
import { generateTheme } from "../../foundations";
import { GenerateThemeInput } from "../../foundations/foundation-types";
import Theme from "../Theme";

interface Props {
  LinkComponent?: React.ReactNode;
  children?: React.ReactNode;
}

const Provider = ({
  LinkComponent,
  children,
  ...props
}: Props & GenerateThemeInput) => (
  <Theme.Provider value={{ ...generateTheme(props), LinkComponent }}>
    {children}
  </Theme.Provider>
);
export default Provider;
