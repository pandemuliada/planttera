const { Router } = require('express')
const route = Router()

const {
  find,
  findById,
  create,
  update,
  destroy,
  changePicture,
} = require('../controllers/plant.controller')
const { authentication } = require('../middlewares/auth')
const validator = require('../validators/plant.validator')

route.get('/', find)
route.get('/:id', findById)
route.use(authentication)
route.post('/', validator.createOrUpdate, create)
route.put('/:id', validator.createOrUpdate, update)
route.put('/:id/change_picture', validator.changePicture, changePicture)
route.delete('/:id', destroy)

module.exports = route
