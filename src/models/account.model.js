const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: Date.now().toString()
        },
        email: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        avatar: {
            type: String,
            require: false
        },
        role: {
            type: String,
            require: false,
            default: 'CUSTOMER'
        }
    }
)

const AccountModel = mongoose.model('Accounts', accountSchema)

module.exports = AccountModel