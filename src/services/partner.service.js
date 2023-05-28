const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant");
const SuccessResponse = require("@helpers/success.helper");
const sanitize = require("mongo-sanitize");
const BucketFirebaseService = require("./firebase.service");
const Partner = require("@models/partner");


class PartnerService {

    static async getAllPartner(type) {

        if (type === "STUDY" || type === "LABOR") {
            const payload = await Partner.find({ type }, { _id: 0 })
            return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
        }
        const payload = await Partner.find({}, { _id: 0 })
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }

    static async addPartner(partner, file) {
        const { name, address, phone, description, link, type } = partner
        let logo = null
        if (file) {
            logo = await BucketFirebaseService.uploadFile(file)
        }

        const payload = await Partner.create(
            {
                id: Date.now().toString(),
                name,
                address,
                phone,
                logo,
                description,
                link,
                type
            }
        )

        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }

    static async deletePartner(id) {
        const payload = await Partner.findOneAndDelete(sanitize({ id }))
        return SuccessResponse.builder(HTTP_CODE.ACCEPTED, HTTP_REASON.ACCEPTED, payload)
    }
}


module.exports = PartnerService