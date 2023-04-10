const dev = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
}

const config = { dev }
const env = process.env.NODE_ENV

module.exports = config[env]