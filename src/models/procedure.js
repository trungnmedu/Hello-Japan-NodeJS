const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const procedureSchema = new Schema(
    {
        id: {
            type: String,
            default: Date.now()
        },
        accountId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        phone: {
            type: String,
            required: false
        },
        type: {
            type: String,
            enum: ['STUDY', 'LABOR'],
            required: true
        },
        completed: {
            type: Boolean,
            required: false,
            default: false
        },
        target: {
            type: Object,
            required: false
        },
        steps: {
            type: [
                {
                    name: {
                        type: String,
                        required: true
                    },
                    description: {
                        type: String,
                        required: false
                    },
                    status: {
                        type: String,
                        enum: ['PROCESSING', 'PENDING', 'DONE', 'REJECT'],
                        required: true,
                        default: "PENDING"
                    }
                }
            ],
            required: false
        }
    }
)

const Procedure = mongoose.model('Procedure', procedureSchema);

module.exports = Procedure
