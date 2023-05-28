const env = process.env.NODE_ENV

const config = {
    dev: {
        APP_PORT: process.env.APP_PORT || 8000,
        SOCKET_PORT: process.env.SOCKET_PORT || 6000,
        NODE_ENV: env
    }
}

module.exports = config[env]