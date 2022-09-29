import knex from "knex";
import config from "config";
const DBConfig = config.get<{
    "host": string,
    "port": number,
    "database": string,
    "user": string,
    "password": string,
}>("db");

export default knex({
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
    }
});