require('dotenv').config()
const database = require('./database')

const { NODE_ENV, PORT, HOST, JWT_SECRET } = process.env

module.exports = {
  node_env: NODE_ENV,
  host: HOST,
  port: PORT,
  jwt_secret: JWT_SECRET,

  database: {
    ...database,
  },
}
