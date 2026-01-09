
import pool from '../../../secret.js';

export const groupCreateSchema = {
  body: {
    type: 'object',
    properties: {
      groupName: { type: 'string' },
      groupEmail: { type: 'string' },
      groupMobile: { type: 'number' },
      groupPassword: { type: 'string' },
    },
    required: ['groupName', 'groupEmail', 'groupMobile', 'groupPassword'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        groupId: { type: 'number' },
      },
    },
  },
};

/**
 * Handler for creating a new group
 * @param {import('fastify').FastifyRequest} request
 * @param {import('fastify').FastifyReply} reply
 */
export async function groupCreateHandler(request, reply) {
  const { groupName, groupEmail, groupMobile, groupPassword } = request.body;
  try {
    const [result] = await pool.execute(
      'INSERT INTO `groups` (groupName, groupEmail, groupMobile, groupPassword) VALUES (?, ?, ?, ?)',
      [groupName, groupEmail, groupMobile, groupPassword]
    );
    reply.code(200);
    return {
      message: 'Group Created Successfully',
      groupId: result.insertId,
    };
  } catch (error) {
    reply.code(500);
    return { message: 'Error creating group', error: error.message };
  }
}
