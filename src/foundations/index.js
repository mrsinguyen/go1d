"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color = require("color");
/**
 * Color utilities
 */
exports.opacify = (hexColor, opaque = 1) => Color(hexColor)
    .fade(1 - opaque)
    .string();
exports.darken = (hexColor, ration = 1) => Color(hexColor)
    .darken(ration)
    .rgb()
    .string();
exports.isDark = color => Color(color).isDark();
exports.getContrastColor = color => exports.isDark(color) ? "lightest" : "darkest";
/**
 * Color
 */
const brandAccent = "#31B8DA";
exports.brandGreys = {
    darkest: "#121F22",
    darker: "#36464B",
    dark: "#798A8F",
    grey: "#C7D5DB",
    light: "#E6EEF2",
    lighter: "#F1F6F9",
    lightest: "#ffffff",
};
exports.themedGreys = {
    lightMode: {
        contrast: exports.brandGreys.darkest,
        default: exports.brandGreys.darker,
        subtle: exports.brandGreys.dark,
        muted: exports.brandGreys.grey,
        divide: exports.opacify(exports.brandGreys.darker, 0.08),
        faded: exports.brandGreys.light,
        soft: exports.brandGreys.lighter,
        background: exports.brandGreys.lightest,
    },
    darkMode: {
        contrast: exports.brandGreys.lightest,
        default: exports.brandGreys.lighter,
        subtle: exports.brandGreys.light,
        muted: exports.brandGreys.grey,
        divide: exports.opacify(exports.brandGreys.lighter, 0.08),
        faded: exports.brandGreys.dark,
        soft: exports.brandGreys.darker,
        background: exports.brandGreys.darkest,
    },
};
const getGreys = (greys = exports.themedGreys, darkMode) => (darkMode ? greys.darkMode : greys.lightMode);
const brandStatuses = {
    green: "#51C133",
    yellow: "#FFDE00",
    orange: "#F6941D",
    red: "#DA3131",
};
exports.opacity = {
    feedback: 0.1,
    pill: 0.3,
    disabled: 0.5,
};
exports.gradients = {
    warmOverlay: "linear-gradient(179.89deg, rgba(255, 255, 239, 0.05) -14.1%, rgba(255, 255, 191, 1e-05) 99.8%),",
    lightWarmOverlay: "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)",
    darkWarmOverlay: "linear-gradient(0deg, rgba(18, 31, 34, 0.05), rgba(18, 31, 34, 0.05)), linear-gradient(179.89deg, rgba(255, 255, 239, 0.05) -14.1%, rgba(255, 255, 191, 1e-05) 99.8%)",
};
exports.generateColors = ({ accent = brandAccent, greys = exports.themedGreys, darkMode = false, statuses = brandStatuses, } = {}) => (Object.assign({ accent }, getGreys(greys, darkMode), { highlight: exports.opacify(accent, 0.15), success: statuses.green, note: statuses.yellow, warning: statuses.orange, danger: statuses.red, gradients: exports.gradients }));
exports.colors = exports.generateColors();
/**
 * Shadows
 */
exports.shadows = {
    crisp: `0px 1px 2px ${exports.opacify(exports.colors.contrast, 0.1)}, 1px 1px 35px ${exports.opacify(exports.colors.contrast, 0.03)}`,
    soft: `0px 1px 3px ${exports.opacify(exports.colors.contrast, 0.06)}, 0px 4px 6px ${exports.opacify(exports.colors.contrast, 0.08)}`,
    strong: `0px 3px 6px ${exports.opacify(exports.colors.contrast, 0.08)}, 0px 7px 14px ${exports.opacify(exports.colors.contrast, 0.1)}`,
    distant: `1px 3px 9px ${exports.opacify(exports.colors.contrast, 0.08)}, 2px 20px 38px ${exports.opacify(exports.colors.contrast, 0.1)}`,
    inner: `inset 1px 1px 5px ${exports.opacify(exports.colors.contrast, 0.1)}`,
    text: `1px 1px 1px ${exports.opacify(exports.colors.contrast, 0.07)}`,
};
/**
 * Type
 */
const defaultFontFamily = "-apple-system,BlinkMacSystemFont,helvetica,'helvetica neue',ubuntu,roboto,noto,'segoe ui',arial,sans-serif";
const sansSerif = "'Open Sans', " + defaultFontFamily;
const monospace = "'Source Code Pro', 'Menlo', monospace";
exports.type = {
    scale: {
        sm: [0, 14, 16, 18, 21, 24, 28, 32, 37],
        md: [0, 13, 16, 19, 23, 28, 33, 40, 48],
        lg: [0, 13, 16, 20, 25, 31, 39, 49, 61],
    },
    family: {
        sansSerif,
        display: sansSerif,
        prose: sansSerif,
        ui: sansSerif,
        mono: monospace,
    },
    weight: {
        normal: 400,
        bold: 600,
    },
    leading: {
        display: 1,
        ui: 1.25,
        prose: 1.5,
    },
    tracking: {
        tightest: "-0.03em",
        tight: "-0.01em",
        normal: 0,
    },
};
/**
 * Spacing
 */
exports.spacing = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256];
/**
 * Transitions
 */
const transitions = {
    subtle: "all .15s ease",
};
/**
 * Breakpoints
 */
exports.breakpoints = {
    sm: "@media(max-width: 599px)",
    md: "@media(min-width: 600px)",
    lg: "@media(min-width: 1100px)",
};
exports.generateTheme = ({ accent = brandAccent, greys = exports.themedGreys, darkMode = false, statuses = brandStatuses, theme = {}, } = {}) => (Object.assign({ colors: exports.generateColors({ accent, greys, darkMode, statuses }), type: exports.type,
    spacing: exports.spacing,
    shadows: exports.shadows,
    transitions,
    breakpoints: exports.breakpoints,
    opacity: exports.opacity }, theme));
const foundations = exports.generateTheme();
exports.default = foundations;
