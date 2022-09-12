import { FastifyInstance, FastifyPluginOptions } from "fastify";
//routes

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
};
export default routes;