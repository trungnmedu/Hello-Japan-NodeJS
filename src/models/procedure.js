const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stepSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['PROCESS', 'DONE'],
            required: true
        }
    }
)

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
        steps: [stepSchema]
    }
)

const Procedure = mongoose.model('Procedure', procedureSchema);

module.exports = Procedure
