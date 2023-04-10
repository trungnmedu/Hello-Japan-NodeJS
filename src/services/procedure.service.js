const sanitize = require("mongo-sanitize");
const ProcedureService = require("../models/procedure");

class ProcedureService {

    async findOneByAccountId(accountId) {
        if (accountId) {
            return await ProcedureService.findOne(
                sanitize({ accountId }),
                { _id: 0 }
            )
        }
        return null
    }

    async findAllByAccountId(accountId) {
        if (accountId) {
            return await ProcedureService.find(
                sanitize({ accountId }),
                { _id: 0 }
            )
        }
        return null
    }

}

const procedureService = new ProcedureService()
module.exports = procedureService