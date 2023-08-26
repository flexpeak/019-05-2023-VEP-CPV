const express = require('express')
const UsuariosController = require('../controllers/UsuariosController')
const router = express.Router()

router.get ('/rota-privada', UsuariosController.validaToken, (req, res) => {
     res.json({message: 'Acesso a rota privada concedido'})
})

module.exports = router
