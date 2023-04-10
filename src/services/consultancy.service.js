const Consultancy = require("@models/consultancy");
const sanitize = require("mongo-sanitize");


class ConsultancyService {
    static async findConsultancyById(id) {
        if (id) {
            return await Consultancy.findOne(sanitize({ id }))
        }
        return null
    }

    static async findOrCreateConsultancy(consultancy) {
        const { id } = consultancy
        let result = await this.findConsultancyById(id)

        if (result) {
            return result
        }


        return Consultancy.create(consultancy)
    }

    static async getALlConsultancy() {
        return await ConsultancyService.find({}, { _id: 0 })
    }

    static async findByIdAndUpdate(consultancy) {
        const { id } = consultancy
        return await ConsultancyService.findOneAndUpdate(
            sanitize({ id }),
            { '$set': sanitize(consultancy) }
        )
    }
}

module.exports = ConsultancyService