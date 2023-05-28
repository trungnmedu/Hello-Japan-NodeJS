const dev = {
    HOST: process.env.REDIS_HOST,
    PORT: process.env.REDIS_PORT,
    PASSWORD: process.env.REDIS_PASSWORD
}

const config = { dev }
const env = process.env.NODE_ENV

module.exports = config[env]