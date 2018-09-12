"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const foundations_1 = require("../../foundations");
const Theme = React.createContext(foundations_1.default);
const DarkMode = props => (React.createElement(Theme.Provider, Object.assign({ value: foundations_1.generateTheme({ darkMode: true }) }, props)));
exports.DarkMode = DarkMode;
exports.default = Theme;
