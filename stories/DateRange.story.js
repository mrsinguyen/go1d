import React from 'react';
import {storiesOf} from '@storybook/react';
import {DateRange} from '../src';
import { isHappoRun } from 'happo-plugin-storybook/register';

// Skipp DateRange picker for Happo since we are not able to achieve consistent screenshots for it for following reasons:
// 1. A Focus into the date range, causes a blinking cursor
// 2. The Picker displays the current month, which can't be influenced in the current implementation
if (!isHappoRun()) {
  storiesOf("DateRange", module)
    .add('Basic Datepicker', () => <DateRange/>)
}
