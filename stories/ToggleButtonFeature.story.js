import React from 'react';
import {storiesOf} from '@storybook/react';
import {View,ToggleButtonFeature} from '../src';
storiesOf("ToggleButtonFeature", module)
.add('Toggle Button Feature', () => <View flexDirection="row">
  <ToggleButtonFeature color="danger" iconName="Danger" marginRight={3}>Oh</ToggleButtonFeature>
  <ToggleButtonFeature iconName="Eye" marginRight={3}>Hi</ToggleButtonFeature>
  <ToggleButtonFeature color="accent" iconName="User">Mark</ToggleButtonFeature>
</View>)
.add('Toggle Button Feature in sizes', () => <View flexDirection="row" alignItems="center">
  <ToggleButtonFeature size="sm" iconName="Star" marginRight={3}>Star</ToggleButtonFeature>
  <ToggleButtonFeature size="md" iconName="User" marginRight={3}>User</ToggleButtonFeature>
  <ToggleButtonFeature size="lg" iconName="Video">Video</ToggleButtonFeature>
</View>)
