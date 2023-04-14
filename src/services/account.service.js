const sanitize = require("mongo-sanitize")
const GoogleAuth = require("@helpers/oauth.helper")
const SuccessResponse = require("@helpers/success.helper")
const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant")
const JwtUtil = require("@utils/jwt.util")
const Account = require("@models/account")

class AuthService {

    static async googleAuthenticated(code) {
        const token = await GoogleAuth.exchangeTokenByCode(code)

        console.log(token);
        const { name, picture, email } = JwtUtil.decodedToken(token)
        const account = await this.findOrCreateAccount({ email, avatar: picture, name })

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
        const account = await this.findAccount({ id })
        return SuccessResponse.builder(HTTP_CODE.OK, "Get profile success.", account)
    }

    static async findAccount(account) {
        const { id, phone, email } = account

        const filter = {}

        if (id) {
            filter.id = id
        }

        if (phone) {
            filter.phone = phone
        }

        if (email) {
            filter.email = email
        }

        return Account.findOne(sanitize(filter))
    }

    static async findOrCreateAccount(account) {
        let result = await this.findAccount(account)

        if (result) {
            return result
        }

        result = new AccountService(
            {
                ...account,
                id: Date.now().toString()
            }
        )
        await result.save()
        return result
    }
}

module.exports = AuthService
