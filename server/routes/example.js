export default function (server) {

  server.route({
    path: '/api/extended_metric_vis/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
