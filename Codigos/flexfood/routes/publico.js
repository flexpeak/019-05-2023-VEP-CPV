const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/IndexController')
const UsuariosController = require ('../controllers/UsuariosController')


//router.get ('/', IndexController.oi)
router.post('/registrar', UsuariosController.store)
router.post('/login', UsuariosController.login)



module.exports = router
