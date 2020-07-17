const { Router } = require('express')
const route = Router()

const { find, findById, create, update, destroy } = require('../controllers/category.controller')
const { authentication } = require('../middlewares/auth')
const validator = require('../validators/category.validator')
const { hasAnyRoles } = require('../middlewares/roleAuthorization')

route.get('/', find)
route.get('/:id', findById)
route.use(authentication, hasAnyRoles(['super-admin', 'admin']))
route.post('/', validator.createOrUpdate, create)
route.put('/:id', validator.createOrUpdate, update)
route.delete('/:id', destroy)

module.exports = route
