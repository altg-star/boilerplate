import { FastifyInstance, FastifyPluginOptions } from "fastify";
import db from "../plugin/db";

const routes = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {

    /**
    * @name health-check
    * @method GET
    * @url /health-check
    * @description health check api
    */
    fastify.get("/health-check", async (request, reply) => {
        reply.send("OK");
    });

    /**
     * @name db-test
     * @method GET
     * @url /db-test
     * @description testing db connection
     */
    fastify.get("/db-test", async (request, reply) => {
        try {
            const time = await db.raw("select now();");
            console.log(time.rows[0]);
            reply.send("OK");
        } catch (error) {
            console.error(error);
            reply.send("FAIL");
        }

    })
};
export default routes;