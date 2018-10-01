/**
 * interfaces
 */
export type FontFamily = "sansSerif" | "display" | "prose" | "ui" | "mono";

export type FontWeight = "normal" | "bold";

export type Gradients = "warmOverlay" | "lightWarmOverlay" | "darkWarmOverlay";

export type Greys =
  | "contrast"
  | "default"
  | "subtle"
  | "muted"
  | "divide"
  | "faded"
  | "soft"
  | "background";

export type Leading = "display" | "ui" | "prose";

export type Scale = "sm" | "md" | "lg";

export type Shadows =
  | "crisp"
  | "soft"
  | "strong"
  | "distant"
  | "inner"
  | "text";

export type MenuTransition = "closedMenu" | "openedMenu";

export type Statuses = "green" | "yellow" | "orange" | "red";

export type ThemedGreys = "lightMode" | "darkMode";

export type Tracking = "tightest" | "tight" | "normal";

export type Measure = "narrow" | "normal" | "wide" | "full";

export type Animation = "subtle";

// This creates a map type where all keys are required.
// e.g. MappedKeys<Scale, string> is a mapping of all things in Scale to a string
export type MappedKey<K extends string, T> = { [P in K]: T };

export interface ColorArguments {
  accent?: string;
  greys?: MappedKey<ThemedGreys, MappedKey<Greys, string>>;
  darkMode?: boolean;
  statuses?: MappedKey<Statuses, string>;
}

export interface Colors {
  accent: string;
  contrast?: string | number;
  darkMode?: boolean;
  gradients: MappedKey<Gradients, string>;
  muted: string;
  statuses?: object;
  highlight: string;
  note: string;
  warning: string;
  danger: string;
  black?: string;
  faded?: string;
  success: string;
  default: string;
  subtle: string;
  divide: string;
  soft: string;
  background: string;
}

export interface ThemeType {
  scale: MappedKey<Scale, number[]>;
  family: MappedKey<FontFamily, string>;
  weight: MappedKey<FontWeight, number>;
  leading: MappedKey<Leading, number>;
  tracking: MappedKey<Tracking, string | 0>;
  measure: MappedKey<Measure, string>;
}

export interface Theme {
  colors: Colors;
  type: ThemeType;
  spacing: number[];
  shadows: MappedKey<Shadows, string>;
  transitions: MappedKey<"subtle", string>;
  breakpoints: object;
  opacity: object;
  animation: MappedKey<Animation, number>;
}

export interface GenerateThemeInput {
  accent?: string;
  greys?: MappedKey<ThemedGreys, MappedKey<Greys, string>>;
  darkMode?: boolean;
  statuses?: MappedKey<Statuses, string>;
  theme?: Theme;
}
