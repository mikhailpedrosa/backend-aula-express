const UserModel = require('../models/UsersModel');

class UserController{
    read(req, res){
        const data = UserModel.read();
        return res.json(data);
    }
    getById(req, res){
        const id = req.params.id;
        const data = UserModel.getById(id);
        return res.json(data);
    }
    create(req, res){
        const body = req.body;
        UserModel.create(body);
        return res.status(201).json({
            message: "Usuario cadastrado com sucesso"
        })
    }
    update(req, res){
        const id = req.params.id;
        const body = req.body;
        UserModel.update(id, body);
        return res.json({
            message: "Usuario atualizado com sucesso"
        })
    }
    delete(req, res){
        const id = req.params.id;
        UserModel.delete(id);
        return res.json({
            message: "Usuario removido com sucesso"
        })
    }
}

module.exports = UserController;

//http:bolosGT.com/{1} => Parametro