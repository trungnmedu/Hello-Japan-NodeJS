const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema(
    {
        id: {
            type: String,
            default: Date.now()
        },
        name: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        },
        logo: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        type: {
            type: String,
            require: false
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
)

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner

