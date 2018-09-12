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
const ButtonMinimal = (_a) => {
    var { color = "subtle", children, css } = _a, props = __rest(_a, ["color", "children", "css"]);
    return (React.createElement(Theme_1.default.Consumer, null, ({ colors = { faded: undefined, muted: undefined } }) => (React.createElement(Button_1.default, Object.assign({ color: color, css: [
            {
                "&:hover, &:focus": {
                    backgroundColor: colors.faded,
                    color: foundations_1.darken(colors[color], 0.2),
                },
                "&:active": {
                    backgroundColor: colors.muted,
                    color: foundations_1.darken(colors[color], 0.3),
                },
            },
            css,
        ] }, props), children))));
};
ButtonMinimal.displayName = "ButtonMinimal";
exports.default = ButtonMinimal;
