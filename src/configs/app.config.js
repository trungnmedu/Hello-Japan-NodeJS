const dev = {
    port: process.env.APP_PORT
}

const config = { dev }
const env = process.env.NODE_ENV

module.exports = config[env]