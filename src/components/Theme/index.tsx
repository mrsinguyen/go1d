import * as React from "react";
import foundations, { generateTheme } from "../../foundations";

const Theme = React.createContext(foundations);

export const DarkMode: React.SFC<object> = (props: object) => (
  <Theme.Provider value={generateTheme({ darkMode: true })} {...props} />
);

export default Theme;
