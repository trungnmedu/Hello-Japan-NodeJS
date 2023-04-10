const { verifyToken } = require("../utils/jwt");

const authenticated = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')
        const { sub, role } = verifyToken(token)
        req.sub = sub
        req.role = role
        next()
    } catch {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = authenticated




