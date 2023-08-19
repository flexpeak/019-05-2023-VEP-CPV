const { Pessoas } = require('../models')
require('dotenv').config()

module.exports = class PessoaController {
    static async show(req, res) {
        let pessoas = null
        try {
             pessoas = await Pessoas.findAll()
            //res.send(pessoas)
        }
        catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
        finally{
            if (pessoas !== null){
                res.send(pessoas)
            }
            else{
                res.status(406).json({
                    error:'Nenhuma pessoa cadastrada.'
                })
            }
        }

    }
    static async show1(req, res) {
        let pessoa = null
        try {
             pessoa = await Pessoas.findByPk(req.params.id)
            //res.send(pessoa)
        }
        catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
        finally{
        if (pessoa != null){
            res.send(pessoa)
        } else{
            res.status(406).json({
                error: 'Não encontrado.'
            })
        }

        }

    }
    static async create(req, res) {
        try {
            const pessoa = await Pessoas.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                status: req.body.status,
                tipo: req.body.tipo
            })
            res.send('salvo com sucesso')
        }
        catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async update(req, res) {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id)
            await pessoa.update({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                status: req.body.status,
                tipo: req.body.tipo
            })
            res.send('alterado com sucesso')
        }
        catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async delete(req, res) {
        try {
            const pessoa = await Pessoas.findByPk(req.params.id)
            await pessoa.destroy()
            res.send(true)
        }
        catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

}