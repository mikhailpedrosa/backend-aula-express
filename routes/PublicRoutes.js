const jwt = require('jsonwebtoken');
const expres = require('express');
require('dotenv').config();
const AuthController = require('../controllers/AuthController');

const PublicRoutes = express.Router();

PublicRoutes.get('/login', (req, res) => {
    const auth = new AuthController();
    const body = req.login;
    const data = auth.login(body.login, body.senha);

    if (data) {
        const token = jwt.sign(data, process.env.CHAVE_API, {
            expireIn: '8h'
        });
        return res.json({
            token: token
        });
    };
    return res.json({
        message: "Login ou senha invalidos"
    });
})

module.exports = PublicRoutes;

// PublicRoutes.post('/login', (req, res) => {
//     const body = req.body;
//     const auth = new AuthController();
//     const data = auth.login(body.login, body.senha);

//     if (data ) {
//         return res.json({
//             token: data
//         })
//     }
//     return res.json({
//         message: "Login ou senha invalidos"
//     });
// })