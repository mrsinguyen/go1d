import { css as emotion, Interpolation } from "emotion";
import * as React from "react";

export interface Props {
  element?: string | React.ComponentType;
  children?: JSX.Element[] | JSX.Element | string;
  css?: Interpolation[];
  [key: string]: any;
}

const styleReset: Interpolation = {
  margin: 0,
  padding: 0,
  textDecoration: "none",
  color: "inherit",
  border: "none",
  textAlign: "inherit",
  fontWeight: "inherit",
  appearance: "none",
  outline: 0,
};

const Base: React.SFC<Props> = ({
  element: Element = "div",
  children = "",
  css = [],
  ...props
}: Props) => (
  <Element
    className={emotion(styleReset, css)}
    children={children}
    {...props}
  />
);

Base.displayName = "Base";

export default Base;
