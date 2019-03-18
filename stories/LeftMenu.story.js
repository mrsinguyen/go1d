import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {LeftMenu,MenuItem} from '../src'; 
storiesOf("LeftMenu", module) 
.add('Collapsible Expanded', () => <LeftMenu title="Content" showMenuButton={true}>
      <MenuItem iconName="Home" href="#testing" collapsed={true}>Overview</MenuItem>
      <MenuItem iconName="Briefcase" href="#testing" collapsed={true}>Partners</MenuItem>
</LeftMenu>) 
.add('Collapsible Collapsed', () => <LeftMenu title="Content">
      <MenuItem iconName="Home" href="#testing">Overview</MenuItem>
      <MenuItem iconName="Briefcase" href="#testing">Partners</MenuItem>
</LeftMenu>) 
