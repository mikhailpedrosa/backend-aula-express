const express = require('express');
const UserController = require('../controllers/UserController');

const UserRouter = express.Router();

const userController = new UserController();

UserRouter.get('/bolos', userController.read);

UserRouter.get('/bolos/:id', userController.getById);

UserRouter.post('/bolos', userController.create);

UserRouter.put('/bolos/:id', userController.update);

UserRouter.delete('/bolos/:id', userController.delete);

module.exports = UserRouter;