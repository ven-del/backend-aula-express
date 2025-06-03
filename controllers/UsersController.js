const UsersModel = require('../models/UsersModel');

class UsersController {
    read(req, res) {
        const data = UsersModel.read();
        return res.json(data);
    }

    getById(req, res) {
        const id = req.params.id;
        const data = UsersModel.getById(id);
        return res.json(data);
    }

    create(req, res) {
        const body = req.body;
        UsersModel.create(body);
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    }

    update(req, res) {
        const id = req.params.id;
        const body = req.body;
        UsersModel.update(id, body);
        return res.json({ message: 'Usuário atualizado com sucesso!' });
    }

    delete(req, res) {
        const id = req.params.id;
        UsersModel.delete(id);
        return res.json({ message: 'Usuário removido com sucesso!' });
    }
}

module.exports = UsersController;