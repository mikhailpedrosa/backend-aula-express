const jwt = require('jsonwebtoken');
const express = require('express');
const BolosRouter = require('./BolosRoute');
require('dotenv').config();
const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {

    let auth = false;

    if (auth === false) {
        return res.status(401).json({
            message: "Acesso não autorizado"
        });
    }
    next();
})

PrivateRoutes.use(BolosRouter);

module.exports = PrivateRoutes;