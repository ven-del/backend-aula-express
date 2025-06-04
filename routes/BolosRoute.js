const express = require('express');
const BolosController = require('../controllers/BolosController');

const BolosRouter = express.Router();

const bolo = new BolosController();

BolosRouter.get('/bolos', bolo.read);

BolosRouter.get('/bolos/:id', bolo.getById);

BolosRouter.post('/bolos', bolo.create);

BolosRouter.put('bolos/:id', bolo.update);

BolosRouter.delete('/bolos/:id', bolo.delete);

module.exports = BolosRouter;