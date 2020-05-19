# QuizThing

## Requirements

- Node.js >= 12
- PostgreSQL >= 10

## Setup

- Install Nest CLI `yarn add global @nestjs/cli` or `npm i -g @nestjs/cli`
- Install Lerna with `yarn add global lerna` or `npm i -g lerna`
- Clone repo
- Run `lerna bootstrap`
- Create your own `.env` in `packages/server` and point it to postgres

## Run

### Client

`cd packages/client && yarn start`

### Server

`cd packages/server && yarn start:dev`

### Why not both

Please note this runs the generic start command in the server, not the above `start:dev` which watches for changes.

`lerna run start`
