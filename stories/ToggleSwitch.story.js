import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {ToggleSwitch,View} from '../src'; 
storiesOf("ToggleSwitch", module) 
.add('Toggle with no props', () => <ToggleSwitch />) 
.add('Toggle with default props', () => <ToggleSwitch defaultValue={true} />) 
.add('Toggle with a different size', () => <View flexDirection="row" alignItems="baseline">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2}/>
    <ToggleSwitch defaultValue={false} size="md" marginRight={2}/>
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2}/>
</View>) 
.add('Toggle with disabled props', () => <View flexDirection="row">
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} disabled={true} />
    <ToggleSwitch defaultValue={true} size="md" marginRight={2} disabled={true} />
</View>) 
