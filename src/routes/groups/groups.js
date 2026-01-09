
import { groupCreateHandler, groupCreateSchema } from './group_create.js';
import { groupLoginHandler, groupLoginSchema } from './group_login.js';


// Router
async function groupsRouter(fastify, options) {

  // Create a new group
  fastify.post('/api/group_create', { schema: groupCreateSchema }, groupCreateHandler);

  // Group login
  fastify.post('/api/group_login', { schema: groupLoginSchema }, groupLoginHandler);
}

export default groupsRouter;