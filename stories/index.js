import '@babel/polyfill';
import React from 'react';
import {addDecorator, storiesOf, setAddon} from '@storybook/react';
import {Button, View, ButtonFilled} from '../src/';
import { text, select  } from '@storybook/addon-knobs/react';


storiesOf('Button', module)
  .add('with text', () => <ButtonFilled>I'm a button</ButtonFilled>)
  .add('with some emoji', () => (
    <ButtonFilled><span role="img" aria-label="so cool">😀 😎 👍 💯</span></ButtonFilled>
  ));
