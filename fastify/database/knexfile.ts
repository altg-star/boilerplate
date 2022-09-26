require('ts-node/register');
import { Knex } from "knex";

module.exports = {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: "./migrations",
    },
    seeds: {
        directory: "./seeds",
    },
} as Knex.Config;