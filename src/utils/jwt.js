const decodeJwt = (token) => {
    const [header, payload, signature] = token.split('.')
    return Buffer.from(payload, 'base64')
}

export {
    decodeJwt
};

