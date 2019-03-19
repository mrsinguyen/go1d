import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {DateRange,View} from '../src'; 
storiesOf("DateRange", module) 
.add('Basic Datepicker', () => <View width={250}>
    <DateRange />
</View>) 
