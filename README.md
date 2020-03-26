# Be The Hero
Omnistack week project

## Back-End
The back-end was created in nodejs.


## Dependencies
back-end:
- Express;
- Knex;
- cors;

front-end
- react-icons;
- react-router-dom;

## Knex commands
Knex is a query builder for any database, official site `http://knexjs.org/`

- `npm install knex` to install knex;
- `npm install "database name"` to install your database;
- `npx knex init` to create config file;
- `npx knex migrate:make "migrate name"` to create a migrate file;
- `npx knex migrate:latest` to execute migration;
- `npx knex migrate:rollback` to exclude the latest migrate;
- `npx knex migrate:status` list all migrates created;