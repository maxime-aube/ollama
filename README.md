# node-ts starter template

This is a starter repository for nodejs projects in Typescript made in node v20.11. You'll find:

- Typescript and eslint preconfigured for NodeNext
- a 'hello world' Express server
- the basic necessary npm scripts for running a ts dev server and app bundling

## Installation

run the followign commands from the project's root directory

```bash
npm install # installs npm dependencies
cp .env.local.sample .env.local # creates a local env file from the project's sample file
```

## Running a dev server

the following command will start a local dev server

```bash
npm run dev # runs a typescript watcher along with a node watcher on the dist/index.js file
```

## Starting the application

the following command will compile the typescript code and start the app

```bash
npm run start # lint, compiles and start the server on dist/index.js
```
