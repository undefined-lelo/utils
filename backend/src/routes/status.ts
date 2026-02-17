import type { FastifyInstance } from 'fastify';

export default async function statusRoutes(fastify: FastifyInstance) {
    fastify.get('/status', async (request, reply) => {
        return { 
            status: 'up',
            'uptime-seconds': process.uptime(),
            message: 'did you know that this worked? :wow:'
        };
    });
}