import * as React from "react";
import foundations from "../../foundations";

const Theme = React.createContext(foundations);

export const withTheme = Component => {
  return props => (
    <Theme.Consumer>
      {value => <Component {...props} theme={value} />}
    </Theme.Consumer>
  );
};

export default Theme;
