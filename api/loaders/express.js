const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const routers = require('../routers')
const { responseSerializer } = require('../helpers/response')

module.exports = async ({ app }) => {
  // Middlewares
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(fileUpload()) // Enable multipart/form-data
  app.use('/public', express.static('public'))
  app.use(responseSerializer)

  app.use(routers())

  return app
}
