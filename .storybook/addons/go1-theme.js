import { create } from '@storybook/theming';
import { foundations } from '../../src/';


export default create({
  base: 'dark',

  colorPrimary: foundations.colors.accent,
  colorSecondary: foundations.colors.accent,
  brandTitle: 'GO1 storybook',

});
