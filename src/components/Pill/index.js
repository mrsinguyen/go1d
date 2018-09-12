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
const View_1 = require("../View");
const Pill = (_a) => {
    var { color = "faded", children } = _a, props = __rest(_a, ["color", "children"]);
    return (React.createElement(View_1.default, Object.assign({ display: "inline-flex", backgroundColor: color, backgroundOpacity: color !== "faded" && "pill", borderRadius: 1, paddingX: 2, paddingY: 1 }, props),
        React.createElement(Text_1.default, { size: 1 }, children)));
};
Pill.displayName = "Pill";
exports.default = Pill;
