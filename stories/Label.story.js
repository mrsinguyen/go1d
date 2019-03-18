import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Label} from '../src'; 
storiesOf("Label", module) 
.add('Label', () => <Label>
Portal Name
</Label>) 
.add('Label with status', () => <Label
    statusText="unavailable"
    statusColor="danger"
>
Portal Name
</Label>) 
