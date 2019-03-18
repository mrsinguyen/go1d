import React from 'react';
import {storiesOf} from '@storybook/react';
import {DatePicker} from '../src';
storiesOf("DatePicker", module)
.add('Basic Datepicker', () => <DatePicker id="id1" allowBlank />)
.add('Date Supplied', () => <DatePicker id="id2" date={new Date("2019-06-07")} />)
.add('Disabled Datepicker', () => <DatePicker id="id3" disabled />)
.add('Sizes', () => <React.Fragment>
    <DatePicker id="id4" size="sm"/>
    <br />
    <DatePicker id="id4" size="md"/>
    <br />
    <DatePicker id="id4" size="lg"/>
</React.Fragment>)
.add('Basic Datepicker with Time', () => <DatePicker id="id5" time={true} />)
