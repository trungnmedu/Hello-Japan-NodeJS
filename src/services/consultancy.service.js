const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant");
const SuccessResponse = require("@helpers/success.helper");
const Consultancy = require("@models/consultancy.model");
const sanitize = require("mongo-sanitize");


class ConsultancyService {
    static async findConsultancyById(id) {
        if (id) {
            return Consultancy.findOne(sanitize({ id }))
        }
        return null
    }

    static async findOrCreateConsultancy(consultancy) {
        const { id } = consultancy
        let result = await this.findConsultancyById(id)

        if (!result) {
            result = await Consultancy.create(consultancy)
        }

        return SuccessResponse.builder(HTTP_CODE.CREATED, HTTP_REASON.CREATED, result)
    }

    static async getALlConsultancy() {
        const payload = await Consultancy.find({}, { _id: 0 })
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }

    static async findByIdAndUpdate(consultancy) {
        const { id } = consultancy
        const payload = await Consultancy.findOneAndUpdate(
            sanitize({ id }),
            { '$set': sanitize(consultancy) }
        )
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }
}

module.exports = ConsultancyService