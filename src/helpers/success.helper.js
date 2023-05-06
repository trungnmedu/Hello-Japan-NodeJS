const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant")
const lodash = require('lodash')

class SuccessResponse {
    constructor(status, message, payload, options) {
        this.error = false
        this.success = true
        this.status = status
        this.message = message
        this.payload = payload
        this.options = options
    }

    static builder(status = HTTP_CODE.OK, message = HTTP_REASON.OK, payload = null, options = null) {
        return new SuccessResponse(status, message, payload, options)
    }

    send = (res, header = {}) => {
        res.status(this.status).header(header).json(this)
    }
}

module.exports = SuccessResponse
