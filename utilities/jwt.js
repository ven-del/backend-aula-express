const jwt = require("jsonwebtoken");
require('dotenv').config();

function signToken(payload, options = {}) {
    const CHAVE_API = process.env.CHAVE_API;
    return jwt.sign(payload, CHAVE_API, {
        expiresIn: '8h',
        ...options
    });
}

module.exports = { signToken };