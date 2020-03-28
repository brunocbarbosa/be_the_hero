# Be The Hero
Omnistack week project

## Back-End
The back-end was created with nodejs.

## Front-End
The front-end was created with React.

## Mobile
The Mobile was created with React-Native.

## Dependencies
back-end:
- Express;
- Knex;
- cors;

front-end:
- react-icons;
- react-router-dom;
- axios;

mobile:
- react-navigation;
- axios;
- intl;

## Knex commands
Knex is a query builder for any database, official site `http://knexjs.org/`

- `npm install knex` to install knex;
- `npm install "database name"` to install your database;
- `npx knex init` to create config file;
- `npx knex migrate:make "migrate name"` to create a migrate file;
- `npx knex migrate:latest` to execute migration;
- `npx knex migrate:rollback` to exclude the latest migrate;
- `npx knex migrate:status` list all migrates created;

## Expo
Expo is the platform to run react native, to install just write `npm install -g expo-cli`.

commands:
- expo --version: See the version;
- expo init mobile: Create a new project;
- expo install expo-constants: new constants for the project.
- expo install expo-mail-composer: install email dependences. 
- yarn start: Run the app.



