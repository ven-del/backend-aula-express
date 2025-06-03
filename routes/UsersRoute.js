const express = require('express');
const UsersController = require('../controllers/UsersController');
const UsersRouter = express.Router();
const usersController = new UsersController();

UsersRouter.get('/users', usersController.read);

UsersRouter.get('/users/:id', usersController.getById);

UsersRouter.post('/users', usersController.create);

UsersRouter.put('/users/:id', usersController.update);

UsersRouter.delete('/users/:id', usersController.delete);

module.exports = UsersRouter;