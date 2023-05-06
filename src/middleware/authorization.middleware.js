const { verifyToken } = require("../utils/jwt.util");
const ErrorResponse = require("@helpers/error.helper")
const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant");

const authorizedAdmin = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '')
    const { sub, role } = verifyToken(token)
    if (role === 'ADMIN') {
        req.sub = sub
        req.role = role
        next()
    } else {
        throw ErrorResponse.builder(HTTP_CODE.FORBIDDEN, HTTP_REASON.FORBIDDEN)
    }


}

module.exports = authorizedAdmin