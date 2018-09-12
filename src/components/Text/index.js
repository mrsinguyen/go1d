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
const Base_1 = require("../Base");
const Theme_1 = require("../Theme");
const Text = (_a) => {
    var { element = "span", fontWeight, fontFamily, fontStyle, lineHeight, fontSize = 2, color, css } = _a, props = __rest(_a, ["element", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "fontSize", "color", "css"]);
    return (React.createElement(Theme_1.default.Consumer, null, ({ colors, type, breakpoints, transitions }) => (React.createElement(Base_1.default, Object.assign({ element: element, css: [
            Object.assign({ color: color === undefined ? colors.black : colors[color] || color, fontFamily: fontFamily
                    ? type.family[fontFamily]
                    : type.family.sansSerif, fontStyle, fontWeight: fontWeight && type.weight[fontWeight], lineHeight: lineHeight && type.leading[lineHeight], transition: transitions.subtle, whiteSpace: "pre-wrap", wordWrap: "break-word" }, Object.keys(breakpoints).reduce((acc, bpKey) => (Object.assign({}, acc, { [breakpoints[bpKey]]: {
                    fontSize: type.scale[bpKey][fontSize],
                } })), {})),
            css,
        ] }, props)))));
};
Text.displayName = "Text";
exports.default = Text;
