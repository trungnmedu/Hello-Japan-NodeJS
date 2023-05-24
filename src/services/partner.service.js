const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant");
const SuccessResponse = require("@helpers/success.helper");
const StudyPartner = require("@models/partner");
const sanitize = require("mongo-sanitize");
const BucketFirebaseService = require("./firebase.service");


class StudyPartnerService {

    static async getAllStudyPartner() {
        const payload = await StudyPartner.find({}, { _id: 0 })
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }

    static async addStudyPartner(partner, file) {
        const { name, address, phone, description, link } = partner
        let logo = null
        if (file) {
            logo = await BucketFirebaseService.uploadFile(file)
        }


        const payload = await StudyPartner.create(
            {
                id: Date.now().toString(),
                name,
                address,
                phone,
                logo,
                description,
                link
            }
        )

        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }

    static async deleteStudyPartner(id) {
        const payload = await StudyPartner.findOneAndDelete(sanitize({ id }))
        return SuccessResponse.builder(HTTP_CODE.ACCEPTED, HTTP_REASON.ACCEPTED, payload)
    }

    static async updateStudyPartner(partner) {
        const { name, address, phone, logo, id } = partner
        StudyPartner.findOneAndUpdate(
            sanitize({ id }),
            sanitize(
                { name, address, phone, logo }
            )
        )
    }
}


module.exports = StudyPartnerService