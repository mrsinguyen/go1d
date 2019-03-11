# GO1D 
## Overview
GO1 Design System

## Maintainers
* Luke Brooker (luke.brooker@go1.com)
* Stephen Mudra (stephen.mudra@go1.com)

## INSTALLATION
```sh
brew install yarn
yarn install
```

### USING GO1D IN A REACT PROJECT
To get GO1D components and styling in your react project, do the following

* If you are using yarn:
```sh
yarn add @go1d/go1d
```

* Otherwise
```sh
npm install @go1d/go1d
```

Then it is as simple as importing the components as required. For example:

```js
import { Button } from "@go1d/go1d"
```

## BUILD / RUN
```sh
yarn docs:dev
```

## HOW TO TEST
```sh
yarn test
```

## HOW TO DEBUG TESTS IN CHROME
Add a `debugger;` statement in the test that you want to debug. Then run the following command in your terminal:
```sh
yarn test:debug
```
Now open a new tab in Chrome and go to `about:inspect`

## Live Editing GO1D
### Setup
- Clone both repos. This assumes they are in the same directory
- install dependencies of both in their repos via yarn or npm
- in GO1D repo run `yarn run npm:dev`
- in another tab run inside content loader folder `npm link ../GO1D/build` (On Windows you might need to stop yarn in GO1D depo, you also have to relink every time you used yarn to add or update a package)
- inside content loader run `yarn start`

### Starting
- in GO1D repo run `yarn run npm:dev`
- inside content loader run `yarn start`

## CONTRIBUTE
Before starting work on any new GO1D component check if one is already exists or is in development. Asking in #topic-front-end is a good way to find out, as well as get input on the component you are about to kick off. (Someone might have worked on something that could be turned into a component in GO1D)
When starting a new component be sure to update the Confluence documentation so others will know what you are working on.

Components should be fully tested, if being used in a specific use case consider adding tests for that to ensure future contributions wont break the usage of the component.

Components should be documented in docs/components with at least:
* A one or two line description of the component with it’s use case
* An in-line example of the component
* A listing of all the props the component accepts
* It’s current development status & release version

All commits should be run through `yarn tslint` to ensure coding standards. This will also automatically format code if possible.

When releasing a new component or making significant changes post the MR link into the #topic-front-end channel to inform the team that a new component is ready and gives everyone a chance to give it a once over.

### ADDING SVG ICONS
Add the svg to src/icons and then run `yarn icons`. Make sure to include any created files in the commit.
