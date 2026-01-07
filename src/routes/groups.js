
import  pool  from '../../secret.js';

const createdGroupSchema = {
  body: {
    type: 'object',
    properties: {
      groupName: { type: 'string' },
      email: { type: 'string' },
      mobile: { type: 'number' },
      password: { type: 'string' },
    },
    required: ['groupName', 'email', 'mobile', 'password'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        groupId: { type: 'number' },
      },
    }
  }
};

async function groupsRouter(fastify, options) {
  fastify.post('/api/create_group', { schema: createdGroupSchema }, async (request, reply) => {
    console.log(request.body);
    const { groupName, email, mobile, password } = request.body;
    try {
      const [result] = await pool.execute(
        'INSERT INTO `groups` (groupName, email, mobile, password) VALUES (?, ?, ?, ?)',
        [groupName, email, mobile, password]
      );
      reply.code(200);
      return {
        message: 'Group Created Successfully',
        groupId: result.insertId
      };
    } catch (error) {
      reply.code(500);
      return { message: 'Error creating group', error: error.message };
    }
  });
}

export default groupsRouter;