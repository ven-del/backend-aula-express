const express = require('express');
const CafesController = require('../controllers/CafesController');

const CafesRouter = express.Router();

const cafesController = new CafesController();

CafesRouter.get('/cafes', cafesController.read);

CafesRouter.get('/cafes/:id', cafesController.getById);

CafesRouter.post('/cafes', cafesController.create);

CafesRouter.put('/cafes/:id', cafesController.update);

CafesRouter.delete('/cafes/:id', cafesController.delete);

module.exports = CafesRouter;