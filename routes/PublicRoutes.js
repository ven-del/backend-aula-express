const AuthController = require('../controllers/AuthController');

express = require('express');
const PublicRoutes = express.Router();

PublicRoutes.post('/login', (req, res) => {
    const body = req.body;
    const auth = new AuthController();
    const data = auth.login(body.login, body.senha);

    if (data) {
        return res.json({
            token: data
        })
    }

    return res.json({
        message: 'Login ou senha inválidos.'
    })

})