const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://test.rsrgroup.com',
      changeOrigin: true,
      secure: false, // Set to false if you encounter certificate validation issues
      pathRewrite: {
        '^/api': '/api/rsrbridge/1.0/pos', // Rewriting '/api' to '/api' in the path
      },
    })
  );
};
