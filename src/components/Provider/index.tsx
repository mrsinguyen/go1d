import * as React from "react";
import { generateTheme } from "../../foundations";
import Theme from "../Theme";

interface Props {
  LinkComponent?: React.ReactNode;
}

const Provider = ({ LinkComponent, ...props }: Props) => (
  <Theme.Provider value={{ ...generateTheme(props), LinkComponent }} />
);
export default Provider;
