import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {View,Text} from '../src'; 
storiesOf("View", module) 
.add('Basic Usage', () => <View><Text>My View</Text></View>) 
.add('Responsive Examples', () => <React.Fragment>
    <View flexDirection="row" flexWrap="wrap">
        <View width={[1/3,1/6,1/12]}><Text>A</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>B</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>C</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>D</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>A</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>B</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>C</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>D</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>A</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>B</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>C</Text></View>
        <View width={[1/3,1/6,1/12]}><Text>D</Text></View>
    </View>
    <View flexDirection="row" flexWrap="wrap">
        <View width={[1,1/2,1/4]}><Text>A</Text></View>
        <View width={[1,1/2,1/4]}><Text>B</Text></View>
        <View width={[1,1/2,1/4]}><Text>C</Text></View>
        <View width={[1,1/2,1/4]}><Text>D</Text></View>
    </View>
</React.Fragment>) 
