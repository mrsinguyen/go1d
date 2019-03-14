# GO1D 
## Overview
GO1D (Spoken Gold) stands for GO1 Design System and is a library of mostly static components for building interfaces. This repo should contain minimal components with more stateful components being in `GO1D/Mine` module.

## Installation
```sh
npm install @go1d/go1d
```

## Documentation
Can be found at [https://go1d.pages.go1.co/GO1D/](https://go1d.pages.go1.co/GO1D/)


## Build / Run
```sh
npm run docs:dev
npm run npm:dev

npm run docs:build
npm run npm:build
```

## Testing
```sh
npm test --coverage
```

## Live Editing
### Setup
- Clone both repos. This assumes they are in the same directory
- install dependencies of both in their repos via yarn or npm
- in GO1D repo run `npm run npm:dev`
- in another tab run inside content loader folder `npm link ../GO1D/build` (On Windows you might need to stop yarn in GO1D Repo, you also have to relink every time you used npm to add or update a package)
- inside content loader run `npm start`

### Starting
- in GO1D repo run `npm run npm:dev`
- inside content loader run `yarn start`

## Maintainers
* Cian O'Leary (cian.oleary@go1.com)
* Luke Brooker (luke.brooker@go1.com)
* Stephen Mudra (stephen.mudra@go1.com)

## Contribute
Components should be documented in docs/components with at least:
* A one or two line description of the component with it’s use case
* Major use cases of the component
* It’s current development status & release version


## Adding Icons
Add the svg to src/icons and then run `yarn icons`. Make sure to include any created files in the commit.
