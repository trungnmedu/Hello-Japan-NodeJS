const { OAuth2Client } = require("google-auth-library")
const { clientId, clientSecret } = require('@configs/oauth.config')

const googleOAuth2Client = new OAuth2Client(clientId, clientSecret, 'postmessage')

class GoogleAuth {
    static async exchangeTokenByCode(code) {
        const { tokens } = await googleOAuth2Client.getToken(code)
        const { id_token } = tokens
        return id_token
    }
}

module.exports = GoogleAuth