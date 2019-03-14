import "@babel/polyfill";
import React from "react";
import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {withKnobs} from "@storybook/addon-knobs/react";
import { withA11y } from '@storybook/addon-a11y';
import go1Theme from './go1Theme.js';
import {withSmartKnobs } from "./addons/smart-knobs-go1";
import 'happo-plugin-storybook/register';
import { isHappoRun } from 'happo-plugin-storybook/register';

import PropTable from "./addons/prop-table";
import {globalCSS, View} from "../src";

function loadStories() {
  const req = require.context('../stories', true, /.js$/);
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: 'GO1D Design System',
    panelPosition: 'right',
    theme: go1Theme,
  },
  backgrounds: [
    { name: 'Faint', value: '#F8FBFB', default: true },
  ],
});


if (!isHappoRun()) {
  addDecorator(withA11y);
  addDecorator(withKnobs);
  addDecorator(withSmartKnobs);
  addDecorator(withInfo({
    TableComponent: PropTable,
    header: false, // Global configuration for the info addon across all of your stories.
    inline: true,
  }));
}
const CenterDecorator = storyFn => <View margin={6} justifyContent="center">{storyFn()}</View>;

addDecorator(CenterDecorator);
globalCSS();

configure(loadStories, module);
