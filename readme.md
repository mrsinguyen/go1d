# GO1D

## Overview
Go1 Design System 

## Maintainers
* Luke Brooker (luke.brooker@go1.com)
* Stephen Mudra (stephen.mudra@go1.com) 

## INSTALLATION
```sh
brew install yarn
yarn install
```

### USING GO1D IN A REACT PROJECT
To get go1d components and styling in your react project, do the following 

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

## PIPELINES
This repository deploys to npm and gitlab pages. This is a MANUAL part of the pipeline. If you want to deploy your changes to npm, follow these steps:

1. Create a merge request of your changes to master. The release tasks will only run for master
2. When your MR has been merged, a pipeline will run. At the end, two manual tasks are created. These are pages and npm
3. To release pages, run the pages task
4. To release to npm, run the release:npm task

## CONTRIBUTE
Before starting work on any new GO1D component check if one is already exists or is in development (See: [Confulence Component Plan](https://go1web.atlassian.net/wiki/spaces/GO1D/pages/449970545/GO1D+Component+Implementation+Plan)). Asking in #topic-front-end is a good way to find out, as well as get input on the component you are about to kick off. (Someone might have worked on something that could be turned into a component in GO1D)
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
Add the svg to src/icons and then run `yarn pixo`. Make sure to include any created files in the commit.

## Documentation
The current components and styles can be viewed at [https://apps.pages.go1.co/GO1D]
