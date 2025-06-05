const jwt = require('jsonwebtoken');
const express = require('express');
const BolosRouter = require('./BolosRoute');
const CafesRouter = require('./CafesRoute');
require ('dotenv').config();



const PrivateRoutes = express.Router();

PrivateRoutes.use((req, res, next) => {
    const CHAVE_API = process.env.CHAVE_API;
    let autorizado = false;
    if (req.headers.token) {
        const { token } = req.headers;
        jwt.verify(token, CHAVE_API);
        autorizado = true;
    }

    if (autorizado === false) return res.status(403).send('Não autorizado');

    next();
})

PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(CafesRouter);

module.exports = PrivateRoutes;