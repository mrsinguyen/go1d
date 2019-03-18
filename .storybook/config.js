import "@babel/polyfill";
import React from "react";
import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {withKnobs} from "@storybook/addon-knobs/react";
import { withA11y } from '@storybook/addon-a11y';
import go1Theme from './addons/go1-theme.js';
import {withSmartKnobs } from "./addons/smart-knobs-go1";
import 'happo-plugin-storybook/register';
import { isHappoRun } from 'happo-plugin-storybook/register';

//Customized PropTable
import PropTable from "./addons/prop-table";
import {globalCSS, View} from "../src";

// load stories
function loadStories() {
  const req = require.context('../stories', true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
}

// Themeing
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

// Do not include plugins for Happo Screenshots
if (!isHappoRun()) {
  // Accessibility Plugin
  addDecorator(withA11y);
  // addDecorator(withKnobs); NOT READY YET
  addDecorator(withSmartKnobs);

  // Info Plugin
  addDecorator(withInfo({
    TableComponent: PropTable,
    header: false, // Global configuration for the info addon across all of your stories.
    inline: true,
  }));

  //Wrapp the stories with margin
  const WrapperDecorator = storyFn => <View margin={6}>{storyFn()}</View>;
  addDecorator(WrapperDecorator);
}

// Call GO1D's globalCss
globalCSS();

configure(loadStories, module);
