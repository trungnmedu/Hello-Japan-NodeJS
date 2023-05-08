const Account = require("@models/account.model");
const sanitize = require("mongo-sanitize");

class AccountService {
    static findAccount(account) {
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

        return Account.create(
            {
                ...account,
                id: Date.now().toString()
            }
        )
    }

    static async findOne(filter){
        return Account.findOne(filter)
    }
}

module.exports = AccountService