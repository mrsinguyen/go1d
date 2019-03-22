import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {FeaturedTag,View,Carousel} from '../src'; 
storiesOf("FeaturedTag", module) 
.add('Base', () => <View backgroundColor="faint" padding={5}>
  <FeaturedTag>
    Hello World!
  </FeaturedTag>
</View>) 
.add('With all props', () => <FeaturedTag
  size="md"
  color="danger"
  iconColor="default"
  backgroundColor="accent"
  iconName="Check"
>
  Hello World!
</FeaturedTag>) 
.add('With Cards', () => <View backgroundColor="faint" padding={5}>
  <Carousel slidesToShow={2} slideAnimationDuration={150}>
    <FeaturedTag>Test Words</FeaturedTag>
    <FeaturedTag iconName="Star">Test Title</FeaturedTag>
    <FeaturedTag>Lorem Ipsum decor de lesLorem</FeaturedTag>
    <FeaturedTag>Lorem Ipsum decor de lesLorem</FeaturedTag>
    <FeaturedTag iconName="Course">Test Tag</FeaturedTag>
    <FeaturedTag iconName="Check">Infomation Systems</FeaturedTag>
    <FeaturedTag iconName="Check">Programming</FeaturedTag>
  </Carousel>
</View>) 
.add('Interactive styles', () => <FeaturedTag passive={false}>
  Hello World!
</FeaturedTag>) 
