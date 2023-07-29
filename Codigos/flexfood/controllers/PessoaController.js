const {Pessoas} = require ('../models')
require ('dotenv').config()

module.exports = class PessoaController{
    static async show (req, res){
        const pessoas = await Pessoas.findAll()
        res.send(pessoas)
    }
    static async show1 (req, res){
        const pessoa = await Pessoas.findByPk(req.params.id)
        res.send(pessoa)
    }
    static async create (req, res){
        const pessoa = await Pessoas.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            status: req.body.status,
            tipo: req.body.tipo
        })
        res.send ('salvo com sucesso')
    }
    static async update (req, res){
        const pessoa = await Pessoas.findByPk(req.params.id)
        await pessoa.update({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            status: req.body.status,
            tipo: req.body.tipo
        })
        res.send ('alterado com sucesso')
    }
    static async delete (req, res){
        const pessoa = await Pessoas.findByPk(req.params.id)
        await pessoa.destroy()
        res.send (true)
    }

}