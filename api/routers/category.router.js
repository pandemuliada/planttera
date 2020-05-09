const { Router } = require('express')
const route = Router()

const { find, findById, create, update, destroy } = require('../controllers/category.controller')
const { authentication } = require('../middlewares/auth')
const validator = require('../validators/category.validator')

route.get('/', find)
route.get('/:id', findById)
route.use(authentication)
route.post('/', validator.createOrUpdate, create)
route.put('/:id', validator.createOrUpdate, update)
route.delete('/:id', destroy)

module.exports = route
