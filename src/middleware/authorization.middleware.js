const { verifyToken } = require("../utils/jwt.util");

const authorizedAdmin = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '')
        const { sub, role } = verifyToken(token)
        if (role === 'ADMIN') {
            req.sub = sub
            req.role = role
            next()
            return
        }

        res.status(403).send({ error: 'Access denied!' })
    } catch (error) {
        res.status(403).send({ error: 'Access denied!' })
    }
}

module.exports = authorizedAdmin