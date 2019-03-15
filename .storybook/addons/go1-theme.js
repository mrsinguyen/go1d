import { create } from '@storybook/theming';
import { foundations } from '../../src/';


export default create({
  base: 'dark',

  colorPrimary: foundations.color.accent,
  colorSecondary: foundations.color.accent,
  brandTitle: 'GO1 storybook',

});
