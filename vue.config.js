module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:8080'
            },
            '/storage': {
                target: 'http://localhost:8080'
            }
        }
    }
}