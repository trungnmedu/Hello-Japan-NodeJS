const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant")


class ErrorResponse extends Error {
    constructor(status, cause, trace) {
        super(cause)
        this.error = true
        this.success = false
        this.status = status
        this.cause = process.env.NODE_ENV === "dev" ? cause : "Exception."
        this.trace = process.env.NODE_ENV === "dev" ? trace : "Trace is empty."
    }

    static builder(status = HTTP_CODE.INTERNAL_SERVER_ERROR, cause = HTTP_REASON.INTERNAL_SERVER_ERROR, trace) {
        return new ErrorResponse(status, cause, trace || "Trace is empty.")
    }
}

module.exports = ErrorResponse
