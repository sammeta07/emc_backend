import pool from '../../../secret.js';

export const groupLoginSchema = {
  body: {
    type: 'object',
    properties: {
      groupEmail: { type: 'string' },
      groupPassword: { type: 'string' },
    },
    required: ['groupEmail', 'groupPassword'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        groupId: { type: 'number' },
      },
    },
    401: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

/**
 * Handler for group login
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
export async function groupLoginHandler(request, reply) {
  const { groupEmail, groupPassword } = request.body;
  try {
    const [rows] = await pool.execute(
      'SELECT groupId FROM `groups` WHERE groupEmail = ? AND groupPassword = ?',
      [groupEmail, groupPassword]
    );
    if (rows.length > 0) {
      reply.code(200);
      return { message: 'Login successful', groupId: rows[0].groupId };
    } else {
      reply.code(401);
      return { message: 'Invalid groupEmail or groupPassword' };
    }
  } catch (error) {
    reply.code(500);
    return { message: 'Error during login', error: error.message };
  }
}
