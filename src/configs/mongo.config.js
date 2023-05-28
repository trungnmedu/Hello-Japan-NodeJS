const dev = {
    url: process.env.MONGO_DB_URL,
    name: process.env.MONGO_DB_NAME,
    username: process.env.MONGO_DB_USERNAME,
    password: process.env.MONGO_DB_PASSWORD,
}

const config = { dev }
const env = process.env.NODE_ENV

module.exports = config[env]