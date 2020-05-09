const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const routers = require('../routers')

module.exports = async ({ app }) => {
  // Middlewares
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(fileUpload()) // Enable multipart/form-data
  app.use('/public', express.static('public'))

  app.use(routers())

  return app
}
