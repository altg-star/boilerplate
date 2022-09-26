import { Knex } from "knex";
import { onUpdateTrigger } from "../helper";

export const up = async (knex: Knex): Promise<void> => {
    Promise.all([
        knex.schema.createTable("users", (table: Knex.TableBuilder) => {
            table.increments("id", { primaryKey: true });
            table.string("username").notNullable();
            table.string("password").notNullable();
            table.timestamps(true, true);
            table.timestamp("deleted_at").nullable().defaultTo(null);
        }).then(() => knex.raw(onUpdateTrigger("users")))
    ]);
}


export const down = async (knex: Knex): Promise<void> => {
    Promise.all([knex.schema.dropTableIfExists("users")]);
}

