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
const Base_1 = require("../Base");
const Theme_1 = require("../Theme");
const applySpacing = (spacing = [], space) => {
    if (space === undefined) {
        return;
    }
    if (spacing[space] !== undefined) {
        return spacing[space];
    }
    if (spacing[Math.abs(space)]) {
        return spacing[Math.abs(space)] * -1;
    }
    if (space > spacing[spacing.length - 1] ||
        Math.abs(space) > spacing[spacing.length - 1]) {
        return space;
    }
    // tslint:disable-next-line no-console
    return console.error("Please use spacing scale for value smaller than " +
        spacing[spacing.length - 1]);
};
const View = (_a) => {
    var { element = "div", display = "flex", flexDirection = "column", flexWrap, flex = "0 0 auto", alignItems, justifyContent, position, 
    // Reset margins by default
    margin = 0, marginX = margin, marginY = margin, marginTop = marginY, marginBottom = marginY, marginRight = marginX, marginLeft = marginX, padding, paddingX = padding, paddingY = padding, paddingTop = paddingY, paddingBottom = paddingY, paddingRight = paddingX, paddingLeft = paddingX, color, backgroundColor, backgroundOpacity, borderRadius, width, minHeight, maxWidth, zIndex, css } = _a, props = __rest(_a, ["element", "display", "flexDirection", "flexWrap", "flex", "alignItems", "justifyContent", "position", "margin", "marginX", "marginY", "marginTop", "marginBottom", "marginRight", "marginLeft", "padding", "paddingX", "paddingY", "paddingTop", "paddingBottom", "paddingRight", "paddingLeft", "color", "backgroundColor", "backgroundOpacity", "borderRadius", "width", "minHeight", "maxWidth", "zIndex", "css"]);
    return (React.createElement(Theme_1.default.Consumer, null, ({ spacing: s, colors, transitions, opacity }) => (React.createElement(Base_1.default, Object.assign({ element: element, css: [
            {
                display,
                alignItems,
                justifyContent,
                flexDirection,
                flexWrap,
                flex,
                position,
                width,
                maxWidth,
                zIndex,
                marginTop: applySpacing(s, marginTop),
                marginBottom: applySpacing(s, marginBottom),
                marginRight: applySpacing(s, marginRight),
                marginLeft: applySpacing(s, marginLeft),
                paddingTop: applySpacing(s, paddingTop),
                paddingBottom: applySpacing(s, paddingBottom),
                paddingRight: applySpacing(s, paddingRight),
                paddingLeft: applySpacing(s, paddingLeft),
                // fix flexbox bugs
                minHeight: 0,
                minWidth: 0,
                color: colors[color],
                backgroundColor: opacity[backgroundOpacity]
                    ? foundations_1.opacify(colors[backgroundColor], opacity[backgroundOpacity])
                    : colors[backgroundColor],
                borderRadius: [borderRadius],
                transition: transitions.subtle,
            },
            css,
        ] }, props)))));
};
View.displayName = "View";
exports.default = View;
