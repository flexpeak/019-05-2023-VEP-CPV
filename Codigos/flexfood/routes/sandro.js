const express = require('express')
const router = express.Router()
const IndexController = require ('../controllers/IndexController')

router.get ('/oi', IndexController.oi)

module.exports = router