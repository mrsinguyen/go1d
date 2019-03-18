import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {TextArea} from '../src'; 
storiesOf("Textarea", module) 
.add('Label', () => <TextArea id="Testing" />) 
