import Fastify from 'fastify';
import groupsRouter from './src/routes/groups/groups.js';
import cors from '@fastify/cors';

const fastify = new Fastify({logger: true});

await fastify.register(cors);
await fastify.register(groupsRouter);

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
