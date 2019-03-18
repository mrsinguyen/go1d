import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Text} from '../src'; 
storiesOf("Text", module) 
.add('Base', () => <Text
  color='subtle'
  fontSize={4}
  fontWeight="semibold"
  lineHeight="paragraph"
>
  My large semibold subtle text
</Text>) 
