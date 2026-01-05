import Fastify from 'fastify';
import groupRouter from './src/routes/groups.js';
import cors from '@fastify/cors';
import fastifyMysql from '@fastify/mysql';


const fastify = new Fastify({
  logger: true
});

await fastify.register(cors);
await fastify.register(groupRouter);

// fastify registration for mysql


fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
    const PORT = process.env.PORT || 3000;
    try {
        await fastify.listen({ port: PORT });
        console.log(`Server running at http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();
