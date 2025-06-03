const express = require('express');
const BolosController = require('../controllers/BolosController');

const BolosRouter = express.Router();

const bolosController = new BolosController();

BolosRouter.get('/bolos', bolosController.read);

BolosRouter.get('/bolos/:id', bolosController.getById);

BolosRouter.post('/bolos', bolosController.create);

BolosRouter.put('/bolos/:id', bolosController.update);

BolosRouter.delete('/bolos/:id', bolosController.delete);

module.exports = BolosRouter;