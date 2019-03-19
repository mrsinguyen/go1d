import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {ImageUploadSlat} from '../src'; 
storiesOf("ImageUploadSlat", module) 
.add('Basic usage', () => <ImageUploadSlat name="uploader" onChange={console.log}/>) 
