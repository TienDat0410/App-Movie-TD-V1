const {createProxyMiddleware} = require('http-proxy-middleware')


module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:8080',
    }))
    app.use(createProxyMiddleware('/socket.io', {
        target: 'http://localhost:8080',
        ws: true,
    }))
}