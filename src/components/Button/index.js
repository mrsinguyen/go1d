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
const Text_1 = require("../Text");
const Theme_1 = require("../Theme");
const View_1 = require("../View");
const sizes = {
    sm: 1,
    md: 2,
    lg: 3,
};
const Button = (_a) => {
    var { size = "md", color = "subtle", backgroundColor = "lightest", children, css } = _a, props = __rest(_a, ["size", "color", "backgroundColor", "children", "css"]);
    return (React.createElement(Theme_1.default.Consumer, null, ({ colors, type }) => (React.createElement(View_1.default, Object.assign({ element: "button", flexDirection: "row", alignItems: "center", paddingY: size === "lg" ? 3 : 2, paddingX: size === "lg" ? 4 : 3, backgroundColor: backgroundColor, color: color, borderRadius: 1, css: [
            {
                cursor: "pointer",
                "&:disabled": {
                    opacity: 0.5,
                    pointerEvents: "none",
                },
            },
            css,
        ] }, props),
        React.createElement(Text_1.default, { lineHeight: "ui", fontWeight: "bold", fontSize: sizes[size], color: "inherit" }, children)))));
};
Button.displayName = "Button";
exports.default = Button;
