const mongoose = require("mongoose");
const { Schema } = require("mongoose")

const conversationSchema = new Schema(
    {
        type: {
            type: String,
            enum: ['PRIVATE', 'GUEST'],
            required: true
        },
        clientId: {
            type: String,
            required: true
        },
        messages: {
            type: [Object],
            required: false
        }
    }
)

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation