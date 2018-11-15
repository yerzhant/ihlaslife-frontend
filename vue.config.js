module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:8082'
            },
            '/storage': {
                target: 'http://localhost:8082'
            }
        }
    }
}