import * as React from "react";
import foundations, { generateTheme } from "../../foundations";

const Theme = React.createContext(foundations);

const lightTheme = generateTheme({ darkMode: false });

const darkTheme = generateTheme({ darkMode: true });

export const LightMode = props => (
  <Theme.Provider value={lightTheme} {...props} />
);

export const DarkMode = props => (
  <Theme.Provider value={darkTheme} {...props} />
);

export default Theme;

export const withTheme = Component => {
  return props => (
    <Theme.Consumer>
      {value => <Component {...props} theme={value} />}
    </Theme.Consumer>
  );
};
