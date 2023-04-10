const mongoose = require("mongoose");

const consultancySchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: Date.now()
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: true
        },
        consulted: {
            type: Boolean,
            required: false,
            default: false
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
)

const Consultancy = mongoose.model('Consultancy', consultancySchema)

module.exports = Consultancy