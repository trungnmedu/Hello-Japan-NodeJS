const dev = {
    host: process.env.MONGO_DB_HOST,
    port: process.env.MONGO_DB_PORT,
    name: process.env.MONGO_DB_NAME
}

const config = {dev}
const env = process.env.NODE_ENV

module.exports = config[env]