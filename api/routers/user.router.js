const { Router } = require('express')
const route = Router()

const {
  currentUser,
  updateCurrentUser,
  changePassword,
  changePicture,
} = require('../controllers/user.controller')
const validator = require('../validators/user.validator')
const { authentication } = require('../middlewares/auth')

route.use(authentication)
route.put('/:id/change_picture', validator.changePicture, changePicture)

route.use('/current', route)
route.get('/', currentUser)
route.put('/', validator.update, updateCurrentUser)
route.put('/change_password', validator.changePassword, changePassword)

module.exports = route
