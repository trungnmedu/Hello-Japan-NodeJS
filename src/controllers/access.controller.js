const AuthService = require("@services/access.service");

class AccessController {
    static async googleAuthenticated({body: code}, res) {
        (await AuthService.googleAuthenticated(code)).send(res)
    }

    static async getProfile({sub}, res) {
        (await AuthService.getProfile(sub)).send(res)
    }
}

module.exports = AccessController