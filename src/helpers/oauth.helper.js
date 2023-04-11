const { OAuth2Client } = require("google-auth-library")
const { clientId, clientSecret } = require('@configs/oauth.config')

class GoogleAuth {

    constructor() {
        this.client = new OAuth2Client(clientId, clientSecret, 'postmessage')
    }

    async exchangeTokenByCode(code) {
        const { tokens } = await this.client.getToken(code)
        const { id_token } = tokens
        return id_token
    }
}

module.exports = new GoogleAuth()