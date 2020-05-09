const { Router } = require('express')
const router = Router()

const AuthRouter = require('./auth.router')
const CategoryRouter = require('./category.router')
const PlantRouter = require('./plant.router')
const UserRouter = require('./user.router')
const RoomRouter = require('./room.router')
const ShopRouter = require('./shop.router')

module.exports = () => {
  router.get('/', (req, res) => {
    res.send('Hello node for backend!')
  })

  router.use('/', AuthRouter)
  router.use('/users', UserRouter)
  router.use('/categories', CategoryRouter)
  router.use('/rooms', RoomRouter)
  router.use('/plants', PlantRouter)
  router.use('/shop', ShopRouter)

  return router
}
