const UsersModel = require("../models/UsersModel");

class AuthController {
    login(login, senha){
        const data = UsersModel.authenticate(login, senha);
        return data;
    }
}

module.exports = AuthController;