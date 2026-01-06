
import Fastify from 'fastify';
import cors from '@fastify/cors';
import groupRouter from './src/routes/groups.js';
import { pool } from './secret.js';

// Create Fastify instance
const fastify = Fastify({
  logger: true,
});

// Register plugins and routes
async function buildServer() {
  // Register CORS
  await fastify.register(cors);

  // Decorate Fastify instance with pool for DB access
  fastify.decorate('pool', pool);

  // Register routes
  await fastify.register(groupRouter);

  // Health check route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
}

// Start server
async function start() {
  try {
    await buildServer();
    const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server running at http://localhost:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
