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

## BUILD / RUN
```sh
yarn docs:dev
```

## CONTRIBUTE
Before any pull requests ensure all changed files are run though tslint which should automaticly correct most code styling errors

## Adding svg icons
Add the svg to src/icons and then run `yarn pixo`. Make sure to include any created files in the commit (although this handled by a precommit hook, check to be safe).
