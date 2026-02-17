import Fastify from 'fastify'
import { join } from 'path/posix';
const fastify = Fastify({
  logger: true
})
fastify.register(require('@fastify/cors'), {
  origin: '*'
})
fastify.register(require('@fastify/autoload'), {
  dir: join(__dirname, 'routes'),
  options: { prefix: '/api' }
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

