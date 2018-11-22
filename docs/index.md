---
title: GO1D
status: ready
menuTitle: Overview
lead: GO1D is GO1’s design system. It is a collection of design resources, reusable components and guidelines for creating GO1 products.
---

## Setting Up GO1D

### Installing
Run `yarn add @go1d/go1d` or `npm install -s @go1d/go1d` to install go1d into the NPM package of the project you are working one.

### Global CSS Reset & Fonts
Most GO1D components require you to call the globalCSS function to add the required CSS rules and fonts to the project. 
If GO1D components look different to the documentation website this is the most likely cause.

The easiest way to do this is to include the following code in the root javascript file of the project.
```
import { globalCSS } from "@go1d/go1d";
globalCSS();
```

### Provider
#### Themes
The theme provider allows you to customise the colours across all child GO1D components.

It's recommended to include the Provider component in the root javascript file of the project. 
If you need to control the Provider based on http requests ensure the Provider is as high up the DOM tree as possible.
```
import { Provider } from "@go1d/go1d";
ReactDOM.render(<Provider accent="yellow"><App /></Provider>, domNode);
```

#### Links
If your project is using React Router or another routing solution you will need to also pass in a Link Component into the Provider.
This will ensure all link's rendered by GO1D components will be passed though the Router of choice.

A Link in GO1D expects the same props as a DOM anchor tag. So if you are using React Router you will need to create a wrapping component
to translate the `href` prop to `to`
```
ReactDOM.render(<Provider linkComponent={Link}><App /></Provider>, domNode);
```

### Main Components
With GO1D you wont need to write much CSS if any at all as all the customisation is controlled via props on the components. 

The most fundamental component for building a UI is the View Component.

All Text should be wrapped in a Text Component
