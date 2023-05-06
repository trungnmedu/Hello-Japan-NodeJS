const { HTTP_CODE } = require('@constants/http.constant')
const ErrorResponse = require('@helpers/error.helper')
const jwt = require('jsonwebtoken')
const SECRET = "trungnmse150182"
const TIME_EXPIRE = '1 days'

class JwtUtil {
    static decodedToken = (token) => {
        const payload = token.split('.').at(1)
        const data = Buffer.from(payload, 'base64')
        return JSON.parse(data)
    }

    static generateToken = (payload) => {
        return jwt.sign(
            payload,
            SECRET,
            {
                expiresIn: TIME_EXPIRE,
                algorithm: 'HS256'
            }
        )
    }

    static verifyToken = (token) => {
        try {
            return jwt.verify(token, SECRET)
        } catch (error) {
            throw ErrorResponse.builder(HTTP_CODE.UNAUTHORIZED, "Token invalid.")
        }
    }
}

module.exports = JwtUtil