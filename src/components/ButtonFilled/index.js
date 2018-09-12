"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const foundations_1 = require("../../foundations");
const Button_1 = require("../Button");
const Theme_1 = require("../Theme");
const textColor = {
    accent: "background",
    danger: "background",
    background: "subtle",
};
const getTextColor = (color, colors) => textColor[color] || foundations_1.isDark(colors[color]);
const ButtonFilled = (_a) => {
    var { color = "background", children, css } = _a, props = __rest(_a, ["color", "children", "css"]);
    return (React.createElement(Theme_1.default.Consumer, null, ({ colors, shadows }) => (React.createElement(Button_1.default, Object.assign({ backgroundColor: color, color: getTextColor(color, colors), css: [
            {
                background: `${colors.gradients.warmOverlay}, ${colors[color]}`,
                boxShadow: shadows.soft,
                textShadow: getTextColor(color, colors) === "background" && shadows.text,
                "&:hover, &:focus": {
                    background: `${colors.gradients.lightWarmOverlay}, ${colors[color]}`,
                    boxShadow: shadows.strong,
                    transform: "translateY(-1px)",
                },
                "&:active": {
                    background: `${colors.gradients.darkWarmOverlay}, ${colors[color]}`,
                    boxShadow: shadows.crisp,
                    transform: "translateY(1px)",
                },
            },
            css,
        ] }, props), children))));
};
ButtonFilled.displayName = "ButtonFilled";
exports.default = ButtonFilled;
