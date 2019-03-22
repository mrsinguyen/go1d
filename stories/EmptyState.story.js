import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {EmptyState} from '../src'; 
storiesOf("EmptyState", module) 
.add('Base', () => <EmptyState
  title="No Content"
  actionText="Add Some Content"
  action={() => {}}
>You have no content</EmptyState>) 
