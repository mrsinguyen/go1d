import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {TextInput,ButtonMinimal} from '../src'; 
storiesOf("TextInput", module) 
.add('Basic TextInput', () => <TextInput id="blank" placeholder="Blank" />) 
.add('TextInput Small Size', () => <TextInput id="Small" size="sm" value="Small" />) 
.add('TextInput Medium Size', () => <TextInput id="Medium" size="md" value="Medium" />) 
.add('TextInput Large Size', () => <TextInput id="Large" size="lg" value="Large" />) 
.add('TextInput with Icon', () => <TextInput id="search" iconName="Search" placeholder="Type here to Search" />) 
.add('TextInput with RightNode', () => <TextInput 
  id="clear" 
  value="Type here to Search" 
  suffixNode={<ButtonMinimal iconName="Cross" color="accent" />}
/>) 
