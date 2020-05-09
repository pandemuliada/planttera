const { Router } = require('express')
const route = Router()

const { login, register } = require('../controllers/auth.controller')
const validator = require('../validators/auth.validator')

route.post('/login', validator.login, login)
route.post('/register', validator.register, register)

module.exports = route
