const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'http://localhost:5500',
    })
  );
  app.use(
    ['/socket'],
    createProxyMiddleware({
      target: 'http:localhost:5500',
      changeOrigin: true,
      ws: true,
      logLevel: 'debug',
    })
  );
};
