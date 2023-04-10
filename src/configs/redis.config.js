const dev = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
}

const config = { dev }
const env = process.env.NODE_ENV

module.exports = config[env]