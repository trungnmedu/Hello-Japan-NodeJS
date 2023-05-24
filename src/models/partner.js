const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studyPartnerSchema = new Schema(
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
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
)

const StudyPartner = mongoose.model('StudyPartner', studyPartnerSchema);

module.exports = StudyPartner

