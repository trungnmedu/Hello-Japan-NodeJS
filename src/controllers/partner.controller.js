const PartnerService = require("@services/partner.service");


class PartnerController {

    static async getAllPartner(req, res) {
        (await PartnerService.getAllPartner(req.query.type)).send(res)
    }

    static async addStudyPartner(req, res) {
        const { body: partner, file } = req;
        (await PartnerService.addPartner(partner, file)).send(res)
    }

    static async removeStudyPartner({ body }, res) {
        const { id } = body;
        (await PartnerService.deletePartner(id)).send(res)
    }
}

module.exports = PartnerController