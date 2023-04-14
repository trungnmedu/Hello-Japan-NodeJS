const { verifyToken } = require("../utils/jwt.util");
const ErrorResponse = require("@helpers/error.helper")
const {HTTP_CODE} = require("@constants/http.constant");

const authenticated = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')
        const { sub, role } = verifyToken(token)
        req.sub = sub
        req.role = role
        next()
    } catch {
        throw ErrorResponse.builder(HTTP_CODE.UNAUTHORIZED, "Unauthenticated, login again.")
    }
}

module.exports = authenticated




