const BolosModel = require('../models/BolosModel');

class BolosController{
    // read(req, res){
    //     const data = BolosModel.read();
    //     return res.json(data);
    // }
    async read(req, res){
        try {
            const data = await BolosModel.read();
            return res.json(data);
        } catch (error) {
            return res.status(500).json({
                error: 'Erro na requisição: '+error.message
            });
            
        };
    };
    // getById(req, res){
    //     const id = req.params.id;
    //     const data = BolosModel.getById(id);
    //     return res.json(data);
    // }

    async getById(req, res){
        try {
            const id = req.params.id;
            const data = await BolosModel.getById(id);
            return res.json(data);
        } catch (error) {
            return res.status(500).json({
                error: 'Erro na requisição: '+error.message
            });
        };
    };
    // create(req, res){
    //     const body = req.body;
    //     BolosModel.create(body);
    //     return res.status(201).json({
    //         message: "Bolo cadastrado com sucesso"
    //     })
    // }
    async create(req, res){
        try {
            const body = req.body;
            await BolosModel.create(body);
            return res.status(201).json({
                message: 'Bolo cadastrado com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Erro na requisição: ' + error.message
            });
        };
    };
    // update(req, res){
    //     const id = req.params.id;
    //     const body = req.body;
    //     BolosModel.update(id, body);
    //     return res.json({
    //         message: "Bolo atualizado com sucesso"
    //     })
    // }
    async update(req,res){
        try {
            const id = req.params.id;
            const body = req.body;

            await BolosModel.update(id, body);
            return res.json({
                message: 'Bolo atualizado com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Erro na requisição: ' + error.message
            });
        };
    };
    // delete(req, res){
    //     const id = req.params.id;
    //     BolosModel.delete(id);
    //     return res.json({
    //         message: "Bolo removido com sucesso"
    //     })
    // }
    async delete (req, res) {
        try {
            const id = req.params.id;

            await BolosModel.delete(id);
            return res.json({
                message: 'Bolo removido com sucesso.'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Erro na requisição: ' + error.message
            });
        };
    };
}

module.exports = BolosController;

//http:bolosGT.com/{1} => Parametro