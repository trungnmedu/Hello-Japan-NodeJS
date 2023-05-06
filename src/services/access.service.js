const GoogleAuth = require("@helpers/oauth.helper")
const AccountService = require("@services/account.service")
const SuccessResponse = require("@helpers/success.helper")
const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant")
const JwtUtil = require("@utils/jwt.util")
const ErrorResponse = require("@helpers/error.helper")

class AccessService {

    static async googleAuthenticated(code) {
        const token = await GoogleAuth.exchangeTokenByCode(code)

        const { name, picture, email } = JwtUtil.decodedToken(token)

        const account = await AccountService.findOrCreateAccount({ email, avatar: picture, name })


        const accessToken = JwtUtil.generateToken(
            {
                sub: account.id,
                role: account.role
            }
        )

        const payload = {
            account: {
                id: account.id,
                name: account.name,
                avatar: account.avatar,
                role: account.role,
                email: account.email,
                phone: account.phone
            },
            accessToken
        }

        return SuccessResponse.builder(HTTP_CODE.OK, "Login success.", payload)
    }

    static async getProfile(id) {
        const account = await AccountService.findAccount({ id })
        if (account) {
            return SuccessResponse.builder(HTTP_CODE.OK, "Get profile success.", account)
        }

        throw ErrorResponse.builder(HTTP_CODE.NO_CONTENT, HTTP_REASON.NO_CONTENT)
    }
}

module.exports = AccessService
