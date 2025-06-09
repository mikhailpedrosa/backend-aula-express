const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const BolosRouter = require('./BolosRoute');
const UserRouter = require('./UserRouter');

const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {

    const key = process.env.UNIQUE_TOKEN;
    let token = req.headers.token;

    if (!token) {
        return res.status(403).send('Nao autorizado');
    }
    try {
        jwt.verify(token, key);
        next();
    } catch (error) {
        return res.status(403).send('Token inválido ou expirado');
    }
})

PrivateRoutes.use(BolosRouter);
PrivateRoutes.use(UserRouter);



module.exports = PrivateRoutes;