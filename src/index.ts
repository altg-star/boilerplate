import fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import config from "config";

//config
import swaggerOptions from "./utils/swagger";
const serverConfig = config.get<{ port: number; address: string }>("server");

// init
const server = fastify();
// swagger
server.register(swagger, swaggerOptions);
// cors
server.register(cors);


/**
 * @name health-check
 * @method GET
 * @url /health-check
 * @description health check api
 */
server.get("/health-check", async (request, reply) => {
    reply.send("OK");
});

const start = async () => {
    try {
        const listenResult = await server.listen(serverConfig.port, serverConfig.address);
        server.swagger();
        console.log(`Server is listening at ${listenResult}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();