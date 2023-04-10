const sanitize = require("mongo-sanitize");
const { StudyPartner } = require("../models/partner");

class StudyPartnerService {

    async getAllStudyPartner() {
        return await StudyPartner.find({}, { _id: 0 })
    }

    async deleteStudyPartner(partner) {
        const { id } = partner
        return await StudyPartner.findOneAndDelete(sanitize({ id }))
    }

    async updateStudyPartner(partner) {
        const { name, address, phone, logo, id } = partner
        StudyPartner.findOneAndUpdate(
            sanitize({ id }),
            sanitize(
                { name, address, phone, logo }
            )
        )
    }

    async addStudyPartner(partner) {
        const { name, address, phone, logo } = partner
        return await new StudyPartner(
            {
                id: Date.now().toString(),
                name,
                address,
                phone,
                logo
            }
        ).save()
    }
}

const studyPartnerService = new StudyPartnerService()

module.exports = {
    studyPartnerService
}