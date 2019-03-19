import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Spinner} from '../src'; 
storiesOf("Spinner", module) 
.add('Basic Author Selector', () => <Spinner size={5}/>) 
