
import Fastify from 'fastify';
import groupsRouter from './src/routes/groups.js';
import cors from '@fastify/cors';

const fastify = new Fastify({logger: true});

await fastify.register(cors);
await fastify.register(groupsRouter);

// Start server
async function start() {
  try {
    const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
