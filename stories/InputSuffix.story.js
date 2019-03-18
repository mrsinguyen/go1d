import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {InputSuffix} from '../src'; 
storiesOf("InputSuffix", module) 
.add('Basic InputSuffix', () => <InputSuffix 
    id="test" 
    suffixValue="test.com"
/>) 
