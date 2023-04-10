const sanitize = require("mongo-sanitize")
const AccountService = require("../models/account")

class AuthService {

    async findAccount(account) {
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

        return AccountService.findOne(sanitize(filter));
    }


    async findOrCreateAccount(account) {
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

const authService = new AuthService()

module.exports = authService
