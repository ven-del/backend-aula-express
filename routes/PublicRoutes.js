const jwt = require('jsonwebtoken');
const express = require('express');
const AuthController = require('../controllers/AuthController');
const { signToken } = require('../utilities/jwt')


const PublicRoutes = express.Router();

PublicRoutes.post('/login', (req, res) => {
    const body = req.body;
    const auth = new AuthController();
    const data = auth.login(body.login, body.senha);
    if (data) {
        const token = signToken(data)
        return res.json({
            token: token,
        })
    };

    return res.json({
        message: 'Login ou senha inválidos'
    })

})

module.exports = PublicRoutes;