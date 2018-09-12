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
const emotion_1 = require("emotion");
const React = require("react");
const styleReset = {
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
const Base = (_a) => {
    var { element: Element = "div", children = "", css = [] } = _a, props = __rest(_a, ["element", "children", "css"]);
    return (React.createElement(Element, Object.assign({ className: emotion_1.css(styleReset, css), children: children }, props)));
};
Base.displayName = "Base";
exports.default = Base;
