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
const View_1 = require("../View");
const Icons = require("../../icons");
const Icon = (_a) => {
    var { name } = _a, props = __rest(_a, ["name"]);
    const Component = Icons[name];
    if (!Component) {
        return null;
    }
    const renderComponent = componentProps => React.createElement(Component, Object.assign({}, componentProps));
    return React.createElement(View_1.default, Object.assign({ element: renderComponent }, props));
};
Icon.displayName = "Icon";
exports.default = Icon;
