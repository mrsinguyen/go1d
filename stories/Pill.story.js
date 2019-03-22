import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Pill} from '../src'; 
storiesOf("Pill", module) 
.add('Default pill', () => <Pill>Default</Pill>) 
.add('Accent pill', () => <Pill color='accent'>Accent</Pill>) 
.add('Success pill', () => <Pill color='success'>Success</Pill>) 
.add('Note pill', () => <Pill color='note'>Note</Pill>) 
.add('Warning pill', () => <Pill color='warning'>Warning</Pill>) 
.add('Danger pill', () => <Pill color='danger'>Danger</Pill>) 
