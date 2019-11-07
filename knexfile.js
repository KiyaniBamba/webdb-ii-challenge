// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3',
    },
    useNullAsDefault: true,
    migration: {
      directory: './data/migrations'
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce-production.db3',
    },
    useNullAsDefault: true,
    migration: {
      directory: "./data/migrations"
    },
    // seeds: {
    //   directory: "./data/seeds"
    // }
  },
};