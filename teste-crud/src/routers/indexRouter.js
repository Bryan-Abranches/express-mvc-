const express = require('express')
const indexController = require('../controllers/IndexController')

const router = express.Router()

/* Rotas HTTP */

router.get('/', indexController.showIndex)
router.get('/get', indexController.showGet)
router.post('/post', indexController.showPost)
router.put('/usuarios:id', indexController.showPut)
router.patch('/usuarios:id', indexController.showPatch)
module.exports = router