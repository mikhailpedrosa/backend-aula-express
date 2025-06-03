const BolosModel = require('../models/BolosModel');

class BolosController{
    read(req, res){
        const data = BolosModel.read();
        return res.json(data);
    }
    getById(req, res){
        const id = req.params.id;
        const data = BolosModel.getById(id);
        return res.json(data);
    }
    create(req, res){
        const body = req.body;
        BolosModel.create(body);
        return res.status(201).json({
            message: "Bolo cadastrado com sucesso"
        })
    }
    update(req, res){
        const id = req.params.id;
        const body = req.body;
        BolosModel.update(id, body);
        return res.json({
            message: "Bolo atualizado com sucesso"
        })
    }
    delete(req, res){
        const id = req.params.id;
        BolosModel.delete(id);
        return res.json({
            message: "Bolo removido com sucesso"
        })
    }
}

module.exports = BolosController;

//http:bolosGT.com/{1} => Parametro