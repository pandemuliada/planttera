const { Router } = require('express')
const route = Router()

const { findOne, update, changeLogo } = require('../controllers/shop.controller')
const { authentication } = require('../middlewares/auth')
const validator = require('../validators/shop.validator')

route.get('/', findOne)
route.use(authentication)
route.put('/update', validator.update, update)
route.put('/change_logo', validator.changeLogo, changeLogo)

module.exports = route
