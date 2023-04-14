const env = process.env.NODE_ENV

const config = {
    dev: {
        PORT: process.env.APP_PORT || 5000,
        NODE_ENV: env
    }
}



module.exports = config[env]