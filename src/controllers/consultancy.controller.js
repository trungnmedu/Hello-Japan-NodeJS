const ConsultancyService = require("@services/consultancy.service")

class ConsultancyController {
    static async registerConsultancy(req, res) {
        (await ConsultancyService.findOrCreateConsultancy(req.body)).send(res)
    }


    static async updateConsultancy(req, res) {
        (await ConsultancyService.findByIdAndUpdate(req.body)).send(res)
    }

    static async getAllConsultancy(_, res) {
        (await ConsultancyService.getALlConsultancy()).send(res)
    }

}


module.exports = ConsultancyController