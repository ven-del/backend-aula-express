const jwt = require('jsonwebtoken');
const express = require('express');
const BolosRouter = require('./BolosRoute');
const CafesRouter = require('./CafesRoute');
require('dotenv').config();

const PrivateRoute = express.Router();

PrivateRoute.use((req, res, next) => {
    let auth = false;

    if (auth === false) {
        return res.status (403).send('Não autorizado');
    }
    
    next();
})

PrivateRoute.use(BolosRouter);
PrivateRoute.use(CafesRouter);

module.exports = PrivateRoute;