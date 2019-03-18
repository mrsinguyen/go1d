import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {UL,LI} from '../src'; 
storiesOf("Ul", module) 
.add('Basic UL', () => <UL>
    <LI>List Item 1</LI>
    <LI>List Item 2 multiline Text, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</LI>
    <LI>List Item 3</LI>
    <LI>List Item 4</LI>
    <LI>List Item 5</LI>
    <LI>List Item 6</LI>    
</UL>) 
.add('UL with specific icon and color and fontSize', () => <UL iconName="Success" fontSize="3" color="subtle">
    <LI>List Item 1</LI>
    <LI>List Item 2 multiline Text, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</LI>
    <LI>List Item 3</LI>
    <LI>List Item 4</LI>
    <LI>List Item 5</LI>
    <LI>List Item 6</LI>    
</UL>) 
.add('UL with different icons on each Li', () => <UL iconName="Success">
    <LI iconColor="success">Parent Icon</LI>
    <LI iconName="Star">Star Icon</LI>
    <LI iconName="StarOutline">StarOutline Icon</LI>
    <LI iconName="Tag">Tag Icon</LI>
    <LI iconName="Toggle">Toggle Icon</LI>
    <LI iconName="Trash">Trash Icon</LI>
    <LI iconName="Warning">Warning Icon</LI>
    <LI iconName="Video">Video Icon</LI>

</UL>) 
