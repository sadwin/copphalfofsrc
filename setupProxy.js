const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/work/api',
        proxy({
            target: "https://copp.pro",
            changeOrigin: false,
            secure: false
        })
    );
};