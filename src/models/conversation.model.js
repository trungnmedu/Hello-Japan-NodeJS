const mongoose = require("mongoose");
const { Schema } = require("mongoose")

const messageSchema = new Schema(
    {
        sender: {
            type: String,
            required: false
        },
        receiver: {
            type: String,
            required: false
        },
        body: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            enum: ['READ', 'UNREAD'],
            default: 'READ'
        }
    }
)

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
            type: [messageSchema],
            required: false
        }
    }
)

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation