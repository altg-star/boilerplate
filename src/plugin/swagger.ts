import { FastifyRequest, FastifyReply, FastifyError } from "fastify";
import { SwaggerOptions } from "@fastify/swagger";
export default {
    routePrefix: "/docs",
    swagger: {
        info: {
            title: "Fastify API",
            description: "Fastify APIs",
            version: "1.0.0"
        },
        externalDocs: {
            url: "https://swagger.io",
            description: "Find more info here",
        },
        host: "localhost:8080",
        schemes: ["https"],
        consumes: ["application/json"],
        produces: ["application/json"],
        tags: [
            { name: "user", description: "User related end-points" },
            { name: "code", description: "Code related end-points" },
        ],
        definitions: {
            User: {
                type: "object",
                required: ["id", "username"],
                properties: {
                    id: { type: "string", format: "uuid" },
                    username: { type: "string" },
                    email: { type: "string", format: "email" },
                },
            },
        },
        securityDefinitions: {
            apiKey: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
            },
        },
    },
    uiConfig: {
        docExpansion: "full",
        deepLinking: false,
    },
    uiHooks: {
        onRequest: function (request: FastifyRequest, reply: FastifyReply, done: (err?: FastifyError) => void): Promise<unknown> | void {
            done();
        },
        preHandler: function (request: FastifyRequest, reply: FastifyReply, done: (err?: FastifyError) => void): Promise<unknown> | void {
            done();
        },
    },
    staticCSP: true,
    transformStaticCSP: (header: any) => header,
    exposeRoute: true,
} as SwaggerOptions;