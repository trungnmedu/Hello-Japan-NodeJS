const rules = {
    name: /^[\p{L}\s]+$/u,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^\+?[0-9]\d{1,14}$/,
    description: /^[\p{L}\s]+$/u,
    require: /^[\p{L}\s]+$/u
}

export default rules