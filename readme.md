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
Before any pull requests ensure all changed files are run though tslint which should automaticly correct most code styling errors


## Documentation
The current components and styles can be viewed at [https://apps.pages.go1.co/GO1D]