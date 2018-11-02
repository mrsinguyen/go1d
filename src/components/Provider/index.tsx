import * as React from "react";
import { generateTheme } from "../../foundations";
import { GenerateThemeInput } from "../../foundations/foundation-types";
import Theme from "../Theme";

export interface Props extends GenerateThemeInput {
  linkComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export const LinkContext = React.createContext(null);

const Provider = ({
  linkComponent,
  darkMode,
  accent,
  theme,
  children,
}: Props) => (
  <Theme.Provider value={generateTheme({ darkMode, accent, theme })}>
    <LinkContext.Provider value={linkComponent}>
      {children}
    </LinkContext.Provider>
  </Theme.Provider>
);

export default Provider;
