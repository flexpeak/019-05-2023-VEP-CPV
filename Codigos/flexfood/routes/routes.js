const express = require ('express')
const router = express.Router()
const path = require ('path')
const IndexController = require ('../controllers/IndexController.js')
const PessoaController = require ('../controllers/PessoaController.js')
const UsuariosController = require('../controllers/UsuariosController.js')


router.get ('/', IndexController.oi)

router.get ('/old',  (req, res) => {
    res.send ('Bem Vindo')
})
router.get ('/pessoas', PessoaController.show )
router.get ('/pessoas/:id', PessoaController.show1 )
router.post ('/pessoas', PessoaController.create)
router.put ('/pessoas/:id', PessoaController.update )
router.delete ('/pessoas/:id', PessoaController.delete )

router.post('/registrar', UsuariosController.store)
router.post('/login', UsuariosController.login)

router.use (function (req, res, next) {
    res.status(404).send ('Rota não encontrada')
})

module.exports = router

