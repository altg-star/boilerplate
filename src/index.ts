import fastify from "fastify";
// plugin
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
// config
import config from "config";
import swaggerOptions from "./plugin/swagger";
// routes
import routes from "./routes";

const serverConfig = config.get<{ port: number; host: string }>("server");

// init with logger
const server = fastify({ logger: true });
// swagger
server.register(swagger, swaggerOptions);
// cors
server.register(cors);
// routes
server.register(routes);

const start = async () => {
    try {
        const listening = await server.listen({ port: serverConfig.port, host: serverConfig.host });
        server.swagger();
        console.log(`Server is listening at ${listening}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();