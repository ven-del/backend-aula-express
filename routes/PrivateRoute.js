const express = require('express');

const PrivateRoute = express.Router();

PrivateRoute.use((req, resizeBy, next) => {
    if (req.headers.token !== 'banana') {
        return res.status(401).send('Não autorizado');
    };
    next();
})
