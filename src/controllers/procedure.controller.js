const ProcedureService = require("@services/procedure.service")

class ProcedureController {
    static async createProcedure(req, res) {
        const { body: { type, procedure } } = req;
        (await ProcedureService.createProcedure(type, procedure)).send(res)
    }

    static async updateProcedure(req, res) {
        (await ProcedureService.updateProcedure(req.body)).send(res)
    }

    static async getProcedureByAccountId(req, res) {
        (await ProcedureService.getAllProcedureByAccountId(req.sub)).send(res)
    }

    static async getAllProcedure(_, res) {
        (await ProcedureService.getAllProcedure()).send(res)
    }
}

module.exports = ProcedureController