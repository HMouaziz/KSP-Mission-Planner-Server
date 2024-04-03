require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },

  // production: {
  //   client: 'mysql2',
  //   connection: process.env.DATABASE_URL,
  //   migrations: {
  //     directory: __dirname + '/db/migrations',
  //   },
  //   seeds: {
  //     directory: __dirname + '/db/seeds',
  //   },
  // },
};
