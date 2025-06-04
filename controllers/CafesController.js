const CafesModel = require('../models/CafesModel');

class CafesController {
    read(req, res) {
        const data = CafesModel.read();
        return res.json(data);
    }

    getById(req, res) {
        const id = req.params.id;
        const data = CafesModel.getById(id);
        return res.json(data);
    }

    create(req, res) {
        const body = req.body;
        CafesModel.create(body);
        return res.status(201).json({ message: 'Café cadastrado com sucesso!' });
    }

    update(req, res) {
        const id = req.params.id;
        const body = req.body;
        CafesModel.update(id, body);
        return res.json({ message: 'Café atualizado com sucesso!' });
    }

    delete(req, res) {
        const id = req.params.id;
        CafesModel.delete(id);
        return res.json({ message: 'Café removido com sucesso!' });
    }
}

module.exports = CafesController;
