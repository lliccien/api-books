# Api Books

## Description

This project is created with a clean code architecture and the structural basis of DDD.

## Development and test

These two environments use SQLite as a database to enhance the development experience.

## Production

In this environment the configured database is PostgreSQL, but any other database can be used, as the project uses TypeOrm to handle the database abstraction.

## Pre-installation

Copy or rename the `example.env` file to `.env` and set the values of the environment variables.

To execute the migration and create the database tables in production, the following command must be executed:

```bash
 $ npm run migration:run
```

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

## TypeOrm commands:

```Bash
# typeOrm ClI
$ npm run typeorm

# Run migrations
$ npm run migration:run

# Generate migrations
$ npm run migration:generate

# Create Migrations
$ npm run migration:create

# Show migrations
$ npm run migration:show

# Revert migration
$ npm run migration:revert

# Drop schema
$ npm run schema:drop
```
