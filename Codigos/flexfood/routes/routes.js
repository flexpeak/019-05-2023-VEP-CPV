const express = require ('express')
const router = express.Router()
const path = require ('path')

router.get ('/',  (req, res) => {
    res.send ('Bem Vindo')
})
router.use (function (req, res, next) {
    res.status(404).send ('Rota não encontrada')
})

module.exports = router

