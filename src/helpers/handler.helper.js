const ErrorResponse = require("@src/helpers/error.helper")
const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant")
const { ENV_MODE } = require("@configs/app.config")
const { JsonWebTokenError, TokenExpiredError, NotBeforeError } = require("jsonwebtoken");


const defaultNotfound = (res, req, next) => {
    next(ErrorResponse.builder(HTTP_CODE.NOT_FOUND, HTTP_REASON.NOT_FOUND))
}

const errorHandler = (error, req, res, _) => {
    if (error instanceof ErrorResponse) {
        const { status, message } = error
        res.status(status).json(error)
        return
    }

    if (error instanceof JsonWebTokenError || error instanceof NotBeforeError || error instanceof TokenExpiredError) {
        res.status(HTTP_CODE.UNAUTHORIZED).send(ErrorResponse.builder(HTTP_CODE.UNAUTHORIZED, "Invalid token."))
        return
    }

    const { message, stack } = error
    console.log(stack)
    res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).send(ErrorResponse.builder(HTTP_CODE.INTERNAL_SERVER_ERROR, message, stack))
}

const wrapperAsyncHandler = fn => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

const wrapperSyncHandler = fn => {
    return (req, res, next) => {
        try {
            fn(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = {
    errorHandler,
    defaultNotfound,
    wrapperSyncHandler,
    wrapperAsyncHandler,
}