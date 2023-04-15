const StudyPartnerService = require("@services/partner.service")

class PartnerController {

    static async getAllStudyPartner(req, res) {
        (await StudyPartnerService.getAllStudyPartner()).send(res)
    }

    static async addStudyPartner(req, res) {
        const { body: partner, file } = req;
        (await StudyPartnerService.addStudyPartner(partner, file)).send(res)
    }
}

module.exports = PartnerController