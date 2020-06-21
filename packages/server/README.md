# Quizthing Server

## Setup

Make a copy of `.example.env` as `.env` and set properties specific to your system

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database

Suggested workflow when making changes to the schema by way of modifications to
the entity classes

1. Stop the app (if running)
2. Connect to the database and drop the relevant table, or failing that, the
   `quizthing` database
3. Recreate the database if necessary
4. Make the changes you need
5. Restart the app

It's not essential to stop the app, but it will error in some if not most cases
when it tries, and fails, to update the database schema.

If required, SQL scripts for creating a user and the database can be found in
`database/`.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
