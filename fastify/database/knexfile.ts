process.env["NODE_CONFIG_DIR"] = "../config";
require('ts-node/register');
import { Knex } from "knex";
import config from "config";
const DBConfig = config.get<{
    "host": string,
    "port": number,
    "database": string,
    "user": string,
    "password": string,
}>("db");


export default {
    client: "pg",
    connection: {
        host: DBConfig.host,
        port: DBConfig.port || 5432,
        user: DBConfig.user,
        password: DBConfig.password,
        database: DBConfig.database,
        timezone: '+00:00' //utc
    },
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