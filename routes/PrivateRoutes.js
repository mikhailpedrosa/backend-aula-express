const express = require('express');

const PrivateRoutes = express.Router();

// MIDDLEWARE

PrivateRoutes.use((req, res, next) => {
    if(req.headers.token != 'banana'){
        return res.status(403).send('Não Autorizado')
    }
    next()
})