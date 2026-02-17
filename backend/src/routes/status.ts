import type { FastifyInstance } from 'fastify';
import {version} from '../../package.json'
export default async function statusRoutes(fastify: FastifyInstance) {
    fastify.get('/status', async (request, reply) => {
        return { 
            status: 'up',
            version: version,
            'uptime-seconds': process.uptime(),
            message: 'did you know that this worked? :wow:'
        };
    });
}