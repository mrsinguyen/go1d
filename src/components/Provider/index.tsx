import * as React from "react";
import { generateTheme } from "../../foundations";
import { GenerateThemeInput } from "../../foundations/foundation-types";
import Theme from "../Theme";

export interface ProviderProps extends GenerateThemeInput {
  linkComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export const LinkContext = React.createContext(null);

const Provider = ({
  linkComponent,
  mode,
  accent,
  theme,
  children,
}: ProviderProps) => (
  <Theme.Consumer>
    {({ colors, mode: currentMode }) => (
      <Theme.Provider
        value={generateTheme({
          mode: mode || currentMode,
          accent: accent || colors.accent,
          theme,
        })}
      >
        {linkComponent !== undefined ? (
          <LinkContext.Provider value={linkComponent}>
            {children}
          </LinkContext.Provider>
        ) : (
          children
        )}
      </Theme.Provider>
    )}
  </Theme.Consumer>
);

export default Provider;
