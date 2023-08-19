const { Usuarios } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = class UsuariosController {
    static async store(req, res) {
        try {
            const salt = await bcrypt.genSalt(12)
            const senha = await bcrypt.hash(req.body.senha, salt)

            const usuario = await Usuarios.create({
                nome: req.body.nome,
                email: req.body.email,
                status: 'A',
                tipo: req.body.tipo,
                senha: senha
            })
            res.status(201).json({
                usuario
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async login(req, res) {
        try {
            const usuario = await Usuarios.findOne({
                where: {
                    email: req.body.email,
                    status: 'A'
                }
            })
            if (usuario){
                const senhaCorreta = await bcrypt.compare(req.body.senha, usuario.senha)
                if (senhaCorreta){
                    const token = await jwt.sign (usuario.id, process.env.JWT_KEY)
                    res.json ({
                        token: token,
                        tipo: usuario.tipo
                    })
                }else {
                    res.status(401).json({
                        error: 'Usuário ou Senha Inválida'
                    })}
        }else {
            res.status(401).json({
                error: 'Usuário ou Senha Inválida'
            })}
        } catch (e) {
            res.status(500).json({
                error: e.message
            })}
    }
    static validaToken (req, res, next){
        const token = req.headers ['authorization']
        jwt.verify (token, process.env.JWT_KEY , async (error, sucess)=>{
            if (error){
                res.status(401).json({
                    error:'falha na autenticacao' })
                }else{
                    console.log('sucesso')
                    next()
                }
            })
        }
}


  

