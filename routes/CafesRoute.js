const express = require('express');
const CafesController = require('../controllers/CafesController');

const CafesRouter = express.Router();

const cafe = new CafesController();

CafesRouter.get('/cafes', cafe.read);

CafesRouter.get('/cafes/:id', cafe.getById);

CafesRouter.post('/cafes', cafe.create);

CafesRouter.put('/cafes/:id', cafe.update);

CafesRouter.delete('/cafes/:id', cafe.delete);

module.exports = CafesRouter;