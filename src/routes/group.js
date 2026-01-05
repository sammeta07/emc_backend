import mysql from 'mysql2/promise';

// MySQL connection config


const createdGroupSchema = {
  body: {
    type: 'object',
    properties: {
      groupName: { type: 'string' },
      email: { type: 'string' },
      mobile: { type: 'number' }
    },
    required: ['groupName', 'email', 'mobile']
  },
  response: {
    201: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        id: { type: 'string' },
      },
    }
  }
};

async function groupRouter(fastify, options) {
  fastify.post('/api/create_group', { schema: createdGroupSchema }, async (request, reply) => {
    const { groupName, email, mobile, password, confirmPassword } = request.body;
    try {
      const [result] = await pool.execute(
        'INSERT INTO `groups` (groupName, email, mobile, password, confirmPassword) VALUES (?, ?, ?, ?, ?)',
        [groupName, email, mobile, password, confirmPassword]
      );
      reply.code(201);
      return {
        message: 'Group Created Successfully',
        id: result.insertId
      };
    } catch (error) {
      reply.code(500);
      return { message: 'Error creating group', error: error.message };
    }
  });
}

export default groupRouter;