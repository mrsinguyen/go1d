import * as React from "react";
import foundations, { generateTheme } from "../../foundations";

const Theme = React.createContext({
  LinkComponent: null,
  ...foundations,
});

const DarkMode = props => (
  <Theme.Provider
    value={{
      LinkComponent: null,
      ...generateTheme({ darkMode: true }),
    }}
    {...props}
  />
);

export { DarkMode };

export default Theme;
